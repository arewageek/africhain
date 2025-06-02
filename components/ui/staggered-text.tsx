"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface StaggeredTextProps {
  text: string
  className?: string
  highlightWords?: string[]
  highlightClassName?: string
  delay?: number
}

export function StaggeredText({
  text,
  className,
  highlightWords = [],
  highlightClassName = "",
  delay = 0.1,
}: StaggeredTextProps) {
  const [words, setWords] = useState<string[]>([])
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    // Split text into words
    setWords(text.split(" "))
  }, [text])

  return (
    <h1 className={cn("flex flex-wrap justify-center lg:justify-start", className)}>
      {words.map((word, i) => {
        const shouldHighlight = highlightWords.includes(word)

        return (
          <motion.span
            key={i}
            className={cn("mr-[0.25em] inline-block", shouldHighlight && highlightClassName)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0.4 : 0.6,
              delay: delay + i * (isMobile ? 0.05 : 0.1),
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
