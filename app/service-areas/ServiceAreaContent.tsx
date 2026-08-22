import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { serviceLocations } from "@/app/data/locations";
import {
  areaServices,
  getServiceAreaDescription,
  getServiceAreaPath,
  getServiceAreaTitle,
  type AreaService,
  type ServiceLocation,
  getServiceLocationPath,
} from "@/app/service-areas/serviceAreaData";
import { siteConfig } from "@/lib/site";

type Props = {
  location: ServiceLocation;
  service: AreaService;
};

export default function ServiceAreaContent({ location, service }: Props) {
  const canonicalPath = getServiceAreaPath(location.slug, service.slug);
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const title = getServiceAreaTitle(location, service);
  const description = getServiceAreaDescription(location, service);
  const currentLocationIndex = serviceLocations.findIndex(
    (item) => item.slug === location.slug,
  );
  const nearbyLocations = [1, 2, 3, 4]
    .map(
      (offset) =>
        serviceLocations[(currentLocationIndex + offset) % serviceLocations.length],
    )
    .filter((item) => item.slug !== location.slug);
  const alternateService = areaServices.find(
    (item) => item.slug !== service.slug,
  )!;

  const faqs = [
    {
      question: `Do you install ${service.name.toLowerCase()} in ${location.label}?`,
      answer: `Yes. Srinu Invisible Grills provides measurement and installation services in ${location.label} and surrounding parts of Visakhapatnam.`,
    },
    {
      question: `How is the price calculated in ${location.label}?`,
      answer:
        "Pricing depends on the measured area, material specification, fixing surface and site access. We provide a quotation after understanding the opening and installation requirements.",
    },
    {
      question: "Is a site inspection required before installation?",
      answer:
        "A site inspection is recommended because it confirms dimensions, fixing points, access and the most suitable installation method for the property.",
    },
    {
      question: "How can I request an installation quote?",
      answer: `Call ${siteConfig.phoneDisplay} or send your location and requirement by WhatsApp. Our team will help arrange the next suitable step.`,
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      serviceType: service.name,
      description,
      url: canonicalUrl,
      image: `${siteConfig.url}${service.image}`,
      areaServed: {
        "@type": "Place",
        name: `${location.label}, Visakhapatnam`,
      },
      provider: {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phoneInternational,
        email: siteConfig.email,
        hasMap: siteConfig.googleBusinessUrl,
        sameAs: [siteConfig.googleBusinessUrl],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
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
          item: `${siteConfig.url}${getServiceLocationPath(location.slug)}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: `${service.name} in ${location.label}`,
          item: canonicalUrl,
        },
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
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-6 pb-3 pt-24 text-sm text-[var(--text-secondary)]"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="hover:text-[var(--brand-ocean)]" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="hover:text-[var(--brand-ocean)]" href="/service-areas">
                Service Areas
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                className="hover:text-[var(--brand-ocean)]"
                href={getServiceLocationPath(location.slug)}
              >
                {location.label}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="site-accent" aria-current="page">
              {service.name}
            </li>
          </ol>
        </nav>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="site-accent text-sm font-bold uppercase tracking-[0.24em]">
              Local installation service
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
              {service.summary} Our team measures the complete opening in
              {` ${location.label}`} and recommends a fitting method suited to
              the property.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="site-cta rounded-full px-7 py-3 font-bold transition"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--brand-aqua)] px-7 py-3 font-bold text-[var(--brand-ocean)] transition hover:bg-[var(--brand-aqua)] hover:text-[var(--text-primary)]"
              >
                Request a free quote
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src={service.image}
              alt={`${service.imageAlt} in ${location.label}, Visakhapatnam`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 48vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="site-section px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold">
                Why choose this service in {location.label}
              </h2>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="site-card rounded-xl p-4">
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold">
                Suitable installation areas
              </h2>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                {service.applications.map((application) => (
                  <li key={application} className="site-card rounded-xl p-4">
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-3xl font-extrabold">
            Installation process in {location.label}
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Discuss the opening and intended use",
              "Measure the site and inspect fixing points",
              "Confirm materials and quotation",
              "Complete fitting and final inspection",
            ].map((step, index) => (
              <li key={step} className="site-card rounded-2xl p-5 text-[var(--text-secondary)]">
                <span className="mb-3 block text-2xl font-black text-teal-300">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="site-section px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-extrabold">
              Frequently asked questions about {service.name.toLowerCase()} in {location.label}
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="site-card rounded-2xl p-5">
                  <summary className="cursor-pointer font-bold text-[var(--text-primary)]">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-[var(--text-secondary)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-extrabold">
            Explore related local services
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Link
              href={getServiceAreaPath(location.slug, alternateService.slug)}
              className="site-card rounded-2xl p-5 font-bold text-[var(--brand-ocean)] hover:border-[var(--brand-ice)]"
            >
              {alternateService.name} in {location.label}
            </Link>
            {nearbyLocations.map((nearby) => (
              <Link
                key={nearby.slug}
                href={getServiceAreaPath(nearby.slug, service.slug)}
                className="site-card rounded-2xl p-5 font-bold text-[var(--text-primary)] hover:border-[var(--brand-ice)]"
              >
                {service.name} in {nearby.label}
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
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
