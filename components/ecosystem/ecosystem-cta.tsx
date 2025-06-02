"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface EcosystemCTAProps {
  isInView: boolean
}

export function EcosystemCTA({ isInView }: EcosystemCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center"
    >
      <div className="relative bg-gradient-to-r from-primary via-secondary to-accent p-12 sm:p-16 rounded-3xl text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%2300C2A8 fillOpacity=0.1%3E%3Cpath d=M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243L8.2 0H5.373zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657l1.415 1.414L13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.242 0h3.414zM22.344 0l-9.315 9.314 1.414 1.414L25.758 0h-3.414zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657L5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657L2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656L40.2 36.4l1.415 1.413L60 19.514v-2.83zm0 5.657L43.03 41.97l1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657L54.343 47.8l1.414 1.415L60 44.172v-2.83zm0 5.657L57.172 50.83l1.414 1.415L60 50.828v-2.83z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />

        <div className="relative z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h3>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join Cohort 1 and get exclusive access to our complete ecosystem, plus personalized mentorship from industry
            experts
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-lg group shadow-2xl"
            >
              Apply for Cohort 1
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg backdrop-blur-sm"
            >
              Explore Ecosystem
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
