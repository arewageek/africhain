"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface EcosystemModalFooterProps {
  tool: {
    icon: LucideIcon
    title: string
    comingSoon?: boolean
  }
}

export function EcosystemModalFooter({ tool }: EcosystemModalFooterProps) {
  return (
    <div className="border-t border-gray-200 p-8 bg-gradient-to-r from-gray-50 to-white">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-bold px-10 py-4 rounded-full shadow-lg"
          disabled={tool.comingSoon}
        >
          {tool.comingSoon ? "Coming Soon" : "Get Started"}
          {!tool.comingSoon && <ArrowRight className="ml-2 w-5 h-5" />}
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="px-10 py-4 rounded-full border-2 border-gray-300 hover:border-accent"
        >
          Learn More
        </Button>
      </div>
    </div>
  )
}
