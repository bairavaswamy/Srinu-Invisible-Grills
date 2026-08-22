import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SafetyCard, { type HomeServiceCard } from "./cards";

export default function SafetySolutions({ cards }: { cards: HomeServiceCard[] }) {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
              Core installation services
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Practical protection for the spaces you use every day
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]">
              Compare the most requested safety solutions for balconies, windows,
              homes and commercial properties in Visakhapatnam.
            </p>
          </div>
          <Link
            href="/services"
            className="flex w-fit items-center gap-2 font-extrabold text-[var(--brand-ocean)] transition hover:text-[var(--brand-aqua)]"
          >
            Browse all services <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <SafetyCard key={card.href} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
