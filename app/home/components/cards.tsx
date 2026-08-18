"use client";

import { BookOpen, Phone } from "lucide-react";
import Image from "next/image";

interface SafetyCardProps {
  image: string;
  title: string;
  description: string;
  readMoreLink?: string;
  callNumber?: string;
}

const SafetyCard = ({
  image,
  title,
  description,
  readMoreLink = "",
  callNumber = "",
}: SafetyCardProps) => {
  return (
    <div
      className="group relative bg-[#354664]
      rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
      transform border border-[#26395A] hover:border-[#26395A]"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />

        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-70">
        {/* Title & Description */}
        <div>
          <h2 className="text-lg font-extrabold text-[#E78946] bg-clip-text tracking-wide drop-shadow-md">
            {title}
          </h2>
          <p className="mt-2 text-white text-sm line-clamp-5 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3 mb-7">
          {/* Read More */}
          <a
            href={readMoreLink}
            aria-label={`Read More about ${title}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-gradient-to-r from-[#E78946] to-[#E78946] 
            text-white text-sm font-semibold shadow-md hover:shadow-orange-500/40 
            hover:scale-105 transition-all duration-300"
          >
            <BookOpen className="size-4" />
            Read More
            <span className="sr-only">
                Read more about {title}
            </span>
                    </a>

          {/* Call Now */}
                      <a
              href={callNumber ? `tel:${callNumber}` : "#"}
              aria-label="Call us now"
              className="flex items-center gap-2 px-4 py-2 rounded-full 
              bg-green-700
              text-white text-sm font-bold shadow-md 
              hover:bg-green-800 hover:shadow-green-900/50
              hover:scale-105 transition-all duration-300"
            >
              <Phone className="size-4" />
              <span>Call Now</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default SafetyCard;
