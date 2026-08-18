import GetQuoteButton from "./GetQuoteButton";
import ImageCard from "./ImageCard";

type InfoSectionProps = {
  title: string;
  description: string;
  image: string;
};

const InfoSection = ({ title, description, image }: InfoSectionProps) => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-[#354664] text-[#E78946] relative overflow-hidden shadow-xl">
      {/* Subtle golden glow overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-[#E78946] bg-clip-text text-transparent drop-shadow-md">
            Why Choose {title}?
          </h2>

          <p className="text-amber-50/90 text-base md:text-lg text-justify leading-relaxed tracking-wide">
            {description}
          </p>

          <ul className="space-y-3 text-amber-100/90">
            <li className="flex items-center gap-2">
              <span className="text-amber-300 text-lg">✔</span> Durable &amp; long-lasting material
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300 text-lg">✔</span> Professional installation service
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300 text-lg">✔</span> Affordable pricing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300 text-lg">✔</span> 100% Safety guaranteed
            </li>
          </ul>

          <GetQuoteButton />
        </div>

        {/* Image Section */}
        <div className="relative">
          <ImageCard image={image} title={title} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
