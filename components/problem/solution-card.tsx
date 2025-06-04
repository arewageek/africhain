import type React from "react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

interface SolutionCardProps {
    solution: {
        title: string
        description: string
        icon: React.ElementType
        color: "accent" | "secondary"
    }
    index: number
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
    const Icon = solution.icon
    const isAccent = solution.color === "accent"

    return (
        <Card
            className={`group bg-primary-light/30 border border-white/5 p-5 sm:p-6 backdrop-blur-sm hover:bg-${solution.color}/5 hover:border-${solution.color}/20 transition-all duration-300`}
        >
            <div
                className={`w-10 h-10 rounded-full bg-${solution.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
                <Icon className={`w-5 h-5 text-${solution.color}`} />
            </div>
            <h4 className="font-semibold text-white mb-2">{solution.title}</h4>
            <p className="text-sm text-gray-300">{solution.description}</p>
        </Card>
    )
}
