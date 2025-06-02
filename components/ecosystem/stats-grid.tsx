"use client"

import { motion } from "framer-motion"
import { Zap, Users, Building, Rocket } from "lucide-react"

const stats = [
  { icon: Zap, value: "6", label: "Powerful Tools", color: "text-yellow-500" },
  { icon: Users, value: "500+", label: "Active Builders", color: "text-blue-500" },
  { icon: Building, value: "$2M+", label: "Available Funding", color: "text-green-500" },
  { icon: Rocket, value: "15", label: "Cohort 1 Spots", color: "text-purple-500" },
]

export function StatsGrid() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-accent/30 transition-all duration-300"
        >
          <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
          <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
