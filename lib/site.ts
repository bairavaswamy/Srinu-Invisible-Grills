export const siteConfig = {
  name: "Srinu Invisible Grills",
  shortName: "Srinu Invisible Grills",
  domain: "srinuinvisiblegrills.com",
  url: "https://srinuinvisiblegrills.com",
  email: "info@srinuinvisiblegrills.com",
  phone: "9490701200",
  phoneInternational: "+919490701200",
  phoneDisplay: "+91 94907 01200",
  whatsappUrl: "https://wa.me/919490701200",
  googleBusinessUrl: "https://share.google/WmajBOX1fozpAs6Y8",
  googleBusinessId: "/g/11z8kp00dc",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Srinu%20Invisible%20Grills%2C%20Road%20No.%202%2C%20Hill%20View%20Doctors%20Colony%2C%20Seethammadhara%2C%20Visakhapatnam%20530013&output=embed",
  address:
    "Road No. 2, opposite Old ACB Office, Hill View Doctors Colony, Seethammadhara, Visakhapatnam, Andhra Pradesh 530013",
  social: {
    facebook: "https://www.facebook.com/srinuinvisiblegrills",
    instagram: "https://www.instagram.com/srinuinvisiblegrills",
  },
} as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/srinulogo.webp`,
  image: `${siteConfig.url}/images/image-slider-2.webp`,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Road No. 2, opposite Old ACB Office, Hill View Doctors Colony",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    postalCode: "530013",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Visakhapatnam",
  },
  hasMap: siteConfig.googleBusinessUrl,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Google Business Profile kgmid",
    value: siteConfig.googleBusinessId,
  },
  sameAs: [
    siteConfig.googleBusinessUrl,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
  ],
} as const;
