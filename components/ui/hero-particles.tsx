"use client"

import { useEffect, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for retina displays
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class with improved properties
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      fadeSpeed: number
      pulseSpeed: number
      pulseAmount: number
      baseSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * (isMobile ? 2 : 3) + (isMobile ? 0.3 : 0.5)
        this.size = this.baseSize
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15

        // Choose color based on probability
        const colorRand = Math.random()
        if (colorRand < 0.7) {
          this.color = "#ffffff" // White (most common)
        } else if (colorRand < 0.9) {
          this.color = "#00DFA2" // Accent color
        } else {
          this.color = "#FF6B35" // Secondary color
        }

        this.opacity = Math.random() * 0.5 + 0.1
        this.fadeSpeed = Math.random() * 0.02 + 0.005
        this.pulseSpeed = Math.random() * 0.01 + 0.005
        this.pulseAmount = Math.random() * 0.5 + 0.5
      }

      update(mouseX?: number, mouseY?: number) {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Pulsate opacity and size
        this.opacity += Math.sin(Date.now() * this.fadeSpeed) * 0.01
        this.opacity = Math.max(0.1, Math.min(0.6, this.opacity))

        this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed) * this.pulseAmount * 0.3

        // React to mouse if provided
        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = this.x - mouseX
          const dy = this.y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Particles move away from mouse
            const angle = Math.atan2(dy, dx)
            const force = (100 - distance) / 500
            this.x += Math.cos(angle) * force
            this.y += Math.sin(angle) * force

            // Increase opacity when near mouse
            this.opacity = Math.min(0.8, this.opacity + (100 - distance) / 500)
          }
        }
      }

      draw() {
        // Draw glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)

        const baseColor = this.color.substring(0, 7) // Remove any alpha
        gradient.addColorStop(
          0,
          baseColor +
            Math.floor(this.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(1, baseColor + "00") // Fully transparent

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw main particle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle =
          this.color +
          Math.floor(this.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      }
    }

    // Create particles - fewer on mobile
    const particles: Particle[] = []
    const particleCount = isMobile
      ? Math.min(50, Math.floor((canvas.width * canvas.height) / 20000))
      : Math.min(100, Math.floor((canvas.width * canvas.height) / 15000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Track mouse position for interactive particles
    let mouseX: number | undefined
    let mouseY: number | undefined

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = undefined
      mouseY = undefined
    }

    // Add mouse event listeners
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0

    const animate = (time: number) => {
      // Calculate delta time for smooth animation regardless of frame rate
      const deltaTime = time - lastTime
      lastTime = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mouseX, mouseY)
        particle.draw()
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = isMobile ? 80 : 120

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 0.15 * (1 - distance / maxDistance)

            // Determine connection color
            const connectionColor = `rgba(255, 255, 255, ${opacity})`

            // If both particles are colored, use a gradient
            if (particles[i].color !== "#ffffff" && particles[j].color !== "#ffffff") {
              const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)

              gradient.addColorStop(
                0,
                particles[i].color +
                  Math.floor(opacity * 255)
                    .toString(16)
                    .padStart(2, "0"),
              )
              gradient.addColorStop(
                1,
                particles[j].color +
                  Math.floor(opacity * 255)
                    .toString(16)
                    .padStart(2, "0"),
              )

              ctx.strokeStyle = gradient
            } else {
              ctx.strokeStyle = connectionColor
            }

            ctx.beginPath()
            ctx.lineWidth = isMobile ? 0.3 : 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
