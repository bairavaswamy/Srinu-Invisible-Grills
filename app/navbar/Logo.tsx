"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group transition-all duration-300 hover:scale-[1.03]"
    >
      {/* Glowing Animated Logo */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        {/* Glowing ring behind logo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#354664] to-[#26395A] opacity-70 blur-md animate-pulse-glow group-hover:scale-105 transition-transform duration-500"></div>

        {/* Logo Image */}
        <div className="relative w-full h-full rounded-full border-2 border-white/40 shadow-lg overflow-hidden">
          <Image
            src="/srinulogo.webp" // replace with your actual logo path
            alt="Servani Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg sm:text-xl font-extrabold tracking-wide text-[#E78946] bg-clip-text drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          SRINU INVISIBLE
        </span>
        <span className="text-sm sm:text-base font-semibold text-[#E78946] tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          GRILLS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
