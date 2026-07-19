import { socialLinks } from "@/data/socials"
import { Reveal } from "@/components/effects/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"
import { SocialLinks } from "@/components/shared/social-links"

export function Contact() {
  return (
    <SectionShell id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s connect"
          description="If you want to collaborate, discuss projects, or share learning resources, feel free to reach out."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <aside className="rounded-2xl border border-border/70 bg-card/70 p-6">
            <p className="text-sm text-muted-foreground">
              I&apos;m currently focused on growing into cybersecurity engineering through practical work,
              disciplined learning, and real projects.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Best way to reach me: <span className="text-foreground">bidhan206482@gmail.com</span>
            </p>
          </aside>
        </Reveal>

        <Reveal delay={0.08}>
          <SocialLinks links={socialLinks} />
        </Reveal>
      </div>
    </SectionShell>
  )
}
