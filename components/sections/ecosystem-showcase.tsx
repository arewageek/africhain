"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { EcosystemModal } from "@/components/ui/ecosystem-modal"
import { EcosystemHeader } from "@/components/ecosystem/ecosystem-header"
import { CategoryFilter } from "@/components/ecosystem/category-filter"
import { ToolsGrid } from "@/components/ecosystem/tools-grid"
import { EcosystemCTA } from "@/components/ecosystem/ecosystem-cta"
import { ecosystemData } from "@/lib/data/ecosystem"
import { useMediaQuery } from "@/hooks/use-media-query"

interface EcosystemShowcaseProps {
  id?: string
}

export function EcosystemShowcase({ id }: EcosystemShowcaseProps) {
  const [selectedTool, setSelectedTool] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" })
  const isMobile = useMediaQuery("(max-width: 768px)")

  const categories = ["All", "Development", "Management", "Funding", "Community", "Infrastructure", "Growth"]

  const filteredTools =
    activeCategory === "All" ? ecosystemData : ecosystemData.filter((tool) => tool.category?.includes(activeCategory))

  return (
    <section
      id={id}
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-accent/5 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%2300C2A8\" fillOpacity=\"0.02\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <EcosystemHeader isInView={isInView} />
        
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          isInView={isInView}
        />

        <ToolsGrid
          tools={filteredTools}
          selectedTool={selectedTool}
          onToolSelect={setSelectedTool}
          isInView={isInView}
        />

        <EcosystemCTA isInView={isInView} />
      </div>

      <EcosystemModal
        tool={selectedTool !== null ? ecosystemData[selectedTool] : null}
        isOpen={selectedTool !== null}
        onClose={() => setSelectedTool(null)}
      />
    </section>
  )
}
