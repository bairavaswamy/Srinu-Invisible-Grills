import Image from "next/image";

const projectImages = [
  { src: "/images/gallery_1.webp", alt: "Balcony protection installation" },
  { src: "/images/gallery_2.webp", alt: "Safety net fitted to a residential opening" },
  { src: "/images/gallery_3.webp", alt: "Invisible grill installation detail" },
  { src: "/images/gallery_4.webp", alt: "Apartment balcony safety installation" },
  { src: "/images/gallery_5.webp", alt: "Professionally tensioned safety net" },
  { src: "/images/gallery_6.webp", alt: "Residential invisible grill project" },
  { src: "/images/gallery_7.webp", alt: "Balcony net installation in Visakhapatnam" },
  { src: "/images/gallery_8.webp", alt: "Completed home safety installation" },
] as const;

export default function ProjectStrip() {
  return (
    <section className="overflow-hidden px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
              Recent installation views
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
              See the finish before choosing your solution
            </h2>
          </div>
          <p className="text-sm font-bold text-[var(--text-secondary)]">Swipe or scroll horizontally →</p>
        </div>
      </div>

      <div
        className="home-scrollbar-none mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pl-[max(1.25rem,calc((100vw-80rem)/2))] pr-5 sm:pl-[max(2rem,calc((100vw-80rem)/2))] sm:pr-8"
        aria-label="Scrollable recent installation images"
      >
        {projectImages.map((image, index) => (
          <figure
            key={image.src}
            className="relative aspect-[4/3] w-[82vw] max-w-[29rem] shrink-0 snap-start overflow-hidden rounded-3xl border border-white shadow-[var(--shadow-soft)] sm:w-[56vw] lg:w-[34vw]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 56vw, 34vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[var(--brand-midnight)]/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
              Installation {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
