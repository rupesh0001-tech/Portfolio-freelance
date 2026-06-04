"use client";

import React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const technologies = {
  frontend: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Angular", slug: "angular" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
  ],
  backend: [
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Bun", slug: "bun" },
    { name: "Go", slug: "go" },
    { name: "Express", slug: "express" },
    { name: "Redis", slug: "redis" },
    { name: "RabbitMQ", slug: "rabbitmq" },
    // BullMQ doesn't have a simple icon, skipping or using generic
  ],
  cloud: [
    { name: "AWS", slug: "amazonwebservices" },
    { name: "GCP", slug: "googlecloud" },
  ],
  devops: [
    { name: "Docker", slug: "docker" },
    { name: "Kubernetes", slug: "kubernetes" },
    { name: "Jira", slug: "jira" },
    { name: "Jenkins", slug: "jenkins" },
    { name: "Ansible", slug: "ansible" },
    { name: "Terraform", slug: "terraform" },
    { name: "Prometheus", slug: "prometheus" },
    { name: "Slack", slug: "slack" },
  ],
  services: [
    { name: "Twilio", slug: "twilio" },
    { name: "Mailgun", slug: "mailgun" },
    { name: "Supabase", slug: "supabase" },
  ],
  databases: [
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Prisma", slug: "prisma" },
    { name: "MongoDB", slug: "mongodb" },
  ],
};

const TechItem = ({ name, slug }: { name: string; slug: string }) => (
  <div className="group flex flex-col items-center justify-center p-5 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 w-44 shrink-0 mx-3">
    <div className="w-10 h-10 mb-2 relative flex items-center justify-center transition-all duration-300">
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
        className="w-7 h-7 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
    <span className={`${inter.className} text-xs font-semibold text-neutral-500 group-hover:text-brand-primary transition-colors`}>
      {name}
    </span>
  </div>
);

export default function PartnerLogos() {
  const allTechs = Object.values(technologies).flat();
  // Split into two roughly equal rows for variety
  const half = Math.ceil(allTechs.length / 2);
  const row1 = allTechs.slice(0, half);
  const row2 = allTechs.slice(half);

  return (
    <motion.section
      id="techstack"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-8 bg-white border-y border-neutral-100/50 shadow-sm overflow-hidden"
    >
      <style>{`
          @keyframes marqueeScroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
          }
          .marquee-inner {
              animation: marqueeScroll 45s linear infinite;
          }
          .marquee-reverse {
              animation-direction: reverse;
          }
          /* Pause on hover for better UX */
          .marquee-row:hover .marquee-inner {
              animation-play-state: paused;
          }
      `}</style>

      <div className="flex flex-col gap-6">
        {/* Row 1 - Normal Direction */}
        <div className="marquee-row w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner pb-1 flex transform-gpu w-fit">
            {/* Triple duplication to ensure smooth loop on wide screens */}
            {[...row1, ...row1, ...row1].map((tech, index) => (
              <TechItem key={`${tech.name}-1-${index}`} {...tech} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>

        {/* Row 2 - Reverse Direction */}
        <div className="marquee-row w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner marquee-reverse pb-1 flex transform-gpu w-fit">
            {/* Triple duplication to ensure smooth loop on wide screens */}
            {[...row2, ...row2, ...row2].map((tech, index) => (
              <TechItem key={`${tech.name}-2-${index}`} {...tech} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </motion.section>
  );
}