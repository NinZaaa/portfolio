import type { Metadata } from "next"

import { seoConfig } from "@/constants/seo"
import { siteConfig } from "@/constants/site"

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: seoConfig.defaultTitle,
      template: seoConfig.titleTemplate,
    },
    description: seoConfig.description,
    keywords: [...seoConfig.keywords],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: seoConfig.defaultTitle,
      description: seoConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Bidhan Dhakal personal brand preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoConfig.defaultTitle,
      description: seoConfig.description,
      images: [seoConfig.ogImage],
    },
  }
}
