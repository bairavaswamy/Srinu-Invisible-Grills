import GetQuoteButton from "./GetQuoteButton";
import ImageCard from "./ImageCard";

type InfoSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  applications: string[];
};

const InfoSection = ({
  title,
  description,
  image,
  imageAlt,
  benefits,
  applications,
}: InfoSectionProps) => (
  <section className="site-section border-y border-white/60 px-6 py-16 lg:px-20 lg:py-20">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
      <ImageCard image={image} imageAlt={imageAlt} title={title} />
      <div>
        <p className="site-accent text-sm font-bold uppercase tracking-[0.24em]">
          Designed for your property
        </p>
        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
          Why choose our {title.toLowerCase()}?
        </h2>
        <p className="mt-5 leading-7 text-[var(--text-secondary)]">{description}</p>

        <div className="mt-8 grid gap-7 sm:grid-cols-2">
          <div>
            <h3 className="font-bold">Key benefits</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--brand-aqua)]">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Common applications</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              {applications.map((application) => (
                <li key={application} className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--brand-aqua)]">
                    •
                  </span>
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <GetQuoteButton serviceTitle={title} />
      </div>
    </div>
  </section>
);

export default InfoSection;
