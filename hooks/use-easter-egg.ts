"use client"

import { useCallback, useEffect, useState } from "react"

import { useCommandPaletteShortcut } from "@/hooks/use-command-palette-shortcut"

type EasterEggState = {
  unlocked: boolean
  message: string
}

const INITIAL_STATE: EasterEggState = {
  unlocked: false,
  message: "",
}

export function useEasterEgg() {
  const [state, setState] = useState<EasterEggState>(INITIAL_STATE)

  const unlock = useCallback((message: string) => {
    setState({ unlocked: true, message })
  }, [])

  const reset = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  useCommandPaletteShortcut(() => {
    unlock("Shortcut unlocked: quiet mode engaged.")
  })

  useEffect(() => {
    function onLogoUnlock(event: Event) {
      const customEvent = event as CustomEvent<{ message: string }>
      unlock(customEvent.detail.message)
    }

    window.addEventListener("logo-unlock", onLogoUnlock)
    return () => window.removeEventListener("logo-unlock", onLogoUnlock)
  }, [unlock])

  useEffect(() => {
    if (!state.unlocked) {
      return
    }

    const timer = window.setTimeout(() => {
      reset()
    }, 3200)

    return () => window.clearTimeout(timer)
  }, [reset, state.unlocked])

  return {
    ...state,
  }
}
