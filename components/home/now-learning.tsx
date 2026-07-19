import { Compass } from "lucide-react"

import { currentLearning } from "@/data/learning"
import { Reveal } from "@/components/effects/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function NowLearning() {
  return (
    <SectionShell id="learning">
      <Reveal>
        <SectionHeading
          eyebrow="Now Learning"
          title="Focused topics I am actively improving"
          description="These cards are fed from a data file so updates are simple as priorities change."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentLearning.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <article className="rounded-2xl border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/35">
              <div className="flex items-center gap-2 text-primary">
                <Compass className="size-4" />
                <p className="text-xs uppercase tracking-[0.18em]">In Progress</p>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
