import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rupesh Jagtap | Best Web Developer in Pune | Frontend & Full Stack Engineer",
  description: "Are you looking for the best web developer in Pune? Rupesh Jagtap is a premier React & Next.js developer offering custom UI animations, responsive layouts, and SEO-optimized web applications. Hire the best web dev today.",
  keywords: [
    "best web developer in pune",
    "best web dev",
    "need a web dev",
    "web developer pune",
    "rupesh jagtap",
    "react developer pune",
    "nextjs developer pune",
    "pune web developer",
    "software engineer pune",
    "hire web developer pune",
    "freelance web developer pune"
  ],
  authors: [{ name: "Rupesh Jagtap" }],
  creator: "Rupesh Jagtap",
  publisher: "Rupesh Jagtap",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rupeshjagtap.dev",
    title: "Rupesh Jagtap | Best Web Developer in Pune | Frontend & Full Stack",
    description: "Looking for a premium web developer? Rupesh Jagtap designs and develops high-performance, SEO-optimized React & Next.js web applications in Pune, India.",
    siteName: "Rupesh Jagtap Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Jagtap | Best Web Developer in Pune",
    description: "Looking for the best web dev in Pune? Rupesh Jagtap builds high-performance, SEO-optimized React & Next.js websites.",
  },
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
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
