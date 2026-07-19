import Link from "next/link"

import { siteConfig } from "@/constants/site"

import { Container } from "@/components/shared/container"

import { LogoLock } from "./logo-lock"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <LogoLock label={siteConfig.name} />

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNav items={siteConfig.nav} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
