
export type Service = {
  title: string;
  description: string;
  slug:String;
  image: string;
};

export type ServiceKey =
  | "balcony"
  | "invisible"
  | "spikes"
  | "residential"
  | "sports"
  | "construction"
  | "children"
  | "staircase"
  | "balconySafetyNets"
  | "invisibleGrill"
  |  "birdSpikes"
  | "residentialAndPigeonSafetyNets"
  | "sportsPracticeNets"
  | "constructionSafetyNets"
  | "childrenSafetyNets"
  | "staircaseSafetyNets"
  |"clothHangersService"
;

export const servicesData: Record<ServiceKey, Service> = {
  balcony: {
    title: "Balcony Safety Nets",
    slug:"",
    description:
      "Secure your balcony with our high-strength safety nets designed to prevent accidental falls while keeping your view and airflow untouched. Ideal for apartments and high-rise buildings.",
    image: "/images/balcony-background.webp",
  },

  invisible: {
    title: "Invisible Grills",
    slug:"",
    description:
      "Premium invisible grills made using SS-316 cables for maximum safety with a clean, modern look. Perfect for balconies, windows, and high-rise protection without blocking your view.",
    image: "/images/invisible-grill.webp",
  },

  spikes: {
    title: "Bird Spikes",
    slug:"",
    description:
      "Sturdy and weather-proof bird spikes that stop pigeons from sitting on ledges, AC units, pipelines, and balcony rails—ensuring a cleaner, healthier living environment.",
    image: "/images/images-slider-55.webp",
  },

  residential: {
    title: "Residential Safety Nets",
    slug:"",
    description:
      "Reliable safety nets designed for homes to safeguard open spaces like balconies, windows, ducts, and stairs. Built to withstand outdoor conditions while enhancing safety.",
    image: "/images/residential-net.webp",
  },

  sports: {
    title: "Sports Safety Nets",
    slug:"",
    description:
      "Durable sports practice nets for cricket, football, and other sporting activities. Designed to contain balls, protect surroundings, and create safe training areas.",
    image: "/images/sports-safety.webp",
  },

  construction: {
    title: "Construction Safety Nets",
    slug:"",
    description:
      "Heavy-duty construction safety nets used for preventing debris fall and ensuring worker safety at building sites. Strong, long-lasting, and industry-grade.",
    image: "/images/construction-net.webp",
  },

  children: {
    title: "Children Safety Nets",
    slug:"",
    description:
      "High-quality child safety nets for balconies, windows, and open areas. Prevents kids and pets from slipping through gaps while maintaining a neat appearance.",
    image: "/images/children-safety.webp",
  },

  staircase: {
    title: "Staircase Safety Nets",
    slug:"",
    description:
      "Flexible and secure staircase nets that prevent accidental slips and falls. Suitable for homes, apartments, hostels, and commercial areas.",
    image: "/images/staircase-safety.webp",
  },

  balconySafetyNets: {
    title: "Balcony Safety Nets",
    slug:"",
    description:
      "Specially crafted balcony nets offering long-term protection from falls and pigeon disturbances, providing a safe environment for kids, pets, and families.",
    image: "/images/balcony-background.webp",
  },

  invisibleGrill: {
    title: "Invisible Grills",
    slug:"",
    description:
      "Stylish SS-316 invisible grill solutions that provide invisible protection for windows and balconies while keeping your surroundings visually open and modern.",
    image: "/images/invisible-grill.webp",
  },

  birdSpikes: {
    title: "Bird Spikes",
    slug:"",
    description:
      "Effective anti-bird solution designed to stop pigeons from nesting or sitting on open surfaces. Rust-proof and suitable for all weather conditions.",
    image: "/images/images-slider-55.webp",
  },

  residentialAndPigeonSafetyNets: {
    title: "Residential & Pigeon Safety Nets",
    slug:"",
    description:
      "Protect your home from pigeon intrusion and maintain hygiene with our strong, UV-resistant pigeon control nets suitable for all residential spaces.",
    image: "/images/residential-net.webp",
  },

  sportsPracticeNets: {
    title: "Sports Practice Nets",
    slug:"",
    description:
      "Professional quality nets built for cricket nets, football arenas, and training grounds to ensure safe and uninterrupted sports practice.",
    image: "/images/sports-safety.webp",
  },

  constructionSafetyNets: {
    title: "Construction Safety Nets",
    slug:"",
    description:
      "Industrial-grade nets used to safeguard workers from falls and protect pedestrians from falling objects in construction zones.",
    image: "/images/construction-net.webp",
  },

  childrenSafetyNets: {
    title: "Children Safety Nets",
    slug:"",
    description:
      "Dependable children safety nets ensuring maximum protection in balconies and staircases, preventing accidental slips and offering peace of mind.",
    image: "/images/children-safety.webp",
  },

  staircaseSafetyNets: {
    title: "Staircase Safety Nets",
    slug:"",
    description:
      "Customized staircase safety net solutions designed to protect kids, elderly people, and pets from accidental falls in stairwell areas.",
    image: "/images/staircase.jpg",
  },
  clothHangersService: {
title: "Ceiling Cloth Hangers",
slug:"",
description:
"Space‑saving ceiling cloth hanger systems with smooth pulley operation, ideal for drying clothes neatly in balconies, utility areas, and indoor spaces.",
image: "/images/cloth-hangers.jpg",
},
};
