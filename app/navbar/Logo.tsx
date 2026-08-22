"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Srinu Invisible Grills home"
      className="group flex shrink-0 items-center gap-2.5"
    >
      <div className="relative h-11 w-11 sm:h-12 sm:w-12">
        <div className="absolute inset-0 rounded-full bg-[var(--brand-aqua)]/25 blur-md transition group-hover:bg-[var(--brand-aqua)]/40" />
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/30 bg-white/5 shadow-lg">
          <Image
            src="/srinulogo.webp"
            alt="Srinu Invisible Grills logo"
            fill
            sizes="48px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-black tracking-[0.05em] text-[var(--brand-copper)] sm:text-lg">
          SRINU INVISIBLE
        </span>
        <span className="mt-0.5 text-[11px] font-bold tracking-[0.22em] text-[var(--brand-aqua)] sm:text-xs">
          GRILLS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
