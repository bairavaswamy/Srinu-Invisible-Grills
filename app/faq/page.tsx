"use client";

import { useState } from "react";
import { pigeonSafetyFaq, petsSafetyFaq, invisibleGrillFaq } from "@/app/data/FaqData";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

type FAQ = {
  question: string;
  answer: string;
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFAQSection = (title: string, faqs: FAQ[], baseIndex: number) => (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold  text-[#E78946] mb-6 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/10 border border-amber-200/30 rounded-2xl shadow-lg backdrop-blur-sm transition hover:border-amber-400/60"
          >
            <button
              onClick={() => toggleFAQ(baseIndex + i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-amber-100 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className=" text-[#E78946] text-xl">
                {openIndex === baseIndex + i ? "−" : "+"}
              </span>
            </button>
            {openIndex === baseIndex + i && (
              <div className="px-5 pb-4 text-white border-t border-amber-300/20">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#354664] py-16 px-5 md:px-16">
        <h1 className="text-center text-4xl font-extrabold text-[#E78946] mb-10">
          Frequently Asked Questions
        </h1>

        {renderFAQSection("Pigeon Safety Nets", pigeonSafetyFaq, 0)}
        {renderFAQSection("Pet & Children Safety Nets", petsSafetyFaq, 100)}
        {renderFAQSection("Invisible Grills", invisibleGrillFaq, 200)}

        <p className="text-center text-amber-100 mt-12">
          Didn’t find your question? Contact our experts at{" "}
          <a href="tel:+919490701200" className=" text-[#E78946] underline hover:text-yellow-400">
            +91 94907 01200
          </a>{" "}
          — we’re happy to help!
        </p>
      </div>
      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default FAQPage;
