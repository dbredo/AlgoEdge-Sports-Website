"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, LineChart, TrendingUp, AlertCircle } from "lucide-react"

interface Profile {
  id: string
  email: string
  full_name: string
  subscription_status: string
  stripe_customer_id: string | null
}

interface DashboardContentProps {
  user?: {
    email: string
  } | null
  profile?: Profile | null
  subscriptionPlan: string
}

export function DashboardContent({
  user,
  profile: initialProfile,
  subscriptionPlan: initialSubscriptionPlan,
}: DashboardContentProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const [profile, setProfile] = useState<Profile | null>(initialProfile || null)
  const [subscriptionPlan, setSubscriptionPlan] = useState(initialSubscriptionPlan)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkSessionAndFetchData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)

      if (session) {
        if (!profile) {
          const { data, error } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

          if (!error && data) {
            setProfile(data)
            await fetchSubscriptionPlan(data.stripe_customer_id)
          }
        } else if (profile.stripe_customer_id) {
          await fetchSubscriptionPlan(profile.stripe_customer_id)
        }
      }

      setIsLoading(false)
    }

    checkSessionAndFetchData()
  }, [profile])

  const fetchSubscriptionPlan = async (stripeCustomerId: string | null) => {
    if (stripeCustomerId) {
      try {
        const response = await fetch(`/api/get-subscription-plan?customerId=${stripeCustomerId}`)
        const data = await response.json()
        setSubscriptionPlan(data.plan)
      } catch (error) {
        console.error("[DashboardContent] Error fetching subscription plan:", error)
      }
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isLoggedIn) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p>Please log in to access your personalized dashboard.</p>
        <Button asChild className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#3f6d63]">
        Welcome, {profile?.full_name || user?.email || "Sports Analyst"}!
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <QuickStatCard title="Active Algorithms" value="0" icon={LineChart} />
        <QuickStatCard title="Latest Performance" value="N/A" icon={TrendingUp} />
        <QuickStatCard title="Next Game" value="TBD" icon={CalendarDays} />
        <QuickStatCard title="Alerts" value="0" icon={AlertCircle} />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-[#f0f5f4]">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#3f6d63] data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="algorithms" className="data-[state=active]:bg-[#3f6d63] data-[state=active]:text-white">
            My Algorithms
          </TabsTrigger>
          <TabsTrigger value="data" className="data-[state=active]:bg-[#3f6d63] data-[state=active]:text-white">
            Latest Data
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewTab profile={profile} subscriptionPlan={subscriptionPlan} />
        </TabsContent>
        <TabsContent value="algorithms" className="space-y-4">
          <AlgorithmsTab />
        </TabsContent>
        <TabsContent value="data" className="space-y-4">
          <DataTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function QuickStatCard({ title, value, icon: Icon }) {
  return (
    <Card className="border-[#3f6d63] border-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-[#3f6d63]">{title}</CardTitle>
        <Icon className="h-4 w-4 text-[#3f6d63]" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-[#3f6d63]">{value}</div>
      </CardContent>
    </Card>
  )
}

function OverviewTab({ profile, subscriptionPlan }) {
  return (
    <>
      <Card className="border-[#3f6d63] border">
        <CardHeader className="bg-[#f0f5f4]">
          <CardTitle className="text-[#3f6d63]">Subscription Overview</CardTitle>
          <CardDescription>Your current plan and status</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-2">
            <strong className="text-[#3f6d63]">Current Plan:</strong> {subscriptionPlan || "Free"}
          </p>
          <p className="mb-4">
            <strong className="text-[#3f6d63]">Status:</strong> {profile?.subscription_status || "Inactive"}
          </p>
          <Button asChild className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
            <Link href="/billing">Manage Subscription</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="border-[#3f6d63] border">
        <CardHeader className="bg-[#f0f5f4]">
          <CardTitle className="text-[#3f6d63]">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 pt-6">
          <Button asChild className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
            <Link href="/create-algorithm">Create New Algorithm</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#3f6d63] text-[#3f6d63] hover:bg-[#f0f5f4]">
            <Link href="/data-explorer">Explore Data</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

function AlgorithmsTab() {
  return (
    <Card className="border-[#3f6d63] border">
      <CardHeader className="bg-[#f0f5f4]">
        <CardTitle className="text-[#3f6d63]">My Algorithms</CardTitle>
        <CardDescription>You haven't created any algorithms yet.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Button asChild className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
          <Link href="/create-algorithm">Create Your First Algorithm</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function DataTab() {
  return (
    <Card className="border-[#3f6d63] border">
      <CardHeader className="bg-[#f0f5f4]">
        <CardTitle className="text-[#3f6d63]">Latest Data Updates</CardTitle>
        <CardDescription>No recent data updates available.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Button asChild className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
          <Link href="/data-explorer">Explore Available Data</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
