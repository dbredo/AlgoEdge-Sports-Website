"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with server-side credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Contact form schema (keeping your existing schema)
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  description: z.string().min(10),
})

// Waitlist form schema
const waitlistFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
})

// New function for waitlist submissions
export async function submitWaitlistForm(formData: z.infer<typeof waitlistFormSchema>) {
  console.log("Submitting waitlist form data:", formData) // Debug log
  
  try {
    // Validate the form data
    const validatedData = waitlistFormSchema.parse(formData)
    console.log("Validation passed, inserting into Supabase") // Debug log

    // Insert the waitlist entry into Supabase
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      console.error("Error details:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      })

      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          error: "This email is already on our waitlist. Thank you for your interest!",
        }
      }

      throw error
    }

    console.log("Waitlist entry created successfully:", data) // Debug log
    return { success: true, data }
  } catch (error) {
    console.error("Waitlist form submission error:", error)
    // Add more detailed logging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      })
    }
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "An unexpected error occurred" 
    }
  }
}

// Debugging function to test Supabase connection
export async function testSupabaseConnection() {
  try {
    console.log("Testing Supabase connection...") // Debug log
    const { data, error } = await supabase.from('waitlist').select('count(*)');
    
    if (error) {
      console.error("Connection test error:", error)
      throw error;
    }
    
    console.log("Supabase connection successful:", data);
    return { success: true, message: "Connection successful", data };
  } catch (error) {
    console.error("Supabase connection test failed:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Connection failed" 
    };
  }
}

// Keeping your existing contact form submission function
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

