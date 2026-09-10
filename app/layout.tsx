import "./globals.css";
import type { Metadata, Viewport } from "next";
import { localBusinessSchema, siteConfig } from "@/lib/site";
import { getGoogleTagManagerConfig } from "@/lib/google-tag-manager";

const googleTagManager = getGoogleTagManagerConfig(process.env.NEXT_PUBLIC_GTM_ID);

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
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
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

export const viewport: Viewport = {
  themeColor: "#061a3a",
  colorScheme: "light",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <head>
        {googleTagManager && (
          <script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{ __html: googleTagManager.script }}
          />
        )}
      </head>
      <body className="bg-[var(--background-main)] text-[var(--text-primary)] antialiased">
        {googleTagManager && (
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={googleTagManager.noScriptUrl}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
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
