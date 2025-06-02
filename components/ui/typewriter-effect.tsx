"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className, cursorClassName }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    // Handle typing and deleting
    const timer = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting

        // When done deleting, move to next word
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150)
        }
      }
      // If typing
      else {
        setCurrentText(word.substring(0, currentText.length + 1))

        // When done typing, pause then start deleting
        if (currentText.length === word.length) {
          setTypingSpeed(2000) // Pause at the end
          setTimeout(() => {
            setIsDeleting(true)
            setTypingSpeed(50)
          }, 2000)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <h1 className="inline-flex">
        {words.map((word, index) => {
          const isCurrentWord = index === currentWordIndex

          return (
            <span
              key={index}
              className={cn(
                "inline-block transition-opacity duration-200",
                isCurrentWord ? "opacity-100" : "opacity-0 absolute",
                word.className,
              )}
            >
              {isCurrentWord ? currentText : word.text}
              {isCurrentWord && (
                <span className={cn("ml-0.5 inline-block h-full w-[4px] animate-blink bg-accent", cursorClassName)} />
              )}
              &nbsp;
            </span>
          )
        })}
      </h1>
    </div>
  )
}
