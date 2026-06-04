"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap, Code2, Layers, Clock,
  MessageSquare, Terminal, CheckCircle2, TrendingUp
} from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  visual: React.ReactNode;
}

// ── Detailed Visual Panels ──────────────────────────────────────────

const VisualCommunication = () => (
  <div className="flex flex-col gap-3 w-full px-5 justify-center h-full">
    <div className="self-start max-w-[85%] bg-neutral-100/80 rounded-2xl rounded-tl-none p-3 text-[11px] text-neutral-800 border border-neutral-200/50 shadow-sm">
      <div className="font-semibold text-[8px] text-neutral-400 mb-1 tracking-wider uppercase">CLIENT</div>
      Hi Rupesh! Any updates on the milestone deployment?
    </div>
    <div className="self-end max-w-[85%] bg-brand-primary text-white rounded-2xl rounded-tr-none p-3 text-[11px] border border-brand-primary/20 shadow-md shadow-brand-primary/10">
      <div className="font-semibold text-[8px] text-white/70 mb-1 tracking-wider uppercase">ME</div>
      Yes! All code is clean, compiled, and deployed to staging. Sending link in 1 min.
    </div>
    <div className="flex justify-center items-center mt-2">
      <MessageSquare className="w-3.5 h-3.5 text-brand-primary animate-bounce" />
      <div className="flex gap-1 ml-2">
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
);

const VisualCode = () => (
  <div className="w-full h-full p-4 flex flex-col justify-center">
    <div className="w-full bg-[#1e1e2e] rounded-2xl overflow-hidden border border-neutral-800/80 shadow-lg flex-1 flex flex-col">
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#181825] border-b border-neutral-800/60 shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#f38ba8]" />
        <div className="w-2 h-2 rounded-full bg-[#f9e2af]" />
        <div className="w-2 h-2 rounded-full bg-[#a6e3a1]" />
        <span className="text-[8px] text-neutral-500 font-mono ml-2">metrics.ts</span>
      </div>
      <div className="p-3.5 font-mono text-[9px] sm:text-[10px] text-[#cdd6f4] leading-relaxed overflow-hidden flex-1 flex flex-col justify-center bg-[#1e1e2e]">
        <p className="text-[#a6e3a1]">{"// Type-safe optimization models"}</p>
        <p className="mt-1"><span className="text-[#cba6f7]">interface</span> <span className="text-[#f9e2af]">Props</span> {"{"}</p>
        <p className="pl-3"><span className="text-[#89b4fa]">performance</span>: <span className="text-[#f9e2af]">Metrics</span>;</p>
        <p className="pl-3"><span className="text-[#89b4fa]">onComplete</span>: () =&gt; <span className="text-[#cba6f7]">void</span>;</p>
        <p>{"}"}</p>
        <p className="mt-1.5"><span className="text-[#cba6f7]">export const</span> <span className="text-[#89b4fa]">RenderStats</span> = () =&gt; {"{"}</p>
        <p className="pl-3"><span className="text-[#cba6f7]">return</span> &lt;<span className="text-[#f9e2af]">MetricsDisplay</span> /&gt;;</p>
        <p>{"}"}</p>
        <div className="inline-flex items-center mt-2 text-brand-primary">
          <Terminal className="w-3 h-3 mr-1.5" />
          <span className="w-1.5 h-3 bg-brand-primary animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

const VisualArchitecture = () => (
  <div className="w-full h-full flex items-center justify-center relative px-4 py-3">
    <div className="relative w-full max-w-[380px] h-full flex flex-col justify-between items-center gap-2.5">

      {/* ── Tier 1: Load Balancer / Edge ── */}
      <div className="w-full bg-white rounded-xl px-3 py-2 border border-neutral-100 shadow-sm z-30 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
          <Layers className="w-3.5 h-3.5 text-brand-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-black">Edge Load Balancer</span>
            <span className="text-[7px] font-bold text-[#a6e3a1] bg-[#a6e3a1]/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Live</span>
          </div>
          <span className="text-[8px] text-neutral-400 font-medium">3 regions • Auto-scaling • SSL/TLS</span>
        </div>
        <span className="text-[9px] font-mono font-bold text-neutral-300 shrink-0">99.99%</span>
      </div>

      {/* ── Connection Lines with animated packets ── */}
      <div className="relative w-full h-3 flex items-center justify-center z-10">
        <div className="absolute left-[15%] right-[15%] h-px border-t border-dashed border-brand-primary/15" />
        <motion.div
          animate={{ x: [-40, 40, -40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_5px_rgba(232,125,54,0.4)] z-20"
        />
      </div>

      {/* ── Tier 2: Microservices Row ── */}
      <div className="w-full flex gap-1.5 z-30">
        {[
          { name: "Auth API", latency: "12ms", status: "bg-[#a6e3a1]" },
          { name: "Core API", latency: "8ms", status: "bg-[#a6e3a1]" },
          { name: "Events", latency: "15ms", status: "bg-[#f9e2af]" },
        ].map((svc) => (
          <div key={svc.name} className="flex-1 bg-white rounded-lg px-2 py-1.5 border border-neutral-100 shadow-sm">
            <div className="flex items-center gap-1 mb-0.5">
              <div className={`w-1 h-1 rounded-full ${svc.status} shrink-0`} />
              <span className="text-[8px] font-bold text-black truncate">{svc.name}</span>
            </div>
            <span className="text-[7px] text-neutral-400 font-mono">{svc.latency}</span>
          </div>
        ))}
      </div>

      {/* ── Connection Lines ── */}
      <div className="relative w-full h-3 flex items-center justify-center z-10">
        <div className="absolute left-[20%] right-[20%] h-px border-t border-dashed border-brand-primary/15" />
        <motion.div
          animate={{ x: [30, -30, 30] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="absolute w-1.5 h-1.5 bg-brand-primary/60 rounded-full shadow-[0_0_4px_rgba(232,125,54,0.3)] z-20"
        />
      </div>

      {/* ── Tier 3: Cache + Queue ── */}
      <div className="w-full flex gap-1.5 z-30">
        <div className="flex-1 bg-white rounded-lg px-2.5 py-1.5 border border-neutral-100 shadow-sm flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#f38ba8]/10 flex items-center justify-center shrink-0">
            <Zap className="w-2.5 h-2.5 text-[#f38ba8]" />
          </div>
          <div>
            <span className="text-[8px] font-bold text-black block">Redis Cache</span>
            <span className="text-[7px] text-neutral-400 font-mono">Hit: 97.3%</span>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg px-2.5 py-1.5 border border-neutral-100 shadow-sm flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#89b4fa]/10 flex items-center justify-center shrink-0">
            <TrendingUp className="w-2.5 h-2.5 text-[#89b4fa]" />
          </div>
          <div>
            <span className="text-[8px] font-bold text-black block">Message Queue</span>
            <span className="text-[7px] text-neutral-400 font-mono">12k/min</span>
          </div>
        </div>
      </div>

      {/* ── Connection Lines ── */}
      <div className="relative w-full h-3 flex items-center justify-center z-10">
        <div className="absolute left-[25%] right-[25%] h-px border-t border-dashed border-brand-primary/15" />
        <motion.div
          animate={{ y: [-2, 2, -2], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-1.5 h-1.5 bg-brand-primary/80 rounded-full z-20"
        />
      </div>

      {/* ── Tier 4: Database Cluster ── */}
      <div className="w-full bg-white rounded-xl px-3 py-2 border border-neutral-100 shadow-sm z-30 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-[#cba6f7]/10 flex items-center justify-center shrink-0">
          <Layers className="w-3.5 h-3.5 text-[#cba6f7]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-black">PostgreSQL Cluster</span>
            <span className="text-[7px] font-bold text-[#89b4fa] bg-[#89b4fa]/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Primary</span>
          </div>
          <span className="text-[8px] text-neutral-400 font-medium">2 replicas • Auto-failover • WAL streaming</span>
        </div>
      </div>

    </div>
  </div>
);

const VisualDelivery = () => (
  <div className="flex items-center justify-center w-full h-full relative px-4 py-3">
    <div className="relative w-full max-w-[340px] h-full flex flex-col">

      {/* ── Delivery Receipt Paper ── */}
      <div className="w-full h-full bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col relative">

        {/* Receipt Header */}
        <div className="px-4 pt-3 pb-2 border-b border-dashed border-neutral-200 shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-black block">Delivery Log</span>
              <span className="text-[7px] text-neutral-400 font-medium">Project #2024-0718</span>
            </div>
            <div className="flex items-center gap-1">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#a6e3a1] rounded-full"
              />
              <span className="text-[7px] font-bold text-[#a6e3a1] uppercase tracking-wider">All Clear</span>
            </div>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="flex-1 px-4 py-2 flex flex-col justify-center gap-1.5 overflow-hidden">
          {[
            { name: "UI/UX Design", promised: "Jan 15", actual: "Jan 13", early: true },
            { name: "Frontend Build", promised: "Feb 20", actual: "Feb 20", early: false },
            { name: "API Integration", promised: "Mar 10", actual: "Mar 8", early: true },
            { name: "Testing & QA", promised: "Mar 25", actual: "Mar 23", early: true },
            { name: "Production Deploy", promised: "Apr 1", actual: "Apr 1", early: false },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-2 group/row"
            >
              <div className="w-4 h-4 rounded-full bg-[#a6e3a1]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-2.5 h-2.5 text-[#a6e3a1]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-semibold text-black block truncate">{item.name}</span>
              </div>
              <div className="text-right shrink-0 flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-[6px] text-neutral-300 uppercase tracking-wider leading-none">Due</span>
                  <span className="text-[8px] text-neutral-400 font-mono">{item.promised}</span>
                </div>
                <div className="w-px h-4 bg-neutral-100" />
                <div className="flex flex-col items-end">
                  <span className="text-[6px] text-neutral-300 uppercase tracking-wider leading-none">Actual</span>
                  <span className={`text-[8px] font-mono font-bold ${item.early ? "text-[#a6e3a1]" : "text-black"}`}>{item.actual}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Receipt Footer */}
        <div className="px-4 py-2 border-t border-dashed border-neutral-200 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-brand-primary" />
            <span className="text-[8px] text-neutral-500 font-medium">Avg. <span className="font-bold text-black">1.2 days early</span></span>
          </div>
          <span className="text-[8px] font-bold text-brand-primary font-mono">5/5 On-Time</span>
        </div>

        {/* ── Animated Stamp Seal ── */}
        <motion.div
          initial={{ scale: 2, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: -12 }}
          transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        >
          <div className="w-24 h-24 rounded-full border-[3px] border-[#a6e3a1]/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#a6e3a1]/30 flex flex-col items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#a6e3a1]/50 mb-0.5" />
              <span className="text-[7px] font-black text-[#a6e3a1]/50 uppercase tracking-widest leading-none">On Time</span>
              <span className="text-[5px] font-bold text-[#a6e3a1]/40 uppercase tracking-wider mt-0.5">Verified</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);



// ── Benefits List ───────────────────────────────────────────────────

const benefitsList: BenefitItem[] = [
  {
    title: "Fast Communication",
    description: "Always reachable. I maintain clear, transparent, and prompt updates throughout the project lifecycle.",
    visual: <VisualCommunication />,
  },
  {
    title: "Clean Code",
    description: "Writing readable, well-documented, and modular code that is easy to maintain, debug, and expand.",
    visual: <VisualCode />,
  },
  {
    title: "Scalable Architecture",
    description: "Designing systems prepared for growth, handling increased traffic and database scale effortlessly.",
    visual: <VisualArchitecture />,
  },
  {
    title: "On-Time Delivery",
    description: "Strict adherence to schedules and milestones, delivering high-quality results exactly when promised.",
    visual: <VisualDelivery />,
  },

];

// ── Benefit Card ────────────────────────────────────────────────────

const BenefitCard = ({ benefit }: { benefit: BenefitItem }) => {
  return (
    <div className="flex flex-col shrink-0 group">
      {/* Detailed Visual Graphic Card */}
      <div className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-[50vh] max-h-[360px] bg-white rounded-[24px] border border-neutral-100/60 flex items-center justify-center relative shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:border-brand-primary/20 hover:shadow-md">
        {/* Soft Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white" />
        <div className="absolute inset-0 bg-[#e87d36]/[0.01] group-hover:bg-[#e87d36]/[0.03] transition-colors duration-300" />

        {/* Detailed Visual Scene */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {benefit.visual}
        </div>
      </div>

      {/* Benefit Info Below */}
      <div className="mt-5 px-2">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black tracking-tight group-hover:text-brand-primary transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] leading-relaxed font-normal">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

// ── Main Section ────────────────────────────────────────────────────

export default function WhyWorkWithMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollHeight = benefitsList.length * 85;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section
      ref={containerRef}
      id="why-me"
      className="relative"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col py-12 md:py-16">

        {/* Fixed Header */}
        <div className="max-w-7xl mb-10  mx-auto px-6 md:px-12 text-left w-full shrink-0">
          <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight max-w-2xl">
            Why Work With Me?
          </h2>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="flex-1 flex items-center overflow-hidden w-full min-h-0">
          <motion.div
            style={{ x }}
            className="flex gap-8 sm:gap-12 pl-6 md:pl-12 lg:pl-24 pr-[20vw]"
          >
            {benefitsList.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
