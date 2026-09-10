export const serviceRoutes = {
  balconySafetyNets: {
    slug: "balcony-safety-nets",
    navLabel: "Balcony Safety Nets",
  },
  invisibleGrills: {
    slug: "invisible-grills",
    navLabel: "Invisible Grills",
  },
  clothHangers: {
    slug: "cloth-hangers",
    navLabel: "Cloth Hangers",
  },
  antiBirdSpikes: {
    slug: "anti-bird-spikes",
    navLabel: "Anti-Bird Spikes",
  },
  pigeonSafetyNets: {
    slug: "pigeon-safety-nets",
    navLabel: "Pigeon Safety Nets",
  },
  sportsPracticeNets: {
    slug: "sports-practice-nets",
    navLabel: "Sports Practice Nets",
  },
  constructionSafetyNets: {
    slug: "construction-safety-nets",
    navLabel: "Construction Safety Nets",
  },
  childrenSafetyNets: {
    slug: "children-safety-nets",
    navLabel: "Children Safety Nets",
  },
  staircaseSafetyNets: {
    slug: "staircase-safety-nets",
    navLabel: "Staircase Safety Nets",
  },
  ductAreaSafetyNets: {
    slug: "duct-area-safety-nets",
    navLabel: "Duct Area Safety Nets",
  },
  openAreaSafetyNets: {
    slug: "open-area-safety-nets",
    navLabel: "Open Area Safety Nets",
  },
};

export const serviceNavItems = Object.values(serviceRoutes).map((service) => ({
  href: `/services/${service.slug}`,
  text: service.navLabel,
}));
