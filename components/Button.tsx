import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "outline" | "cta";
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  onClick,
  className = "",
  children,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg text-center cursor-pointer select-none text-sm inline-block";
  
  const variants = {
    primary: "bg-brand-primary text-white px-6 py-2.5 hover:bg-[#cf6721]",
    outline: "border-2 border-brand-primary text-brand-primary px-6 py-2.5 hover:bg-brand-primary hover:text-white",
    cta: "bg-brand-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl text-base md:text-lg hover:bg-[#cf6721]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
