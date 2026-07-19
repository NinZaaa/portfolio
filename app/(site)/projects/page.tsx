import type { Metadata } from "next"

import { ProjectExplorer } from "@/components/projects/project-explorer"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore project work by Bidhan Dhakal with searchable cards, technology tags, and status filters.",
}

export default function ProjectsPage() {
  return (
    <SectionShell className="space-y-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Project Explorer"
        description="Built for growth: search, filters, status tags, and a structure ready for future GitHub-powered sync."
      />
      <ProjectExplorer />
    </SectionShell>
  )
}
