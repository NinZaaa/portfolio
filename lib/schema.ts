import { siteConfig } from "@/constants/site"

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Engineering Student",
    knowsAbout: [
      "Cybersecurity",
      "Programming",
      "Electronics",
      "Networking",
      "Problem Solving",
    ],
    sameAs: siteConfig.socials.map((item) => item.href),
  }
}
