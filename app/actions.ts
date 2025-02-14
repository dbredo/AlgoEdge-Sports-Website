"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  description: z.string().min(10),
})

export async function submitContactForm(formData: z.infer<typeof formSchema>) {
  console.log("Submitting form data:", formData) // Add this line for debugging

  const result = formSchema.safeParse(formData)

  if (!result.success) {
    console.error("Form validation failed:", result.error) // Add this line for debugging
    throw new Error("Invalid form data")
  }

  const { name, email, description } = result.data

  // Use environment variables for email configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO || "algoedgeanalytics@gmail.com",
    subject: `New contact form submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Description: ${description}
    `,
  }

  try {
    console.log("Attempting to send email...") // Add this line for debugging
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.response) // Add this line for debugging
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
