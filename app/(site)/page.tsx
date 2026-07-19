import type { Metadata } from "next"

import { siteConfig } from "@/constants/site"
import { Achievements } from "@/components/home/achievements"
import { About } from "@/components/home/about"
import { Certifications } from "@/components/home/certifications"
import { Contact } from "@/components/home/contact"
import { CurrentlyReading } from "@/components/home/currently-reading"
import { Hero } from "@/components/home/hero"
import { NowLearning } from "@/components/home/now-learning"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { Skills } from "@/components/home/skills"
import { Timeline } from "@/components/home/timeline"
import { SubtleParticles } from "@/components/effects/subtle-particles"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal brand website of Bidhan Dhakal: engineering student building projects and growing toward cybersecurity engineering.",
}

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
  }

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SubtleParticles />
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <Timeline />
      <Certifications />
      <NowLearning />
      <CurrentlyReading />
      <Achievements />
      <Contact />
    </div>
  )
}
