"use client"

export default function AuthCallbackError({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-red-600">Authentication Error</h2>
        <p className="text-gray-500">{error.message}</p>
        <a href="/login" className="mt-4 text-blue-600 hover:underline">
          Return to login
        </a>
      </div>
    </div>
  )
}