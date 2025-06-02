"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ProgressBarProps {
  value: number
  className?: string
  color?: "accent" | "secondary"
}

export function ProgressBar({ value, className, color = "secondary" }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const colorClasses = {
    accent: "bg-accent",
    secondary: "bg-secondary",
  }

  return (
    <div ref={ref} className={cn("w-full h-1.5 bg-white/10 rounded-full overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className={cn("h-full rounded-full", colorClasses[color])}
      />
    </div>
  )
}
