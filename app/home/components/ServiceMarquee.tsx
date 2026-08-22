import Link from "next/link";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

const marqueeItems = [
  { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { label: "Invisible Grills", href: "/services/invisible-grills" },
  { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { label: "Anti-Bird Spikes", href: "/services/anti-bird-spikes" },
  { label: "Children Safety Nets", href: "/services/children-safety-nets" },
] as const;

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <div key={item.href} className="flex shrink-0 items-center">
          <Link
            href={item.href}
            className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-white transition hover:text-[var(--brand-ice)] sm:px-7"
          >
            <ShieldCheck size={16} className="text-[var(--brand-aqua)]" />
            {item.label}
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/30" />
        </div>
      ))}
      <a
        href={`tel:${siteConfig.phoneInternational}`}
        className="flex shrink-0 items-center gap-2 px-5 py-3 text-sm font-extrabold text-[var(--brand-ice)] sm:px-7"
      >
        <PhoneCall size={16} /> Call {siteConfig.phoneDisplay}
      </a>
      <span className="mx-2 h-1 w-1 rounded-full bg-white/30" />
    </div>
  );
}

export default function ServiceMarquee() {
  return (
    <aside
      aria-label={`Popular services and phone number ${siteConfig.phoneDisplay}`}
      className="site-dark-hero overflow-hidden border-y border-white/10"
    >
      <div className="home-marquee-track">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </aside>
  );
}
