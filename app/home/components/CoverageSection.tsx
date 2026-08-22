import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { serviceLocations } from "@/app/data/locations";
import { getServiceLocationPath } from "@/app/service-areas/serviceAreaData";

const featuredAreaSlugs = [
  "gajuwaka",
  "madhurawada",
  "mvp-colony",
  "seethammadhara",
  "anakapalle",
  "dwarakanagar",
  "pendurti",
  "kurmannapalem",
  "rushikonda",
  "bheemunipatnam",
] as const;

const featuredAreas = featuredAreaSlugs
  .map((slug) => serviceLocations.find((location) => location.slug === slug))
  .filter((location): location is NonNullable<typeof location> => Boolean(location));

export default function CoverageSection() {
  return (
    <section className="site-section px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
            Local service coverage
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Installation support across Visakhapatnam
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[var(--text-secondary)]">
            Choose your locality for area-specific invisible grill and balcony safety
            net information.
          </p>
          <Link
            href="/service-areas"
            className="mt-6 flex w-fit items-center gap-2 font-extrabold text-[var(--brand-ocean)] transition hover:text-[var(--brand-aqua)]"
          >
            View all service areas <ArrowRight size={18} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {featuredAreas.map((area) => (
            <Link
              key={area.slug}
              href={getServiceLocationPath(area.slug)}
              className="site-card flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5"
            >
              <MapPin size={16} className="text-[var(--brand-aqua)]" /> {area.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
