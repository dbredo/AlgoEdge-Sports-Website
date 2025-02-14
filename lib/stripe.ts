import Stripe from "stripe"

const stripeVersion = "2023-10-16" // Update this to match the version in the error message
console.log("Initializing Stripe with API version:", stripeVersion)
console.log("Node.js version:", process.version)
console.log("Environment:", process.env.NODE_ENV)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_ALGOEDGE!, {
  apiVersion: stripeVersion,
  typescript: true,
})

console.log("Stripe initialized with API version:", stripe.getApiField("version"))

export default stripe
