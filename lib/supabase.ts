import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables")
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

// Function to test Supabase connection
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("profiles").select("id").limit(1)
    if (error) throw error
    console.log("Supabase connection successful")
    return { success: true }
  } catch (error) {
    console.error("Supabase connection error:", error)
    return { success: false, error }
  }
}
