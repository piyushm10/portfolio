import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://piyushm10.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Piyush More | Software Engineer, Automation & Applied AI",
    template: "%s | Piyush More"
  },
  description:
    "Portfolio of Piyush More, a software engineer working across automation, applied AI, healthcare technology, product development, and research.",
  keywords: [
    "Piyush More",
    "Software Engineer",
    "Automation Engineer",
    "Applied AI",
    "Healthcare Technology",
    "Python"
  ],
  authors: [{ name: "Piyush More" }],
  creator: "Piyush More",
  icons: {
    icon: `${basePath}/icon.svg`,
    shortcut: `${basePath}/favicon.ico`
  },
  openGraph: {
    type: "website",
    title: "Piyush More | Software Engineer",
    description: "Automation, applied AI, and practical software for real-world problems.",
    siteName: "Piyush More Portfolio",
    images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush More | Software Engineer",
    description: "Automation, applied AI, and practical software for real-world problems.",
    images: [`${siteUrl}/og-image.svg`]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080d" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
