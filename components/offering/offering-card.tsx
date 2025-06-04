"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"


interface OfferingCardProps {
    offering: {
        icon: LucideIcon
        title: string
        description: string
        features: string[]
        category?: string
        comingSoon?: boolean
    }
    index: number
    isHovered: boolean
    onClick: () => void
}

export function OfferingCard({ offering, index, isHovered, onClick }: OfferingCardProps) {
    const Icon = offering.icon
    const isEven = index % 2 === 0

    return (
        <motion.div whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }} className="h-full cursor-pointer" onClick={onClick}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-accent/30 transition-all duration-500 overflow-hidden group relative">
                {/* Gradient Background */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${isEven ? "from-accent/5 via-transparent to-secondary/5" : "from-secondary/5 via-transparent to-accent/5"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="p-6 sm:p-8 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${isEven ? "from-accent to-accent/70" : "from-secondary to-secondary/70"
                                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                            <Icon className="w-7 h-7 text-white" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowUpRight className="w-5 h-5 text-gray-400" />
                        </motion.div>
                    </div>

                    {/* Category Badge */}
                    {offering.category && (
                        <Badge
                            variant="secondary"
                            className={`mb-4 ${isEven ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"}`}
                        >
                            {offering.category}
                        </Badge>
                    )}

                    {/* Coming Soon Badge */}
                    {offering.comingSoon && (
                        <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-50">
                            Coming Soon
                        </Badge>
                    )}

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {offering.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">{offering.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                        {offering.features.slice(0, 3).map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center space-x-3"
                            >
                                <CheckCircle className={`w-4 h-4 ${isEven ? "text-accent" : "text-secondary"} flex-shrink-0`} />
                                <span className="text-sm text-gray-700">{feature}</span>
                            </motion.div>
                        ))}

                        {offering.features.length > 3 && (
                            <div className="text-sm text-gray-500 font-medium">+{offering.features.length - 3} more features</div>
                        )}
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                        className={`h-1 ${isEven ? "bg-accent" : "bg-secondary"} rounded-full mt-6`}
                    />
                </div>
            </Card>
        </motion.div>
    )
}
