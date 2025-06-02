"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ToolCardProps {
  tool: {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    category?: string
    comingSoon?: boolean
    popularity?: number
  }
  index: number
  isActive: boolean
  onClick: () => void
}

export function ToolCard({ tool, index, isActive, onClick }: ToolCardProps) {
  const Icon = tool.icon
  const categoryColors = {
    Development: "from-blue-500 to-cyan-500",
    Management: "from-purple-500 to-pink-500",
    Funding: "from-green-500 to-emerald-500",
    Community: "from-orange-500 to-red-500",
    Infrastructure: "from-indigo-500 to-blue-500",
    Growth: "from-yellow-500 to-orange-500",
  }

  const getCategoryColor = (category?: string) => {
    if (!category) return "from-accent to-secondary"
    const key = category.split(" ")[0] as keyof typeof categoryColors
    return categoryColors[key] || "from-accent to-secondary"
  }

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <Card
        className={`relative overflow-hidden border-2 transition-all duration-500 ${
          isActive
            ? "border-accent shadow-2xl shadow-accent/20 bg-white"
            : "border-gray-200/50 hover:border-accent/30 bg-white/80 backdrop-blur-sm"
        }`}
      >
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tool.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Popularity Indicator */}
        {tool.popularity && tool.popularity > 80 && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
            <Star className="w-3 h-3 fill-current" />
            <span>Popular</span>
          </div>
        )}

        <div className="p-6 sm:p-8 relative z-10">
          {/* Icon and Category */}
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-3">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(tool.category)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {tool.category && (
                <Badge variant="secondary" className="text-xs font-medium bg-gray-100 text-gray-700">
                  {tool.category}
                </Badge>
              )}
            </div>

            {/* Coming Soon Badge */}
            {tool.comingSoon && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">Coming Soon</Badge>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              {tool.title}
            </h3>

            <p className="text-gray-600 leading-relaxed line-clamp-3">{tool.description}</p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {tool.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                >
                  {feature}
                </span>
              ))}
              {tool.features.length > 3 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  +{tool.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
            className="mt-6 flex items-center text-accent font-medium text-sm"
          >
            <Play className="w-4 h-4 mr-2" />
            Click to explore
          </motion.div>
        </div>

        {/* Active Indicator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary origin-left"
        />
      </Card>
    </motion.div>
  )
}
