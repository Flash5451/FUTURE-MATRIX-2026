import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future Matrix 2026 | IEEE Intra-College Hardware & Software Hackathon",
  description:
    "24-hour intra-college IEEE hardware & software hackathon. Build. Prototype. Innovate.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-white">
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
