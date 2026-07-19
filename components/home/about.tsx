import { Goal } from "lucide-react"

import { Reveal } from "@/components/effects/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function About() {
  return (
    <SectionShell id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="An engineering student building toward cybersecurity"
          description="I focus on practical learning, clean problem solving, and consistent improvement through projects that stretch my skills."
        />
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="rounded-2xl border border-border/70 bg-card/70 p-6 text-muted-foreground backdrop-blur">
          <p>
            I am Bidhan Dhakal, currently studying Electronics, Communication and Information
            Engineering in Nepal. My long-term goal is to become a cybersecurity engineer.
          </p>
          <p className="mt-4">
            I enjoy learning through building. From C++ and Python projects to modern web
            development, I treat every project as a chance to sharpen technical thinking and
            execution discipline.
          </p>
          <p className="mt-4">
            I do not claim to know everything yet. What I bring is curiosity, consistency, and
            the mindset to keep improving step by step.
          </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-2xl border border-primary/25 bg-primary/10 p-6 backdrop-blur">
          <div className="flex items-center gap-2 text-primary">
            <Goal className="size-4" />
            <p className="text-sm font-semibold uppercase tracking-[0.16em]">Current Mission</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            I&apos;m documenting my journey from engineering student to cybersecurity professional.
            Every project, certification, and skill added here represents another step forward.
          </p>
          </aside>
        </Reveal>
      </div>
    </SectionShell>
  )
}
