"use client"

import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion"
import { Rocket, Users, ArrowDown } from "lucide-react"
import { HeroGlobe } from "@/components/ui/hero-globe"
import { StaggeredText } from "@/components/ui/staggered-text"
import { StatCard } from "@/components/ui/stat-card"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isSmallMobile = useMediaQuery("(max-width: 480px)")

  // Parallax scroll effect - disabled on mobile for better performance
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "10%" : "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  // Handle scroll animation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.05)
  })

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = heroRef.current?.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { value: 50, label: "Builders Applied", suffix: "+" },
    { value: 2, label: "Grants Available", prefix: "$", suffix: "M+" },
    { value: 15, label: "Cohort 1 Spots" },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-primary
                 py-16 sm:py-20 lg:py-0
                 px-4 sm:px-6 lg:px-0"
    >
      {/* Main content */}
      <motion.div
        style={{
          y: isMobile ? 0 : springY,
          opacity: isMobile ? 1 : springOpacity,
        }}
        className="container mx-auto relative z-10 
                   pt-20 sm:pt-24 md:pt-16 lg:pt-0
                   w-full max-w-7xl"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 
                        gap-8 sm:gap-10 lg:gap-12 
                        items-center"
        >
          {/* Left content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 
                       space-y-6 sm:space-y-8 
                       text-center lg:text-left
                       order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Badge
                className="bg-accent/10 text-accent border-accent/20 
                               px-3 py-1.5 sm:px-4 sm:py-2 
                               text-xs sm:text-sm
                               inline-flex items-center"
              >
                <span className="inline-block mr-2">🔥</span>
                <span className="hidden xs:inline">DAO-Powered Accelerator</span>
                <span className="xs:hidden">DAO Accelerator</span>
              </Badge>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
                <StaggeredText
                  text="Launch African Web3 Protocols That Matter"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                           font-bold leading-tight text-white
                           max-w-4xl mx-auto lg:mx-0"
                  highlightWords={["African", "Matter"]}
                  highlightClassName="text-secondary"
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl mx-auto lg:mx-0"
              >
                <p
                  className="text-base sm:text-lg md:text-xl 
                             text-gray-300 leading-relaxed"
                >
                  Africhain is a DAO-powered accelerator and launchpad helping African founders{" "}
                  <span className="text-accent font-medium">build, fund, and grow</span> world-class decentralized
                  products — from idea to mainnet.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 
                         justify-center lg:justify-start
                         pt-2"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                className="bg-secondary hover:bg-secondary/90 text-white 
                          group relative overflow-hidden
                          w-full sm:w-auto
                          h-12 sm:h-14
                          text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="hidden xs:inline">Apply as a Builder</span>
                  <span className="xs:hidden">Apply as Builder</span>
                  <Rocket
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5 
                                   group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Button>
              <Button
                variant="outline"
                size={isMobile ? "default" : "lg"}
                className="border-accent text-accent hover:bg-accent hover:text-primary 
                          group w-full sm:w-auto
                          h-12 sm:h-14
                          text-sm sm:text-base"
              >
                <span className="flex items-center justify-center">
                  Join the DAO
                  <Users
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5 
                                  group-hover:scale-110 transition-transform"
                  />
                </span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 
                         pt-6 sm:pt-8
                         max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} delay={index * 0.2} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="lg:col-span-5 
                       relative 
                       h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px]
                       order-1 lg:order-2
                       mx-auto lg:mx-0
                       w-full max-w-md sm:max-w-lg lg:max-w-none"
          >
            <HeroGlobe />
          </motion.div>
        </div>

        {/* Scroll indicator - Desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 10 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 
                     cursor-pointer hidden lg:block"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400">Discover More</span>
            <div
              className="w-8 h-12 rounded-full border-2 border-accent 
                           flex items-start justify-center p-1"
            >
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-2 h-2 rounded-full bg-accent"
              />
            </div>
          </div>
        </motion.div>

        {/* Mobile CTA for next section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 sm:mt-12 text-center lg:hidden"
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-accent hover:text-accent/80 hover:bg-accent/10
                      h-10 px-4"
            onClick={scrollToNextSection}
          >
            Discover More
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
