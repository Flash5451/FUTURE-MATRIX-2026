import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-white">
        <div className="grid-bg" aria-hidden="true" />
        <div className="scanline-overlay" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
