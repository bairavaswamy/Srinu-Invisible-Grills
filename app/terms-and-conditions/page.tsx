"use client";

import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#354664]  text-white py-18 px-5 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10  text-[#E78946] bg-clip-text">
          Terms and Conditions
        </h1>

        <div className="max-w-5xl mx-auto space-y-8 leading-relaxed">
          <p>
            Welcome to <strong>Srinu Balcony Safety Nets</strong>. By accessing or using our website, 
            you agree to comply with the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">1. Services</h2>
          <p>
            We provide installation and maintenance of pigeon nets, balcony nets, invisible grills, 
            and related safety net products. All installations are carried out by trained professionals.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">2. Pricing and Payment</h2>
          <p>
            Prices displayed are approximate and may vary based on location, size, and materials. 
            Final quotations are provided after on-site inspection or confirmed customer request.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">3. Appointments and Installation</h2>
          <p>
            Customers can schedule installation through our contact number or website form. 
            We aim to deliver services promptly but are not responsible for delays caused by external factors like weather or access restrictions.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">4. Warranty and Guarantee</h2>
          <p>
            Our products come with a warranty depending on the material (typically 3–7 years). 
            Damage caused by misuse, external tampering, or natural disasters is not covered.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">5. Intellectual Property</h2>
          <p>
            All website content, including text, images, graphics, and logos, is owned by Srinu Balcony Safety Nets 
            and protected under copyright laws. Reuse without permission is prohibited.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">6. Limitation of Liability</h2>
          <p>
            Srinu Balcony Safety Nets is not liable for indirect or incidental damages resulting from 
            service use, website errors, or delayed installations.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">7. Updates to Terms</h2>
          <p>
            We may modify these Terms and Conditions at any time without prior notice. 
            The updated version will be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold  text-[#E78946]">8. Contact</h2>
          <p>
            For any concerns about our terms, please reach out at{" "}
            <a href="mailto:servanienterprise@gmail.com" className=" text-[#E78946] underline">
              servanienterprise@gmail.com
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
