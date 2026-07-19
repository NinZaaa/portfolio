"use client"

import { motion } from "framer-motion"

import { EmptyState } from "@/components/shared/empty-state"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function Certifications() {
  return (
    <SectionShell id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Current Learning Journey"
        description="No fake badges. This section will grow naturally with real progress."
      />

      <div className="mt-8 space-y-4">
        <EmptyState
          title="Current Learning Journey"
          description="I&apos;m actively working toward industry certifications and practical experience. This section will continue growing alongside my learning journey."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 2.2 + item * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-24 rounded-xl border border-dashed border-border bg-card/60"
            />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
