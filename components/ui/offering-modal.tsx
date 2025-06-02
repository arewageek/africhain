"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface OfferingModalProps {
  offering: {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    category?: string
    comingSoon?: boolean
    benefits?: string[]
    techStack?: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function OfferingModal({ offering, isOpen, onClose }: OfferingModalProps) {
  if (!offering) return null

  const Icon = offering.icon

  return (
    <AnimatePresence>
      {isOpen &&
        (
          <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 bg-white rounded-3xl z-50 overflow-hidden shadow-2xl"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"white\" fillOpacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{offering.title}</h2>
                      {offering.category && (
                        <Badge className="mt-2 bg-white/20 text-white border-white/30">
                          {offering.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="max-w-4xl mx-auto">
                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {offering.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-accent" />
                        Key Features
                      </h3>
                      <div className="space-y-4">
                        {offering.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    {offering.benefits && (
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                          Benefits
                        </h3>
                        <div className="space-y-4">
                          {offering.benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                              className="flex items-start space-x-3"
                            >
                              <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  {offering.techStack && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                      <h3 className="text-lg font-bold text-primary mb-4">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {offering.techStack.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="bg-white text-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 sm:p-8 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
                    disabled={offering.comingSoon}
                  >
                    {offering.comingSoon ? "Coming Soon" : "Get Started"}
                    {!offering.comingSoon && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                  
                  <Button variant="outline" size="lg" className="px-8">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
        )}
    </AnimatePresence>
  )
}
