export default function AuthCallbackLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Processing authentication...</h2>
        <p className="text-gray-500">Please wait while we complete the authentication process.</p>
      </div>
    </div>
  )
}