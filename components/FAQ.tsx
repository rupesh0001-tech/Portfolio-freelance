"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What web development services do you offer?",
    answer: "I specialize in building custom, high-performance web applications and landing pages using Modern React and Next.js. My services cover full-stack development, custom animations (Framer Motion), database design, third-party API integrations, and local SEO optimization."
  },
  {
    question: "Are you available for projects in Pune as well as remote work?",
    answer: "Yes! I am based in Pune, India, and work with local businesses, startups, and agencies here. I am also fully equipped to work remotely with international clients across different time zones."
  },
  {
    question: "What tech stack do you use for your web applications?",
    answer: "My core stack includes TypeScript, React, Next.js (App Router), and Tailwind CSS for frontend layouts. For database and backend requirements, I work with Node.js, Bun, PostgreSQL, Redis, and headless CMS integrations, depending on the project's complexity."
  },
  {
    question: "How long does a typical web development project take?",
    answer: "Timelines depend entirely on the scope of work. A custom landing page or single-page application typically takes 1 to 2 weeks. A comprehensive multi-page application, custom web app, or SaaS platform can take between 4 to 8 weeks, including visual design and full testing."
  },
  {
    question: "How do you ensure web applications are optimized for search engines (SEO)?",
    answer: "I build websites with SEO in mind from day one. This includes utilizing server-side rendering (SSR) and static generation (SSG) in Next.js, optimizing asset loading, writing clean semantic HTML structures, configuring SEO metadata (OpenGraph, keywords, site description), and setting up local schemas for high ranking in regional queries."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Absolutely. I provide support packages after launch to handle standard software updates, security patches, performance tuning, and bug fixes, ensuring your web application runs smoothly and securely."
  }
];

const FAQAccordion = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-neutral-100 py-4 last:border-none">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left py-3 font-semibold text-neutral-900 hover:text-brand-primary transition-colors cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg pr-4">{item.question}</span>
        <span className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-500 group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-all shrink-0">
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and intro */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal max-w-md">
            Find answers to common questions about my development stack, timelines, SEO practices, and working styles. If you have any other questions, feel free to contact me directly.
          </p>
        </div>

        {/* Right Column: Accordion list */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100/60 shadow-sm">
          <div className="divide-y divide-neutral-100/50">
            {faqItems.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
