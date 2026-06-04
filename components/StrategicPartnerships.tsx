"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const partnerships = [
    {
        name: "RotationMatch",
        description: "Sleek and interactive rotation matching application for digital assets and visual puzzles.",
        image: "/hero-image.png", // fallback placeholder from public folder
        liveUrl: "#",
        testimonial: {
            author: "Alex Rivera",
            role: "Lead Designer, RotationMatch",
            text: "The rotation matching animations are incredibly fluid. It solved our alignment and user onboarding issues perfectly!",
            avatar: "https://i.pravatar.cc/150?u=rotationmatch"
        }
    },
    {
        name: "Boomzo",
        description: "One-stop platform connecting Aligarh users with professional home, salon, and real estate services.",
        image: "/hero-image.png", // fallback placeholder
        liveUrl: "https://www.boomzo.in/",
        testimonial: {
            author: "Sarah Thompson",
            role: "Founder, Boomzo",
            text: "Top Gun Softwares built us an incredible platform that perfectly captures our vibrant brand. Highly recommend!",
            avatar: "https://i.pravatar.cc/150?u=boomzo"
        }
    },
    {
        name: "TopGunz Auto",
        description: "Modern auto shop management platform - Run your entire auto shop from one comprehensive shop OS.",
        image: "/hero-image.png", // fallback placeholder
        liveUrl: "https://www.topgunzauto.com/",
        testimonial: {
            author: "Michael Roberts",
            role: "Owner, TopGunz Auto",
            text: "Top Gun Softwares built us a modern platform that transformed our auto shop. The website is intuitive and our team loves it!",
            avatar: "https://i.pravatar.cc/150?u=topgunzauto"
        }
    },
    {
        name: "Hger",
        description: "Sleek, high-end design portfolio and platform optimized for creative professionals.",
        image: "/hero-image.png", // fallback placeholder
        liveUrl: "#",
        testimonial: {
            author: "Emma Larson",
            role: "Creative Director, Hger",
            text: "Stunning aesthetics and incredible responsiveness. Our visual engagement has doubled since the launch!",
            avatar: "https://i.pravatar.cc/150?u=hger"
        }
    },
    {
        name: "Top Gun Softwares",
        description: "A premium software agency crafting bespoke websites, applications, and digital experiences.",
        image: "/hero-image.png", // fallback placeholder
        liveUrl: "#",
        testimonial: {
            author: "John Doe",
            role: "Managing Director",
            text: "The agency delivered top-tier results in record time. Their animations and design quality are state-of-the-art!",
            avatar: "https://i.pravatar.cc/150?u=topgunsoft"
        }
    },
];

const PartnershipCard = ({ partner, index, progress, total }: { partner: any, index: number, progress: any, total: number }) => {
    // Range calculation: 
    // Each card 'i' is the top card during the range [i/total, (i+1)/total]
    const start = index / total;
    const end = (index + 1) / total;

    // Only the top N-1 cards actually peel away. The last card stays fixed.
    const y = useTransform(progress, [start, end], ["0%", "-110%"]);
    // Start fading only after 60% of the movement is done, and end at 0.2 opacity
    const opacity = useTransform(progress, [start, start + (end - start) * 0.6, end], [1, 1, 0]);
    const scale = useTransform(progress, [start, end], [1, 0.95]);

    return (
        <motion.div
            style={{
                y: index === total - 1 ? 0 : y,
                opacity: index === total - 1 ? 1 : opacity,
                scale: index === total - 1 ? 1 : scale,
                zIndex: total - index, // First card is on top
            }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-1 lg:p-2"
        >
            <div className="w-full max-w-6xl aspect-[3/4] md:aspect-video lg:h-[70vh] bg-white rounded-[24px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
                {/* Left Side: Mockup */}
                <div className="w-full lg:w-[55%] bg-gray-50 flex items-center justify-center h-[38%] md:h-1/2 lg:h-full shrink-0 p-4 rounded-2xl">
                    <div className={`relative group flex items-center justify-center w-full h-full lg:max-h-[500px] overflow-hidden shadow-2xl transition-transform duration-500`}>
                        <img
                            src={partner.image}
                            alt={partner.name}
                            className="w-full h-full object-cover rounded-xl filter contrast-[1.05]"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-[45%] p-6 md:p-10 lg:p-16 flex flex-col justify-between bg-white h-[60%] md:h-1/2 lg:h-full overflow-hidden lg:overflow-visible">
                    <div className="space-y-3 lg:space-y-4">
                        <h3 className={`${inter.className} text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900`}>
                            {partner.name}
                        </h3>
                        <p className={`${inter.className} hidden md:block text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed font-normal`}>
                            {partner.description}
                        </p>
                        <a
                            href={partner.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${inter.className} flex items-center gap-2 text-orange-600 font-bold text-sm md:text-base lg:text-lg hover:gap-3 transition-all duration-300`}
                        >
                            View Live Site <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Testimonial Section */}
                    <div className="mt-4 md:mt-8 lg:mt-16 bg-[#F8F9FB] p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-gray-100 relative">
                        <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-4">
                            <img
                                src={partner.testimonial.avatar}
                                alt={partner.testimonial.author}
                                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                            <div>
                                <h4 className={`${inter.className} font-bold text-gray-900 text-sm md:text-base`}>{partner.testimonial.author}</h4>
                                <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap">{partner.testimonial.role}</span>
                            </div>
                        </div>
                        <p className={`${inter.className} text-xs md:text-sm lg:text-base text-gray-700 italic leading-relaxed line-clamp-3 md:line-clamp-none`}>
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

    const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.08], ["0%", "-50%"]);
    const cardsYOffset = useTransform(scrollYProgress, [0, 0.08], ["10%", "0%"]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${scrollHeight}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
                {/* Header - Stays on top but fades/moves */}
                <motion.div
                    style={{
                        opacity: headerOpacity,
                        y: headerY
                    }}
                    className="relative z-50 pt-16 lg:pt-20 container mx-auto px-6 text-center "
                >
                    <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight leading-tight`}>
                        Recent Strategic Partnerships
                    </h2>

                </motion.div>

                {/* Stacked Cards Layout Wrapper - Absolute and centered in viewport */}
                <motion.div
                    style={{ y: cardsYOffset }}
                    className="absolute inset-0 z-10 w-full max-w-6xl mx-auto flex items-center justify-center pt-20 lg:pt-0"
                >
                    <div className="relative w-full h-[80vh] lg:h-full">
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
