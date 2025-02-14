import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import type { NextRequest } from "next/server"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export const signUpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "ratelimit:signup",
})

export function getClientIp(request: NextRequest | Request): string {
  return request.headers.get("x-forwarded-for") || "127.0.0.1"
}

export async function checkRateLimit(ip: string) {
  const { success, limit, remaining, reset } = await signUpRateLimit.limit(ip)
  return { success, limit, remaining, reset }
}

export function setRateLimitHeaders(headers: Headers, rateLimit: { limit: number; remaining: number; reset: number }) {
  headers.set("X-RateLimit-Limit", rateLimit.limit.toString())
  headers.set("X-RateLimit-Remaining", rateLimit.remaining.toString())
  headers.set("X-RateLimit-Reset", rateLimit.reset.toString())
}
