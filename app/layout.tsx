import "./globals.css";
import type { Metadata } from "next";
import { localBusinessSchema, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Srinu Invisible Grills | Safety Nets in Visakhapatnam",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional invisible grills, balcony safety nets, pigeon nets, and child-safety installations across Visakhapatnam.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/srinulogo.webp",
    apple: "/srinulogo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/image-slider-11.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} home safety installation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="bg-[var(--background-main)] text-[var(--text-primary)] antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
