"use client";

import React from "react";

type Testimonial = {
  comment: string;
  author: string;
};

const TestimonialCard = ({ comment, author }: Testimonial) => (
  <blockquote className="bg-[#26395A] text-amber-100 p-6 rounded-2xl shadow-lg border border-amber-400/20 min-w-[320px] max-w-[360px] flex-shrink-0 mx-3 relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1">
    
    {/* Soft overlay */}
    <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <p className="italic text-amber-100 relative z-10">
      &ldquo;{comment}&rdquo;
    </p>

    <footer className="mt-4 font-semibold text-amber-300 relative z-10">
      – {author}
    </footer>
  </blockquote>
);

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className="relative py-16 px-6 md:px-12 overflow-hidden">
      
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#354664] pointer-events-none" />

      <h2
        className="relative text-4xl font-bold text-center mb-10 text-[#E78946]"
      >
        What Our Clients Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll-left">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
