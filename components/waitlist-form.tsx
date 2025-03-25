"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitWaitlistForm } from "@/app/actions"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  interest: z.string({
    required_error: "Please select what you're interested in using AlgoEdge for.",
  }),
  otherInterest: z.string().optional(),
})

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
      otherInterest: "",
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
      // Log more details about the error
      console.error("Error details:", JSON.stringify(error, null, 2))
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    className="h-12 rounded-lg border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-gray-700 font-medium">
                What are you most interested in using AlgoEdge for?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-2"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="betting" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Building betting algorithms</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="tracking" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Tracking team or player performance</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="fantasy" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Fantasy sports optimization</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="fun" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Exploring data for fun</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Show text input if "Other" is selected */}
        {form.watch("interest") === "other" && (
          <FormField
            control={form.control}
            name="otherInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Please specify</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tell us what you'd use AlgoEdge for"
                    className="h-12 rounded-lg border-gray-300 focus:border-[#3f6d63] focus:ring-[#3f6d63]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

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

