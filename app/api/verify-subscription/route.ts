import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_ALGOEDGE!, {
  apiVersion: "2022-11-15",
})

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { sessionId } = await req.json()

      const session = await stripe.checkout.sessions.retrieve(sessionId)

      if (session.payment_status === "paid") {
        return NextResponse.json({ success: true })
      } else {
        return NextResponse.json({ success: false, message: "Payment not completed" })
      }
    } catch (err: any) {
      console.error("Error verifying subscription:", err)
      return NextResponse.json({ success: false, message: err.message }, { status: 500 })
    }
  } else {
    return NextResponse.json({ error: { message: "Method Not Allowed" } }, { status: 405 })
  }
}
