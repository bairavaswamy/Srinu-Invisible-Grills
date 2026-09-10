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
    image: "/home-services/invisible-grills.webp",
    imageAlt: "Slim vertical stainless-steel invisible grill cables across an apartment balcony",
    title: "Invisible Grills",
    description:
      "High-tensile stainless-steel cable systems for balconies and windows, with minimal visual obstruction.",
    href: "/services/invisible-grills",
  },
  {
    image: "/home-services/balcony-safety-nets.webp",
    imageAlt: "White square-mesh safety net enclosing a bright apartment balcony",
    title: "Balcony Safety Nets",
    description:
      "Measured outdoor netting for apartment balconies, children, pets and everyday household safety.",
    href: "/services/balcony-safety-nets",
  },
  {
    image: "/home-services/pigeon-safety-nets.webp",
    imageAlt: "Fine bird-exclusion mesh across a covered balcony with a pigeon outside",
    title: "Pigeon Safety Nets",
    description:
      "Custom net coverage that helps stop pigeon entry while allowing fresh air and daylight into the space.",
    href: "/services/pigeon-safety-nets",
  },
  {
    image: "/home-services/cloth-hangers.webp",
    imageAlt: "Ceiling-mounted pulley drying rods with laundry above a clear balcony floor",
    title: "Cloth Hangers",
    description:
      "Ceiling-mounted pulley drying systems for balconies and utility areas, with easy-to-lower rods that keep floor space clear.",
    href: "/services/cloth-hangers",
  },
  {
    image: "/home-services/anti-bird-spikes.webp",
    imageAlt: "Close-up of anti-bird spike strips fitted along a balcony ledge",
    title: "Anti-Bird Spikes",
    description:
      "Weather-resistant deterrent strips for ledges, parapets and other common bird-perching surfaces.",
    href: "/services/anti-bird-spikes",
  },
  {
    image: "/home-services/children-safety-nets.webp",
    imageAlt: "Fully netted family balcony with a playmat and toys set back from the railing",
    title: "Children Safety Nets",
    description:
      "Protective net barriers for balconies, windows and staircase openings used by families with children.",
    href: "/services/children-safety-nets",
  },
  {
    image: "/home-services/sports-practice-nets.webp",
    imageAlt: "Cricket practice lane enclosed by green sports netting",
    title: "Sports Practice Nets",
    description:
      "Impact-ready practice netting for cricket, football and selected sports areas in schools and properties.",
    href: "/services/sports-practice-nets",
  },
  {
    image: "/home-services/construction-safety-nets.webp",
    imageAlt: "Green debris-control mesh and projecting catch nets on a building under construction",
    title: "Construction Safety Nets",
    description:
      "Heavy-duty perimeter and debris-control netting planned for exposed building elevations and active work areas.",
    href: "/services/construction-safety-nets",
  },
  {
    image: "/home-services/staircase-safety-nets.webp",
    imageAlt: "White safety net secured along the handrail and gaps of an indoor staircase",
    title: "Staircase Safety Nets",
    description:
      "Custom net barriers for open stairwells, railing gaps and landings in homes, schools and commercial spaces.",
    href: "/services/staircase-safety-nets",
  },
  {
    image: "/balcony/ductarea-nets.webp",
    imageAlt: "Installers fitting safety netting along an apartment building duct area",
    title: "Duct Area Safety Nets",
    description:
      "Measured coverage for apartment ducts and shafts that helps control bird entry, debris and exposed openings.",
    href: "/services/duct-area-safety-nets",
  },
  {
    image: "/home-services/open-area-safety-nets.webp",
    imageAlt: "Wide safety net coverage across the open atrium of a residential building",
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
