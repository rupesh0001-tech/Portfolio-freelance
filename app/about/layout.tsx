import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rupesh Jagtap | Best Web Dev in Pune | React Specialist",
  description: "Discover the technical background, experience, and expertise of Rupesh Jagtap—the best web developer in Pune, specializing in high-performance React & Next.js applications.",
  keywords: [
    "about rupesh jagtap",
    "best web developer in pune",
    "best web dev",
    "need a web dev",
    "software engineer pune",
    "pune web developer",
    "hire web developer pune",
    "react specialist pune"
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
