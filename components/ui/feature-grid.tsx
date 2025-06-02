import { Users, Rocket, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  icon: "users" | "rocket" | "globe"
  title: string
  description: string
  color: "accent" | "secondary"
}

interface FeatureGridProps {
  features: Feature[]
  className?: string
}

const iconMap = {
  users: Users,
  rocket: Rocket,
  globe: Globe,
}

const colorClasses = {
  accent: "bg-accent/20 text-accent",
  secondary: "bg-secondary/20 text-secondary",
}

export function FeatureGrid({ features, className }: FeatureGridProps) {
  return (
    <div className={cn("grid md:grid-cols-3 gap-8", className)}>
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon]
        return (
          <div key={index} className="text-center space-y-4">
            <div
              className={`w-16 h-16 ${colorClasses[feature.color]} rounded-full flex items-center justify-center mx-auto`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
