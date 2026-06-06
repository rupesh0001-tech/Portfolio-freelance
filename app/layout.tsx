import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Rupesh Jagtap | Best Web Developer in Pune | Frontend Engineer & Next.js Developer",
    template: "%s | Rupesh Jagtap - Web Developer"
  },
  description: "Looking for the best web developer in Pune? Rupesh Jagtap is a professional web engineer & frontend developer in Pune, building high-performance React, Next.js web applications and UI/UX design systems.",
  keywords: [
    "Rupesh Jagtap",
    "best web developer in pune",
    "best web dev in pune",
    "web developer pune",
    "web development services pune",
    "best frontend engineer pune",
    "hire react developer pune",
    "nextjs developer pune",
    "freelance web developer pune",
    "pune web developer",
    "best software developer in pune",
    "ui ux designer pune",
    "pune web engineer",
    "portfolio website"
  ],
  authors: [{ name: "Rupesh Jagtap" }],
  creator: "Rupesh Jagtap",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rupeshjagtap.dev",
    title: "Rupesh Jagtap | Best Web Developer in Pune | Frontend & Next.js Developer",
    description: "High-performance web development, custom applications, and clean user interfaces by Pune's leading frontend engineer.",
    siteName: "Rupesh Jagtap Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Jagtap | Best Web Developer in Pune",
    description: "Professional Next.js/React web developer & frontend engineer in Pune, India.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
