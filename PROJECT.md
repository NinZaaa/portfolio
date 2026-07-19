# PROJECT

## Purpose
This repository powers the long-term personal brand website for Bidhan Dhakal.

## Direction
- v1: Portfolio foundation (hero, about, skills, projects, resume, contact)
- v2: Blog, engineering notes, cybersecurity writeups, electronics projects
- v3: CTF writeups, homelab docs, learning roadmap, books/resources
- v4: Admin dashboard, GitHub sync, analytics, search

## Architecture Rules
- Use App Router in app/.
- Keep components feature-first and responsibility-first.
- Keep shared UI primitives in components/ui.
- Keep reusable non-UI helpers in lib/.
- Keep static content in data/ and constants/.
- Keep all global types in types/.

## Folder Guide
- app/: routes, layouts, metadata, and route handlers.
- components/home: homepage-specific sections.
- components/layout: global shell components.
- components/shared: cross-page reusable structural components.
- components/ui: shadcn and other small UI primitives.
- constants: static app constants and site configuration.
- data: structured content datasets used by UI.
- hooks: reusable React hooks.
- lib: utilities and helper modules.
- public: static assets served at root paths.
- styles: optional scoped/global style modules if needed.
- types: shared TypeScript types.

## Standards
- Prefer TypeScript for new files.
- Keep components small and composable.
- Keep data separate from presentation.
- Keep commits focused and atomic.
