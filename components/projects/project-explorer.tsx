"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink, Globe, ImageIcon, Search, Sparkles } from "lucide-react"

import { projects, projectStatuses } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProjectExplorer() {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState<(typeof projectStatuses)[number]>("All")

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesStatus = status === "All" || project.status === status

      const q = query.trim().toLowerCase()
      const matchesQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.join(" ").toLowerCase().includes(q) ||
        project.technologies.join(" ").toLowerCase().includes(q)

      return matchesStatus && matchesQuery
    })
  }, [query, status])

  return (
    <div className="space-y-6">
      <section className="grid gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects by title, tech, or tags..."
            className="h-10 w-full rounded-xl border border-border/70 bg-background/70 pl-9 pr-3 text-sm outline-none ring-primary/40 transition focus-visible:ring-2"
            aria-label="Search projects"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {projectStatuses.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs transition-colors",
                status === item
                  ? "border-primary/55 bg-primary/15 text-primary"
                  : "border-border/70 bg-background/60 text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-border/70 bg-card/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span className="rounded-full border border-primary/35 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                {project.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
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

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/70 bg-background/70 px-2 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

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
        ))}
      </section>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No projects matched your filters. Try a different status or search term.
          </p>
        </div>
      ) : null}

      <section className="rounded-2xl border border-border/70 bg-card/70 p-5">
        <div className="flex items-start gap-3">
          <span className="rounded-md bg-primary/15 p-2 text-primary">
            <Sparkles className="size-4" />
          </span>
          <div>
            <h3 className="font-semibold">GitHub Sync Ready</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              This explorer is prepared for future API-based repository sync and contribution
              graph integration.
            </p>
            <Link href="/api/github" className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline">
              Preview API scaffold
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Contribution graph placeholder
          </p>
          <div className="mt-3 grid grid-cols-12 gap-1">
            {Array.from({ length: 60 }).map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-2.5 rounded-sm",
                  index % 7 === 0
                    ? "bg-primary/35"
                    : index % 5 === 0
                      ? "bg-cyan-400/35"
                      : "bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
