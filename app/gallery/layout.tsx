import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Invisible Grill & Safety Net Gallery | Srinu" },
  description:
    "View completed invisible grill, balcony safety net, pigeon net, and home-safety installations in Visakhapatnam.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
