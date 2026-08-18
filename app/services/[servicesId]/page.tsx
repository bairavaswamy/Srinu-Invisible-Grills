import { Metadata } from "next";
import { servicesData } from "@/app/servicesData/servicesData";
import { servicesContent } from "@/app/servicesData/servicesContent";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import HeroSection from "./components/HeroSection";
import DetailedDescription from "./components/DetailedDescription";
import InfoSection from "./components/InfoSection";
import FAQSection from "./components/FAQSection";

type Params = {
  params: { servicesId: string };
};

// ✅ Pre-render all service pages for static export
export const generateStaticParams = (): Array<{ servicesId: string }> => {
  const ids = Object.keys(servicesData);
  console.log("Static paths generated for:", ids);
  return ids.map((servicesId) => ({ servicesId }));
};

// ✅ Static metadata for each service page
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { servicesId } = await params;
  const service = servicesData[servicesId as keyof typeof servicesData];

  if (!service) {
    return {
      title: "Service Not Found | Srinu Balcony Safety Nets",
      description: "Requested service not found on Srinu Balcony Safety Nets.",
      robots: { index: false, follow: false },
    };
  }

  const title = service.title || "Service Details | Srinu Balcony Safety Nets";
  const description =
    service.description?.trim() ||
    `Discover our premium ${service.title} services designed for excellent results and long-lasting protection.`;

  const image = service.image || "/default-image.jpg";
  const url = `https://srinuinvisiblegrills.com/service/${servicesId}`;

  return {
    title,
    description,
    keywords: [
      "pigeon safety nets",
      "balcony safety nets",
      "bird protection nets",
      "anti bird nets",
      "safety nets installation",
      "balcony pigeon nets",
      "HDPE safety nets",
      "invisible grills",
      "pets safety nets",
      "children protection nets",
      "building safety nets",
      "open area nets",
      "monkey protection nets",
      "staircase safety nets",
      "glass building nets",
      "construction safety nets",
      "industrial safety nets",
      "cricket practice nets",
      "sports nets",
      "coconut tree safety nets",
      "mesh nets",
      "nylon safety nets",
      "residential safety nets",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Srinu Balcony Safety Nets`,
      description,
      url,
      siteName: "Srinu Balcony Safety Nets",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Srinu Balcony Safety Nets`,
      description,
      images: [image],
      creator: "@SrinuBalconySafetyNets",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    metadataBase: new URL("https://srinuinvisiblegrills.com"),
    authors: [{ name: "Srinu Balcony Safety Nets" }],
    publisher: "Srinu Balcony Safety Nets",
    category: "Home Safety Solutions",
  };
};

// ✅ Page Component
const ServiceDetailsPage = async ({ params }: Params) => {
  const { servicesId } = await params;
  const service = servicesData[servicesId as keyof typeof servicesData];
  const content = servicesContent[servicesId];

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Navbar />
      <HeroSection {...service} />

      {content?.detailedDescription && (
        <DetailedDescription
          description={content.detailedDescription}
          title={service.title}
        />
      )}

      {content?.faqs && content.faqs.length > 0 && (
        <FAQSection faqs={content.faqs} />
      )}

      <InfoSection {...service} />
      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
