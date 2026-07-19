import { achievements } from "@/data/learning"
import { Reveal } from "@/components/effects/reveal"
import { EmptyState } from "@/components/shared/empty-state"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function Achievements() {
  return (
    <SectionShell id="achievements">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Ready to showcase milestones as they happen"
          description="This section starts with a quality placeholder and scales cleanly with future achievements."
        />
      </Reveal>

      {achievements.length === 0 ? (
        <Reveal className="mt-8">
          <EmptyState
            title="Achievements will appear here"
            description="As you complete milestones, add them in data/learning.ts and they will render automatically."
          />
        </Reveal>
      ) : null}
    </SectionShell>
  )
}
