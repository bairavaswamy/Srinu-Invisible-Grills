import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions | Srinu Invisible Grills" },
  description: `Review the terms for quotations, site measurements, installation services, customer responsibilities, warranties and website use from ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/terms-and-conditions` },
};

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="site-page min-h-screen px-5 py-18 md:px-16">
        <h1 className="mb-10 text-center text-4xl font-extrabold md:text-5xl">
          Terms and Conditions
        </h1>

        <div className="max-w-5xl mx-auto space-y-8 leading-relaxed">
          <p>
            Welcome to <strong>Srinu Invisible Grills</strong>. By accessing or using our website,
            you agree to comply with the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold">1. Services</h2>
          <p>
            We provide installation and maintenance of pigeon nets, balcony nets, invisible grills, 
            and related safety net products. All installations are carried out by trained professionals.
          </p>

          <h2 className="text-2xl font-semibold">2. Pricing and Payment</h2>
          <p>
            Prices displayed are approximate and may vary based on location, size, and materials. 
            Final quotations are provided after on-site inspection or confirmed customer request.
          </p>

          <h2 className="text-2xl font-semibold">3. Appointments and Installation</h2>
          <p>
            Customers can schedule installation through our contact number or website form. 
            We aim to deliver services promptly but are not responsible for delays caused by external factors like weather or access restrictions.
          </p>

          <h2 className="text-2xl font-semibold">4. Warranty and Guarantee</h2>
          <p>
            Our products come with a warranty depending on the material (typically 3–7 years). 
            Damage caused by misuse, external tampering, or natural disasters is not covered.
          </p>

          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p>
            All website content, including text, images, graphics, and logos, is owned by Srinu Invisible Grills
            and protected under copyright laws. Reuse without permission is prohibited.
          </p>

          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            Srinu Invisible Grills is not liable for indirect or incidental damages resulting from
            service use, website errors, or delayed installations.
          </p>

          <h2 className="text-2xl font-semibold">7. Updates to Terms</h2>
          <p>
            We may modify these Terms and Conditions at any time without prior notice. 
            The updated version will be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold">8. Contact</h2>
          <p>
            For any concerns about our terms, please reach out at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-[var(--brand-ocean)] underline">
              {siteConfig.email}
            </a>.
          </p>
        </div>
      </div>
      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
