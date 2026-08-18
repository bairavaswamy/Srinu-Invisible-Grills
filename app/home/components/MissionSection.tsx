const MissionSection = () => {
  return (
    <section className="relative py-16 px-6 text-center shadow-xl overflow-hidden">
      {/* Decorative amber glow overlay */}
      <div className="absolute inset-0 bg-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text 
          bg-[#E78946]
          bg-[length:200%_auto] animate-shimmer drop-shadow-lg"
        >
          Our Mission
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-amber-50/90">
          At <span className="font-semibold text-[#E78946]">Srinu Invisible Grills</span>, our mission is to
          build <span className="text-[#E78946] font-medium">safe, hygienic, and modern spaces</span> 
          for families, children, and pets. With our innovative safety solutions, we blend 
          <span className="text-[#E78946] font-semibold"> protection</span> and 
          <span className="text-[#E78946] font-semibold"> elegance</span> seamlessly.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
