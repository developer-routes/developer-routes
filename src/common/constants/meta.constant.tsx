import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Routes - Community",
  description:
    "Empowering Developers to Excel 🚀 | Building Connections at Developer Routes Community | Passionate about Fostering Growth in the Software Development World 🌐",
  keywords: "default, keywords",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Default OG Title",
    description: "Default OG Description",
    url: "https://example.com",
    siteName: "Site Name",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@defaulttwitter",
    title: "Default Twitter Title",
    description: "Default Twitter Description",
    images: ["https://example.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://example.com",
    languages: {
      "en-US": "https://example.com",
      "fr-FR": "https://example.com/fr",
    },
  },
  manifest: "/site.webmanifest",
};

export const viewport = "width=device-width, initial-scale=1";
