import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24">
      <div className="site-dark-hero relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-12 shadow-[var(--shadow-dark)] sm:px-10 md:py-16 lg:px-16">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--brand-aqua)]/14 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[var(--brand-ice)]/10 blur-3xl" />

        <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
              Request a measured quotation
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Tell us which opening you want to secure
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[var(--text-light-muted)]">
              Share your locality, approximate dimensions and preferred service. We’ll
              help confirm the next step for measurement and installation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="site-cta flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-extrabold transition"
            >
              Request a free quote <ArrowRight size={18} />
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-bold text-white transition hover:bg-white/[0.14]"
              >
                <PhoneCall size={16} /> Call
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-bold text-white transition hover:bg-white/[0.14]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
