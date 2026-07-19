import { NextResponse } from "next/server"

// Placeholder endpoint for future GitHub repository sync.
export async function GET() {
  return NextResponse.json({
    enabled: false,
    message: "GitHub integration scaffold is ready.",
  })
}
