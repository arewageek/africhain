"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { StatsGrid } from "@/components/ecosystem/stats-grid"

interface EcosystemHeaderProps {
  isInView: boolean
}

export function EcosystemHeader({ isInView }: EcosystemHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 md:mb-20"
    >
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-secondary/10 text-accent px-6 py-3 rounded-full text-sm font-medium mb-8 border border-accent/20">
        <Sparkles className="w-4 h-4" />
        <span>Complete Builder Ecosystem</span>
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
        <span className="block text-primary">Your</span>
        <span className="block bg-gradient-to-r from-accent via-secondary to-purple-600 bg-clip-text text-transparent">
          Web3 Arsenal
        </span>
      </h2>

      <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
        Six powerful tools designed to take you from idea to successful protocol launch
      </p>

      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
        <StatsGrid />
      </motion.div>
    </motion.div>
  )
}
