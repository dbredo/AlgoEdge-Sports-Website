import type { NextConfig } from "next"

const config: NextConfig = {
  experimental: {
    serverActions: {
      // Increase timeout for webhook processing
      bodySizeLimit: "2mb",
      timeout: 120,
    },
  },
}

export default config