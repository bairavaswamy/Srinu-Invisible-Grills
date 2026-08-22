import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { serviceAreaGroups } from "@/app/data/locations";
import {
  areaServices,
  getServiceAreaPath,
  getServiceLocationPath,
} from "@/app/service-areas/serviceAreaData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Invisible Grill & Safety Net Service Areas | Srinu" },
  description:
    "Browse invisible grill and balcony safety net installation areas across Visakhapatnam, with location-specific service details and quotation options.",
  alternates: { canonical: `${siteConfig.url}/service-areas` },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <main className="site-page min-h-screen px-6 pb-20 pt-28">
        <section className="mx-auto max-w-5xl text-center">
          <p className="site-accent text-sm font-bold uppercase tracking-[0.26em]">
            Visakhapatnam coverage
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Invisible Grill and Balcony Safety Net Service Areas
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            Select your locality to view the relevant installation page, service
            details and quotation options for invisible grills or balcony safety nets.
          </p>
        </section>

        <div className="mx-auto mt-14 max-w-7xl space-y-12">
          {serviceAreaGroups.map((group) => (
            <section key={group.id} aria-labelledby={`region-${group.id}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--brand-ocean)]/10 pb-4">
                <div>
                  <p className="site-accent text-xs font-bold uppercase tracking-[0.2em]">
                    Service region
                  </p>
                  <h2 id={`region-${group.id}`} className="mt-1 text-2xl font-extrabold md:text-3xl">
                    {group.label}
                  </h2>
                </div>
                <span className="rounded-full bg-[var(--brand-aqua)]/10 px-3 py-1 text-sm font-bold text-[var(--brand-ocean)]">
                  {group.locations.length} locations
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.locations.map((location) => (
                  <article key={location.slug} className="site-card rounded-2xl p-6">
                    <Link
                      href={getServiceLocationPath(location.slug)}
                      className="group flex items-center justify-between gap-3"
                    >
                      <h3 className="text-xl font-extrabold transition group-hover:text-[var(--brand-ocean)]">
                        {location.label}
                      </h3>
                      <span className="text-[var(--brand-aqua)] transition group-hover:translate-x-1">→</span>
                    </Link>
                    <ul className="mt-4 space-y-3">
                      {areaServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={getServiceAreaPath(location.slug, service.slug)}
                            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--brand-ocean)]"
                          >
                            {service.name} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <StickyContactIcons />
      <Footer />
    </>
  );
}
