import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeatCluely.com - Detect AI Interview Cheating",
  description: "Generate hallucination trap questions to detect AI-powered interview cheating tools like Cluely. Maintain interview integrity with clever trap questions.",
  keywords: "interview, AI cheating, hallucination traps, interview integrity, BeatCluely",
  authors: [{ name: "BeatCluely" }],
  openGraph: {
    title: "BeatCluely.com - Detect AI Interview Cheating",
    description: "Generate hallucination trap questions to detect AI-powered interview cheating tools.",
    type: "website",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
