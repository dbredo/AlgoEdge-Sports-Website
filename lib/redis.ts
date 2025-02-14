import { Redis } from "@upstash/redis"

// Create a single Redis instance
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  cache: "no-store", // Disable caching for Redis requests
})

export function getRedisClient() {
  return redis
}
