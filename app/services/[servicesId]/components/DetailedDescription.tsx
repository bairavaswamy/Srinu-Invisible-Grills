interface DetailedDescriptionProps {
  description: string;
  title: string;
}

const DetailedDescription = ({ description, title }: DetailedDescriptionProps) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#354664] text-[#E78946]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 bg-[#E78946] bg-clip-text text-transparent drop-shadow">
          About {title}
        </h2>

        <div className="text-white leading-relaxed whitespace-pre-line text-base md:text-lg text-justify backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-lg border border-white/10">
          {description}
        </div>
      </div>
    </section>
  );
};

export default DetailedDescription;
