// app/localservices/[slug]/page.tsx

import Image from "next/image";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import type { Metadata } from "next";

/* ================= LOCATIONS ================= */
const allowedLocations = [
  "anakapalle",
  "lankelapalem",
  "kurmannapalem",
  "gajuwaka",
  "autonagar",
  "nad",
  "sriharipuram",
  "seethammadhara",
  "dwarakanagar",
  "mvp-colony",
  "madhurawada",
  "pendurti",
  "simhachalam",
  "bheemunipatnam",
  "marripalem",
  "aganampudi",
  "parawada",
  "tuni",
  "annavaram",
  "rajamandri",
  "muralinagar",
  "purna-market",
  "siripuram",
];

/* ================= STATIC GENERATION ================= */
export function generateStaticParams() {
  return allowedLocations.map(loc => ({
    slug: `invisible-grills-${loc}`,
  }));
}

/* ================= TYPES ================= */
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ================= HELPERS ================= */
function extractLocation(slug: string): string {
  return slug.replace("invisible-grills-", "");
}

function formatLocation(location: string): string {
  return location
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* ================= SEO ================= */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const location = formatLocation(extractLocation(slug));
  const url = `https://srinuinvisiblegrills.com/localservices/${slug}`;

  return {
    title: `Invisible Grill Installation in ${location}, Vizag`,
    description: `Affordable Invisible Grill installation in ${location}, Visakhapatnam. Balcony, window & child safety grills.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Invisible Grill Installation in ${location}`,
      description: `Professional Invisible Grill services in ${location}, Vizag.`,
      url,
      type: "website",
    },
  };
}

/* ================= PAGE ================= */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const location = formatLocation(extractLocation(slug));


  const pageUrl = `https://yourdomain.com/localservices/${slug}`;


  
  /* ================= JSON LD ================= */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Invisible Grills Vizag",
    url: pageUrl,
    areaServed: location,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "India",
    },
    telephone: "+919490701200",
    serviceOffered: {
      "@type": "Service",
      name: `Invisible Grill Installation in ${location}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you provide Invisible Grill installation in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we provide professional Invisible Grill installation services across ${location} with same-day availability.`,
        },
      },
      {
        "@type": "Question",
        name: `How much does Invisible Grill installation cost in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The cost depends on area size and grill type. We offer affordable pricing with free inspection.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you provide warranty for Invisible Grills?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we provide 2 to 5 years warranty on all Invisible Grill installations.`,
        },
      },
    ],
  };


  return (
    <>
      <Navbar />

          {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#354664] max-w-6xl mx-auto px-4 py-10 space-y-14">

  {/* ================= HERO ================= */}
  <section>
    <h1 className="text-4xl text-[#E78946] font-bold mb-4 mt-15">
      Invisible Grills Installation in {location}
    </h1>

    <p className="text-white text-lg">
      Looking for reliable Invisible Grills installation in {location}, Visakhapatnam?
      We provide premium quality invisible grill for balconies, windows, terraces and open areas.
      Our expert team ensures fast, clean and long-lasting installation in {location}.
    </p>
  </section>

  {/* ================= TRUST HIGHLIGHTS ================= */}
  <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      "10+ Years Experience",
      `Local Technicians in ${location}`,
      "100% Invisible grills",
      "Same Day Installation",
    ].map(item => (
      <div key={item} className="bg-gray-100 p-4 rounded-xl text-center font-semibold">
        {item}
      </div>
    ))}
  </section>

  {/* ================= IMAGE ================= */}
  <Image
    src="/services/invisible-grill-in-vizag.webp"
    alt={`Invisible Grills Installation in ${location}`}
    width={800}
    height={500}
    className="rounded-xl"
    priority
  />

  {/* ================= SERVICES ================= */}
  <section>
    <h2 className=" text-[#E78946] text-2xl font-semibold mb-6">
      Our Invisible Grill Services in {location}
    </h2>

    <ul className="grid md:grid-cols-2 gap-4 text-white list-disc pl-5">
      <li>Invisible Grillss installation in {location}</li>
      <li>Anti bird pigeon nets for homes & apartments</li>
      <li>Window Invisible Grills for child protection</li>
      <li>Terrace protection nets</li>
      <li>AC outdoor unit bird protection nets</li>
      <li>Building Invisible Grills for high-rise apartments</li>
    </ul>
  </section>

  {/* ================= PROCESS ================= */}
  <section>
    <h2 className="text-[#E78946]  text-2xl font-semibold mb-6">
      Our Installation Process in {location}
    </h2>

    <ol className="space-y-3 list-decimal pl-6 text-white">
      <li>Free site inspection at your location in {location}</li>
      <li>Exact measurement & net type selection</li>
      <li>Professional installation by trained technicians</li>
      <li>Final safety & quality check</li>
    </ol>
  </section>

  {/* ================= WHY CHOOSE US ================= */}
  <section>
    <h2 className="text-2xl text-[#E78946] font-semibold mb-6">Why Choose Us</h2>

    <ul className="grid md:grid-cols-2 gap-4 text-white">
      <li>✔ UV stabilized HDPE nets for long life</li>
      <li>✔ Weather resistant & rust-proof fittings</li>
      <li>✔ Experienced local team in {location}</li>
      <li>✔ 1000+ happy customers across Vizag</li>
      <li>✔ Affordable pricing with warranty</li>
      <li>✔ Clean & damage-free installation</li>
    </ul>
  </section>

  {/* ================= LOCAL FAQ ================= */}
  <section>
    <h2 className="text-[#E78946] text-2xl font-semibold mb-6">
      Frequently Asked Questions – {location}
    </h2>

    <div className="space-y-5 text-white">
      <div>
        <strong>Q. Do you provide Invisible Grills installation in {location}?</strong>
        <p>
          Yes, we provide professional Invisible Grills installation services across {location} 
          with same-day or next-day availability.
        </p>
      </div>

      <div>
        <strong>Q. How much does invisble grill installation cost in {location}?</strong>
        <p>
          The price depends on area size and grill type. We offer affordable pricing with free inspection in {location}.
        </p>
      </div>

      <div>
        <strong>Q. Are your nets safe for birds and pets?</strong>
        <p>
          Yes, all our nets installed in {location} are 100% bird-friendly and safe for pets and children.
        </p>
      </div>

      <div>
        <strong>Q. How long does installation take in {location}?</strong>
        <p>
          Most installations in {location} are completed within 1–2 hours depending on the balcony size.
        </p>
      </div>

      <div>
        <strong>Q. Do you provide warranty for Invisible Grills in {location}?</strong>
        <p>
          Yes, we provide 2 to 5 years warranty on all Invisible Grills installed in {location}.
        </p>
      </div>
    </div>
  </section>

  {/* ================= CTA ================= */}
  <section className="bg-gray-600 text-[#E78946] p-10 rounded-2xl text-center">
    <h2 className="text-3xl font-bold mb-4">
      Book Free Invisible Grill Inspection in {location}
    </h2>

    <p className="mb-6 text-white">
      Call now for fast and affordable Invisible Grills installation in {location}, Visakhapatnam.
    </p>

    <a
      href="tel:+919490701200"
      className="bg-white text-[#E78946] px-8 py-3 rounded-xl font-semibold inline-block"
    >
      Call Now
    </a>
  </section>

</main>


      <Footer />
    </>
  );
}
