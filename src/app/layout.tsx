import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chorus | The Agentic AI Platform",
  description: "Chorus is the agentic AI platform that proves real magic exists. We don't promise the impossible. We deliver it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-urbanist antialiased`}>
        {children}
      </body>
    </html>
  );
}
