import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import {
  getSecondaryService,
  secondaryServiceSlugs,
} from "@/app/data/servicesData";
import { primaryServices } from "@/app/servicesData/servicesData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Safety Nets, Invisible Grills & Cloth Hangers in Vizag | Srinu",
  },
  description:
    "Explore safety net, invisible grill, pigeon control and cloth hanger installation services for homes, apartments and businesses in Visakhapatnam.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/services`,
    title: "Professional Installation Services in Visakhapatnam",
    description:
      "Compare safety nets, invisible grills, bird control and cloth hanger installation services in Visakhapatnam.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/image-slider-11.webp`,
        width: 1200,
        height: 630,
        alt: "Srinu Invisible Grills safety installation services",
      },
    ],
  },
};

const ServicesPage = () => {
  const secondaryServices = secondaryServiceSlugs.map((slug) => ({
    slug,
    service: getSecondaryService(slug)!,
  }));
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Srinu Invisible Grills Services",
    itemListElement: [
      ...primaryServices.map((service) => ({
        name: service.navLabel,
        slug: service.slug,
      })),
      ...secondaryServices.map(({ slug, service }) => ({
        name: service.title,
        slug,
      })),
    ].map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: `${siteConfig.url}/services/${service.slug}`,
      })),
  };

  return (
    <>
      <Navbar />
      <main className="site-page min-h-screen px-6 pb-20 pt-28">
        <section className="mx-auto max-w-7xl text-center">
          <p className="site-accent text-sm font-bold uppercase tracking-[0.28em]">
            Professional installation in Visakhapatnam
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Safety Nets, Invisible Grills and Cloth Hangers in Visakhapatnam
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            Compare our core services, open a detailed guide and request a
            measurement-based quotation for your property.
          </p>
        </section>

        <section
          aria-label="Installation services"
          className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {primaryServices.map((service) => (
            <article
              key={service.slug}
              className="site-card group overflow-hidden rounded-3xl transition hover:-translate-y-1"
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-midnight)]/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-extrabold">
                    {service.navLabel}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex font-bold text-[var(--brand-ocean)]">
                    View service details →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="max-w-3xl">
            <p className="site-accent text-sm font-bold uppercase tracking-[0.24em]">
              More installation options
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Browse every specialist service
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              These service pages cover additional bird-control, residential,
              commercial and invisible-grill applications in Visakhapatnam.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryServices.map(({ slug, service }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="site-card rounded-2xl p-5 transition hover:-translate-y-1"
              >
                <h3 className="font-extrabold">{service.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <StickyContactIcons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};

export default ServicesPage;
