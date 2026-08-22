"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";

export type HomeSlide = {
  bg: string;
  title: string;
  mobileTitle?: string;
  subtitle: string;
  href: string;
  label: string;
  imagePosition?: string;
};

type HeroSliderProps = {
  slides: HomeSlide[];
};

function HeroArrow({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick?: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${direction === "previous" ? "Previous" : "Next"} featured service`}
      className={`absolute top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[var(--brand-midnight)]/65 text-white shadow-lg backdrop-blur-md transition hover:bg-[var(--brand-ocean)] md:flex ${
        direction === "previous" ? "left-5 lg:left-8" : "right-5 lg:right-8"
      }`}
    >
      <Icon size={24} />
    </button>
  );
}

function HeroSlide({
  bg,
  title,
  mobileTitle,
  subtitle,
  href,
  label,
  imagePosition = "center",
  priority,
}: HomeSlide & { priority: boolean }) {
  return (
    <article className="relative min-h-[34rem] overflow-hidden md:min-h-[42rem]">
      <Image
        src={bg}
        alt={`${label} installed by Srinu Invisible Grills`}
        fill
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        draggable={false}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-midnight)]/80 via-[var(--brand-midnight)]/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--brand-midnight)]/45 to-transparent" />

      <div className="relative mx-auto flex min-h-[34rem] w-full min-w-0 max-w-7xl items-center px-5 pb-16 pt-12 sm:px-8 md:min-h-[42rem] lg:px-10">
        <div className="w-full min-w-0 max-w-2xl rounded-3xl border border-white/15 bg-[var(--glass-dark)] p-5 shadow-[var(--shadow-dark)] backdrop-blur-md sm:p-8 md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--brand-aqua)] sm:text-sm">
            Measured • Supplied • Installed
          </p>
          <h2 className="mt-4 min-w-0 text-[2rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {mobileTitle ? (
              <>
                <span className="sm:hidden">{mobileTitle}</span>
                <span className="hidden sm:inline">{title}</span>
              </>
            ) : title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-light-muted)] sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={href}
              className="site-cta flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-extrabold transition"
            >
              Explore {label} <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3 font-bold text-white transition hover:bg-white/[0.14]"
            >
              <PhoneCall size={18} /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <HeroArrow direction="previous" />,
    nextArrow: <HeroArrow direction="next" />,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    touchMove: true,
    touchThreshold: 8,
    accessibility: true,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <section
      className="home-hero-slider site-dark-hero relative w-full min-w-0 max-w-full overflow-hidden"
      aria-label="Featured installation services. Swipe to view more."
    >
      <h1 className="sr-only">Invisible Grills and Safety Nets in Visakhapatnam</h1>
      <div className="w-full min-w-0 overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <HeroSlide key={slide.href} {...slide} priority={index === 0} />
          ))}
        </Slider>
      </div>
      <p className="pointer-events-none absolute bottom-5 right-5 z-20 hidden text-xs font-bold uppercase tracking-[0.16em] text-white/65 sm:block">
        Swipe to explore
      </p>
    </section>
  );
}
