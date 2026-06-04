"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partnerships = [
    {
        name: "RotationMatch",
        description: "Interactive rotation matching tool for aligning digital puzzle assets.",
        image: "/hero-image.png",
        liveUrl: "#",
        testimonial: {
            author: "Alex Rivera",
            role: "Lead Designer, RotationMatch",
            text: "Incredibly fluid animations. Solved our alignment and onboarding issues perfectly!",
            avatar: "https://i.pravatar.cc/150?u=rotationmatch"
        }
    },
    {
        name: "Boomzo",
        description: "Connecting users with Aligarh's professional home, salon, and real estate services.",
        image: "/hero-image.png",
        liveUrl: "https://www.boomzo.in/",
        testimonial: {
            author: "Sarah Thompson",
            role: "Founder, Boomzo",
            text: "Top Gun Softwares built an incredible platform that perfectly captures our vibrant brand.",
            avatar: "https://i.pravatar.cc/150?u=boomzo"
        }
    },
    {
        name: "TopGunz Auto",
        description: "Modern shop OS - Run your entire auto business from one comprehensive platform.",
        image: "/hero-image.png",
        liveUrl: "https://www.topgunzauto.com/",
        testimonial: {
            author: "Michael Roberts",
            role: "Owner, TopGunz Auto",
            text: "Built us a modern platform that transformed our shop. Intuitive and our team loves it!",
            avatar: "https://i.pravatar.cc/150?u=topgunzauto"
        }
    },
    {
        name: "Hger",
        description: "High-end design portfolio and showcase platform optimized for creative professionals.",
        image: "/hero-image.png",
        liveUrl: "#",
        testimonial: {
            author: "Emma Larson",
            role: "Creative Director, Hger",
            text: "Stunning aesthetics and responsiveness. Our visual engagement has doubled!",
            avatar: "https://i.pravatar.cc/150?u=hger"
        }
    },
    {
        name: "Top Gun Softwares",
        description: "A premium software agency crafting bespoke websites and high-performance digital experiences.",
        image: "/hero-image.png",
        liveUrl: "#",
        testimonial: {
            author: "John Doe",
            role: "Managing Director",
            text: "Top-tier results in record time. Excellent animations and design quality!",
            avatar: "https://i.pravatar.cc/150?u=topgunsoft"
        }
    },
];

const PartnershipCard = ({ partner, index, progress, total }: { partner: any, index: number, progress: any, total: number }) => {
    // Range calculation with a 20% scroll buffer at the start:
    const startBuffer = 0.20;
    const activeRange = 1 - startBuffer;
    const start = startBuffer + (index / total) * activeRange;
    const end = startBuffer + ((index + 1) / total) * activeRange;

    // Only the top N-1 cards actually peel away. The last card stays fixed.
    const y = useTransform(progress, [start, end], ["0%", "-110%"]);
    // Make the opacity drop to 0 only when it reaches the very top (last 5% of its peel range)
    const opacity = useTransform(progress, [start, start + (end - start) * 0.95, end], [1, 1, 0]);
    const scale = useTransform(progress, [start, end], [1, 0.95]);

    return (
        <motion.div
            style={{
                y: index === total - 1 ? 0 : y,
                opacity: index === total - 1 ? 1 : opacity,
                scale: index === total - 1 ? 1 : scale,
                zIndex: total - index, // First card is on top
            }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8"
        >
            <div className="w-full max-w-5xl aspect-[4/5] md:aspect-[1.5/1] lg:h-[65vh] bg-white rounded-[24px] shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-neutral-100 overflow-hidden flex flex-col md:flex-row">
                
                {/* Left Side: Mockup Image */}
                <div className="w-full md:w-[50%] bg-neutral-50 flex items-center justify-center h-[35%] md:h-full shrink-0 p-6 md:p-8 lg:p-10">
                    <div className="relative group w-full h-full overflow-hidden shadow-lg transition-transform duration-500 rounded-xl">
                        <img
                            src={partner.image}
                            alt={partner.name}
                            className="w-full h-full object-cover rounded-xl filter contrast-[1.03]"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[50%] p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-white h-[65%] md:h-full overflow-hidden">
                    <div className="space-y-2.5 md:space-y-4">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black tracking-tight">
                            {partner.name}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                            {partner.description}
                        </p>
                        <a
                            href={partner.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-brand-primary font-semibold text-xs sm:text-sm md:text-base hover:text-[#cf6721] hover:gap-2.5 transition-all duration-300"
                        >
                            View Live Site <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>

                    {/* Testimonial Section */}
                    <div className="mt-4 lg:mt-6 bg-neutral-50 p-4 md:p-5 rounded-2xl border border-neutral-100 relative">
                        <div className="flex items-center gap-3 mb-2.5">
                            <img
                                src={partner.testimonial.avatar}
                                alt={partner.testimonial.author}
                                className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-white shadow-sm"
                            />
                            <div>
                                <h4 className="font-semibold text-black text-xs sm:text-sm">{partner.testimonial.author}</h4>
                                <span className="text-neutral-400 text-[10px] sm:text-xs whitespace-nowrap">{partner.testimonial.role}</span>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                            "{partner.testimonial.text}"
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

const StrategicPartnerships = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Tall container to allow scroll space for all cards
    const scrollHeight = partnerships.length * 100;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-50%"]);
    const cardsYOffset = useTransform(scrollYProgress, [0, 0.20], ["20%", "0%"]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${scrollHeight}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
                {/* Header - Stays on top but fades/moves */}
                <motion.div
                    style={{
                        opacity: headerOpacity,
                        y: headerY
                    }}
                    className="relative z-50 pt-16 lg:pt-20 max-w-7xl mx-auto px-6 md:px-12 text-left"
                >
                    <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3">
                        Our Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight max-w-2xl">
                        Recent Strategic Partnerships
                    </h2>
                </motion.div>

                {/* Stacked Cards Layout Wrapper - Absolute and centered in remaining viewport */}
                <motion.div
                    style={{ y: cardsYOffset }}
                    className="absolute inset-x-0 bottom-0 top-[180px] sm:top-[200px] md:top-[240px] lg:top-[280px] z-10 w-full max-w-6xl mx-auto flex items-center justify-center p-4"
                >
                    <div className="relative w-full h-full">
                        {partnerships.map((partner, index) => (
                            <PartnershipCard
                                key={index}
                                partner={partner}
                                index={index}
                                progress={scrollYProgress}
                                total={partnerships.length}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategicPartnerships;
