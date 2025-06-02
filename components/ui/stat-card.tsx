"use client"

import { motion } from "framer-motion"
import { CountUp } from "@/components/ui/count-up"
import { useMediaQuery } from "@/hooks/use-media-query"

interface StatProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

interface StatCardProps {
  stat: StatProps
  delay?: number
}

export function StatCard({ stat, delay = 0 }: StatCardProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isSmallMobile = useMediaQuery("(max-width: 480px)")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay, duration: 0.5 }}
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      className="relative"
    >
      <div
        className="bg-primary-dark 
                      p-2 sm:p-3 md:p-4 
                      rounded-lg sm:rounded-xl 
                      border border-white/10 
                      h-full flex flex-col items-center justify-center text-center
                      min-h-[60px] sm:min-h-[80px]"
      >
        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl 
                        font-bold text-white flex items-center
                        leading-none"
        >
          {stat.prefix && <span className="text-accent text-sm sm:text-base md:text-lg lg:text-xl">{stat.prefix}</span>}
          <CountUp end={stat.value} duration={2} />
          {stat.suffix && (
            <span className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl">{stat.suffix}</span>
          )}
        </div>
        <div
          className="text-xs sm:text-sm text-gray-400 mt-1 
                        leading-tight px-1"
        >
          {isSmallMobile ? stat.label.split(" ")[0] : stat.label}
        </div>
      </div>
    </motion.div>
  )
}
