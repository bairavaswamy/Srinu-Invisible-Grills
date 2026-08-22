import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  { label: "Invisible Grills", href: "/services/invisible-grills" },
  { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { label: "Anti-Bird Spikes", href: "/services/anti-bird-spikes" },
  { label: "Children Safety Nets", href: "/services/children-safety-nets" },
  { label: "Sports Practice Nets", href: "/services/sports-practice-nets" },
] as const;

const areaLinks = [
  { label: "Gajuwaka", href: "/service-areas/gajuwaka" },
  { label: "Madhurawada", href: "/service-areas/madhurawada" },
  { label: "MVP Colony", href: "/service-areas/mvp-colony" },
  { label: "Seethammadhara", href: "/service-areas/seethammadhara" },
  { label: "Anakapalle", href: "/service-areas/anakapalle" },
  { label: "Pendurti", href: "/service-areas/pendurti" },
] as const;

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQs", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
] as const;

function FooterLinks({ links }: { links: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <ul className="mt-4 space-y-2.5 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex items-center gap-1 text-[var(--text-light-muted)] transition hover:text-[var(--brand-ice)]"
          >
            {link.label} <ArrowUpRight size={13} className="opacity-60" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <section aria-label="Srinu Invisible Grills company information">
            <Link href="/" className="flex w-fit items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/25 bg-white/5">
                <Image
                  src="/srinulogo.webp"
                  alt="Srinu Invisible Grills logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-black tracking-wide text-white">SRINU INVISIBLE</p>
                <p className="mt-0.5 text-xs font-bold tracking-[0.2em] text-[var(--brand-aqua)]">GRILLS</p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-light-muted)]">
              Measured safety installations for balconies, windows and open spaces
              across Visakhapatnam. Clear recommendations, suitable materials and
              neat on-site fitting.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="flex items-center gap-3 text-white transition hover:text-[var(--brand-ice)]"
              >
                <PhoneCall size={17} className="text-[var(--brand-aqua)]" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[var(--text-light-muted)] transition hover:text-[var(--brand-ice)]"
              >
                <Mail size={17} className="text-[var(--brand-aqua)]" />
                {siteConfig.email}
              </a>
              <p className="flex max-w-md items-start gap-3 text-[var(--text-light-muted)]">
                <MapPin size={17} className="mt-1 shrink-0 text-[var(--brand-aqua)]" />
                {siteConfig.address}
              </p>
            </div>
          </section>

          <section aria-labelledby="footer-services-heading">
            <h2 id="footer-services-heading" className="font-extrabold text-white">Popular Services</h2>
            <FooterLinks links={serviceLinks} />
          </section>

          <section aria-labelledby="footer-areas-heading">
            <h2 id="footer-areas-heading" className="font-extrabold text-white">Service Areas</h2>
            <FooterLinks links={areaLinks} />
            <Link
              href="/service-areas"
              className="mt-4 inline-flex text-sm font-bold text-[var(--brand-aqua)] hover:text-[var(--brand-ice)]"
            >
              View all locations →
            </Link>
          </section>

          <section aria-labelledby="footer-company-heading">
            <h2 id="footer-company-heading" className="font-extrabold text-white">Company</h2>
            <FooterLinks links={companyLinks} />
          </section>
        </div>

        <section
          className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-[0.75fr_1.25fr]"
          aria-labelledby="footer-location-heading"
        >
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
              Google Business Profile
            </p>
            <h2 id="footer-location-heading" className="mt-3 text-2xl font-black text-white">
              Find Srinu Invisible Grills
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text-light-muted)]">
              Open our verified business listing for directions, current details and genuine customer reviews.
            </p>
            <a
              href={siteConfig.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[var(--brand-ocean)]"
            >
              View Google profile <ArrowUpRight size={16} />
            </a>
          </div>
          <iframe
            title={`${siteConfig.name} Google map`}
            src={siteConfig.googleMapsEmbedUrl}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[17.5rem] w-full"
          />
        </section>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--text-light-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. Professional safety installations in Visakhapatnam.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Srinu Invisible Grills on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-[var(--brand-ocean)]"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Srinu Invisible Grills on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[var(--brand-aqua)] text-[var(--text-primary)] transition hover:bg-[var(--brand-ice)]"
            >
              <FaWhatsapp size={17} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Srinu Invisible Grills on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-[var(--brand-ocean)]"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
