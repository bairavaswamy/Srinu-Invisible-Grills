const Specialization = () => {
  return (
    <section className="mx-auto mb-10 max-w-xl px-4">
      <h2 className="mb-4 border-l-4 border-[var(--brand-copper)] pl-3 text-2xl font-bold">
        We Specialize In
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>
          <strong className="site-accent">Safety Nets</strong>: Durable nets for balconies,
          terraces, windows, and construction sites.
        </li>
        <li>
          <strong className="site-accent">Pigeon Protection Nets</strong>: Keeping birds away for a
          clean and hygienic environment.
        </li>
        <li>
          <strong className="site-accent">Bird Spikes</strong>: Preventing birds from nesting on
          ledges, pipes, and AC units.
        </li>
        <li>
          <strong className="site-accent">Invisible Grills</strong>: Elegant,
          rust-proof grills that preserve your view while ensuring safety.
        </li>
      </ul>
    </section>
  );
};

export default Specialization;
