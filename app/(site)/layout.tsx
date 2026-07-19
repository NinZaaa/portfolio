import { RouteTransitionShell } from "@/components/effects/route-transition-shell"
import { EasterEggToast } from "@/components/effects/easter-egg-toast"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-full flex-col">
      <Header />
      <main className="relative flex-1">
        <RouteTransitionShell>{children}</RouteTransitionShell>
      </main>
      <Footer />
      <EasterEggToast />
    </div>
  )
}
