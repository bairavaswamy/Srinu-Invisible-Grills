import type { Metadata } from "next";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import Footer from "@/app/footer/Footer";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import ContactForm from "@/app/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Srinu Invisible Grills | Visakhapatnam" },
  description:
    "Contact Srinu Invisible Grills for balcony safety nets, invisible grills and pigeon-control installations in Visakhapatnam. Call 9490701200 for a quote.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    title: "Contact Srinu Invisible Grills in Visakhapatnam",
    description:
      "Request a measurement-based quote for invisible grills, balcony safety nets and bird-control installations in Visakhapatnam.",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Srinu Invisible Grills",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      telephone: siteConfig.phoneInternational,
      email: siteConfig.email,
      address: siteConfig.address,
      hasMap: siteConfig.googleBusinessUrl,
      sameAs: [siteConfig.googleBusinessUrl],
    },
  };

  return (
    <>
      <Navbar />
      <main className="site-page min-h-screen px-5 pb-20 pt-28 sm:px-6">
        <section className="mx-auto max-w-4xl text-center">
          <p className="site-accent text-sm font-bold uppercase tracking-[0.28em]">
            Talk to our installation team
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Contact Srinu Invisible Grills in Visakhapatnam
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            Tell us where you need invisible grills, safety nets, cloth hangers or
            bird-control protection. We’ll help confirm the right service and arrange a
            measurement-based quotation.
          </p>
        </section>

        <section className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="site-card rounded-3xl p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold">Contact details</h2>
            <div className="mt-7 space-y-6 text-[var(--text-secondary)]">
              <p className="flex items-start gap-3">
                <ImLocation2 className="mt-1 shrink-0 text-[var(--brand-aqua)]" size={22} />
                <span><strong className="text-[var(--text-primary)]">Address:</strong> {siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <FiPhoneCall className="shrink-0 text-[var(--brand-aqua)]" size={22} />
                <a className="hover:text-[var(--brand-ocean)]" href={`tel:${siteConfig.phoneInternational}`}>
                  <strong className="text-[var(--text-primary)]">Phone:</strong> {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <AiOutlineMail className="shrink-0 text-[var(--brand-aqua)]" size={22} />
                <a className="break-all hover:text-[var(--brand-ocean)]" href={`mailto:${siteConfig.email}`}>
                  <strong className="text-[var(--text-primary)]">Email:</strong> {siteConfig.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <RiTimeLine className="mt-1 shrink-0 text-[var(--brand-aqua)]" size={22} />
                <span><strong className="text-[var(--text-primary)]">Hours:</strong> Monday–Saturday, 9:00 AM–7:00 PM</span>
              </p>
            </div>

            <div className="site-section mt-10 rounded-2xl p-6">
              <h2 className="text-xl font-extrabold">What to share for a faster quote</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                <li>• Your locality in or around Visakhapatnam</li>
                <li>• The service you need</li>
                <li>• Approximate opening size or a clear photo</li>
                <li>• A convenient time for inspection</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold">
            Visit or get directions
          </h2>
          <div className="mt-7 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <iframe
              title={`${siteConfig.name} location map`}
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <div className="mt-5 text-center">
            <a
              href={siteConfig.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-cta inline-flex rounded-full px-7 py-3 font-bold transition"
            >
              Get directions
            </a>
          </div>
        </section>
      </main>
      <StickyContactIcons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
