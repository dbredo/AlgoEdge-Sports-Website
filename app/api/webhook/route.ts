import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

function logWebhookEvent(event: any, context: string) {
  console.log("[Webhook Event]", {
    id: event.id,
    type: event.type,
    created: new Date(event.created * 1000).toISOString(),
    data: {
      object: {
        id: event.data.object.id,
        object: event.data.object.object,
      },
    },
    context,
    timestamp: new Date().toISOString(),
  })
}

function logWebhookError(error: unknown, context: string) {
  console.error("[Webhook Error]", {
    context,
    error:
      error instanceof Error
        ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          }
        : error,
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    console.error("[Webhook] No stripe signature found")
    return NextResponse.json({ error: "No stripe signature" }, { status: 400 })
  }

  try {
    const event = stripe.webhooks.constructEvent(await request.text(), signature, process.env.STRIPE_WEBHOOK_SECRET!)

    logWebhookEvent(event, "received")

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        console.log("[Webhook] Processing checkout session:", {
          sessionId: session.id,
          customerId: session.customer,
          subscriptionId: session.subscription,
          clientReferenceId: session.client_reference_id,
          status: session.status,
        })

        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            subscription_status: "active",
            stripe_customer_id: session.customer,
            stripe_subscription_id: session.subscription,
          })
          .eq("id", session.client_reference_id)

        if (updateError) {
          throw updateError
        }

        console.log("[Webhook] Successfully updated profile in Supabase")
        break
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object
        console.log("[Webhook] Processing subscription update:", {
          subscriptionId: subscription.id,
          status: subscription.status,
          customerId: subscription.customer,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
        })

        const { error: updateError } = await supabase
          .from("profiles")
          .update({
            subscription_status: subscription.status,
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id)

        if (updateError) {
          throw updateError
        }

        console.log("[Webhook] Successfully updated subscription status in Supabase")
        break
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true, type: event.type })
  } catch (error) {
    logWebhookError(error, "processing webhook")
    return NextResponse.json({ error: "Webhook processing failed", details: error }, { status: 500 })
  }
}