export type SocialLink = {
  id: "email" | "github" | "linkedin" | "discord"
  label: string
  href: string
  username: string
  status: "live" | "updating"
}
