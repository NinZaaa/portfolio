import { cn } from "@/lib/utils"

type EmptyStateProps = {
  title: string
  description: string
  className?: string
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card/70 p-8 text-center shadow-sm backdrop-blur",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
