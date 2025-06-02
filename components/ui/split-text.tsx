"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  text: string
  className?: string
  highlightClass?: string
  highlightWords?: string[]
  delay?: number
}

export function SplitText({ text, className, highlightClass, highlightWords = [], delay = 0.1 }: SplitTextProps) {
  const [words, setWords] = useState<string[]>([])

  useEffect(() => {
    // Split text into words
    setWords(text.split(" "))
  }, [text])

  return (
    <h1 className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const shouldHighlight = highlightWords.includes(word)

        return (
          <motion.span
            key={i}
            className={cn("mr-[0.25em] inline-block", shouldHighlight && highlightClass)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.1,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
          >
            {word}
          </motion.span>
        )
      })}
    </h1>
  )
}
