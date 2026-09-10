"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Srinu Invisible Grills home"
      className="group flex shrink-0 items-center gap-2.5"
    >
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/30 bg-white shadow-lg">
          <Image
            src="/brand/srinu-mark.webp"
            alt="Srinu Invisible Grills logo"
            fill
            sizes="(max-width: 640px) 48px, 56px"
            className="object-contain p-1"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col leading-tight" aria-label={siteConfig.name}>
        <span className="text-xl font-black tracking-[0.14em] text-white sm:text-2xl">
          SRINU
        </span>
        <span className="mt-0.5 text-[10px] font-bold tracking-[0.13em] text-[var(--brand-aqua)] sm:text-[11px]">
          INVISIBLE GRILLS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
