import Link from "next/link"
import { ExternalLink, Globe, ImageIcon, Search } from "lucide-react"

import { projects } from "@/data/projects"
import { Reveal } from "@/components/effects/reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function ProjectsPreview() {
  const featured = projects.filter((project) => project.featured)

  return (
    <SectionShell id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Current projects and a structure ready for future growth"
          description="Each project is defined in data files so adding new work later is fast and consistent."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <article className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all hover:border-primary/35 hover:shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="rounded-full border border-primary/35 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                {project.status}
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

            <div className="mt-4 rounded-xl border border-dashed border-border/80 bg-background/60 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <ImageIcon className="size-4" />
                Image Placeholder
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Replace with project screenshot at: {project.image}
              </p>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border/70 bg-background/70 px-2 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <Globe className="size-4" /> GitHub
                </a>
              ) : (
                <span
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "pointer-events-none opacity-60"
                  )}
                  aria-disabled="true"
                >
                  <Globe className="size-4" /> GitHub Soon
                </span>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              ) : (
                <span
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "pointer-events-none opacity-60"
                  )}
                  aria-disabled="true"
                >
                  <ExternalLink className="size-4" /> Demo Soon
                </span>
              )}
            </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex items-center justify-between rounded-2xl border border-border/70 bg-card/65 px-5 py-4">
          <p className="text-sm text-muted-foreground">
            Need filters, search, status, and future GitHub sync? Go to the full projects explorer.
          </p>
          <Link href="/projects" className={cn(buttonVariants({ size: "sm" }), "shrink-0")}>
            <Search className="size-4" /> Explore All
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  )
}
