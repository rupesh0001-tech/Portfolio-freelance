import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rupesh Jagtap - Web Development Insights & Articles",
  description: "Read technical articles, design insights, and web development guides by Rupesh Jagtap, a leading web developer and frontend engineer in Pune, India.",
  keywords: ["web development blog", "rupesh jagtap blog", "frontend developer pune", "react development blog", "nextjs guides", "web dev tips"],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
