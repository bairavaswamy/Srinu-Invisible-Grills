import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Invisible Grill & Safety Net FAQs | Srinu" },
  description:
    "Answers about invisible grills, balcony safety nets, materials, installation, maintenance, pricing, and service areas.",
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
