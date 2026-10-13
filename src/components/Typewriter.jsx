import { useState, useEffect } from 'react'
import './Typewriter.css'

export default function Typewriter({
  words = [],
  text = '',
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2000,
  loop = true,
  cursor = '|',
  className = '',
}) {
  const wordList = words.length > 0 ? words : (text ? [text] : [''])
  const [currentWordIdx, setCurrentWordIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayText(wordList[currentWordIdx] || '')
      return
    }

    const currentWord = wordList[currentWordIdx] || ''

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        if (wordList.length > 1 || loop) {
          setIsDeleting(true)
        }
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished typing word, enter pause
        if (wordList.length > 1 || loop) {
          setIsPaused(true)
        }
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished deleting, go to next word
        setIsDeleting(false)
        setCurrentWordIdx((prev) => (prev + 1) % wordList.length)
      }
    }
  }, [displayText, isDeleting, isPaused, currentWordIdx, wordList, typingSpeed, deletingSpeed, pauseDuration, loop])

  return (
    <span className={`typewriter-container ${className}`}>
      <span className="typewriter-text">{displayText}</span>
      <span className="typewriter-cursor" aria-hidden="true">{cursor}</span>
    </span>
  )
}
