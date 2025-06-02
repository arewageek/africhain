"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isSmallMobile = useMediaQuery("(max-width: 480px)")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with proper scaling
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        const dpr = window.devicePixelRatio || 1
        const rect = container.getBoundingClientRect()

        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
        ctx.scale(dpr, dpr)
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Globe parameters - responsive
    const dots: {
      x: number
      y: number
      z: number
      radius: number
      color: string
      originalX: number
      originalY: number
      originalZ: number
      isAfrica: boolean
    }[] = []

    // Adjust parameters based on device
    const numDots = isSmallMobile ? 200 : isMobile ? 300 : isTablet ? 500 : 800
    const baseRadius = Math.min(canvas.width, canvas.height) * (isSmallMobile ? 0.2 : isMobile ? 0.25 : 0.3)
    const rotationSpeed = isMobile ? 0.0002 : 0.0004
    const dotSize = isSmallMobile ? 0.5 : isMobile ? 0.8 : 1.2

    // Generate dots on the globe
    for (let i = 0; i < numDots; i++) {
      // Random spherical coordinates
      const theta = Math.random() * Math.PI * 2 // longitude
      const phi = Math.acos(2 * Math.random() - 1) // latitude

      // Convert to Cartesian coordinates
      const x = baseRadius * Math.sin(phi) * Math.cos(theta)
      const y = baseRadius * Math.sin(phi) * Math.sin(theta)
      const z = baseRadius * Math.cos(phi)

      // Determine if this dot is in "Africa" region
      const isAfrica = theta > Math.PI * 0.7 && theta < Math.PI * 1.3 && phi > Math.PI * 0.3 && phi < Math.PI * 0.7

      // Determine dot color based on position
      let color = "#FFFFFF" // Default white color for most dots

      // Simulate Africa in the center with secondary color
      if (isAfrica) {
        color = "#2E4057" // Secondary color for Africa
      }

      dots.push({
        x,
        y,
        z,
        radius: Math.random() * dotSize + dotSize * 0.3,
        color,
        originalX: x,
        originalY: y,
        originalZ: z,
        isAfrica,
      })
    }

    // Animation variables
    let angle = 0
    let animationFrameId: number
    let lastTime = 0

    // Draw the globe
    const draw = (time: number) => {
      // Calculate delta time for smooth animation regardless of frame rate
      const deltaTime = time - lastTime
      lastTime = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update rotation angle
      angle += rotationSpeed * deltaTime

      // Sort dots by z-coordinate for proper depth rendering
      const sortedDots = [...dots].sort((a, b) => a.z - b.z)

      // Draw connections between nearby dots (fewer on mobile)
      if (!isSmallMobile) {
        ctx.globalAlpha = isMobile ? 0.15 : 0.2
        const connectionThreshold = baseRadius * (isMobile ? 0.2 : 0.25)

        for (let i = 0; i < sortedDots.length; i += isMobile ? 2 : 1) {
          if (sortedDots[i].z < 0) continue // Skip dots on the back side

          for (let j = i + (isMobile ? 2 : 1); j < sortedDots.length; j += isMobile ? 2 : 1) {
            if (sortedDots[j].z < 0) continue // Skip dots on the back side

            const dx = sortedDots[i].x - sortedDots[j].x
            const dy = sortedDots[i].y - sortedDots[j].y
            const dz = sortedDots[i].z - sortedDots[j].z
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

            // Only connect dots that are close to each other
            if (distance < connectionThreshold) {
              // Calculate opacity based on distance
              const opacity = 0.8 * (1 - distance / connectionThreshold)

              // Draw connection
              ctx.beginPath()

              // Project 3D to 2D for both dots
              const scale1 = 1000 / (1000 - sortedDots[i].z)
              const projectedX1 = sortedDots[i].x * scale1 + canvas.width / 2
              const projectedY1 = sortedDots[i].y * scale1 + canvas.height / 2

              const scale2 = 1000 / (1000 - sortedDots[j].z)
              const projectedX2 = sortedDots[j].x * scale2 + canvas.width / 2
              const projectedY2 = sortedDots[j].y * scale2 + canvas.height / 2

              // Set line style
              if (sortedDots[i].isAfrica && sortedDots[j].isAfrica) {
                // Use secondary color for Africa connections
                ctx.strokeStyle = `rgba(46, 64, 87, ${opacity * 0.5})`
              } else {
                // Use white/gray for other connections
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
              }

              ctx.lineWidth = isMobile ? 0.3 : 0.5
              ctx.moveTo(projectedX1, projectedY1)
              ctx.lineTo(projectedX2, projectedY2)
              ctx.stroke()
            }
          }
        }
      }

      ctx.globalAlpha = 1.0

      // Draw each dot
      sortedDots.forEach((dot) => {
        // Rotate around Y axis
        const cosAngle = Math.cos(angle)
        const sinAngle = Math.sin(angle)
        dot.x = dot.originalX * cosAngle - dot.originalZ * sinAngle
        dot.z = dot.originalX * sinAngle + dot.originalZ * cosAngle

        // Project 3D to 2D
        const scale = 1000 / (1000 - dot.z) // Perspective projection
        const projectedX = dot.x * scale + canvas.width / 2
        const projectedY = dot.y * scale + canvas.height / 2

        // Only draw dots on the visible side
        if (dot.z < 0) {
          // Calculate opacity based on z position
          const opacity = Math.min(1, Math.max(0.2, (dot.z + baseRadius) / (baseRadius * 2)))

          // Draw dot
          const dotRadius = dot.radius * scale
          ctx.beginPath()
          ctx.arc(projectedX, projectedY, dotRadius, 0, Math.PI * 2)

          // Use the dot's color with appropriate opacity
          ctx.fillStyle =
            dot.color +
            Math.floor(opacity * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.fill()

          // Add subtle highlight for Africa dots (less on mobile)
          if (dot.isAfrica && !isSmallMobile) {
            ctx.beginPath()
            ctx.arc(projectedX, projectedY, dotRadius * 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(46, 64, 87, ${opacity * 0.1})`
            ctx.fill()
          }
        }
      })

      // Request next frame
      animationFrameId = requestAnimationFrame(draw)
    }

    // Start animation
    animationFrameId = requestAnimationFrame(draw)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile, isTablet, isSmallMobile])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Glow effects - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Africa region glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[45%] 
                        w-[25%] h-[25%] sm:w-[30%] sm:h-[30%] 
                        bg-secondary/10 rounded-full blur-lg sm:blur-xl"
        ></div>

        {/* Accent highlight */}
        <div
          className="absolute bottom-[20%] right-[20%] 
                        w-[10%] h-[10%] sm:w-[15%] sm:h-[15%] 
                        bg-accent/10 rounded-full blur-md sm:blur-lg"
        ></div>
      </div>
    </motion.div>
  )
}
