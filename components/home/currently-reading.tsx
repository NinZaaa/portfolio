import { BookOpen } from "lucide-react"

import { books } from "@/data/learning"
import { Reveal } from "@/components/effects/reveal"
import { EmptyState } from "@/components/shared/empty-state"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionShell } from "@/components/shared/section-shell"

export function CurrentlyReading() {
  return (
    <SectionShell id="reading">
      <Reveal>
        <SectionHeading
          eyebrow="Currently Reading"
          title="A bookshelf section designed for easy updates"
          description="Book data is intentionally managed outside UI so future edits remain quick and clean."
        />
      </Reveal>

      {books.length === 0 ? (
        <Reveal className="mt-8">
          <EmptyState
            title="No books added yet"
            description="Add books in data/learning.ts and they will appear automatically with status tags."
          />
        </Reveal>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article key={book.id} className="rounded-2xl border border-border/70 bg-card/70 p-5">
              <div className="flex items-center justify-between gap-3">
                <BookOpen className="size-4 text-primary" />
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                  {book.status}
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{book.title}</h3>
              <p className="text-sm text-muted-foreground">{book.author}</p>
            </article>
          ))}
        </div>
      )}
    </SectionShell>
  )
}
