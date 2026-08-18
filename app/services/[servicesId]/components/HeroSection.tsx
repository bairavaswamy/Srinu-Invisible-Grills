import Image from "next/image";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
};

const HeroSection = ({ title, description, image }: HeroSectionProps) => {
  return (
    <section className="relative top-14 h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="object-cover brightness-75"
      />

      {/* Overlay gradient for premium tone */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-[#E78946] bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
