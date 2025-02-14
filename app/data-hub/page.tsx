import { SiteHeader } from "@/components/site-header"
import { DataHub } from "@/components/data-hub"
import { ProtectedRoute } from "@/components/protected-route"

export default function DataHubPage() {
  return (
    <ProtectedRoute>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-[72px]">
        <h1 className="text-3xl font-bold mb-6">Data Hub</h1>
        <DataHub />
      </main>
    </ProtectedRoute>
  )
}
