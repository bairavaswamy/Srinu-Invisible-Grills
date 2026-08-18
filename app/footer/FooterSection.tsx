import React from "react";
import Link from "next/link";

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface FooterSectionProps {
  title: string;
  items: FooterItem[];
  iconColor?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  iconColor = "text-[#E78946]",
}) => {
  const sectionId =
    title.replace(/\s+/g, "-").toLowerCase() + "-heading";

  return (
    <section aria-labelledby={sectionId} className="text-gray-100">
      
      {/* Section Title */}
      <h3
        id={sectionId}
        className="text-lg text-[#E78946] font-semibold mb-3 tracking-wide"
      >
        {title}
      </h3>

      {/* Footer Links */}
      <ul className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1"
          >
            {/* Icon */}
            <span
              className={`${iconColor} text-base`}
              aria-hidden="true"
            >
              {item.icon}
            </span>

            {/* Link */}
            <Link
              href={item.link}
              className="hover:text-[#E78946] focus:outline-none focus:ring-2 focus:ring-[#E78946] focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default FooterSection;
