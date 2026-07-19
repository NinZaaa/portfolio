"use client"

import { useEffect } from "react"

type ShortcutHandler = () => void

export function useCommandPaletteShortcut(handler: ShortcutHandler) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isMac = navigator.platform.toLowerCase().includes("mac")
      const commandOrCtrl = isMac ? event.metaKey : event.ctrlKey

      if (commandOrCtrl && event.shiftKey && event.key.toLowerCase() === "k") {
        event.preventDefault()
        handler()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [handler])
}
