import Head from "next/head";
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

const About = () => {
  return (
    <>
      <Head>
        <title>
          About Us - Srinu Invisible Grills | Safety Nets, Bird Protection & Invisible Grills
        </title>
        <meta
          name="description"
          content="Srinu Invisible Grills Nets offers premium safety nets, pigeon protection, bird spikes, and invisible grills. Protect your loved ones with stylish, durable safety solutions."
        />
        <meta
          property="og:title"
          content="About Us - Srinu Invisible grills| Safety Solutions Expert"
        />
        <meta
          property="og:description"
          content="Leading provider of safety nets, bird protection, and invisible grills with professional installation and affordable rates."
        />
        <meta
          name="keywords"
          content="safety nets, pigeon protection, bird spikes, invisible grills, home safety, workplace safety, bird proofing, durable nets, safety installation"
        />
        <link rel="canonical" href="https://srinuinvisiblegrills.com/about" />
      </Head>

      <Navbar />

      <main className="bg-[#354664] text-[#E78946] px-4 md:px-8 py-12 mt-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#E78946]">
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
