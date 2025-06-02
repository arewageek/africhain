"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return

    // Set initial value
    const media = window.matchMedia(query)
    setMatches(media.matches)

    // Define callback
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Add listener
    if (media.addEventListener) {
      media.addEventListener("change", listener)
    } else {
      // Fallback for older browsers
      media.addListener(listener)
    }

    // Remove listener on cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener)
      } else {
        // Fallback for older browsers
        media.removeListener(listener)
      }
    }
  }, [query])

  return matches
}
