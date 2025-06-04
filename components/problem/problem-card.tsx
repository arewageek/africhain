import type React from "react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { ProgressBar } from "@/components/ui/progress-bar"

interface ProblemCardProps {
    problem: {
        title: string
        description: string
        icon: React.ElementType
        stat: number
        statLabel: string
    }
    index: number
}

export function ProblemCard({ problem, index }: ProblemCardProps) {
    const Icon = problem.icon

    return (
        <Card className="bg-primary-light/50 border border-white/5 p-5 sm:p-6 backdrop-blur-sm hover:border-secondary/20 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                        <Icon className="w-5 h-5 text-secondary" />
                        <h4 className="font-semibold text-white">{problem.title}</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{problem.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{problem.statLabel}</span>
                        <span className="text-sm font-medium text-secondary">{problem.stat}%</span>
                    </div>
                    <ProgressBar value={problem.stat} className="mt-2" />
                </div>
            </div>
        </Card>
    )
}