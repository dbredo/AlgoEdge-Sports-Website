"use client"

import { useState, useMemo, useEffect } from "react"
import {
  nbaTeamStats,
  nbaPlayerStats,
  nflTeamStats,
  nflPlayerStats,
  eplTeamStats,
  eplPlayerStats,
} from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"

type FilterType = {
  column: string
  operator: ">" | "<" | "="
  value: number
}

type Template = {
  name: string
  sport: string
  statType: string
  selectedStats: string[]
  filters: FilterType[]
}

export function DataHub() {
  const [sport, setSport] = useState<string | null>(null)
  const [statType, setStatType] = useState<string | null>(null)
  const [selectedStats, setSelectedStats] = useState<string[]>([])
  const [sortColumn, setSortColumn] = useState("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<FilterType[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [newTemplateName, setNewTemplateName] = useState("")
  const itemsPerPage = 10

  useEffect(() => {
    const savedTemplates = localStorage.getItem("dataHubTemplates")
    if (savedTemplates) {
      setTemplates(JSON.parse(savedTemplates))
    }
  }, [])

  const saveTemplate = () => {
    if (newTemplateName && sport && statType) {
      const newTemplate: Template = {
        name: newTemplateName,
        sport,
        statType,
        selectedStats,
        filters,
      }
      const updatedTemplates = [...templates, newTemplate]
      setTemplates(updatedTemplates)
      localStorage.setItem("dataHubTemplates", JSON.stringify(updatedTemplates))
      setNewTemplateName("")
      toast({
        title: "Template Saved",
        description: `Your template "${newTemplateName}" has been saved successfully.`,
      })
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields before saving the template.",
        variant: "destructive",
      })
    }
  }

  const loadTemplate = (template: Template) => {
    setSport(template.sport)
    setStatType(template.statType)
    setSelectedStats(template.selectedStats)
    setFilters(template.filters)
    toast({
      title: "Template Loaded",
      description: `The template "${template.name}" has been loaded successfully.`,
    })
  }

  const deleteTemplate = (templateName: string) => {
    const updatedTemplates = templates.filter((template) => template.name !== templateName)
    setTemplates(updatedTemplates)
    localStorage.setItem("dataHubTemplates", JSON.stringify(updatedTemplates))
    toast({
      title: "Template Deleted",
      description: `Template "${templateName}" has been deleted.`,
    })
  }

  const allStats = useMemo(() => {
    switch (sport) {
      case "nba":
        return statType === "team" ? nbaTeamStats : nbaPlayerStats
      case "nfl":
        return statType === "team" ? nflTeamStats : nflPlayerStats
      case "epl":
        return statType === "team" ? eplTeamStats : eplPlayerStats
      default:
        return []
    }
  }, [sport, statType])

  const availableStats = useMemo(() => {
    if (allStats.length > 0) {
      return Object.keys(allStats[0]).filter((key) => key !== "id")
    }
    return []
  }, [allStats])

  const filteredData = useMemo(() => {
    let data = allStats

    if (searchTerm) {
      data = data.filter((item) =>
        Object.values(item).some(
          (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      )
    }

    filters.forEach((filter) => {
      data = data.filter((item) => {
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

    if (sortColumn) {
      data.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        return 0
      })
    }

    return data
  }, [allStats, searchTerm, filters, sortColumn, sortDirection])

  const pageCount = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const addFilter = () => {
    setFilters([...filters, { column: availableStats[0], operator: ">", value: 0 }])
  }

  const updateFilter = (index: number, key: keyof FilterType, value: string | number) => {
    const newFilters = [...filters]
    newFilters[index] = { ...newFilters[index], [key]: value }
    setFilters(newFilters)
  }

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index))
  }

  const exportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["name", ...selectedStats].join(",") +
      "\n" +
      filteredData.map((row) => [row.name, ...selectedStats.map((stat) => row[stat])].join(",")).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `${sport}_${statType}_stats.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto py-8 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#3f6d63]">Saved Templates</h2>
            <div className="flex items-center gap-4">
              <Input
                type="text"
                placeholder="Save current view as template..."
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
                className="w-[300px] border-[#3f6d63] focus:border-[#3f6d63]"
              />
              <Button onClick={saveTemplate} className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
                Save Template
              </Button>
            </div>
          </div>

          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-4">
              {templates.map((template, index) => (
                <div key={index} className="relative group">
                  <Button
                    onClick={() => loadTemplate(template)}
                    variant="outline"
                    className="min-w-[200px] h-[100px] bg-[#f0f5f4] border-[#3f6d63] hover:border-[#345c54] hover:bg-[#e0ebe9] flex flex-col items-center justify-center gap-2 p-4"
                  >
                    <span className="text-lg font-semibold text-[#3f6d63]">{template.name}</span>
                    <span className="text-sm text-[#3f6d63]">
                      {template.sport.toUpperCase()} - {template.statType} Stats
                    </span>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-red-600 hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="h-4 w-4 text-white" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white border-[#3f6d63]">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-[#3f6d63]">Delete Template</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-600">
                          Are you sure you want to delete the template "{template.name}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-gray-100 text-[#3f6d63] hover:bg-gray-200">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteTemplate(template.name)}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ))}
              {templates.length === 0 && (
                <div className="text-[#3f6d63] italic p-4 text-center w-full">
                  No saved templates yet. Create your first template by selecting data and saving it above.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        <Separator className="bg-[#3f6d63]" />

        <Card className="bg-white border-[#3f6d63]">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#3f6d63]">Data Selection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-[#3f6d63]">Sport</Label>
                <Select value={sport || ""} onValueChange={setSport}>
                  <SelectTrigger className="border-[#3f6d63]">
                    <SelectValue placeholder="Select Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nba">NBA</SelectItem>
                    <SelectItem value="nfl">NFL</SelectItem>
                    <SelectItem value="epl">EPL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {sport && (
                <div className="space-y-2">
                  <Label className="text-[#3f6d63]">Stat Type</Label>
                  <Select value={statType || ""} onValueChange={setStatType}>
                    <SelectTrigger className="border-[#3f6d63]">
                      <SelectValue placeholder="Select Stat Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="team">Team Stats</SelectItem>
                      <SelectItem value="player">Player Stats</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {sport && statType && (
                <div className="space-y-2">
                  <Label className="text-[#3f6d63]">Add Stat</Label>
                  <Select value="" onValueChange={(value) => setSelectedStats([...selectedStats, value])}>
                    <SelectTrigger className="border-[#3f6d63]">
                      <SelectValue placeholder="Select Stats" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableStats.map((stat) => (
                        <SelectItem key={stat} value={stat}>
                          {stat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {selectedStats.length > 0 && (
              <div className="space-y-2">
                <Label className="text-[#3f6d63]">Selected Stats</Label>
                <div className="flex flex-wrap gap-2 p-4 bg-[#f0f5f4] rounded-lg border border-[#3f6d63]">
                  {selectedStats.map((stat) => (
                    <Badge
                      key={stat}
                      variant="secondary"
                      className="bg-[#3f6d63] text-white hover:bg-[#345c54] cursor-pointer px-3 py-1"
                      onClick={() => setSelectedStats(selectedStats.filter((s) => s !== stat))}
                    >
                      {stat} ×
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white border-[#3f6d63]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold text-[#3f6d63]">Filters</CardTitle>
            <Button onClick={addFilter} className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
              Add Filter
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-[#3f6d63] focus:border-[#345c54]"
              />

              <div className="space-y-2">
                {filters.map((filter, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 bg-[#f0f5f4] rounded-lg border border-[#3f6d63]"
                  >
                    <Select value={filter.column} onValueChange={(value) => updateFilter(index, "column", value)}>
                      <SelectTrigger className="border-[#3f6d63] w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {availableStats.map((stat) => (
                          <SelectItem key={stat} value={stat}>
                            {stat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={filter.operator}
                      onValueChange={(value) => updateFilter(index, "operator", value as ">" | "<" | "=")}
                    >
                      <SelectTrigger className="border-[#3f6d63] w-[80px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value=">">{">"}</SelectItem>
                        <SelectItem value="<">{"<"}</SelectItem>
                        <SelectItem value="=">{"="}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      value={filter.value}
                      onChange={(e) => updateFilter(index, "value", Number.parseFloat(e.target.value))}
                      className="border-[#3f6d63] w-[120px]"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFilter(index)}
                      className="ml-auto bg-red-600 hover:bg-red-700"
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedStats.length > 0 && (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#3f6d63]">Results</h2>
              <Button onClick={exportData} className="bg-[#3f6d63] hover:bg-[#345c54] text-white">
                Export CSV
              </Button>
            </div>

            <Card className="bg-white border-[#3f6d63]">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-[#f0f5f4]">
                        <TableHead className="font-bold text-[#3f6d63]">
                          {statType === "team" ? "Team" : "Player"}
                        </TableHead>
                        {selectedStats.map((stat) => (
                          <TableHead
                            key={stat}
                            onClick={() => handleSort(stat)}
                            className="cursor-pointer hover:bg-[#e0ebe9] font-bold text-[#3f6d63]"
                          >
                            {stat}
                            {sortColumn === stat && (sortDirection === "asc" ? " ▲" : " ▼")}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedData.map((item, index) => (
                        <TableRow key={index} className="hover:bg-[#f0f5f4]">
                          <TableCell className="font-medium text-[#3f6d63]">{item.name}</TableCell>
                          {selectedStats.map((stat) => (
                            <TableCell key={stat} className="text-gray-700">
                              {item[stat]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="bg-[#f0f5f4] text-[#3f6d63] hover:bg-[#e0ebe9]"
                  />
                </PaginationItem>
                {[...Array(pageCount)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => setCurrentPage(index + 1)}
                      isActive={currentPage === index + 1}
                      className={
                        currentPage === index + 1
                          ? "bg-[#3f6d63] text-white"
                          : "bg-[#f0f5f4] text-[#3f6d63] hover:bg-[#e0ebe9]"
                      }
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
                    disabled={currentPage === pageCount}
                    className="bg-[#f0f5f4] text-[#3f6d63] hover:bg-[#e0ebe9]"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
    </div>
  )
}
