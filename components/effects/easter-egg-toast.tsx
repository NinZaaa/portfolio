"use client"

import { Trophy } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { useEasterEgg } from "@/hooks/use-easter-egg"

export function EasterEggToast() {
  const { unlocked, message } = useEasterEgg()

  return (
    <AnimatePresence>
      {unlocked ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-50 w-[min(92vw,360px)] rounded-xl border border-primary/30 bg-card/90 p-3 shadow-2xl backdrop-blur"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 rounded-md bg-primary/15 p-2 text-primary">
              <Trophy className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Achievement unlocked</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{message}</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
