"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AlgorithmManagement() {
  const [algorithms, setAlgorithms] = useState<any[]>([])

  useEffect(() => {
    // TODO: Fetch user's algorithms from the backend
    // This is a placeholder. Replace with actual API call.
    setAlgorithms([
      { id: 1, name: "NFL Player Performance", dateCreated: "2025-03-15", status: "Active" },
      { id: 2, name: "NBA Team Analysis", dateCreated: "2025-03-10", status: "In Progress" },
    ])
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Algorithm Management</CardTitle>
        <CardDescription>View and manage your saved algorithms</CardDescription>
      </CardHeader>
      <CardContent>
        {algorithms.length > 0 ? (
          <ul className="space-y-2">
            {algorithms.map((algo) => (
              <li key={algo.id} className="flex justify-between items-center">
                <span>{algo.name}</span>
                <div className="text-sm text-gray-500">
                  <span>Created: {algo.dateCreated}</span>
                  <span className="ml-2">Status: {algo.status}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't created any algorithms yet.</p>
        )}
        <Button className="mt-4" asChild>
          <Link href="/create-algorithm">Create New Algorithm</Link>
        </Button>
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold">Coming Soon: Backtesting</h3>
          <p className="text-sm text-gray-600">Test your algorithms against historical data for better performance.</p>
        </div>
      </CardContent>
    </Card>
  )
}
