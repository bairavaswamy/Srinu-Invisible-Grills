import SafetySolutions from "@/app/home/components/SafetySolutions";
import Testimonials from "@/app/home/components/Testimonials";
import CTASection from "@/app/home/components/CTASection";
import MissionSection from "@/app/home/components/MissionSection";
import Gallery from "@/app/home/components/Gallery";
import { Metadata } from "next";
import HeroSection from "./components/HeroSection";

type CardData = {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;
};

// ---------------- SEO ----------------
export const metadata: Metadata = {
  title: "Home Safety Nets & Grills | srinu invisible grills in bengaluru",
  description:
    "srinu invisible grills offers balcony safety nets, invisible grills, and pigeon protection nets in bengaluru. Keep your family, kids, and pets safe with our durable, rust-proof nets and professional installation services.",
  
  // 🧠 Keywords for SEO
  keywords: [
    "home safety nets",
    "balcony safety nets",
    "pigeon safety nets",
    "invisible grills",
    "children safety nets",
    "bird protection nets",
    "HDPE nets",
    "srinu invisible grills",
    "pet safety nets",
    "anti bird nets",
    "balcony protection",
    "grill safety nets",
    "Cloth hangers"
  ],

  // ✅ Canonical link (avoid duplicate URLs)
  alternates: {
    canonical: "https://srinuinvisiblegrills.com/",
  },

  // ✅ Open Graph — For Facebook, LinkedIn, Instagram preview
  openGraph: {
    title: "Home Safety Nets & Invisible Grills | Srinu Balcony Safety Nets",
    description:
      "Professional home and balcony safety nets in visakhapatnam. Protect your loved ones with Srinu Invisible Grills's strong and reliable safety services.",
    url: "https://srinuinvisiblegrills.com/",
    siteName: "srinu invisible grills",
    images: [
      {
        url: "/images/slider_1.webp",
        width: 1200,
        height: 630,
        alt: "Home Safety Nets Installation by Srinu Invisible Grills ",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  // ✅ Twitter Card (shows preview on Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "srinu invisible grills | Invisible Grills & Balcony Safety Nets visakhapatnam",
    description:
      "Durable & aesthetic safety nets and invisible grills for balconies and homes in visakhapatnam. Call Srinu Invisible Grills today for free installation quotes.",
    images: ["/images/slider_1.webp"],
    creator: "@Srinu Invisible Grills",
  },

  // ✅ Robots directives (SEO crawlers)
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

  // ✅ Additional metadata for SEO & branding
  metadataBase: new URL("https://srinuinvisiblegrills.com"),
  authors: [{ name: "srinu invisible grills", url: "https://srinuinvisiblegrills.com" }],
  publisher: "srinu invisible grills",
  category: "Home Safety Services",
};


export const revalidate = 60;

// ---------------- Data ----------------
const desktopSlides = [
  { bg: "/images/image-slider-11.webp", title: "Pigeon Safety Nets for Peaceful Living", subtitle: "Experience peace of mind with our innovative home safety solutions." },
  { bg: "/images/image-slider-2.webp", title: "Invisible Grills for Modern Living", subtitle: "Blend security seamlessly with modern aesthetics and clear views." },
  { bg: "/images/image-slider-33.webp", title: "Balcony Safety Nets for Secure Living", subtitle: "Prevent accidental falls and protect your family." },
  { bg: "/images/image-slider-4.webp", title: "Protect Your Children & Pets", subtitle: "Safety nets designed to safeguard every member of your household." },
  { bg: "/images/images-slider-55.webp", title: "Bird Spikes for Modern Protection", subtitle: "Durable and effective bird control for hygienic spaces." },
];

const mobileSlides = [
  { bg: "/images/image-slider-11.webp", title: "Pigeon Safety Nets", subtitle: "Peaceful living with durable safety nets." },
  { bg: "/images/image-slider-2.webp", title: "Invisible Grills", subtitle: "Modern design with complete protection." },
  { bg: "/images/image-slider-33.webp", title: "Balcony Safety Nets", subtitle: "Ensure safety for kids and pets." },
  { bg: "/images/image-slider-4.webp", title: "Protect Your Family", subtitle: "Safety that blends with your lifestyle." },
  { bg: "/images/images-slider-55.webp", title: "Bird Spikes", subtitle: "Keep pigeons away — clean and hygienic." },
];


const cardsData: CardData[] = [
  {
    image: "/balcony/balcony-net.webp",
    title: "Balcony Safety Nets",
    description:
      "Balcony safety nets in Visakhapatnam provide a safe way to protect your loved ones, pets, and belongings from accidental falls, perfect for apartments and high-rise buildings, made with strong and durable UV-protected materials that withstand sun, rain, and wind, blending well with your balcony design while our expert team ensures professional installation and reliable safety for homes, offices, and terraces across Visakhapatnam.",
    readMoreLink: "/services/balconySafetyNets",
    callNumber: "+919490701200",
  },
  {
    image: "/images/invisble.jpg",
    title: "Invisible Grills",
    description:
      "Invisible grills in Visakhapatnam provide a stylish and modern security solution for balconies, windows, and open spaces, made from high-tensile stainless steel wires coated with protective nylon, offering strong safety without blocking your view or fresh air, ideal for apartments and high-rise buildings to protect children, pets, and family members while keeping a clean and elegant look, installed by experts using advanced technology, combining strength and transparency as a better option than traditional iron grills, and ensuring long-lasting safety, weather resistance, and a clear, beautiful view in Visakhapatnam.",
    readMoreLink: "/services/invisibleGrill",
    callNumber: "+919490701200",
  },
  {
    image: "/images/images-slider-55.webp",
    title: "Bird Spikes",
    description:
      "Bird spikes in Visakhapatnam are an effective and humane solution to prevent pigeons and other birds from sitting or nesting on building ledges, AC units, and rooftops, made from premium stainless steel or UV-protected polycarbonate, rust-proof, weather-resistant, and long-lasting, helping keep surfaces clean by stopping droppings and property damage without harming birds, suitable for residential and commercial buildings, blending neatly with the structure, and professionally installed for strong and durable fixing, making them a simple and reliable bird control solution in Visakhapatnam.",
    readMoreLink: "/services/birdSpikes",
    callNumber: "+919490701200",
  },
  {
    image: "/images/residential-net.webp",
    title: "Residential and Pigeon Safety Nets",
    description:
      "Residential and pigeon safety nets in Visakhapatnam are designed to protect homes from bird entry, accidental falls, and unhygienic conditions, made from high-quality HDPE material that is UV-stabilized, weatherproof, and durable, perfect for balconies, windows, and open spaces, preventing pigeons from nesting or entering your home while allowing natural light and fresh air, custom-made to fit your space and professionally installed for a neat and secure finish, requiring very little maintenance and offering long-lasting performance, making them a reliable choice for clean and safe living in Visakhapatnam.",
    readMoreLink: "/services/residentialAndPigeonSafetyNets",
    callNumber: "+919490701200",
  },
  {
    image: "/balcony/sports-nets.webp",
    title: "Sports Safety Nets",
    description:
      "Sports safety nets in Visakhapatnam provide safe and strong enclosures for cricket, football, golf, and other sports activities, made from high-quality UV-stabilized nylon or HDPE materials that can handle heavy impact and changing weather, helping to mark practice areas, stop balls from going outside, and improve safety during training, suitable for schools, playgrounds, sports academies, and terraces, ensuring full coverage and smooth practice sessions, professionally installed for proper tension and long-lasting strength, making them a reliable and cost-effective choice for custom sports enclosures in Visakhapatnam all year round.",
    readMoreLink: "/services/sportsPracticeNets",
    callNumber: "+919490701200",
  },
  {
    image: "/images/construction-net.webp",
    title: "Construction Safety Nets",
    description:
      "Construction safety nets in Visakhapatnam are essential for keeping workers and pedestrians safe at high-rise and building construction sites, made from strong and flexible HDPE or polypropylene materials that stop falling debris, tools, and materials, built to follow safety standards with high tensile strength and resistance to harsh weather, ideal for big projects, scaffolding, and renovation work, helping reduce accidents and injuries, professionally installed for secure coverage and long-lasting reliability, making them a durable, compliant, and cost-effective safety solution for construction sites in Visakhapatnam.",
    readMoreLink: "/services/constructionSafetyNets",
    callNumber: "+919490701200",
  },
  {
    image: "/balcony/children-safety-net.webp",
    title: "Children Safety Nets",
    description: "Children safety nets in Visakhapatnam are specially designed to protect kids from accidental falls while keeping fresh air and sunlight, made from premium UV-stabilized HDPE material that is soft, flexible, and strong, perfectly fitted for balconies, windows, and stair openings to create a safe barrier without blocking airflow, ideal for apartments and villas to prevent slips and falls and give parents peace of mind, professionally installed with rust-proof hooks and durable ropes for long-lasting support and a neat look, making them a safe and reliable choice for homes in Visakhapatnam.",
    readMoreLink: "/services/childrenSafetyNets",
    callNumber: "+919490701200",
  },
  {
    image: "/balcony/staircase-net.webp",
    title: "Staircase Safety Nets",
    description: "Staircase safety nets in Visakhapatnam are a perfect safety solution for open staircases, railings, and multi-level spaces, helping prevent accidental slips and falls for children, adults, and pets in homes or commercial buildings, made from strong and UV-stabilized HDPE or nylon material that is durable, flexible, and weather-resistant, designed with a neat and transparent finish that matches your interiors without affecting the look, professionally installed with rust-proof fittings for secure and long-lasting protection, making them a reliable and elegant safety choice for homes and buildings in Visakhapatnam.",
    readMoreLink: "/services/staircaseSafetyNets",
    callNumber: "+919490701200",
  },
  {
  image:"/balcony/ductarea-nets.webp",
  title: "Duct Area Safety Nets",
  description:"Duct area safety nets in Visakhapatnam are designed to protect maintenance workers and stop debris or waste from falling into building shafts, made from high-strength UV-stabilized HDPE material that ensures safety and durability even in tough weather conditions, perfect for apartment ducts, ventilation areas, and commercial buildings, helping maintain safety and cleanliness by preventing bird entry and waste buildup, carefully measured and professionally installed by experts for long-lasting performance, making them a reliable and low-maintenance safety solution for duct areas in Visakhapatnam.",
  readMoreLink: "/solutions/duct-area-safety-nets",
  callNumber: "+919490701200",
},
{
  image:"/balcony/openarea-safety-net.webp",
  title: "Open Area Safety Nets",
  description:"Open area safety nets in Visakhapatnam are the perfect solution for securing terraces, rooftops, and other open spaces, made from premium-grade HDPE material that offers high tensile strength and long-lasting durability, acting as a strong barrier against accidental falls and bird entry while allowing free airflow, suitable for both residential and commercial buildings and custom-made to fit any space perfectly, professionally installed by experts to ensure safety without affecting the look of your property, making them a reliable choice for protection and a safe environment in Visakhapatnam.",
  readMoreLink: "/solutions/open-area-safety-nets",
  callNumber: "+919490701200",
},
{
  image:"/images/monkey.jpg",
  title: "Monkey Safety Nets",
  description:"Monkey safety nets in Visakhapatnam provide a reliable and humane solution to stop monkeys from entering balconies, terraces, and open areas, made from heavy-duty UV-stabilized HDPE material that is strong, weather-resistant, and long-lasting, effectively blocking monkeys while still allowing fresh air and natural light, ideal for apartments, villas, schools, and office buildings to prevent damage to plants, clothes, and property, professionally installed for a neat and secure fit without harming animals, making them a safe and dependable choice for a peaceful and clean environment in Visakhapatnam.",
  readMoreLink: "/solutions/monkey-safety-nets",
  callNumber: "+919490701200",
},
{
  image:"/images/industrial-safety.webp",
  title: "Industrial Safety Nets",
  description:"Industrial safety nets in Visakhapatnam are important for factories, warehouses, and production units to protect workers and equipment, made from heavy-duty nylon or polypropylene material that helps prevent accidents caused by falling tools, materials, or debris, designed to meet safety standards and customizable for different industrial needs, resistant to heat, weather, and strong impact for long-lasting performance even in tough conditions, professionally installed to ensure secure coverage and dependable safety, making them a reliable choice for better workplace protection and reduced risks in Visakhapatnam.",
  readMoreLink: "/solutions/industrial-safety-nets",
  callNumber: "+919490701200",
},
];

const testimonials = [
  {
    comment:
      "srinu invisible grills team did an excellent job fixing balcony nets at my apartment. The finish was neat and strong.",
    author: "Srinivas Reddy",
  },
  {
    comment:
      "Very professional and quick service. They installed pigeon safety nets on the same day. Highly recommended!",
    author: "Anitha Krishnan",
  },
  {
    comment:
      "Thanks to srinu invisible grills, my kids can now play safely on the balcony without any worry.",
    author: "Murali Kumar",
  },
  {
    comment:
      "Superb work quality! The team was polite and completed the installation efficiently.",
    author: "Lakshmi Prasad",
  },
  {
    comment:
      "Affordable pricing and professional service. The invisible grills look stylish and safe.",
    author: "Rajesh Nair",
  },
  {
    comment:
      "Quick response and great support. They installed bird protection nets for my kitchen window — perfect fitting.",
    author: "Deepa Chandran",
  },
  {
    comment:
      "Very satisfied with the pigeon net installation. The nets are strong and neatly fitted.",
    author: "Karthik Ramesh",
  },
  {
    comment:
      "Srinu Invisible Grills team arrived on time and completed the work with precision. Highly reliable service!",
    author: "Manoj Kumar",
  },
  {
    comment:
      "Excellent balcony safety nets installation. Looks clean and doesn’t block the view at all.",
    author: "Vijaya Lakshmi",
  },
  {
    comment:
      "They provided strong material and professional fitting. My pets are now completely safe on the balcony.",
    author: "Suresh Babu",
  },
];


const galleryImages = Array.from({ length: 12 }, (_, i) => `/images/gallery_${i + 1}.webp`);

// ---------------- Page ----------------
const HomePage = () => {
  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-[#ffff] to-[#ffff] text-black">
      {/* Hero Section */}
      <section className="relative z-10">
        <HeroSection desktopSlides={desktopSlides} mobileSlides={mobileSlides} />
      </section>

      {/* Safety Solutions */}
      <section className="bg-gradient-to-br from-[#354664] to-[#26395A] text-white py-16">
        <SafetySolutions cards={cardsData} />
      </section>

      <section className="bg-gradient-to-br from-[#354664] to-[#26395A]">
        <Gallery images={galleryImages} />
      </section>


      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection />

      {/* Mission Section */}
      <MissionSection />
    </main>
    </>
  );
};
export default HomePage;
