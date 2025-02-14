"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProfileDiagnostic() {
  const [userData, setUserData] = useState<any>(null)
  const [profileData, setProfileData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()
        if (userError) throw userError
        setUserData(user)

        // Fetch profile data
        if (user) {
          const { data, error: profileError } = await supabase.from("profiles").select("*").eq("id", user.id).single()
          if (profileError) throw profileError
          setProfileData(data)
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      }
    }

    fetchData()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Diagnostic</CardTitle>
      </CardHeader>
      <CardContent>
        {error && <p className="text-red-500">Error: {error}</p>}
        <h3 className="font-bold mt-4">User Data:</h3>
        <pre className="bg-gray-100 p-2 rounded mt-2 overflow-auto">{JSON.stringify(userData, null, 2)}</pre>
        <h3 className="font-bold mt-4">Profile Data:</h3>
        <pre className="bg-gray-100 p-2 rounded mt-2 overflow-auto">{JSON.stringify(profileData, null, 2)}</pre>
      </CardContent>
    </Card>
  )
}
