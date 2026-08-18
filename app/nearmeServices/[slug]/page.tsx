
import Image from "next/image";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  nearMeBalconyServices,
  nearMeInvisibleServices,
} from "@/app/navbar/constants";

/* =====================================================
   FORCE STATIC GENERATION
===================================================== */

export const dynamic = "force-static";

/* =====================================================
   MERGE SERVICES (STATIC ARRAYS ONLY)
===================================================== */

const allServices = [
  ...nearMeBalconyServices,
  ...nearMeInvisibleServices,
];

/* =====================================================
   SAFE SLUG EXTRACTOR
===================================================== */

function getSlugFromHref(href: string) {
  if (!href) return null;
  const parts = href.split("/").filter(Boolean);
  return parts.length ? parts[parts.length - 1] : null;
}

/* =====================================================
   STATIC PARAMS
===================================================== */

export function generateStaticParams() {
  return allServices
    .map((service) => {
      const slug = getSlugFromHref(service.href);
      if (!slug) return null;
      return { slug };
    })
    .filter(Boolean) as { slug: string }[];
}

/* =====================================================
   TYPES (Stable Next.js)
===================================================== */

type PageProps = {
  params: {
    slug: string;
  };
};

/* =====================================================
   HELPERS
===================================================== */

function extractLocation(slug: string) {
  return slug
    .replace("balcony-safety-nets-near-me-", "")
    .replace("invisible-grills-near-me-", "");
}

function formatLocation(location: string) {
  return location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getServiceType(slug: string) {
  return slug.includes("invisible-grills")
    ? "Invisible Grills"
    : "Balcony Safety Nets";
}

/* =====================================================
   METADATA (STATIC SAFE)
===================================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;

  const service = allServices.find((item) => {
    const itemSlug = getSlugFromHref(item.href);
    return itemSlug === slug;
  });

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const serviceType = getServiceType(slug);
  const location = formatLocation(extractLocation(slug));
  const url = `https://srinuinvisiblegrills.com/nearmeServices/${slug}`;

  return {
    title: `${serviceType} in ${location} | Srinu Invisible Nets`,
    description: `Near me ${serviceType.toLowerCase()} in ${location}, Visakhapatnam. Affordable pricing and expert service.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${serviceType} in ${location}`,
      description: `Expert near me ${serviceType.toLowerCase()} in ${location}, Vizag.`,
      url,
      type: "website",
    },
  };
}

/* =====================================================
   PAGE (STATIC SAFE)
===================================================== */

export default function Page({ params }: PageProps) {
  const { slug } = params;

  const service = allServices.find((item) => {
    const itemSlug = getSlugFromHref(item.href);
    return itemSlug === slug;
  });

  if (!service) notFound();

  const serviceType = getServiceType(slug);
  const location = formatLocation(extractLocation(slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Srinu Invisible Nets",
    url: `https://srinuinvisiblegrills.com/nearmeServices/${slug}`,
    telephone: "+919490701200",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "India",
    },
    areaServed: location,
    makesOffer: {
      "@type": "Service",
      name: `Near Me ${serviceType} in ${location}`,
    },
  };

  const servicesList =
    serviceType === "Invisible Grills"
      ? [
          "Balcony Invisible Grill Installation",
          "Window Invisible Grills",
          "High-Rise Stainless Steel Cables",
          "Child & Pet Safety Protection",
          "Rust-Proof & Weather Resistant Fittings",
        ]
      : [
          "Balcony Safety Nets Installation",
          "Anti Bird Pigeon Nets",
          "Terrace Safety Nets",
          "Window Child Safety Nets",
          "AC Outdoor Bird Protection Nets",
        ];

  const benefitsList = [
    "10+ Years Experience",
    `Local Technicians in ${location}`,
    "Premium Quality Materials",
    "Affordable Pricing",
    "Fast & Clean Installation",
    "2–5 Years Warranty",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-[#2f3e59] to-[#1e293b] max-w-6xl mx-auto px-4 py-16 space-y-20">
        
        {/* JSON LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E78946]">
            Near Me {serviceType} in {location}
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Looking for professional near me {serviceType.toLowerCase()} in{" "}
            {location}, Visakhapatnam? We provide premium materials and expert service.
          </p>
        </section>

        {/* IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={
              serviceType === "Invisible Grills"
                ? "/services/invisible-grill-nearme.webp"
                : "/services/balcony-nearme.webp"
            }
            alt={`${serviceType} Installation in ${location}`}
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* SERVICES */}
        <section>
          <h2 className="text-3xl text-[#E78946] font-bold mb-10 text-center">
            Our Services in {location}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {servicesList.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section>
          <h2 className="text-3xl text-[#E78946] font-bold mb-10 text-center">
            Why Choose Us in {location}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefitsList.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#26395A] p-6 rounded-2xl shadow-xl font-semibold text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#E78946] text-white p-12 rounded-3xl text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Book Free Inspection in {location}
          </h2>

          <p className="mb-8 text-lg">
            Call now for expert near me {serviceType.toLowerCase()} in{" "}
            {location}, Visakhapatnam.
          </p>

          <a
            href="tel:+919490701200"
            className="bg-white text-[#E78946] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition inline-block"
          >
            Call Now
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}