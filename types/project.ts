export type ProjectStatus = "Completed" | "In Progress" | "Planned"

export type ProjectItem = {
  id: string
  title: string
  summary: string
  description: string
  technologies: string[]
  tags: string[]
  status: ProjectStatus
  image: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}
