import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type DataPoint = {
  [key: string]: number | string
}

type AdvancedStatsProps = {
  data: DataPoint[]
  selectedStats: string[]
}

export const AdvancedStats: React.FC<AdvancedStatsProps> = ({ data, selectedStats }) => {
  const calculateMean = (values: number[]) => {
    return values.reduce((sum, value) => sum + value, 0) / values.length
  }

  const calculateMedian = (values: number[]) => {
    const sorted = [...values].sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle]
  }

  const calculateStandardDeviation = (values: number[]) => {
    const mean = calculateMean(values)
    const squareDiffs = values.map((value) => Math.pow(value - mean, 2))
    const avgSquareDiff = calculateMean(squareDiffs)
    return Math.sqrt(avgSquareDiff)
  }

  const calculateCorrelation = (x: number[], y: number[]) => {
    const n = x.length
    const sumX = x.reduce((a, b) => a + b)
    const sumY = y.reduce((a, b) => a + b)
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0)
    const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0)
    const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0)

    const numerator = n * sumXY - sumX * sumY
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY))

    return numerator / denominator
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedStats.map((stat) => {
          const values = data.map((item) => Number(item[stat])).filter((value) => !isNaN(value))
          return (
            <div key={stat} className="mb-4">
              <h3 className="text-lg font-semibold">{stat}</h3>
              <p>Mean: {calculateMean(values).toFixed(2)}</p>
              <p>Median: {calculateMedian(values).toFixed(2)}</p>
              <p>Standard Deviation: {calculateStandardDeviation(values).toFixed(2)}</p>
            </div>
          )
        })}
        {selectedStats.length > 1 && (
          <div>
            <h3 className="text-lg font-semibold">Correlations</h3>
            {selectedStats.map((stat1, index) =>
              selectedStats.slice(index + 1).map((stat2) => {
                const values1 = data.map((item) => Number(item[stat1])).filter((value) => !isNaN(value))
                const values2 = data.map((item) => Number(item[stat2])).filter((value) => !isNaN(value))
                const correlation = calculateCorrelation(values1, values2)
                return (
                  <p key={`${stat1}-${stat2}`}>
                    {stat1} vs {stat2}: {correlation.toFixed(2)}
                  </p>
                )
              }),
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
