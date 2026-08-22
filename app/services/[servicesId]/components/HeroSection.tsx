import Image from "next/image";
import { siteConfig } from "@/lib/site";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const HeroSection = ({
  title,
  description,
  image,
  imageAlt,
}: HeroSectionProps) => (
  <section className="site-dark-hero relative isolate flex min-h-[62vh] items-center overflow-hidden">
    <Image
      src={image}
      alt={imageAlt}
      fill
      sizes="100vw"
      priority
      fetchPriority="high"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-midnight)]/95 via-[var(--brand-ocean)]/85 to-[var(--brand-ocean)]/55" />
    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--brand-aqua)]">
        Measured • Supplied • Professionally installed
      </p>
      <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-light-muted)]">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`tel:${siteConfig.phoneInternational}`}
          className="site-cta rounded-full px-7 py-3 font-bold transition"
        >
          Call for a free quote
        </a>
        <a
          href="#service-details"
          className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white transition hover:border-white"
        >
          View service details
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
