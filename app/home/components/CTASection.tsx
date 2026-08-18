import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative bg-transparent py-16 px-6 text-center shadow-xl overflow-hidden">
      {/* subtle golden glow background */}
      <div className="absolute inset-0  pointer-events-none" />

      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-[#E78946] text-transparent bg-clip-text drop-shadow-md">
        Ready to Protect Your Home?
      </h2>

      <p className="max-w-xl mx-auto text-gray-300 mb-8 text-sm md:text-base">
        Srinu Invisible Grills ensures durable, premium-quality protection for your home and family.  
        Safety you can trust, quality you can see.
      </p>

      <Link
        href="/contactUs"
        className="relative inline-flex items-center justify-center px-8 py-3 text-emerald-950 font-bold rounded-full 
        bg-[#E78946] shadow-lg
        hover:scale-105 hover:shadow-orange-700/50 transition-all duration-300 overflow-hidden"
      >
        {/* shimmering gold sweep */}
        <span className="absolute inset-0 bg-[#E78946]
          opacity-0 hover:opacity-100 translate-x-[-150%] hover:translate-x-[150%] 
          transition-all duration-[1.2s] ease-in-out" />
        <span className="relative text-white font-bold z-10">Contact Us Today</span>
      </Link>
    </section>
  );
};

export default CTASection;
