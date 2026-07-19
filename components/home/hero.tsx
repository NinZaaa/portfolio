"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"

import { siteConfig } from "@/constants/site"
import { useTypedRotation } from "@/hooks/use-typed-rotation"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const quotes = [
  "Stay Curious.",
  "Break. Learn. Build.",
  "Every expert was once a beginner.",
]

const roles = [
  "Cybersecurity Engineer in Progress",
  "Engineering Student",
  "Builder of Practical Projects",
]

export function Hero() {
  const quote = useTypedRotation(quotes, {
    typingSpeed: 84,
    deletingSpeed: 46,
    pauseMs: 1700,
  })

  const role = useTypedRotation(roles, {
    typingSpeed: 70,
    deletingSpeed: 36,
    pauseMs: 1400,
  })

  return (
    <section className="relative overflow-hidden pt-14">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center px-4 pb-14 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300"
        >
          {quote.text}
          <span className="ml-1 inline-block h-4 w-[1px] animate-pulse bg-cyan-300 align-middle" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Bidhan Dhakal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
          className="mt-5 max-w-3xl text-pretty text-lg text-muted-foreground sm:text-xl"
        >
          Bachelor&apos;s student in Electronics, Communication and Information Engineering, building
          real projects while growing toward cybersecurity engineering.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="mt-6 inline-flex min-h-8 items-center rounded-md border border-primary/30 bg-primary/10 px-3 text-sm text-primary"
        >
          {role.text}
          <span className="ml-1 inline-block h-4 w-[1px] animate-pulse bg-primary align-middle" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link href="/projects" className={cn(buttonVariants(), "h-10 px-4")}>
            View Projects <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/resume/bidhan-dhakal-resume.pdf"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "h-10 px-4")}
          >
            Download Resume <Download className="size-4" />
          </Link>
          <Link
            href="/#contact"
            className={cn(buttonVariants({ variant: "secondary" }), "h-10 px-4")}
          >
            Contact <Mail className="size-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          className="mt-12 grid max-w-3xl gap-3 text-sm text-muted-foreground sm:grid-cols-3"
        >
          <InfoChip label="Country" value="Nepal" />
          <InfoChip label="Focus" value="Cybersecurity" />
          <InfoChip label="Website" value={siteConfig.domain} />
        </motion.div>
      </div>
    </section>
  )
}

type InfoChipProps = {
  label: string
  value: string
}

function InfoChip({ label, value }: InfoChipProps) {
  return (
    <div className="rounded-xl border border-border/70 bg-card/70 px-4 py-3 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.16em]">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  )
}
