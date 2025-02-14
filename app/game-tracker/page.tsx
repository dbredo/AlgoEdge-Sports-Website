import { SiteHeader } from "@/components/site-header"
import { GameTracker } from "@/components/game-tracker"

export default function GameTrackerPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-[72px]">
        <h1 className="text-3xl font-bold mb-6">Game Tracker</h1>
        <GameTracker />
      </main>
    </>
  )
}