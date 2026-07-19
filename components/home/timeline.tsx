import { timeline } from "@/data/timeline"
import { Reveal } from "@/components/effects/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function Timeline() {
  return (
    <SectionShell id="timeline">
      <Reveal>
        <SectionHeading
          eyebrow="Timeline"
          title="A learning journey, tracked step by step"
          description="This timeline is intentionally structured to grow with new milestones over the next few years."
        />
      </Reveal>

      <ol className="mt-8 space-y-6">
        {timeline.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <li className="grid gap-4 sm:grid-cols-[96px_1fr]">
              <p className="pt-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
                {item.date}
              </p>
              <article className="relative rounded-2xl border border-border/70 bg-card/70 p-5">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 top-6 hidden size-3 rounded-full border border-primary/50 bg-background sm:block"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  )
}
