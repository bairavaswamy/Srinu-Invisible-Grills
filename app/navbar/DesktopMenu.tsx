"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  MapPinned,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { serviceAreaGroups } from "@/app/data/locations";
import { getServiceLocationPath } from "@/app/service-areas/serviceAreaData";
import { serviceNavItems } from "@/app/servicesData/serviceRoutes";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

type OpenMenu = "services" | "areas" | null;

export default function DesktopMenu() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const openDropdown = (menu: Exclude<OpenMenu, null>) => {
    cancelClose();
    setOpenMenu(menu);
  };

  const scheduleClose = (menu: Exclude<OpenMenu, null>) => {
    cancelClose();
    closeTimer.current = setTimeout(
      () => setOpenMenu((current) => (current === menu ? null : current)),
      160,
    );
  };

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      cancelClose();
    };
  }, []);

  const linkClass = (active: boolean) =>
    `relative rounded-xl px-3 py-2 text-sm font-semibold transition ${
      active
        ? "bg-white/10 text-[var(--brand-copper)]"
        : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
    }`;

  const menuButtonClass = (active: boolean) =>
    `flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition ${
      active
        ? "bg-white/10 text-[var(--brand-copper)]"
        : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
    }`;

  return (
    <div className="hidden items-center gap-2 xl:flex">
      <div className="flex items-center gap-0.5 rounded-2xl border border-white/10 bg-white/[0.04] p-1">
        {primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={linkClass(pathname === link.href)}
          >
            {link.label}
          </Link>
        ))}

        <div
          className="relative"
          onMouseEnter={() => openDropdown("services")}
          onMouseLeave={() => scheduleClose("services")}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              scheduleClose("services");
            }
          }}
        >
          <button
            type="button"
            className={menuButtonClass(pathname.startsWith("/services"))}
            aria-expanded={openMenu === "services"}
            aria-controls="desktop-services-menu"
            onClick={(event) => {
              if (event.detail === 0) {
                setOpenMenu((current) => (current === "services" ? null : "services"));
                return;
              }
              setOpenMenu("services");
            }}
          >
            Services
            <ChevronDown
              size={15}
              className={`transition-transform ${openMenu === "services" ? "rotate-180" : ""}`}
            />
          </button>

          {openMenu === "services" && (
            <div
              id="desktop-services-menu"
              className="site-header absolute right-0 top-[calc(100%+0.75rem)] w-[38rem] overflow-hidden rounded-3xl border border-white/15 p-3 shadow-2xl"
            >
              <div className="mb-2 flex items-center justify-between rounded-2xl bg-white/[0.07] px-4 py-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-copper)]">
                    Installation services
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-light-muted)]">
                    Choose the right protection for your property
                  </p>
                </div>
                <ShieldCheck className="text-[var(--brand-aqua)]" size={26} />
              </div>
              <div className="grid grid-cols-2 gap-1">
                {serviceNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      pathname === item.href
                        ? "bg-white/10 text-[var(--brand-copper)]"
                        : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--brand-aqua)]" />
                    {item.text}
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 font-bold text-[var(--brand-ice)] transition hover:bg-white/[0.07]"
              >
                View all installation services
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => openDropdown("areas")}
          onMouseLeave={() => scheduleClose("areas")}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              scheduleClose("areas");
            }
          }}
        >
          <button
            type="button"
            className={menuButtonClass(pathname.startsWith("/service-areas"))}
            aria-expanded={openMenu === "areas"}
            aria-controls="desktop-service-areas-menu"
            onClick={(event) => {
              if (event.detail === 0) {
                setOpenMenu((current) => (current === "areas" ? null : "areas"));
                return;
              }
              setOpenMenu("areas");
            }}
          >
            Areas
            <ChevronDown
              size={15}
              className={`transition-transform ${openMenu === "areas" ? "rotate-180" : ""}`}
            />
          </button>

          {openMenu === "areas" && (
            <div
              id="desktop-service-areas-menu"
              className="site-header fixed left-1/2 top-[76px] max-h-[calc(100vh-6rem)] w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 overflow-y-auto rounded-b-3xl border border-white/15 p-5 shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold text-[var(--brand-copper)]">
                    <MapPinned size={18} /> Service Areas by Region
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-light-muted)]">
                    Select your locality for city-specific service information
                  </p>
                </div>
                <span className="rounded-full border border-[var(--brand-aqua)]/40 bg-[var(--brand-aqua)]/10 px-3 py-1 text-xs font-bold text-[var(--brand-aqua)]">
                  41 locations
                </span>
              </div>

              <div className="grid gap-x-6 gap-y-6 lg:grid-cols-3 xl:grid-cols-6">
                {serviceAreaGroups.map((group) => (
                  <section key={group.id} aria-label={group.label}>
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[var(--brand-copper)]">
                      {group.label}
                    </p>
                    <ul className="space-y-0.5">
                      {group.locations.map((location) => {
                        const href = getServiceLocationPath(location.slug);
                        return (
                          <li key={location.slug}>
                            <Link
                              href={href}
                              className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm transition ${
                                pathname === href || pathname.startsWith(`${href}/`)
                                  ? "bg-white/10 text-white"
                                  : "text-[var(--text-light-muted)] hover:bg-white/[0.07] hover:text-white"
                              }`}
                            >
                              <MapPin size={13} className="shrink-0 text-[var(--brand-aqua)]" />
                              {location.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>

              <Link
                href="/service-areas"
                className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-bold text-[var(--brand-ice)] transition hover:bg-white/[0.08]"
              >
                Browse all service areas
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </div>

      <Link
        href="/contact"
        className="site-cta ml-1 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-extrabold transition"
      >
        <PhoneCall size={16} />
        Free Quote
      </Link>
    </div>
  );
}
