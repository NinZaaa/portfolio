import { Brain, Code2, Cpu, ShieldCheck } from "lucide-react"

import { skillCategories } from "@/data/skills"
import type { SkillCategory } from "@/types"
import { Reveal } from "@/components/effects/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

const iconMap: Record<SkillCategory["icon"], typeof Code2> = {
  code: Code2,
  shield: ShieldCheck,
  cpu: Cpu,
  brain: Brain,
}

export function Skills() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Built in categories, not fake percentages"
          description="My skill stack is grouped by domains so it is honest, readable, and easy to expand over time."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon]

          return (
            <Reveal key={category.id} delay={index * 0.05}>
              <article className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-primary/15 p-2 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="text-lg font-semibold">{category.label}</h3>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </SectionShell>
  )
}
