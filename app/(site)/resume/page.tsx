import type { Metadata } from "next"
import Link from "next/link"
import { Download, FileText, GraduationCap, Shield } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume and career profile of Bidhan Dhakal, focused on cybersecurity growth and practical engineering projects.",
}

export default function ResumePage() {
  return (
    <SectionShell className="space-y-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Resume"
        title="Profile Snapshot"
        description="A concise view of current focus, education, and direction. Replace the PDF anytime without touching page structure."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-border/70 bg-card/70 p-5">
          <div className="flex items-center gap-2 text-primary">
            <GraduationCap className="size-4" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">Education</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Bachelor&apos;s in Electronics, Communication and Information Engineering.
          </p>
        </article>

        <article className="rounded-2xl border border-border/70 bg-card/70 p-5">
          <div className="flex items-center gap-2 text-primary">
            <Shield className="size-4" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">Career Goal</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Grow into a cybersecurity engineer through practical projects, labs, and consistent
            technical learning.
          </p>
        </article>

        <article className="rounded-2xl border border-border/70 bg-card/70 p-5">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="size-4" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">Resume File</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Keep your latest file at public/resume/bidhan-dhakal-resume.pdf.
          </p>
        </article>
      </div>

      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6">
        <h3 className="text-lg font-semibold">Download latest resume</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          This button always points to your canonical resume path, making updates effortless.
        </p>

        <div className="mt-5">
          <Link
            href="/resume/bidhan-dhakal-resume.pdf"
            target="_blank"
            className={cn(buttonVariants(), "h-10 px-4")}
          >
            Download Resume <Download className="size-4" />
          </Link>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Note: If you have not added the PDF yet, place it at public/resume/bidhan-dhakal-resume.pdf.
      </p>
    </SectionShell>
  )
}
