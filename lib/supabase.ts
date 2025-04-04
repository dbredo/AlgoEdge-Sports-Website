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
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    cookieOptions: {
      name: "sb-auth-token",
      lifetime: 60 * 60 * 24 * 7, // 1 week
      domain: process.env.NEXT_PUBLIC_BASE_URL ? new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname : undefined,
      sameSite: "lax",
      path: "/",
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



