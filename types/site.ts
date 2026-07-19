export type NavItem = {
  label: string
  href: string
}

export type SocialItem = {
  label: string
  href: string
}

export type SiteConfig = {
  name: string
  title: string
  description: string
  domain: string
  url: string
  email: string
  nav: NavItem[]
  socials: SocialItem[]
}
