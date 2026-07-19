"use client"

import { motion } from "framer-motion"

export function SubtleParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        animate={{ y: [-6, 10, -6], x: [0, 6, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [10, -6, 10], x: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [-4, 12, -4], x: [0, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />
    </div>
  )
}
