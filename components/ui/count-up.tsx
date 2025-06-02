"use client"

import { useEffect, useState, useRef } from "react"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
}

export function CountUp({ end, start = 0, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1)

      // Use easeOutExpo for a nice deceleration effect
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      const currentCount = start + (end - start) * easeOutExpo
      countRef.current = currentCount
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [start, end, duration])

  // Format the number with proper decimals
  const formattedCount = count.toFixed(decimals)

  return <span>{formattedCount}</span>
}
