import { NextResponse } from "next/server"
import {
  nbaTeamStats,
  nbaPlayerStats,
  nflTeamStats,
  nflPlayerStats,
  eplTeamStats,
  eplPlayerStats,
} from "@/lib/dummy-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sport = searchParams.get("sport")
  const statType = searchParams.get("statType")
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "10", 10)
  const sortColumn = searchParams.get("sortColumn")
  const sortDirection = searchParams.get("sortDirection")
  const filters = JSON.parse(searchParams.get("filters") || "[]")
  const searchTerm = searchParams.get("searchTerm")

  let data
  switch (sport) {
    case "nba":
      data = statType === "team" ? nbaTeamStats : nbaPlayerStats
      break
    case "nfl":
      data = statType === "team" ? nflTeamStats : nflPlayerStats
      break
    case "epl":
      data = statType === "team" ? eplTeamStats : eplPlayerStats
      break
    default:
      data = []
  }

  // Apply filters
  data = data.filter((item) => {
    return filters.every((filter: { column: string; operator: string; value: number }) => {
      const value = item[filter.column]
      switch (filter.operator) {
        case ">":
          return value > filter.value
        case "<":
          return value < filter.value
        case "=":
          return value === filter.value
        default:
          return true
      }
    })
  })

  // Apply search
  if (searchTerm) {
    data = data.filter((item) =>
      Object.values(item).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
  }

  // Apply sorting
  if (sortColumn) {
    data.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
      return 0
    })
 }

  // Apply pagination
  const totalItems = data.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize)

  return NextResponse.json({
    data: paginatedData,
    page,
    pageSize,
    totalItems,
    totalPages,
  })
}