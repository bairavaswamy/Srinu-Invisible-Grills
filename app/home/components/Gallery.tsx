"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMemo } from "react";

interface GalleryProps {
  images: string[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute top-1/2 right-[-25px] z-20 -translate-y-1/2 bg-[#E78946] hover:bg-[#E78946]/60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-110"
  >
    <FaChevronRight className="w-5 h-5" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className="absolute top-1/2 left-[-25px] z-20 -translate-y-1/2 bg-[#E78946] hover:bg-[#E78946]/60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-110"
  >
    <FaChevronLeft className="w-5 h-5" />
  </button>
);

const Gallery = ({ images }: GalleryProps) => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 2500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots: React.ReactNode) => (
        <div>
          <ul className="none">{dots}</ul>
        </div>
      ),
      customPaging: () => (
        <div className="none" />
      ),
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <section className="py-16 bg-transparent shadow-xl px-6 md:px-12 w-full overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text 
          bg-[#E78946] 
          bg-[length:200%_auto] animate-shimmer drop-shadow-lg text-center">
        Our Gallery
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-3">
              <div className="relative h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden border border-[#E78946] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,150,136,0.25)] transition-all duration-300">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
