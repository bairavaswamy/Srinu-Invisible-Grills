"use client";
import React from "react";
import HeroSlider from "./HeroSlider";

type SlideData = {
  bg: string;
  title: string;
  subtitle: string;
};

interface HeroSectionProps {
  desktopSlides: SlideData[];
  mobileSlides: SlideData[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ desktopSlides, mobileSlides }) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#ffff] via-[#ffff] to-[#ffff]">
      {/* Desktop Slider */}
      <div className="hidden md:block">
        <HeroSlider slides={desktopSlides} />
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <HeroSlider slides={mobileSlides} />
      </div>
    </div>
  );
};

export default HeroSection;
