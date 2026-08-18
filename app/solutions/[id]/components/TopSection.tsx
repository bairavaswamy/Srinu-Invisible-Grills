"use client";

import Image from "next/image";

type TopSectionProps = {
  title: string;
  description: string;
  image: string;
};

const TopSection = ({ title, description, image }: TopSectionProps) => {
  return (
    <section className="bg-[#354664] text-[#E78946] py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title Centered on Top */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-[#E78946] bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </h1>

        {/* Image + Content Side by Side on Desktop */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden border border-amber-200/20 shadow-lg order-2 lg:order-1">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              fetchPriority="high"
            />
          </div>

          {/* Description Section */}
          <div className="order-3 lg:order-2 text-amber-50/90 text-base md:text-lg leading-relaxed text-justify backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-lg border border-white/10">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
