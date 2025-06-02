"use client"

import { motion } from "framer-motion"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  isInView: boolean
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange, isInView }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-accent text-white shadow-lg shadow-accent/25"
              : "bg-white/80 text-gray-600 hover:bg-accent/10 hover:text-accent border border-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  )
}
