import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chorus | The Agentic AI Platform",
  description:
    "Chorus is the agentic AI platform for deploying autonomous agents that coordinate across your tools to turn goals into completed work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/urbanist-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-urbanist antialiased" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
