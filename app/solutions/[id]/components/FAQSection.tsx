"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of safety nets do you install?",
      answer:
        "We install balcony safety nets, pigeon protection nets, bird spikes, invisible grills, and more—each customized for residential and commercial properties.",
    },
    {
      question: "Are your safety nets durable and weather-resistant?",
      answer:
        "Yes. Our safety nets are made from premium HDPE materials that are UV-resistant, rust-proof, and long-lasting, ensuring safety in all weather conditions.",
    },
    {
      question: "Do you provide installation service in all areas of Visakhapatnam?",
      answer:
        "Absolutely. We serve all major localities in Visakhapatnam, offering fast and professional installation at your convenience.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most installations are completed within a few hours depending on the area size. We aim for quick, efficient, and clean service.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#354664] text-[#E78946] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-[#E78946] bg-clip-text text-transparent drop-shadow">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-amber-200/20 hover:border-[#E78946] transition-all shadow-lg"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 py-5 text-lg font-semibold text-amber-100 hover:text-[#E78946] transition-all"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="text-amber-300" />
                ) : (
                  <FiChevronDown className="text-amber-200" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-white text-justify border-t border-amber-200/10 bg-white/5">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
