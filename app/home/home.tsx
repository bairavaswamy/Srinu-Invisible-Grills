import CTASection from "./components/CTASection";
import CoverageSection from "./components/CoverageSection";
import HeroSection from "./components/HeroSection";
import ProjectStrip from "./components/ProjectStrip";
import SafetySolutions from "./components/SafetySolutions";
import ServiceMarquee from "./components/ServiceMarquee";
import TrustProcessSection from "./components/TrustProcessSection";
import type { HomeServiceCard } from "./components/cards";
import type { HomeSlide } from "./components/HeroSlider";

const slides: HomeSlide[] = [
  {
    bg: "/images/image-slider-2.webp",
    title: "Invisible Grills and Safety Nets in Visakhapatnam",
    mobileTitle: "Invisible Grills and Safety Nets",
    subtitle:
      "Measured balcony and window protection designed to preserve airflow, daylight and open views.",
    href: "/services/invisible-grills",
    label: "Invisible Grills",
    imagePosition: "center",
  },
  {
    bg: "/images/image-slider-33.webp",
    title: "Balcony Safety That Fits the Complete Opening",
    subtitle:
      "Custom-fitted nets for apartments, children and pets, installed with secure perimeter fixing.",
    href: "/services/balcony-safety-nets",
    label: "Balcony Safety Nets",
    imagePosition: "center",
  },
  {
    bg: "/images/image-slider-11.webp",
    title: "Cleaner Balconies with Pigeon Protection Nets",
    subtitle:
      "Durable net coverage that helps prevent bird entry while keeping ventilation and natural light.",
    href: "/services/pigeon-safety-nets",
    label: "Pigeon Safety Nets",
    imagePosition: "center",
  },
  {
    bg: "/images/images-slider-55.webp",
    title: "Low-Profile Bird Spikes for Building Ledges",
    subtitle:
      "A humane bird-control option for ledges, parapets, AC units and other common perching surfaces.",
    href: "/services/anti-bird-spikes",
    label: "Anti-Bird Spikes",
    imagePosition: "center",
  },
];

const serviceCards: HomeServiceCard[] = [
  {
    image: "/images/invisble.jpg",
    title: "Invisible Grills",
    description:
      "High-tensile stainless-steel cable systems for balconies and windows, with minimal visual obstruction.",
    href: "/services/invisible-grills",
  },
  {
    image: "/balcony/balcony-net.webp",
    title: "Balcony Safety Nets",
    description:
      "Measured outdoor netting for apartment balconies, children, pets and everyday household safety.",
    href: "/services/balcony-safety-nets",
  },
  {
    image: "/images/residential-net.webp",
    title: "Pigeon Safety Nets",
    description:
      "Custom net coverage that helps stop pigeon entry while allowing fresh air and daylight into the space.",
    href: "/services/pigeon-safety-nets",
  },
  {
    image: "/services/cloth-hangers.webp",
    title: "Cloth Hangers",
    description:
      "Ceiling-mounted pulley drying systems for balconies and utility areas, with easy-to-lower rods that keep floor space clear.",
    href: "/services/cloth-hangers",
  },
  {
    image: "/images/images-slider-55.webp",
    title: "Anti-Bird Spikes",
    description:
      "Weather-resistant deterrent strips for ledges, parapets and other common bird-perching surfaces.",
    href: "/services/anti-bird-spikes",
  },
  {
    image: "/balcony/children-safety-net.webp",
    title: "Children Safety Nets",
    description:
      "Protective net barriers for balconies, windows and staircase openings used by families with children.",
    href: "/services/children-safety-nets",
  },
  {
    image: "/balcony/sports-nets.webp",
    title: "Sports Practice Nets",
    description:
      "Impact-ready practice netting for cricket, football and selected sports areas in schools and properties.",
    href: "/services/sports-practice-nets",
  },
  {
    image: "/images/construction-net.webp",
    title: "Construction Safety Nets",
    description:
      "Heavy-duty perimeter and debris-control netting planned for exposed building elevations and active work areas.",
    href: "/services/construction-safety-nets",
  },
  {
    image: "/balcony/staircase-net.webp",
    title: "Staircase Safety Nets",
    description:
      "Custom net barriers for open stairwells, railing gaps and landings in homes, schools and commercial spaces.",
    href: "/services/staircase-safety-nets",
  },
  {
    image: "/balcony/ductarea-nets.webp",
    title: "Duct Area Safety Nets",
    description:
      "Measured coverage for apartment ducts and shafts that helps control bird entry, debris and exposed openings.",
    href: "/services/duct-area-safety-nets",
  },
  {
    image: "/balcony/openarea-safety-net.webp",
    title: "Open Area Safety Nets",
    description:
      "Weather-ready safety netting for terraces, rooftops and larger openings where broad protection is required.",
    href: "/services/open-area-safety-nets",
  },
];

export default function HomePage() {
  return (
    <main className="site-page min-h-screen pt-[76px]">
      <HeroSection slides={slides} />
      <ServiceMarquee />
      <SafetySolutions cards={serviceCards} />
      <TrustProcessSection />
      <ProjectStrip />
      <CoverageSection />
      <CTASection />
    </main>
  );
}
