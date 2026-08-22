"use client";

import { useState } from "react";
import { pigeonSafetyFaq, petsSafetyFaq, invisibleGrillFaq } from "@/app/data/FaqData";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { siteConfig } from "@/lib/site";

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
      <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="site-card rounded-2xl transition hover:border-[var(--brand-ice)]"
          >
            <button
              onClick={() => toggleFAQ(baseIndex + i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-[var(--text-primary)] focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xl text-[var(--brand-copper)]">
                {openIndex === baseIndex + i ? "−" : "+"}
              </span>
            </button>
            {openIndex === baseIndex + i && (
              <div className="border-t border-slate-200 px-5 pb-4 text-[var(--text-secondary)]">
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
      <div className="site-page min-h-screen px-5 py-16 md:px-16">
        <h1 className="mb-10 text-center text-4xl font-extrabold">
          Invisible Grill and Safety Net Frequently Asked Questions
        </h1>

        {renderFAQSection("Pigeon Safety Nets", pigeonSafetyFaq, 0)}
        {renderFAQSection("Pet & Children Safety Nets", petsSafetyFaq, 100)}
        {renderFAQSection("Invisible Grills", invisibleGrillFaq, 200)}

        <p className="mt-12 text-center text-[var(--text-secondary)]">
          Didn’t find your question? Contact our experts at{" "}
          <a href={`tel:${siteConfig.phoneInternational}`} className="text-[var(--brand-ocean)] underline hover:text-[var(--brand-aqua)]">
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
