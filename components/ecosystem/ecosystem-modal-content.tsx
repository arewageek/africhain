"use client"

import { motion } from "framer-motion"
import { Users, Star, Calendar, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface EcosystemModalContentProps {
  tool: {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    benefits?: string[]
    techStack?: string[]
    userCount?: string
    popularity?: number
    launchDate?: string
  }
}

export function EcosystemModalContent({ tool }: EcosystemModalContentProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-8 sm:p-10">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {tool.userCount && (
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <Users className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{tool.userCount}</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
          )}
          {tool.popularity && (
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{tool.popularity}%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          )}
          {tool.launchDate && (
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{tool.launchDate}</div>
              <div className="text-sm text-gray-600">Launch Date</div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Overview</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{tool.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-accent" />
              Key Features
            </h3>
            <div className="space-y-4">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {tool.benefits && (
            <div>
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                Benefits
              </h3>
              <div className="space-y-4">
                {tool.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start space-x-3 p-3 bg-accent/5 rounded-xl border border-accent/10"
                  >
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        {tool.techStack && (
          <div className="p-6 bg-gradient-to-r from-gray-50 to-accent/5 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-accent" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {tool.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white text-gray-700 border border-gray-200 px-4 py-2 text-sm font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
