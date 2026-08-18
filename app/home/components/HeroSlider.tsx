"use client";

import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import React from "react";

type SlideData = {
  bg: string;
  title: string;
  subtitle: string;
};

interface HeroSliderProps {
  slides: SlideData[];
}

// Arrow Buttons — dark teal with soft gold accent
const Arrow = ({
  direction,
  onClick,
}: {
  direction: "next" | "prev";
  onClick?: () => void;
}) => (
  <button
    aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    onClick={onClick}
    className={`absolute top-1/2 z-20 
      ${direction === "next" ? "right-6" : "left-6"} 
      -translate-y-1/2 bg-[#354664] backdrop-blur-md border border-[#E78946]
      p-3 rounded-full shadow-lg hover:bg-[#E78946]  hover:scale-110 transition`}
  >
    {direction === "next" ? (
      <FaChevronRight className="w-6 h-6 text-[#E78946] hover:text-white" />
    ) : (
      <FaChevronLeft className="w-6 h-6 text-[#E78946] hover:text-white" />
    )}
  </button>
);

// CTA Button — gold gradient on dark teal base
const CTAButton = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="mt-6 inline-block px-8 py-3 rounded-full text-white font-bold
      bg-gradient-to-r from-[#e78946]  to-amber-500 shadow-md
      hover:from-[#e78936] hover:to-amber-400 hover:shadow-amber-300/60 hover:scale-105 transition-transform"
  >
    {text}
  </Link>
);

// Hero Slide — elegant overlay with gold text
const HeroSlide = ({
  bg,
  title,
  subtitle,
  isFirst,
}: SlideData & { isFirst: boolean }) => (
  <div className="relative w-full h-[85vh] flex items-center justify-center text-center">
    <Image
      src={bg}
      alt={title}
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      loading={isFirst ? "eager" : "lazy"}
      priority={isFirst}
      fetchPriority={isFirst ? "high" : "auto"}
      sizes="100vw"
    />
    {/* Elegant dark teal overlay for depth */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#e78946] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-[#e78946] drop-shadow-[0_1px_5px_rgba(0,0,0,0.4)]">
        {subtitle}
      </p>
      <CTAButton href="tel:+917995792953" text="Call Now" />
    </div>
  </div>
);

const HeroSlider = ({ slides = [] }: HeroSliderProps) => {
  const settings = React.useMemo(
    () => ({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <Arrow direction="next" />,
      prevArrow: <Arrow direction="prev" />,
    }),
    []
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#022c2c] via-[#034545] to-[#046666]">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <HeroSlide key={i} {...slide} isFirst={i === 0} />
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
