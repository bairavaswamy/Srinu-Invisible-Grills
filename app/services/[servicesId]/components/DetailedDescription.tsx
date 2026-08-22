type DetailedDescriptionProps = {
  paragraphs: string[];
  title: string;
};

const DetailedDescription = ({
  paragraphs,
  title,
}: DetailedDescriptionProps) => (
  <section id="service-details" className="scroll-mt-24 px-6 py-16 md:py-20">
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p className="site-accent text-sm font-bold uppercase tracking-[0.24em]">
          Local installation expertise
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
          About {title}
        </h2>
      </div>
      <div className="space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);

export default DetailedDescription;
