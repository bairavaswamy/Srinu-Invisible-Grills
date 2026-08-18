import SafetyCard from "@/app/home/components/cards";

type CardData = {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;
};

const SafetySolutions = ({ cards }: { cards: CardData[] }) => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-[#26395A] overflow-hidden">
      {/* Subtle golden glow overlay */}
      <div className="absolute inset-0 bg-amber-100/10 pointer-events-none" />

      {/* Section Title */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-center mb-12 text-[#E78946] bg-clip-text bg-[#354664] drop-shadow-md">
        Our Solutions
      </h2>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <SafetyCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default SafetySolutions;
