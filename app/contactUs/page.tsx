import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import ContactForm from "./formValidation";
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyicons/stickyIcons";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      {/* Main Section */}
      <div className="w-full min-h-screen bg-[#354664] flex flex-col items-center py-20 px-6 mt-16 text-amber-50 relative overflow-hidden">
        {/* Decorative golden glow */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Heading */}
        <div className="relative z-10 max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-[#E78946] bg-clip-text text-transparent drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg text-amber-100/90 leading-relaxed">
            Have questions or need help? We’re always happy to assist.
            Reach out to us and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Left Section - Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-amber-100/20 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-[#E78946] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5 text-amber-50/90 text-[15px] md:text-base">
              <p className="flex gap-3 items-start">
                <ImLocation2 className="text-amber-300 mt-1" size={22} />
                <span>
                  <strong>Address:</strong> Road No-2,Opp.old ACB Office, Hill View Doctors Colony, 
                  <br /> Seethammadara,Visakhapatnam,A.P,530013
                </span>
              </p>
              <p className="flex gap-3 items-center">
                <FiPhoneCall className="text-amber-300" size={22} />
                <span>
                  <strong>Phone:</strong> +91 9490701200
                </span>
              </p>
              <p className="flex gap-3 items-center">
                <AiOutlineMail className="text-amber-300" size={22} />
                <span>
                  <strong>Email:</strong> srinuinvisiblegrills@gmail.com
                </span>
              </p>
              <p className="flex gap-3 items-start">
                <RiTimeLine className="text-amber-300" size={22} />
                <span>
                  <strong>Hours:</strong> Mon - Sat (9:00 AM - 7:00 PM)
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#E78946] mb-3">
                Follow Us
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 text-amber-100/90">
                <a
                  href="https://www.facebook.com/srinuinvisiblegrills"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-amber-300 transition"
                >
                  <FaFacebook size={22} /> Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-amber-300 transition"
                >
                  <FaTwitter size={22} /> Twitter
                </a>
                <a
                  href="https://www.instagram.com/srinuinvisiblegrills"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-amber-300 transition"
                >
                  <FaInstagram size={22} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-amber-100/20">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="relative z-10 max-w-6xl w-full mt-16">
  <h2 className="text-2xl font-bold text-center text-[#E78946] mb-6">
    Find Us Here
  </h2>

  <div className="rounded-2xl overflow-hidden border-2 border-amber-200/40 shadow-lg">
    <iframe
      title="Srinu Balcony Safety Nets"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.710217137112!2d83.28094711487387!3d17.755624588160527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3930f3d851eb0f%3A0x59a27daaf31134b9!2sHill%20View%20Doctors%20Colony%2C%20Seethammadhara%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530013!5e0!3m2!1sen!2sin!4v1706718370000!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full rounded-2xl"
    ></iframe>
  </div>

  {/* Optional: Add a direct "Get Directions" button below */}
  <div className="text-center mt-4">
    <a
       href="https://www.google.com/maps/dir/?api=1&destination=17.7458650,83.3141989" 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#E78946] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all"
    >
      📍 Get Directions
    </a>
  </div>
</div>


        {/* CTA Section */}
        <div className="relative z-10 mt-16 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-200 mb-4">
            We’re Here to Help You
          </h2>
          <p className="text-amber-100/80 mb-6 leading-relaxed">
            Whether it’s safety nets, pigeon protection, or invisible grills – 
            we’re just one message away from making your space safer and cleaner.
          </p>
          <a
            href="tel:+919490701200"
            className="inline-block px-8 py-3 rounded-full font-bold text-white
            bg-[#E78946] shadow-lg
            hover:scale-105 hover:shadow-amber-200/40 transition-transform duration-300"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default ContactUs;
