import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rupesh's Dev Blog | Best Web Developer in Pune",
  description: "Web development insights, tutorials, and UX engineering guides by Rupesh Jagtap. Learn about modern React, Next.js, and local SEO optimization from a top-rated web dev in Pune, India.",
  keywords: [
    "best web developer in pune",
    "best web dev",
    "need a web dev",
    "web development blog",
    "rupesh jagtap blog",
    "react development blog",
    "nextjs guides",
    "web dev tips pune",
    "frontend developer pune"
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
