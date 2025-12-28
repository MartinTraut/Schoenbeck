import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Optik Uhren Schmuck Schönbeck | Neuenstadt am Kocher",
  description:
    "Kompetente Beratung, große Auswahl und Top-Qualität seit über 120 Jahren. Optik, Uhren und Schmuck mit eigener Meisterwerkstatt in Neuenstadt.",
  keywords: [
    "Optiker Neuenstadt",
    "Uhrmacher Neuenstadt",
    "Goldschmied Neuenstadt",
    "Brillen",
    "Uhren",
    "Schmuck",
    "Trauringe",
    "Sehtest",
    "Reparatur",
  ],
  authors: [{ name: "Schönbeck e. K." }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.schoenbeck-neuenstadt.de",
    siteName: "Schönbeck - Optik Uhren Schmuck",
    title: "Optik Uhren Schmuck Schönbeck | Neuenstadt am Kocher",
    description:
      "Kompetente Beratung, große Auswahl und Top-Qualität seit über 120 Jahren. Ihr Fachgeschäft für Optik, Uhren und Schmuck in Neuenstadt.",
    images: [
      {
        url: "https://www.schoenbeck-neuenstadt.de/wp-content/uploads/go-x/u/e9704203-f9e3-413f-b4b7-59a5be872e89/l0,t14,w1931,h927/image-911x437.jpg",
        width: 911,
        height: 437,
        alt: "Schönbeck - Optik Uhren Schmuck in Neuenstadt",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.schoenbeck-neuenstadt.de",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta
          name="geo.position"
          content="49.2368061;9.327791999999999"
        />
        <meta name="geo.placename" content="Neuenstadt am Kocher" />
        <meta name="geo.region" content="DE-BW" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
