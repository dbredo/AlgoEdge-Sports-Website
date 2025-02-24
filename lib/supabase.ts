import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("[Supabase] Missing environment variables")
  throw new Error("Missing Supabase environment variables")
}

console.log("[Supabase] Initializing client with URL:", supabaseUrl)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: {
      getItem: (key) => {
        if (typeof window === "undefined") {
          return null
        }
        return window.localStorage.getItem(key)
      },
      setItem: (key, value) => {
        if (typeof window === "undefined") {
          return
        }
        window.localStorage.setItem(key, value)
      },
      removeItem: (key) => {
        if (typeof window === "undefined") {
          return
        }
        window.localStorage.removeItem(key)
      },
    },
  },
})

export async function testSupabaseConnection() {
  console.log("[Supabase] Testing connection...")
  try {
    const { data, error } = await supabase.from("profiles").select("id").limit(1)
    if (error) throw error
    console.log("[Supabase] Connection successful")
    return { success: true }
  } catch (error) {
    console.error("[Supabase] Connection error:", error)
    return { success: false, error }
  }
}
