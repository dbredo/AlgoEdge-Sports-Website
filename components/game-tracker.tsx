"use client"

import { useState, useEffect } from "react"
import { format, addDays, subDays, isSameDay } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Sun, Moon, Clock, Star } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { dummySchedule, type Game } from "@/lib/dummy-schedule"

const slideLeftClass = "transition-all duration-300 transform -translate-x-full opacity-0"
const slideRightClass = "transition-all duration-300 transform translate-x-full opacity-0"
const slideInClass = "transition-all duration-300 transform translate-x-0 opacity-100"
const fadeClass = "transition-opacity duration-300"

export function GameTracker() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [events, setEvents] = useState<Game[]>([])
  const [filter, setFilter] = useState("all")
  const [darkMode, setDarkMode] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>([])
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right" | null>(null)
  const [sortBy, setSortBy] = useState("time")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simulate loading events for the selected date
    setLoading(true)
    setTimeout(() => {
      setEvents(dummySchedule.filter((event) => isSameDay(event.time, selectedDate)))
      setLoading(false)
    }, 500)
  }, [selectedDate])

  const dateRange = [-2, -1, 0, 1, 2].map((offset) => addDays(selectedDate, offset))

  const filteredEvents = events.filter(
    (event) =>
      (filter === "all" || event.league === filter) &&
      (!showFavorites || favoriteTeams.includes(event.homeTeam.name) || favoriteTeams.includes(event.awayTeam.name)),
  )

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "time") return a.time.getTime() - b.time.getTime()
    return 0
  })

  const changeDate = (direction: "left" | "right") => {
    setTransitionDirection(direction)
    setSelectedDate(direction === "left" ? subDays(selectedDate, 1) : addDays(selectedDate, 1))
    setTimeout(() => {
      setTransitionDirection(null)
    }, 300)
  }

  const toggleFavorite = (teamName: string) => {
    setFavoriteTeams((prev) =>
      prev.includes(teamName) ? prev.filter((name) => name !== teamName) : [...prev, teamName],
    )
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100"}`}>
      <header className="bg-[#3f6d63] text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">AlgoEdge Game Tracker</h1>
          <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Button variant="outline" size="icon" onClick={() => changeDate("left")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {dateRange.map((date, index) => (
                <Button
                  key={date.toISOString()}
                  variant={index === 2 ? "default" : "outline"}
                  onClick={() => setSelectedDate(date)}
                  className={`${fadeClass} ${transitionDirection ? "opacity-50" : "opacity-100"}`}
                  disabled={transitionDirection !== null}
                >
                  {format(date, "MMM d")}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={() => changeDate("right")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch id="favorites" checked={showFavorites} onCheckedChange={setShowFavorites} />
              <Label htmlFor="favorites">Favorites</Label>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="time">Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All
            </TabsTrigger>
            <TabsTrigger value="NBA" onClick={() => setFilter("NBA")}>
              NBA
            </TabsTrigger>
            <TabsTrigger value="NFL" onClick={() => setFilter("NFL")}>
              NFL
            </TabsTrigger>
            <TabsTrigger value="EPL" onClick={() => setFilter("EPL")}>
              EPL
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#3f6d63]"></div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event) => (
              <div
                key={`${event.id}-${selectedDate.toISOString()}`}
                className={`${
                  transitionDirection === "left"
                    ? slideLeftClass
                    : transitionDirection === "right"
                      ? slideRightClass
                      : slideInClass
                }`}
              >
                <Card className={`overflow-hidden ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#3f6d63]">{event.league}</span>
                      <span className="text-sm text-gray-500">{format(event.time, "h:mm a")}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span>{event.homeTeam.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(event.homeTeam.name)}
                          className="p-0"
                        >
                          <Star
                            className={`h-4 w-4 ${
                              favoriteTeams.includes(event.homeTeam.name) ? "text-yellow-400 fill-current" : ""
                            }`}
                          />
                        </Button>
                      </div>
                      <span className="text-sm font-semibold">{event.odds.home}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span>{event.awayTeam.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(event.awayTeam.name)}
                          className="p-0"
                        >
                          <Star
                            className={`h-4 w-4 ${
                              favoriteTeams.includes(event.awayTeam.name) ? "text-yellow-400 fill-current" : ""
                            }`}
                          />
                        </Button>
                      </div>
                      <span className="text-sm font-semibold">{event.odds.away}</span>
                    </div>
                    {event.odds.draw !== undefined && (
                      <div className="flex justify-between items-center mb-2">
                        <span>Draw</span>
                        <span className="text-sm font-semibold">{event.odds.draw}</span>
                      </div>
                    )}
                    <div className="mt-2 text-sm text-gray-500">{event.broadcast}</div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" /> {format(event.time, "h:mm a")}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
