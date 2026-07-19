"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import type { NavItem } from "@/types"

import { Button } from "@/components/ui/button"

type MobileNavProps = {
  items: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-16 border-b border-border/70 bg-background/95 backdrop-blur-xl"
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
