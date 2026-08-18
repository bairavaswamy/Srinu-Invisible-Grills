import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://srinuinvisiblegrills.com"), 
  title: {
    default: "Srinu Balcony Safety Nets",
    template: "%s | Srinu Balcony Safety Nets",
  },
  description: "A trusted provider of high-quality safety nets designed to ensure security, protect from birds, and enhance safety for kids and construction sites. Offering reliable solutions for a variety of safety needs with professional services.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srinuinvisiblegrills.com",
    siteName: "Srinu Balcony Safety Nets",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const  RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/srinulogo.png" type="image/png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/images/srinulogo.png" sizes="256x256" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;