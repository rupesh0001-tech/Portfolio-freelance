import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#" className={`flex items-center text-brand-primary font-semibold text-2xl space-x-0.5 group ${className}`}>
       Rupesh
    </a>
  );
}
