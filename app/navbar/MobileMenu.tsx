"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ChevronDown,
  Home,
  Images,
  Info,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  PhoneCall,
  ShieldCheck,
  X,
} from "lucide-react";
import { serviceAreaGroups } from "@/app/data/locations";
import { getServiceLocationPath } from "@/app/service-areas/serviceAreaData";
import { serviceNavItems } from "@/app/servicesData/serviceRoutes";
import { siteConfig } from "@/lib/site";

const primaryLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/blogs", label: "Blogs", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<"services" | "areas" | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const toggleSection = (section: "services" | "areas") => {
    setExpandedSection((current) => (current === section ? null : section));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-white transition hover:bg-white/10 xl:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={23} />}
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-30 bg-[var(--brand-midnight)]/80 backdrop-blur-sm xl:hidden"
        />
      )}

      <aside
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`site-header fixed inset-y-0 right-0 z-40 w-[min(23rem,92vw)] overflow-y-auto border-l border-white/15 px-5 pb-10 pt-5 text-white transition-transform duration-300 xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/30 bg-white/5">
              <Image
                src="/srinulogo.webp"
                alt="Srinu Invisible Grills logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-black tracking-wide text-[var(--brand-copper)]">
                SRINU INVISIBLE
              </p>
              <p className="mt-0.5 text-xs font-bold tracking-[0.18em] text-[var(--brand-aqua)]">
                GRILLS
              </p>
            </div>
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]"
            aria-label="Close navigation menu"
          >
            <X size={21} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 py-4">
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-3 py-3 text-sm font-bold"
          >
            <PhoneCall size={17} className="text-[var(--brand-aqua)]" /> Call Now
          </a>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="site-cta flex items-center justify-center rounded-xl px-3 py-3 text-sm font-extrabold"
          >
            Free Quote
          </Link>
        </div>

        <div className="space-y-1">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-white/10 text-[var(--brand-copper)]"
                    : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                <Icon size={18} className={active ? "text-[var(--brand-copper)]" : "text-[var(--brand-aqua)]"} />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => toggleSection("services")}
            aria-expanded={expandedSection === "services"}
            aria-controls="mobile-services-list"
            className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-bold transition ${
              pathname.startsWith("/services") ? "bg-white/10 text-[var(--brand-copper)]" : "hover:bg-white/[0.07]"
            }`}
          >
            <span className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[var(--brand-aqua)]" /> Services
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSection === "services" && (
            <div id="mobile-services-list" className="grid grid-cols-1 gap-1 rounded-2xl bg-white/[0.04] p-2">
              {serviceNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-2.5 py-2 text-xs leading-5 transition ${
                    pathname === item.href
                      ? "bg-white/10 text-[var(--brand-copper)]"
                      : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={closeMenu}
                className="mt-1 rounded-lg border border-white/10 px-3 py-2 text-center text-xs font-bold text-[var(--brand-ice)]"
              >
                View all services
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleSection("areas")}
            aria-expanded={expandedSection === "areas"}
            aria-controls="mobile-service-areas-list"
            className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-bold transition ${
              pathname.startsWith("/service-areas") ? "bg-white/10 text-[var(--brand-copper)]" : "hover:bg-white/[0.07]"
            }`}
          >
            <span className="flex items-center gap-3">
              <MapPinned size={18} className="text-[var(--brand-aqua)]" /> Service Areas
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform ${expandedSection === "areas" ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSection === "areas" && (
            <div id="mobile-service-areas-list" className="space-y-4 rounded-2xl bg-white/[0.04] p-3">
              {serviceAreaGroups.map((group) => (
                <section key={group.id} aria-label={group.label}>
                  <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[var(--brand-copper)]">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    {group.locations.map((location) => {
                      const href = getServiceLocationPath(location.slug);
                      return (
                        <Link
                          key={location.slug}
                          href={href}
                          onClick={closeMenu}
                          className={`flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs leading-5 transition ${
                            pathname === href || pathname.startsWith(`${href}/`)
                              ? "bg-white/10 text-white"
                              : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
                          }`}
                        >
                          <MapPin size={11} className="shrink-0 text-[var(--brand-aqua)]" />
                          {location.label}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
              <Link
                href="/service-areas"
                onClick={closeMenu}
                className="block rounded-lg border border-white/10 px-3 py-2 text-center text-xs font-bold text-[var(--brand-ice)]"
              >
                Browse all areas
              </Link>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-copper)]">
            Visakhapatnam installation team
          </p>
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="mt-2 block font-extrabold text-white"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </aside>
    </>
  );
}
