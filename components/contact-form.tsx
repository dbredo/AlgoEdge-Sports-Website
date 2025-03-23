"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/app/actions"
import { CheckCircle2, AlertCircle, User, Mail, MessageSquare, ArrowRight } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
})

export function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmissionStatus("idle")
    try {
      const result = await submitContactForm(values)
      if (result.success) {
        setSubmissionStatus("success")
        toast({
          title: "Form submitted",
          description: "We've received your message and will get back to you soon.",
        })
        form.reset()
        onSuccess?.()
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    placeholder="Your name"
                    className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="pl-10 py-2 border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <Textarea
                    placeholder="Tell us why you're contacting us"
                    className="pl-10 py-2 min-h-[120px] border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63] rounded-lg"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription className="text-sm text-gray-500">
                Please provide details about your inquiry or reason for contacting us.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          {submissionStatus === "success" && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span>There was an error sending your message. Please try again.</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54] transition-all"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
            {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
        </div>
      </form>
    </Form>
  )
}


