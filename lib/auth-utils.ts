"use client"

import { useState, useEffect } from "react"

const COOLDOWN_TIME = 60000 // 1 minute in milliseconds

export function useAuthCooldown() {
  const [lastAttempt, setLastAttempt] = useState<number | null>(null)
  const [canAttempt, setCanAttempt] = useState(true)

  useEffect(() => {
    if (lastAttempt) {
      const timer = setTimeout(() => {
        setCanAttempt(true)
      }, COOLDOWN_TIME)

      return () => clearTimeout(timer)
    }
  }, [lastAttempt])

  const recordAttempt = () => {
    setLastAttempt(Date.now())
    setCanAttempt(false)
  }

  return { canAttempt, recordAttempt }
}
