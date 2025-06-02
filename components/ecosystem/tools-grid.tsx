"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ToolCard } from "@/components/ecosystem/tool-card"
import type { LucideIcon } from "lucide-react"

interface Tool {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  category?: string
  comingSoon?: boolean
  popularity?: number
}

interface ToolsGridProps {
  tools: Tool[]
  selectedTool: number | null
  onToolSelect: (index: number | null) => void
  isInView: boolean
}

export function ToolsGrid({ tools, selectedTool, onToolSelect, isInView }: ToolsGridProps) {
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
    <motion.div
      layout
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
    >
      <AnimatePresence mode="popLayout">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            layout
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative"
          >
            <ToolCard
              tool={tool}
              index={index}
              isActive={selectedTool === index}
              onClick={() => onToolSelect(selectedTool === index ? null : index)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
