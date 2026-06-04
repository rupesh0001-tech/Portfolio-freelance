import React from "react";
import Image from "next/image";
import Button from "./Button";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  heading = "Increase Your Customers Loyalty and Satisfaction",
  subheading = "We help businesses like yours earn more customers, standout from competitors, make more money",
  ctaText = "Get Started",
  ctaHref = "#",
  imageSrc = "/hero-image.png",
  imageAlt = "DesignAGENCY Success Story",
}: HeroProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-left z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black leading-[1.12] tracking-tight max-w-xl">
            {heading}
          </h1>
          
          <p className="text-neutral-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl">
            {subheading}
          </p>
          
          <div className="pt-2 mb-4">
            <Button variant="cta" href={ctaHref}>
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative z-0">
          <div className="w-full max-w-[580px] lg:max-w-none transition-transform duration-500 hover:scale-[1.02] relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={680}
              height={540}
              priority
              className="w-full h-auto object-contain"
            />
            {/* Rupesh Arrow */}
            <div className="absolute -top-12 right-80 md:-top-30 md:-right-45 w-32 sm:w-200 md:w-200 z-10 pointer-events-none select-none animate-float">
              <Image
                src="/Rupesh (1) (1).png"
                alt="Rupesh (Me)"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
