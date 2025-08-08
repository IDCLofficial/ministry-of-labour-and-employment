import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://imolabour.gov.ng'),
  title: "Ministry of Labour and Employment - Imo State",
  description: "Official website of the Imo State Ministry of Labour and Employment. Empowering the workforce through skills development, job creation, and labour rights protection in Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Labour and Employment - Imo State",
    description: "Empowering the Imo workforce through skills development, job creation, and labour rights protection",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Ministry of Labour",
    "Employment Opportunities",
    "Skills Development",
    "Job Creation",
    "Workers' Rights",
    "Labour Relations",
    "Imo State Government",
    "Youth Empowerment",
    "Vocational Training",
    "Industrial Harmony"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://imolabour.gov.ng",
    siteName: "Imo State Ministry of Labour and Employment",
    title: "Ministry of Labour and Employment - Imo State",
    description: "Empowering the Imo workforce through skills development, job creation, and labour rights protection. Bridging the gap between job seekers and employers in Imo State.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Labour and Employment - Empowering the Workforce"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' },
  ]
}