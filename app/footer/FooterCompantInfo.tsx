import React from "react";

const FooterCompanyInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-2 md:space-y-0 md:space-x-4 py-4">
      
      {/* Brand Name */}
      <h2 className="text-2xl font-bold text-[#E78946] tracking-wide">
        SRINU INVISIBLE GRILLS
      </h2>

      {/* Divider Dot */}
      <span className="hidden md:inline-block text-[#E78946] font-semibold">
        •
      </span>

      {/* Tagline / Description */}
      <p className="text-base max-w-2xl text-gray-100 leading-relaxed">
        Safeguarding homes, offices, and communities with premium safety nets,{" "}
        <span className="text-[#E78946] font-semibold">
          pigeon protection
        </span>{" "}
        solutions, and invisible grills.{" "}
        <span className="text-[#E78946] font-medium">
          Your safety, our priority.
        </span>
      </p>

    </div>
  );
};

export default FooterCompanyInfo;
