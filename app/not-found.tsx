"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Ghost } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { SectionShell } from "@/components/shared/section-shell"

export default function NotFound() {
  return (
    <SectionShell className="py-24 text-center sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">404</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Ghost className="size-5 text-primary" />
          <h1 className="text-4xl font-semibold tracking-tight">The page escaped.</h1>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Looks like this route slipped into the void. Let&apos;s get you back to stable ground.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
        className="mx-auto mt-8 max-w-md rounded-2xl border border-border/70 bg-card/70 p-6 text-left"
      >
        <p className="text-sm text-muted-foreground">
          Funny part: even this 404 has a cleaner architecture than most rushed portfolios.
        </p>
      </motion.div>

      <div className="mt-8">
        <Link href="/" className={buttonVariants()}>
          Back Home
        </Link>
      </div>
    </SectionShell>
  )
}
