import type { Metadata } from "next";
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
      <body className="font-urbanist antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
