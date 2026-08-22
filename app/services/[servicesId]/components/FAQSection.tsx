"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title: string;
}

const FAQSection = ({ faqs, title }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="site-page px-6 py-20 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="mb-12 text-center text-4xl font-extrabold md:text-5xl">
          {title} FAQs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`site-card rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "ring-2 ring-[var(--brand-aqua)]"
                  : "hover:border-[var(--brand-ice)]"
              }`}
            >
              {/* FAQ Header */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`service-faq-answer-${index}`}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
              >
                <span className="pr-6 text-lg font-semibold text-[var(--text-primary)]">
                  {faq.question}
                </span>
                <svg
                  aria-hidden="true"
                  className={`h-6 w-6 text-[var(--brand-ocean)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* FAQ Answer */}
              <div
                id={`service-faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-slate-200 px-6 pb-6 text-base leading-relaxed text-[var(--text-secondary)]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
