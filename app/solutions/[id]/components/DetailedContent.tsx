"use client";

type DetailedContentProps = {
  title: string;
  description: string;
  detailedContent?: string;
};

const DetailedContent = ({ title, description, detailedContent }: DetailedContentProps) => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-[#354664] text-[#E78946] border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 bg-[#E78946] bg-clip-text text-transparent drop-shadow">
          About {title}
        </h2>

        <div className="text-white leading-relaxed whitespace-pre-line text-base md:text-lg text-justify backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10">
          {detailedContent || description}
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;
