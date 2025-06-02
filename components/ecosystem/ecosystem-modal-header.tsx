"use client"

import { X, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface EcosystemModalHeaderProps {
  tool: {
    icon: LucideIcon
    title: string
    category?: string
    popularity?: number
  }
  onClose: () => void
}

export function EcosystemModalHeader({ tool, onClose }: EcosystemModalHeaderProps) {
  const Icon = tool.icon

  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8 sm:p-10 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"white\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">{tool.title}</h2>
            <div className="flex items-center space-x-4">
              {tool.category && (
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  {tool.category}
                </Badge>
              )}
              {tool.popularity && (
                <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{tool.popularity}% Popular</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
