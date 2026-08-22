import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import { serviceAreaRegions, serviceLocations } from "@/app/data/locations";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import {
  areaServices,
  getServiceAreaPath,
  getServiceLocation,
  getServiceLocationPath,
} from "@/app/service-areas/serviceAreaData";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ location: string }>;
};

export const generateStaticParams = () =>
  serviceLocations.map((location) => ({ location: location.slug }));

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getServiceLocation(locationSlug);

  if (!location) {
    return {
      title: "Service Area Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${siteConfig.url}${getServiceLocationPath(location.slug)}`;
  const title = `Invisible Grills & Safety Nets in ${location.label} | Srinu`;
  const description = `Invisible grill and balcony safety net installation in ${location.label}. Explore measured fitting options, durable materials and quotation details from Srinu Invisible Grills.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: `${siteConfig.url}/images/image-slider-11.webp`,
          width: 1200,
          height: 630,
          alt: `Safety installation services in ${location.label}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/images/image-slider-11.webp`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocationServicesPage({ params }: PageProps) {
  const { location: locationSlug } = await params;
  const location = getServiceLocation(locationSlug);
  if (!location) notFound();

  const region = serviceAreaRegions.find((item) => item.id === location.region);
  const nearbyLocations = serviceLocations
    .filter(
      (item) => item.region === location.region && item.slug !== location.slug,
    )
    .slice(0, 6);
  const canonicalUrl = `${siteConfig.url}${getServiceLocationPath(location.slug)}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Safety Installation Services in ${location.label}`,
      description: `Invisible grill and balcony safety net installation options in ${location.label}.`,
      url: canonicalUrl,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: areaServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${service.name} in ${location.label}`,
          url: `${siteConfig.url}${getServiceAreaPath(location.slug, service.slug)}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Areas",
          item: `${siteConfig.url}/service-areas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.label,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="site-page min-h-screen pb-20 pt-[76px]">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-6 py-5 text-sm text-[var(--text-secondary)]"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/service-areas">Service Areas</Link></li>
            <li aria-hidden="true">/</li>
            <li className="site-accent" aria-current="page">{location.label}</li>
          </ol>
        </nav>

        <section className="site-dark-hero relative overflow-hidden px-6 py-16 md:py-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-aqua)]/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[var(--brand-ice)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-copper)]">
              <MapPin size={18} /> {region?.label ?? "Service Area"}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Invisible Grills and Safety Nets in {location.label}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">
              Explore professional installation options for balconies, windows and
              residential openings in {location.label}. Every quotation is based on
              site measurements, fixing conditions and the selected material.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="site-cta flex items-center gap-2 rounded-full px-7 py-3 font-extrabold transition"
              >
                <PhoneCall size={18} /> Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 bg-white/[0.08] px-7 py-3 font-bold text-white transition hover:bg-white/[0.14]"
              >
                Request a free quote
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="site-accent text-sm font-bold uppercase tracking-[0.2em]">
              Services available
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Choose an installation service in {location.label}
            </h2>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {areaServices.map((service) => (
              <article key={service.slug} className="site-card group overflow-hidden rounded-3xl">
                <Link href={getServiceAreaPath(location.slug, service.slug)} className="block h-full">
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.imageAlt} in ${location.label}`}
                      fill
                      sizes="(max-width: 768px) 92vw, 46vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-midnight)]/75 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold">
                      {service.name} in {location.label}
                    </h3>
                    <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                      {service.summary}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.benefits.slice(0, 4).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--brand-aqua)]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 flex items-center gap-2 font-extrabold text-[var(--brand-ocean)]">
                      View installation details <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {nearbyLocations.length > 0 && (
          <section className="site-section px-6 py-14">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-extrabold">Other areas in {region?.label}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={getServiceLocationPath(nearby.slug)}
                    className="site-card flex items-center gap-2 rounded-full px-5 py-3 font-bold transition hover:-translate-y-0.5"
                  >
                    <MapPin size={16} className="text-[var(--brand-aqua)]" />
                    {nearby.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <StickyContactIcons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
