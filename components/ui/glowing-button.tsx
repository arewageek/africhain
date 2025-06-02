"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingButtonProps {
  text: string
  icon?: React.ReactNode
  variant?: "primary" | "secondary"
  onClick?: () => void
  className?: string
}

export function GlowingButton({ text, icon, variant = "primary", onClick, className }: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const isPrimary = variant === "primary"

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <motion.div
        className={cn("absolute inset-0 rounded-lg blur-lg", isPrimary ? "bg-secondary" : "bg-accent")}
        animate={{
          opacity: isHovered ? 0.7 : 0.3,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      <Button
        size="lg"
        onClick={onClick}
        className={cn(
          "relative z-10 group overflow-hidden",
          isPrimary
            ? "bg-secondary hover:bg-secondary/90 text-white shadow-[0_0_20px_rgba(255,107,53,0.3)]"
            : "border-accent text-accent hover:bg-accent hover:text-primary backdrop-blur-sm",
          className,
        )}
      >
        <span className="relative z-10 flex items-center">
          {text}
          {icon}
        </span>

        {isPrimary && (
          <span className="absolute inset-0 bg-gradient-to-r from-secondary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
      </Button>
    </motion.div>
  )
}
