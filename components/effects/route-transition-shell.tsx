"use client"

import { usePathname } from "next/navigation"

import { PageTransition } from "@/components/effects/page-transition"

type RouteTransitionShellProps = {
  children: React.ReactNode
}

export function RouteTransitionShell({ children }: RouteTransitionShellProps) {
  const pathname = usePathname()

  return <PageTransition pathname={pathname}>{children}</PageTransition>
}
