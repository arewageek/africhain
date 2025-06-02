"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return <span className={cn("text-gradient-primary inline-block", className)}>{children}</span>
}
