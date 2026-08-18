"use client";

const BenefitApplications = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#354664] text-[#E78946]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-[#E78946] bg-clip-text text-transparent drop-shadow">
          Benefits & Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Key Benefits */}
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200/20 hover:border-amber-300/40 transition-all">
            <h3 className="text-xl font-bold text-[#E78946] mb-3">
              Key Benefits
            </h3>
            <ul className="list-disc pl-6 text-white space-y-2">
              <li>Durable & Weather-resistant</li>
              <li>Custom Fittings</li>
              <li>Professional Installation</li>
            </ul>
          </div>

          {/* Applications */}
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200/20 hover:border-amber-300/40 transition-all">
            <h3 className="text-xl font-bold text-[#E78946] mb-3">
              Applications
            </h3>
            <ul className="list-disc pl-6 text-white space-y-2">
              <li>Residential Balconies</li>
              <li>Commercial Buildings</li>
              <li>Industrial Safety</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitApplications;
