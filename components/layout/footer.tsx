import Link from "next/link"

import { siteConfig } from "@/constants/site"
import { socialLinks } from "@/data/socials"

import { Container } from "@/components/shared/container"
import { SocialLinks } from "@/components/shared/social-links"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-background/70">
      <Container className="space-y-8 py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Quick Links</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
              <Link href="/resume" className="hover:text-foreground">
                Resume
              </Link>
              <Link href="/#contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &quot;Break. Learn. Build.&quot; <span className="text-xs">(Mamba mindset: stay locked in.)</span>
            </p>
          </div>

          <div>
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        <div className="border-t border-border/60 pt-4 text-sm text-muted-foreground">
          Copyright {year} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
