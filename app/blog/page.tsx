"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen, Search, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Technical" | "UX Design" | "SEO";
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "nextjs-ultimate-framework-2026",
    title: "Why Next.js is the Ultimate Framework for Modern Web Development in 2026",
    excerpt: "Discover the core mechanics of Next.js that make it the gold standard for page rendering speed, local SEO indexing, and enterprise scalability.",
    date: "June 4, 2026",
    readTime: "5 min read",
    category: "Technical",
    tags: ["Next.js", "React", "Web Performance"]
  },
  {
    id: "art-of-micro-animations-ux",
    title: "The Art of Micro-Animations: Elevating User Experience in Web Interfaces",
    excerpt: "Learn how to use timing, spring physics, and Framer Motion transitions to capture customer delight and elevate design polish.",
    date: "May 28, 2026",
    readTime: "4 min read",
    category: "UX Design",
    tags: ["Framer Motion", "UI Design", "UX"]
  },
  {
    id: "local-seo-guide-developers",
    title: "Local SEO Best Practices for Independent Web Developers & Tech portfolios",
    excerpt: "Unpack step-by-step optimization processes: page layout speed indices, structured metadata schemas, and index targets to rank top in regional searches.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "SEO",
    tags: ["SEO Optimization", "Google Rank", "Local Search"]
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Technical", "UX Design", "SEO"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-mint/60 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        
        {/* Navigation Back Link */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-4 -mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Hero Header Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="text-left space-y-4 max-w-3xl">
            <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block">
              Insights & Articles
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black tracking-tight leading-[1.15]">
              Rupesh's Dev Insights
            </h1>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Exploring technical precision, frontend architecture patterns, micro-interactions, local SEO tips, and software development guides.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar Container */}
        <section className="pb-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200/60">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4.5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-brand-primary text-white shadow-sm"
                      : "bg-white text-neutral-600 border border-neutral-100 hover:bg-neutral-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or tags..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-neutral-100 text-sm font-medium text-black focus:outline-none focus:border-brand-primary transition-colors placeholder-neutral-400"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 md:pb-28 max-w-7xl mx-auto px-6 md:px-12 w-full">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6.5 border border-neutral-100/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-neutral-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-snug group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Metadata and Tags */}
                  <div className="pt-6 mt-6 border-t border-neutral-50/80 flex flex-col gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-neutral-50 text-[10px] font-semibold text-neutral-500 uppercase tracking-wider"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Date and Read Link */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:gap-2 transition-all cursor-pointer">
                        <span>Read Article</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-100/60 shadow-sm">
              <BookOpen className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-1">No articles found</h3>
              <p className="text-neutral-500 text-sm">
                Try searching for other terms or choose a different category.
              </p>
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}
