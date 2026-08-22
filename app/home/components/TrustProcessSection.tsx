import {
  CheckCircle2,
  ClipboardCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const trustPoints = [
  {
    icon: Ruler,
    title: "Measured for your opening",
    text: "We review the complete span, fixing surface and access before recommending a layout.",
  },
  {
    icon: ShieldCheck,
    title: "Materials selected for the use",
    text: "Net type, cable spacing and fittings are matched to the property and intended protection.",
  },
  {
    icon: Wrench,
    title: "Neat on-site installation",
    text: "The team plans anchor points, tension and edges for a secure, orderly finish.",
  },
  {
    icon: Sparkles,
    title: "Clear view and ventilation",
    text: "Solutions are planned to add protection while keeping the space open and comfortable.",
  },
] as const;

const processSteps = [
  { icon: ClipboardCheck, title: "Share your requirement", text: "Tell us the location, opening and preferred service." },
  { icon: Ruler, title: "Site measurement", text: "We check dimensions, access and suitable fixing points." },
  { icon: CheckCircle2, title: "Confirm the quotation", text: "Review the recommended material and measured price." },
  { icon: Wrench, title: "Professional fitting", text: "Installation is completed with a final tension and finish check." },
] as const;

export default function TrustProcessSection() {
  return (
    <>
      <section className="site-section px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
              Why homeowners choose us
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              A safer result starts with the right site assessment
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[var(--text-secondary)]">
              We focus on measurement, fixing conditions and how the space is used—not
              a one-size-fits-all installation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <article key={title} className="site-card rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-aqua)]/12 text-[var(--brand-ocean)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--brand-aqua)]">
              Simple installation process
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">From enquiry to final fitting</h2>
          </div>

          <ol className="mt-9 grid gap-4 md:grid-cols-4">
            {processSteps.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="site-card relative rounded-2xl p-6">
                <span className="absolute right-5 top-4 text-4xl font-black text-[var(--brand-aqua)]/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon size={23} className="text-[var(--brand-aqua)]" />
                <h3 className="mt-5 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
