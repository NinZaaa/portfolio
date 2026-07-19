import { Globe, Mail, MessageCircle, UserRound } from "lucide-react"

import type { SocialLink } from "@/types"
import { cn } from "@/lib/utils"

const iconMap = {
  email: Mail,
  github: Globe,
  linkedin: UserRound,
  discord: MessageCircle,
}

type SocialLinksProps = {
  links: SocialLink[]
  className?: string
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {links.map((item) => {
        const Icon = iconMap[item.id]
        const isLive = item.status === "live"

        return (
          <li key={item.id}>
            <a
              href={item.href}
              target={isLive ? "_blank" : undefined}
              rel={isLive ? "noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card/70 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-card"
              aria-label={item.label}
            >
              <span className="rounded-lg bg-primary/15 p-2 text-primary">
                <Icon className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {item.label}
                  {isLive ? null : (
                    <span className="ml-2 rounded-full border border-primary/35 bg-primary/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-primary">
                      Updating
                    </span>
                  )}
                </span>
                <span className="block text-xs text-muted-foreground">{item.username}</span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
