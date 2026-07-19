import * as React from "react"

import { cn } from "@/lib/utils"

import { Container } from "./container"

type SectionShellProps = React.HTMLAttributes<HTMLElement> & {
  id?: string
}

export function SectionShell({ className, children, ...props }: SectionShellProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}
