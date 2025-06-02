"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  emoji?: string
  className?: string
  align?: "center" | "left"
}

export function SectionTitle({ title, subtitle, emoji, className, align = "center" }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={cn("max-w-3xl", alignClass, className)}>
      {emoji && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-4 inline-block"
        >
          <span className="text-3xl sm:text-4xl">{emoji}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
