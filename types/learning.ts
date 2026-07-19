export type LearningItem = {
  id: string
  title: string
  note: string
}

export type BookItem = {
  id: string
  title: string
  author: string
  status: "Queued" | "Reading" | "Completed"
}

export type AchievementItem = {
  id: string
  title: string
  description: string
  date?: string
}
