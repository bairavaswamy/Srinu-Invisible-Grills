import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceLocations } from "@/app/data/locations";
import ServiceAreaContent from "@/app/service-areas/ServiceAreaContent";
import {
  areaServices,
  getAreaService,
  getServiceAreaDescription,
  getServiceAreaPath,
  getServiceAreaTitle,
  getServiceLocation,
} from "@/app/service-areas/serviceAreaData";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ location: string; service: string }>;
};

export const generateStaticParams = () =>
  serviceLocations.flatMap((location) =>
    areaServices.map((service) => ({
      location: location.slug,
      service: service.slug,
    })),
  );

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locationSlug, service: serviceSlug } = await params;
  const location = getServiceLocation(locationSlug);
  const service = getAreaService(serviceSlug);

  if (!location || !service) {
    return {
      title: "Service Area Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = getServiceAreaTitle(location, service);
  const description = getServiceAreaDescription(location, service);
  const canonicalUrl = `${siteConfig.url}${getServiceAreaPath(location.slug, service.slug)}`;
  const imageUrl = `${siteConfig.url}${service.image}`;

  return {
    title: {
      absolute: `${service.installationName} in ${location.label}, Vizag | Srinu`,
    },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url: canonicalUrl,
      title,
      description,
      images: [{ url: imageUrl, alt: `${service.name} in ${location.label}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { location: locationSlug, service: serviceSlug } = await params;
  const location = getServiceLocation(locationSlug);
  const service = getAreaService(serviceSlug);

  if (!location || !service) notFound();

  return <ServiceAreaContent location={location} service={service} />;
}
