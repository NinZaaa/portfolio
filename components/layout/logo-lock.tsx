"use client"

import Link from "next/link"
import { useRef } from "react"

type LogoLockProps = {
  label: string
}

export function LogoLock({ label }: LogoLockProps) {
  const clicksRef = useRef(0)

  function handleClick() {
    const next = clicksRef.current + 1

    if (next === 7) {
      window.dispatchEvent(
        new CustomEvent("logo-unlock", {
          detail: {
            message: "Tiny easter egg unlocked: Mamba mindset activated.",
          },
        })
      )
    }

    clicksRef.current = next > 7 ? 1 : next
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="text-sm font-semibold tracking-wide text-foreground"
      aria-label="Go to homepage"
    >
      {label}
    </Link>
  )
}
