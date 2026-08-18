import { servicesData } from "@/app/data/servicesData";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import Footer from "@/app/footer/Footer";
import TopSection from "./components/TopSection";
import DetailedContent from "./components/DetailedContent";
import BenefitApplications from "./components/BenefitApplications";
import FAQSection from "./components/FAQSection";
import { Metadata } from "next";

type Params = {
  params: { id: string };
};

// ✅ Pre-render all service pages for static export
export const generateStaticParams = (): Array<{ id: string }> => {
  return Object.keys(servicesData).map((id) => ({ id }));
}

// ✅ Generate SEO metadata per page (static)
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { id } = await params;
  const service = servicesData[id as keyof typeof servicesData];

  const title =
    service?.title || "Service Details | Srinu Balcony Safety Nets";

  const description =
    service?.description?.trim() ||
    `Explore our ${service?.title || "safety net"} services, designed for home and balcony protection. Durable, safe, and expertly installed.`;

  const image = service?.image || "/images/slider_1.webp";
  const url = `https://srinuinvisiblegrills.com/service/${id}`;

  // ✅ Fetch keywords dynamically from SeoKeywords

  const keywords = ["safety nets","invisible grills","balcony safety nets","pegieon safety nets","cloth hangers"];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${service?.title || "Service Details"} | Srinu Balcony Safety Nets`,
      description,
      url,
      siteName: "Srinu Balcony Safety Nets",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service?.title || "Srinu Balcony Safety Net Services",
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service?.title || "Service Details"} | Srinu Balcony Safety Net Services`,
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
    publisher: "srinu invisble grills",
    category: "Home Safety Solutions",
  };
};


// ✅ Static page component (not async)
 const SolutionDetails = async ({ params }: Params) => {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-[#E78946]">Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <TopSection {...service} />
      <DetailedContent
        title={service.title}
        description={service.description}
        detailedContent={service.detailedContent}
      />
      <BenefitApplications />
      <FAQSection />
      <StickyContactIcons />
      <Footer />
    </>
  );
}

export default SolutionDetails;