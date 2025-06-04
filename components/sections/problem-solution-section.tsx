"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, CheckCircle, ArrowRight, TrendingUp, Users, Shield, Coins } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ProblemCard } from "../problem/problem-card"
import { SolutionCard } from "../problem/solution-card"

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" })
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isSmallMobile = useMediaQuery("(max-width: 480px)")

  const problems = [
    {
      title: "Isolation",
      description: "African Web3 startups build in silos, disconnected from global ecosystems",
      icon: Users,
      stat: 78,
      statLabel: "of African startups fail due to lack of community",
    },
    {
      title: "Funding Gap",
      description: "Limited access to capital and investment opportunities",
      icon: Coins,
      stat: 50,
      statLabel: "million USD funding gap for African Web3",
    },
    {
      title: "Technical Barriers",
      description: "Complex infrastructure requirements and technical challenges",
      icon: Shield,
      stat: 65,
      statLabel: "of projects struggle with technical implementation",
    },
  ]

  const solutions = [
    {
      title: "Community-Driven DAO",
      description: "A vibrant ecosystem of builders, investors, and mentors",
      icon: Users,
      color: "accent",
    },
    {
      title: "Funding Access",
      description: "Direct connections to grants, VCs, and community funding",
      icon: Coins,
      color: "secondary",
    },
    {
      title: "Technical Support",
      description: "Infrastructure, tools, and expert guidance for seamless deployment",
      icon: Shield,
      color: "accent",
    },
    {
      title: "Growth Acceleration",
      description: "Marketing, partnerships, and scaling strategies for global reach",
      icon: TrendingUp,
      color: "secondary",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <SectionTitle
          title="Why Africhain Exists"
          subtitle="Transforming challenges into opportunities for African Web3 builders"
          emoji="✊"
          className="mb-16 md:mb-20"
        />

        {/* Problem-Solution Container */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Problem Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            {/* Problem Header */}
            <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8 space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Problem</h3>
            </motion.div>

            {/* Problem Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-lg">
              Too many African Web3 startups build in isolation, lack funding, and fade out before launch. The system
              wasn't built for us — so we're building our own.
            </motion.p>

            {/* Problem Cards */}
            <div className="space-y-4 sm:space-y-6">
              {problems.map((problem, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProblemCard problem={problem} index={index} />
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative lg:pl-8"
          >
            {/* Solution Header */}
            <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8 space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Solution</h3>
            </motion.div>

            {/* Solution Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-lg">
              Africhain gives you the tools, mentorship, capital access, and DAO-driven support you need to launch
              confidently and scale globally.
            </motion.p>

            {/* Solution Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {solutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} index={index} />
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
              <button
                className="group flex items-center space-x-2 text-accent hover:text-white transition-colors duration-300"
                onClick={() => {
                  // Scroll to offerings section
                  document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="font-medium">Explore our offerings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Connecting Line (Desktop Only) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-px bg-gradient-to-b from-secondary via-white to-accent opacity-20"></div>
      </div>
    </section>
  )
}
