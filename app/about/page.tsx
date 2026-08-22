import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyicons/stickyIcons";
import AboutIntro from "../about/AboutIntro";
import Specialization from "../about/Specialization";
import WhyChooseUs from "../about/WhyChooseUs";
import Mission from "../about/Mission";
import Values from "../about/Values";
import WhySolutionsMatter from "../about/WhySolutionsMatter";
import Closing from "../about/Closing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Srinu Invisible Grills | Visakhapatnam" },
  description:
    "Learn about Srinu Invisible Grills, our safety standards, installation approach, and balcony-protection services in Visakhapatnam.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const About = () => {
  return (
    <>
      <Navbar />

      <main className="site-page mt-16 px-4 py-12 md:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-center text-3xl font-extrabold md:text-4xl">
            About Srinu Invisible Grills
          </h1>

          <AboutIntro />

          <div className="flex justify-center">
            <div className="w-full h-64 md:h-72 relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/safety-nets-installation.webp"
                alt="Safety Nets Installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <Specialization />
          <WhyChooseUs />
          <Mission />
          <Values />
          <WhySolutionsMatter />
          <Closing />
        </div>
      </main>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default About;
