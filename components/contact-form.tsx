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
import { CheckCircle2, AlertCircle } from "lucide-react"

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className="border-2 border-gray-200 focus:border-[#3f6d63]" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="border-2 border-gray-200 focus:border-[#3f6d63]"
                  {...field}
                />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us why you're contacting us"
                  className="resize-none border-2 border-gray-200 focus:border-[#3f6d63]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please provide details about your inquiry or reason for contacting us.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#3f6d63] hover:bg-[#345c54] text-white font-semibold py-2 px-4 border-2 border-[#3f6d63] rounded-md transition duration-300 ease-in-out"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          {submissionStatus === "success" && (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <span>There was an error sending your message. Please try again.</span>
            </div>
          )}
        </div>
      </form>
    </Form>
  )
}
