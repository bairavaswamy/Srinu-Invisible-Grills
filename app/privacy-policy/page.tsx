"use client";

import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#354664] text-white py-16 px-5 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#E78946]">
          Privacy Policy
        </h1>

        <div className="max-w-5xl mx-auto space-y-8 leading-relaxed">
          <p>
            At <strong>Srinu Balcony Safety Nets</strong>, your privacy is our top priority. 
            We are committed to protecting your personal information and ensuring a safe browsing experience.
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">1. Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, phone number, 
            and location when you request a quotation or contact us. 
            We may also collect non-personal data like browser type and site usage for improvement.
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">2. How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, provide installation services, 
            improve our website, and share updates about our products and offers (with your consent).
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">3. Data Protection</h2>
          <p>
            We use secure systems and encrypted connections to protect your personal data 
            from unauthorized access, modification, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">4. Cookies Policy</h2>
          <p>
            Our site uses cookies to improve performance and user experience. 
            You may choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">5. Third-Party Services</h2>
          <p>
            We may use trusted third-party tools (like Google Analytics or Ads) to analyze website traffic 
            or show relevant advertisements. These providers follow strict privacy guidelines.
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">6. Your Consent</h2>
          <p>
            By using our website, you consent to our Privacy Policy and terms of data handling as outlined here.
          </p>

          <h2 className="text-2xl font-semibold text-[#E78946]">7. Contact Us</h2>
          <p>
            For any questions about our Privacy Policy, please contact us at{" "}
            <a href="mailto:srinuinvisiblegrills@gamil.com" className="text-[#E78946] underline">
              srinuinvisiblegrills@gamil.com
            </a>.
          </p>
        </div>
      </div>
      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
