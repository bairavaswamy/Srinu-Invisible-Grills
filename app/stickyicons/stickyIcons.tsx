import React from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const StickyContactIcons = () => {
  return (
    <>
      <div
        className="fixed right-0 top-[70%] z-40 flex -translate-y-1/2 flex-col items-end gap-1.5 md:hidden"
        aria-label="Mobile quick contact options"
      >
        <Link
          href="/contact"
          aria-label="Request a free quote"
          className="site-cta flex h-16 w-12 flex-col items-center justify-center gap-1 rounded-l-2xl text-[10px] font-extrabold uppercase leading-3 shadow-[var(--shadow-aqua)] focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiMessageSquare className="h-4 w-4" aria-hidden="true" />
          <span className="text-center">Free<br />quote</span>
        </Link>
        <a
          href={`tel:${siteConfig.phoneInternational}`}
          aria-label={`Call us at ${siteConfig.phoneDisplay}`}
          className="flex h-11 w-11 items-center justify-center rounded-l-2xl bg-[var(--brand-ocean)] text-white shadow-lg transition hover:bg-[var(--brand-midnight)] focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiPhone className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-l-2xl bg-[#1FAF72] text-white shadow-lg transition hover:bg-[#168A5A] focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>

      <div
        className="fixed right-4 top-[70%] z-40 hidden -translate-y-1/2 flex-col items-end gap-2 md:flex lg:right-6"
        aria-label="Quick contact options"
      >
        <Link
          href="/contact"
          className="site-cta flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-extrabold shadow-[var(--shadow-aqua)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiMessageSquare className="h-5 w-5" aria-hidden="true" />
          Free quote
        </Link>
        <a
          href={`tel:${siteConfig.phoneInternational}`}
          aria-label={`Call us at ${siteConfig.phoneDisplay}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-ocean)] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[var(--brand-midnight)] focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiPhone className="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1FAF72] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#168A5A] focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label={`Send an email to ${siteConfig.email}`}
          className="site-cta flex h-12 w-12 items-center justify-center rounded-full transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FiMail className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

export default StickyContactIcons;
