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

const PartnershipCard = ({ partner }: { partner: any }) => {
    return (
        <div className="flex flex-col shrink-0">
            {/* Card Mockup Image */}
            <div className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[580px] aspect-[16/10] bg-[#f8faf9] rounded-[24px] overflow-hidden shadow-sm border border-neutral-100/60 relative group cursor-pointer">
                <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 rounded-[24px] filter contrast-[1.02]"
                />
            </div>
            
            {/* Card Info Below */}
            <div className="mt-5 px-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black tracking-tight">
                    {partner.name}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 max-w-[260px] sm:max-w-[360px] md:max-w-[460px] leading-relaxed font-normal">
                    {partner.description}
                </p>
                <a
                    href={partner.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-primary font-semibold text-xs sm:text-sm mt-2.5 hover:text-[#cf6721] hover:gap-2.5 transition-all duration-300"
                >
                    View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

const StrategicPartnerships = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollHeight = partnerships.length * 90; // Scroll space for smooth transition

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Translate horizontal track leftwards based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${scrollHeight}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col justify-between py-12 md:py-16">
                
                {/* Fixed Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-left w-full shrink-0">
                    <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3">
                        Projects
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight max-w-2xl">
                        Selected Projects & Works
                    </h2>
                </div>

                {/* Horizontal Scroll Track Wrapper */}
                <div className="flex-1 flex items-center overflow-hidden w-full">
                    <motion.div
                        style={{ x }}
                        className="flex gap-8 sm:gap-12 pl-6 md:pl-12 lg:pl-24 pr-[20vw]"
                    >
                        {partnerships.map((partner, index) => (
                            <PartnershipCard
                                key={index}
                                partner={partner}
                            />
                        ))}
                    </motion.div>
                </div>
                
                {/* Bottom Spacer to center visual balance */}
                <div className="h-6 md:h-12 shrink-0" />
            </div>
        </section>
    );
};

export default StrategicPartnerships;
