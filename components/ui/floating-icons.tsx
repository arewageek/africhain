"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Coins, Vote, Shield, Rocket, Globe, Zap, Users } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface FloatingIcon {
  icon: React.ReactNode
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: string
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  useEffect(() => {
    // Create floating icons - fewer on mobile
    const iconCount = isMobile ? 4 : isTablet ? 6 : 8
    const iconSize = isMobile ? 20 : 24

    const iconOptions = [
      { icon: Code, color: "text-white" },
      { icon: Coins, color: "text-secondary" },
      { icon: Vote, color: "text-accent" },
      { icon: Shield, color: "text-white" },
      { icon: Rocket, color: "text-secondary" },
      { icon: Globe, color: "text-accent" },
      { icon: Zap, color: "text-white" },
      { icon: Users, color: "text-secondary" },
    ]

    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < iconCount; i++) {
      const iconOption = iconOptions[i % iconOptions.length]
      const Icon = iconOption.icon

      newIcons.push({
        icon: <Icon className={iconOption.color} />,
        x: Math.random() * 80 + 10, // 10-90%
        y: Math.random() * 80 + 10, // 10-90%
        size: Math.random() * 10 + iconSize, // Varied sizes
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 4, // 4-7 seconds
        color: iconOption.color,
      })
    }

    setIcons(newIcons)
  }, [isMobile, isTablet])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute flex items-center justify-center rounded-full bg-primary/30 backdrop-blur-sm border border-white/10 shadow-lg"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: icon.size,
            height: icon.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -20, -40, -60],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        >
          {icon.icon}

          {/* Subtle glow effect */}
          <div
            className={`absolute inset-0 rounded-full opacity-50 blur-sm ${
              icon.color === "text-accent"
                ? "bg-accent/30"
                : icon.color === "text-secondary"
                  ? "bg-secondary/30"
                  : "bg-white/10"
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}
