"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitWaitlistForm } from "@/app/actions"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const result = await submitWaitlistForm(values)

      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "You're on the list!",
          description: "We'll notify you when AlgoEdge Sports launches.",
        })
        form.reset()
      } else {
        // Handle specific error messages from the server
        setErrorMessage((result.error as string) || "Something went wrong. Please try again.")
        toast({
          title: "Submission failed",
          description: (result.error as string) || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setErrorMessage("An unexpected error occurred. Please try again.")
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-[#3f6d63]/10 rounded-xl p-6 border border-[#3f6d63]/20 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-[#3f6d63]/20">
            <CheckCircle2 className="h-6 w-6 text-[#3f6d63]" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the waitlist!</h3>
        <p className="text-gray-700">Thank you for joining. We'll notify you when AlgoEdge Sports launches.</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    className="h-12 rounded-lg border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63]"
                    {...field}
                  />
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
                <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 rounded-lg border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-full bg-[#3f6d63] text-white hover:bg-[#345c54] transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}