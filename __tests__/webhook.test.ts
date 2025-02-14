__tests__/webhook.test.ts

import { NextRequest } from "next/server"
import { POST } from "@/app/api/webhook/route"
import Stripe from "stripe"
import { jest } from "@jest/globals" // Added import for jest

// Mock Stripe
jest.mock("stripe", () => {
  return jest.fn().mockImplementation(() => ({
    webhooks: {
      constructEvent: jest.fn(),
    },
  }))
})

// Mock Supabase
jest.mock("@supabase/supabase-js", () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn().mockResolvedValue({ data: { id: "test-user-id" } }),
        })),
      })),
      update: jest.fn().mockResolvedValue({ error: null }),
    })),
  })),
}))

describe("Webhook handler", () => {
  let mockStripe: jest.Mocked<Stripe>

  beforeEach(() => {
    mockStripe = new (Stripe as jest.MockedClass<typeof Stripe>)("", { apiVersion: "2022-11-15" })
  })

  it("should handle a valid checkout.session.completed event", async () => {
    const mockEvent: Stripe.Event = {
      type: "checkout.session.completed",
      data: {
        object: {
          id: "cs_test_123",
          customer: "cus_123",
          subscription: "sub_123",
          client_reference_id: "test-user-id",
          payment_status: "paid",
        },
      },
    } as any

    mockStripe.webhooks.constructEvent.mockReturnValue(mockEvent)

    const req = new NextRequest("http://localhost:3000/api/webhook", {
      method: "POST",
      body: JSON.stringify(mockEvent),
      headers: {
        "Content-Type": "application/json",
        "Stripe-Signature": "test_signature",
      },
    })

    const res = await POST(req)
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ received: true })
  })

  // Add more test cases for different event types and error scenarios
})