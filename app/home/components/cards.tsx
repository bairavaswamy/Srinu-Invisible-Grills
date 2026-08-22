import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";

export type HomeServiceCard = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export default function SafetyCard({ image, title, description, href }: HomeServiceCard) {
  return (
    <article className="site-card group flex h-full flex-col overflow-hidden rounded-3xl">
      <Link href={href} className="block" aria-label={`View ${title}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={`${title} installation in Visakhapatnam`}
            fill
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 46vw, 31vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--brand-midnight)]/55 to-transparent" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-extrabold leading-snug">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Link
            href={href}
            className="site-cta flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-extrabold transition"
          >
            View service <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--brand-ocean)]/15 bg-[var(--brand-ocean)] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--brand-midnight)]"
          >
            <PhoneCall size={16} /> Call now
          </a>
        </div>
      </div>
    </article>
  );
}
