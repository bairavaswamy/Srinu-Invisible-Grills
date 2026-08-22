import { serviceLocations } from "@/app/data/locations";

export type ServiceLocation = (typeof serviceLocations)[number];

export const areaServices = [
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    installationName: "Invisible Grill Installation",
    image: "/images/invisble.jpg",
    imageAlt: "Invisible grill cables installed across a residential balcony",
    summary:
      "Custom stainless-steel cable systems for balconies and windows that improve safety while preserving daylight, airflow and open views.",
    benefits: [
      "High-tensile stainless-steel cables",
      "Clear views with minimal visual obstruction",
      "Custom spacing for balconies and windows",
      "Neat, weather-resistant fittings",
    ],
    applications: [
      "Apartment balconies",
      "Residential windows",
      "Staircase openings",
      "High-rise buildings",
    ],
  },
  {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    installationName: "Balcony Safety Net Installation",
    image: "/balcony/balcony-net.webp",
    imageAlt: "Safety net fitted across an apartment balcony",
    summary:
      "Measured balcony netting for homes and apartments, designed to add practical protection for children and pets without blocking ventilation.",
    benefits: [
      "Measured for the complete balcony opening",
      "Allows natural light and ventilation",
      "Suitable for children and household pets",
      "Durable mesh with secure perimeter fittings",
    ],
    applications: [
      "Apartment balconies",
      "Balcony railing gaps",
      "Villa terraces",
      "Residential open areas",
    ],
  },
] as const;

export type AreaService = (typeof areaServices)[number];
export type AreaServiceSlug = AreaService["slug"];

export const getServiceLocation = (slug: string) =>
  serviceLocations.find((location) => location.slug === slug);

export const getAreaService = (slug: string) =>
  areaServices.find((service) => service.slug === slug);

export const getServiceLocationPath = (locationSlug: string) =>
  `/service-areas/${locationSlug}`;

export const getServiceAreaPath = (
  locationSlug: string,
  serviceSlug: AreaServiceSlug,
) => `/service-areas/${locationSlug}/${serviceSlug}`;

export const getServiceAreaTitle = (
  location: ServiceLocation,
  service: AreaService,
) => `${service.installationName} in ${location.label}, Visakhapatnam`;

export const getServiceAreaDescription = (
  location: ServiceLocation,
  service: AreaService,
) =>
  `Professional ${service.installationName.toLowerCase()} in ${location.label}, Visakhapatnam. Custom measurement, durable materials and expert fitting for your property.`;
