import { addDays, setHours, setMinutes } from "date-fns"

const baseDate = new Date(2025, 1, 12) // February 12, 2025

export interface Game {
  id: number
  homeTeam: {
    name: string
    logo: string
  }
  awayTeam: {
    name: string
    logo: string
  }
  time: Date
  league: "NBA" | "NFL" | "EPL"
  broadcast: string
  odds: {
    home: number
    away: number
    draw?: number
  }
  popularity: number
  bettingEdge: number
}

export const dummySchedule: Game[] = [
  {
    id: 1,
    homeTeam: {
      name: "Lakers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lakers-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "Celtics",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/celtics-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(baseDate, 30), 19),
    league: "NBA",
    broadcast: "ESPN",
    odds: { home: -150, away: +130 },
    popularity: 95,
    bettingEdge: 0.05,
  },
  {
    id: 2,
    homeTeam: {
      name: "Warriors",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/warriors-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "Suns",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suns-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(addDays(baseDate, 1), 0), 20),
    league: "NBA",
    broadcast: "TNT",
    odds: { home: -120, away: +100 },
    popularity: 88,
    bettingEdge: 0.03,
  },
  {
    id: 3,
    homeTeam: {
      name: "Chiefs",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chiefs-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "Bills",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bills-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(addDays(baseDate, 2), 15), 13),
    league: "NFL",
    broadcast: "CBS",
    odds: { home: -110, away: -110 },
    popularity: 92,
    bettingEdge: 0.02,
  },
  {
    id: 4,
    homeTeam: {
      name: "Manchester City",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-city-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "Liverpool",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liverpool-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(addDays(baseDate, 3), 0), 15),
    league: "EPL",
    broadcast: "NBC Sports",
    odds: { home: +120, away: +240, draw: +230 },
    popularity: 90,
    bettingEdge: 0.04,
  },
  {
    id: 5,
    homeTeam: {
      name: "Bucks",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bucks-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "76ers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/76ers-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(addDays(baseDate, 1), 45), 18),
    league: "NBA",
    broadcast: "NBA TV",
    odds: { home: -130, away: +110 },
    popularity: 85,
    bettingEdge: 0.03,
  },
  {
    id: 6,
    homeTeam: {
      name: "49ers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49ers-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "Rams",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rams-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(addDays(baseDate, 2), 20), 16),
    league: "NFL",
    broadcast: "FOX",
    odds: { home: -140, away: +120 },
    popularity: 87,
    bettingEdge: 0.04,
  },
  {
    id: 7,
    homeTeam: {
      name: "Chelsea",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chelsea-logo-Ue5Hy5Ue5Hy5.png",
    },
    awayTeam: {
      name: "Arsenal",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arsenal-logo-Ue5Hy5Ue5Hy5.png",
    },
    time: setHours(setMinutes(addDays(baseDate, 3), 30), 12),
    league: "EPL",
    broadcast: "Sky Sports",
    odds: { home: +180, away: +160, draw: +220 },
    popularity: 89,
    bettingEdge: 0.05,
  },
]
