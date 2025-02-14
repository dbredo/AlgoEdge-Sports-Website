import type React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

type DataPoint = {
  [key: string]: number | string
}

type DataVisualizationProps = {
  data: DataPoint[]
  selectedStats: string[]
  chartType: "line" | "bar"
}

export const DataVisualization: React.FC<DataVisualizationProps> = ({ data, selectedStats, chartType }) => {
  const Chart = chartType === "line" ? LineChart : BarChart

  return (
    <ResponsiveContainer width="100%" height={400}>
      <Chart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {selectedStats.map((stat, index) => {
          const ChartComponent = chartType === "line" ? Line : Bar
          return (
            <ChartComponent
              key={stat}
              type="monotone"
              dataKey={stat}
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          )
        })}
      </Chart>
    </ResponsiveContainer>
  )
}
