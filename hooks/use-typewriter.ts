"use client"

import { useEffect, useState } from "react"

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
  loop?: boolean
  pauseTime?: number
}

export function useTypewriter({ 
  text, 
  speed = 0.08, 
  delay = 0, 
  loop = false, 
  pauseTime = 2000 
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        if (loop) {
          setIsDeleting(true)
        }
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed * 1000)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentIndex === text.length) {
      setIsComplete(true)
      if (loop) {
        setIsPaused(true)
      }
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
        setCurrentIndex(prev => prev - 1)
      }, speed * 500) // Faster deletion
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false)
      setIsComplete(false)
    }
  }, [currentIndex, text, speed, isDeleting, isPaused, loop, pauseTime])

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0)
        setDisplayText("")
      }, delay)
      return () => clearTimeout(delayTimeout)
    }
  }, [delay])

  return { displayText, isComplete }
}