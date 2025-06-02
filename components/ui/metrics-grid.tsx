import { Card, CardContent } from "@/components/ui/card"

interface Metric {
  value: string
  label: string
  color: "red" | "orange" | "green" | "blue"
}

interface MetricsGridProps {
  metrics: Metric[]
}

const colorClasses = {
  red: "bg-red-50 text-red-600",
  orange: "bg-orange-50 text-orange-600",
  green: "bg-green-50 text-accent",
  blue: "bg-blue-50 text-blue-600",
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className={`border-0 shadow-lg ${colorClasses[metric.color].split(" ")[0]}`}>
          <CardContent className="p-6 text-center">
            <div className={`text-3xl font-bold mb-2 ${colorClasses[metric.color].split(" ")[1]}`}>{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
