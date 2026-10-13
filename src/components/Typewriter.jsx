import { useState, useEffect } from 'react'
import './Typewriter.css'

export default function Typewriter({
  words = [],
  text = '',
  typingSpeed = 65,
  deletingSpeed = 40,
  pauseDuration = 2000,
  loop = false,
  cursor = '|',
  className = '',
}) {
  const wordList = words.length > 0 ? words : (text ? [text] : [''])
  const [currentWordIdx, setCurrentWordIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayText(wordList[0] || '')
      setIsDone(true)
      return
    }

    if (isDone) return

    const currentWord = wordList[currentWordIdx] || ''

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        if (loop && wordList.length > 1) {
          setIsDeleting(true)
        } else {
          setIsDone(true)
        }
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting) {
      // Typing phase: type letter by letter
      if (displayText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished typing the target text
        if (loop && wordList.length > 1) {
          setIsPaused(true)
        } else {
          // Write only once and stop cleanly — prevents all layout shift glitches!
          setIsDone(true)
        }
      }
    } else {
      // Deleting phase (only triggered if loop is explicitly enabled)
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setCurrentWordIdx((prev) => (prev + 1) % wordList.length)
      }
    }
  }, [displayText, isDeleting, isPaused, isDone, currentWordIdx, wordList, typingSpeed, deletingSpeed, pauseDuration, loop])

  return (
    <span className={`typewriter-container ${className} ${isDone ? 'typewriter-done' : ''}`}>
      <span className="typewriter-text">{displayText}</span>
      <span className={`typewriter-cursor ${isDone ? 'cursor-finished' : ''}`} aria-hidden="true">
        {cursor}
      </span>
    </span>
  )
}
