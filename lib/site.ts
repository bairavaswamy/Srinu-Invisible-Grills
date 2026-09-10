const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Near, Madhurawada",
  addressLocality: "Visakhapatnam",
  addressRegion: "Andhra Pradesh",
  postalCode: "530041",
  addressCountry: "IN",
} as const;

export const siteConfig = {
  name: "Srinu Invisible Grills",
  shortName: "Srinu Invisible Grills",
  domain: "srinuinvisiblegrills.com",
  url: "https://srinuinvisiblegrills.com",
  logo: "/brand/srinu-logo.webp",
  email: "info@srinuinvisiblegrills.com",
  phone: "9490701200",
  phoneInternational: "+919490701200",
  phoneDisplay: "+91 94907 01200",
  whatsappUrl: "https://wa.me/919490701200",
  googleBusinessUrl: "https://maps.app.goo.gl/DB5wiNjFCGWZhwgw5",
  googleBusinessId: "/g/11z8kp00dc",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?cid=1750786741991414550&output=embed",
  address: `${postalAddress.streetAddress}, ${postalAddress.addressLocality}, ${postalAddress.addressRegion} ${postalAddress.postalCode}`,
  postalAddress,
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
  logo: `${siteConfig.url}${siteConfig.logo}`,
  image: `${siteConfig.url}/images/image-slider-2.webp`,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  address: siteConfig.postalAddress,
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
