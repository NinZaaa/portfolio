"use client"

import { useEffect, useMemo, useState } from "react"

type TypedRotationOptions = {
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
}

export function useTypedRotation(items: string[], options: TypedRotationOptions = {}) {
  const { typingSpeed = 70, deletingSpeed = 40, pauseMs = 1400 } = options
  const safeItems = useMemo(() => items.filter(Boolean), [items])

  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!safeItems.length) {
      return
    }

    const current = safeItems[index % safeItems.length]

    if (!isDeleting && text === current) {
      const pauseTimer = window.setTimeout(() => {
        setIsDeleting(true)
      }, pauseMs)
      return () => window.clearTimeout(pauseTimer)
    }

    if (isDeleting && text.length === 0) {
      const switchTimer = window.setTimeout(() => {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % safeItems.length)
      }, deletingSpeed)
      return () => window.clearTimeout(switchTimer)
    }

    const nextText = isDeleting
      ? current.slice(0, Math.max(0, text.length - 1))
      : current.slice(0, text.length + 1)

    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = window.setTimeout(() => {
      setText(nextText)
    }, speed)

    return () => window.clearTimeout(timer)
  }, [
    deletingSpeed,
    index,
    isDeleting,
    pauseMs,
    safeItems,
    text,
    typingSpeed,
  ])

  return {
    text,
    currentIndex: index,
    isDeleting,
  }
}
