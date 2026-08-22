import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSecondaryService,
  secondaryServiceSlugs,
  type Service as SecondaryService,
} from "@/app/data/servicesData";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import {
  getServiceByRoute,
  primaryServices,
  serviceRouteSlugs,
  type SeoService,
} from "@/app/servicesData/servicesData";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import DetailedDescription from "./components/DetailedDescription";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import { siteConfig } from "@/lib/site";

type Params = {
  params: Promise<{ servicesId: string }>;
};

export const generateStaticParams = (): Array<{ servicesId: string }> =>
  Array.from(new Set([...serviceRouteSlugs, ...secondaryServiceSlugs])).map(
    (servicesId) => ({ servicesId }),
  );

const getSecondaryMetaDescription = (service: SecondaryService) =>
  `Professional ${service.title.toLowerCase()} in Vizag for homes and businesses. Get measurement-based pricing, durable materials and expert installation.`;

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { servicesId } = await params;
  const primaryService = getServiceByRoute(servicesId);

  if (primaryService) {
    const canonicalUrl = `${siteConfig.url}/services/${primaryService.slug}`;
    const imageUrl = `${siteConfig.url}${primaryService.image}`;
    return {
      metadataBase: new URL(siteConfig.url),
      title: { absolute: primaryService.metaTitle },
      description: primaryService.metaDescription,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        type: "website",
        locale: "en_IN",
        url: canonicalUrl,
        siteName: siteConfig.name,
        title: primaryService.metaTitle,
        description: primaryService.metaDescription,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: primaryService.imageAlt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: primaryService.metaTitle,
        description: primaryService.metaDescription,
        images: [imageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
      category: "Safety Installation Services",
    };
  }

  const secondaryService = getSecondaryService(servicesId);
  if (!secondaryService) {
    return {
      title: "Service Not Found",
      description: "The requested service is not available.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${secondaryService.title} in Visakhapatnam`;
  const description = getSecondaryMetaDescription(secondaryService);
  const canonicalUrl = `${siteConfig.url}/services/${servicesId}`;
  const imageUrl = `${siteConfig.url}${secondaryService.image}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: `${secondaryService.title} in Vizag | Srinu` },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url: canonicalUrl,
      title,
      description,
      images: [{ url: imageUrl, alt: `${secondaryService.title} installation` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
    category: secondaryService.category,
  };
};

const providerSchema = {
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  hasMap: siteConfig.googleBusinessUrl,
  sameAs: [siteConfig.googleBusinessUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Road No. 2, opposite Old ACB Office, Hill View Doctors Colony",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530013",
    addressCountry: "IN",
  },
};

function PrimaryServicePage({
  service,
}: {
  service: SeoService;
}) {
  const canonicalUrl = `${siteConfig.url}/services/${service.slug}`;
  const currentIndex = primaryServices.findIndex(
    (item) => item.slug === service.slug,
  );
  const relatedServices = [1, 2, 3].map(
    (offset) => primaryServices[(currentIndex + offset) % primaryServices.length],
  );

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.navLabel,
      description: service.metaDescription,
      url: canonicalUrl,
      image: `${siteConfig.url}${service.image}`,
      areaServed: { "@type": "City", name: "Visakhapatnam" },
      provider: providerSchema,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.navLabel,
          item: canonicalUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="site-page">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pb-3 pt-24 text-sm text-[var(--text-secondary)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/services">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="site-accent" aria-current="page">{service.navLabel}</li>
          </ol>
        </nav>

        <HeroSection
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
        />
        <DetailedDescription paragraphs={service.introduction} title={service.navLabel} />
        <InfoSection
          title={service.navLabel}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
          benefits={service.benefits}
          applications={service.applications}
        />
        <FAQSection title={service.navLabel} faqs={service.faqs} />

        <section className="site-section border-t border-white/60 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="site-accent text-sm font-bold uppercase tracking-[0.24em]">Continue exploring</p>
            <h2 className="mt-3 text-3xl font-extrabold">Related installation services</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="site-card rounded-2xl p-6 transition hover:-translate-y-1"
                >
                  <span className="font-bold text-[var(--text-primary)]">{related.navLabel}</span>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyContactIcons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

function SecondaryServicePage({
  service,
  slug,
}: {
  service: SecondaryService;
  slug: string;
}) {
  const title = `${service.title} in Visakhapatnam`;
  const canonicalUrl = `${siteConfig.url}/services/${slug}`;
  const details = (service.detailedContent || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  const relatedServices = secondaryServiceSlugs
    .filter((item) => item !== slug)
    .slice(0, 3)
    .map((item) => ({ slug: item, service: getSecondaryService(item)! }));
  const faqs = [
    {
      question: `Where can ${service.title.toLowerCase()} be installed?`,
      answer: `${service.title} can be considered for suitable residential, apartment and commercial openings after the site, access and fixing points are inspected.`,
    },
    {
      question: `How is ${service.title.toLowerCase()} priced?`,
      answer:
        "The quotation depends on measured area, material specification, fixing method and site access. Contact us for a measurement-based estimate.",
    },
    {
      question: "Do you provide installation in Visakhapatnam?",
      answer:
        "Yes. Our team provides site inspection and installation services across Visakhapatnam and the listed surrounding service areas.",
    },
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      serviceType: service.title,
      description: getSecondaryMetaDescription(service),
      url: canonicalUrl,
      image: `${siteConfig.url}${service.image}`,
      areaServed: { "@type": "City", name: "Visakhapatnam" },
      provider: providerSchema,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="site-page min-h-screen">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pb-3 pt-24 text-sm text-[var(--text-secondary)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/services">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="site-accent" aria-current="page">{service.title}</li>
          </ol>
        </nav>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="site-accent text-sm font-bold uppercase tracking-[0.24em]">{service.category}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="site-cta rounded-full px-7 py-3 font-bold"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--brand-aqua)] px-7 py-3 font-bold text-[var(--brand-ocean)] hover:bg-[var(--brand-aqua)] hover:text-[var(--text-primary)]"
              >
                Request a free quote
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src={service.image}
              alt={`${service.title} installation in Visakhapatnam`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 48vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="site-section px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold">
              Professional {service.title.toLowerCase()} service
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--text-secondary)]">
              We assess the opening, measure the required coverage and recommend
              materials and fittings suited to the property. The final quotation
              reflects the confirmed dimensions and site conditions.
            </p>
            {details.length > 0 && (
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {details.map((detail) => (
                  <li key={detail} className="site-card rounded-2xl p-5 text-[var(--text-secondary)]">
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-3xl font-extrabold">
            Frequently asked questions about {service.title.toLowerCase()}
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="site-card rounded-2xl p-5">
                <summary className="cursor-pointer font-bold">{faq.question}</summary>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="site-section border-t border-white/60 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold">Related safety services</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="site-card rounded-2xl p-6 font-bold text-[var(--text-primary)] hover:border-[var(--brand-ice)]"
                >
                  {related.service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyContactIcons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

export default async function ServiceDetailsPage({ params }: Params) {
  const { servicesId } = await params;
  const primaryService = getServiceByRoute(servicesId);
  if (primaryService) {
    return <PrimaryServicePage service={primaryService} />;
  }

  const secondaryService = getSecondaryService(servicesId);
  if (!secondaryService) notFound();
  return <SecondaryServicePage service={secondaryService} slug={servicesId} />;
}
