import type { MetadataRoute } from "next"

import { siteConfig } from "@/constants/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "Bidhan",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#090D14",
    theme_color: "#090D14",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
