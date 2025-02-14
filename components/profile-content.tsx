"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

console.log("ProfileContent: Component file loaded")

export function ProfileContent({ user, profile, subscriptionPlan }) {
  const [isUpdating, setIsUpdating] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [fullName, setFullName] = useState("")
  const router = useRouter()

  useEffect(() => {
    console.log("ProfileContent: Component mounted or props changed")
    console.log("Received props:", { user, profile, subscriptionPlan })

    if (profile?.full_name) {
      console.log("Setting full name from profile:", profile.full_name)
      setFullName(profile.full_name)
    } else if (user?.user_metadata?.full_name) {
      console.log("Setting full name from user metadata:", user.user_metadata.full_name)
      setFullName(user.user_metadata.full_name)
    } else {
      console.log("No full name found in profile or user metadata")
      setFullName("Not set")
    }
  }, [profile, user, subscriptionPlan])

  console.log("ProfileContent: Rendering with props:", { user, profile, subscriptionPlan })

  const handleCancelSubscription = async () => {
    setIsCancelling(true)
    try {
      const response = await fetch("/api/cancel-subscription", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Failed to cancel subscription")
      }

      toast({
        title: "Subscription Cancelled",
        description: "Your subscription has been cancelled. You will have access until the end of your billing period.",
      })
      router.refresh()
    } catch (error) {
      console.error("Error cancelling subscription:", error)
      toast({
        title: "Error",
        description: "There was an error cancelling your subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsCancelling(false)
    }
  }

  const handleDeleteAccount = async () => {
    setIsDeleting(true)
    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Failed to delete account")
      }

      toast({
        title: "Account Deleted",
        description: "Your account has been successfully deleted.",
      })
      router.push("/")
    } catch (error) {
      console.error("Error deleting account:", error)
      toast({
        title: "Error",
        description: "There was an error deleting your account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Your personal details are displayed below.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <p className="text-lg font-medium">{fullName}</p>
              {console.log("ProfileContent: Displaying name:", fullName)}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={profile?.email || user?.email || ""} disabled />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/change-email">Change Email</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your account security settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" asChild className="w-full">
            <Link href="/forgot-password">Reset Password</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>Manage your current subscription.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            <strong>Current Plan:</strong> {subscriptionPlan || "Free"}
          </p>
          {subscriptionPlan && subscriptionPlan !== "Free" && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Cancel Subscription</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to cancel your subscription?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. You will lose access to premium features at the end of your current
                    billing period.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCancelSubscription} disabled={isCancelling}>
                    {isCancelling ? "Cancelling..." : "Confirm Cancellation"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href="/billing">Manage Billing</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>Perform critical account actions here.</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our
                  servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount} disabled={isDeleting}>
                  {isDeleting ? "Deleting..." : "Delete Account"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  )
}
