import React from "react";
import { FaDove, FaShieldAlt, FaTree, FaBlog, FaQuestionCircle,FaBug} from "react-icons/fa";
import { GiBrickWall, GiFactory, GiPoolDive,GiOfficeChair, GiMonkey} from "react-icons/gi";
import { MdPrivacyTip, MdPolicy,MdPets,MdApartment, MdConstruction } from "react-icons/md";
import { FaHome, FaBuilding, FaChild, FaWater } from "react-icons/fa";


import FooterCompanyInfo from "./FooterCompantInfo";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";

interface FooterItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const pigeonBirdNets: FooterItem[] = [
  { name: "Pigeon Safety Nets", icon: <FaDove />, link: "/solutions/pigeon-safety-nets" },
  { name: "Anti Bird Nets", icon: <FaDove />, link: "/solutions/anti-bird-nets" },
  { name: "Bird Nets for Balconies", icon: <FaDove />, link: "/solutions/bird-nets-for-balconies" },
  { name: "Bird Netting Service", icon: <FaDove />, link: "/solutions/bird-netting-service" },
  { name: "Bird Protection Nets", icon: <FaDove />, link: "/solutions/bird-protection-nets" },
  { name: "Pigeon Nets Installation", icon: <FaDove />, link: "/solutions/pigeon-nets-installation" },
  { name: "Pigeon and Bird Spikes", icon: <FaDove />, link: "/solutions/pigeon-bird-spikes" },
  { name: "Shade Nets", icon: <FaShieldAlt />, link: "/solutions/shade-nets" },
  { name: "Nylon Nets", icon: <FaShieldAlt />, link: "/solutions/nylon-nets" },
  { name: "Anti Seagull Nets", icon: <FaShieldAlt />, link: "/solutions/anti-seagull-safety-nets" },
  { name: "Glass Safety Nets", icon: <FaShieldAlt />, link: "/solutions/glass-safety-nets" },
  { name: "HDPE Nets", icon: <FaShieldAlt />, link: "/solutions/hdpe-safety-nets" },
  { name: "Window Safety Nets", icon: <FaShieldAlt />, link: "/solutions/window-safety-nets" },
];

const safetyNets: FooterItem[] = [
  { name: "Building Safety Nets", icon: <GiBrickWall />, link: "/solutions/building-safety-nets" },
  { name: "Car Parking Safety Nets", icon: <FaShieldAlt />, link: "/solutions/car-parking-safety-nets" },
  { name: "Children Safety Nets", icon: <FaShieldAlt />, link: "/solutions/children-safety-nets" },
  { name: "Construction Safety Nets", icon: <FaShieldAlt />, link: "/solutions/construction-safety-nets" },
  { name: "Industrial Safety Nets", icon: <GiFactory />, link: "/solutions/industrial-safety-nets" },
  { name: "Pets Safety Nets", icon: <MdPets />, link: "/solutions/pets-safety-nets" },
  { name: "Swimming Pool Safety Nets", icon: <GiPoolDive />, link: "/solutions/swimming-pool-safety-nets" },
  { name: "Duct Area Safety Nets", icon: <MdConstruction />, link: "/solutions/duct-area-safety-nets" },
  { name: "Open Area Safety Nets", icon: <GiBrickWall />, link: "/solutions/open-area-safety-nets" },
  { name: "Mosquito Safety Nets", icon: <FaBug />, link: "/solutions/mosquito-safety-nets" },
  { name: "Monkey Safety Nets", icon: <GiMonkey />, link: "/solutions/monkey-safety-nets" },
  { name: "Coconut Tree Safety Nets", icon: <FaTree />, link: "/solutions/coconut-tree-safety-nets" },
];

export const invisibleGrills: FooterItem[] = [
  {
    name: "Balcony Invisible Grills",
    icon: <GiOfficeChair />,
    link: "/solutions/balcony-invisible-grills",
  },
  {
    name: "Window Invisible Grills",
    icon: <FaHome />,
    link: "/solutions/window-invisible-grills",
  },
  {
    name: "Apartment Invisible Grills",
    icon: <MdApartment />,
    link: "/solutions/apartment-invisible-grills",
  },
  {
    name: "Building Invisible Grills",
    icon: <FaBuilding />,
    link: "/solutions/building-invisible-grills",
  },
  {
    name: "Children Safety Invisible Grills",
    icon: <FaChild />,
    link: "/solutions/children-safety-invisible-grills",
  },
  {
    name: "Pets Safety Invisible Grills",
    icon: <MdPets />,
    link: "/solutions/pets-safety-invisible-grills",
  },
  {
    name: "Staircase Invisible Grills",
    icon: <FaShieldAlt />,
    link: "/solutions/staircase-invisible-grills",
  },
  {
    name: "Office Invisible Grills",
    icon: <GiOfficeChair />,
    link: "/solutions/office-invisible-grills",
  },
  {
    name: "Industrial Invisible Grills",
    icon: <GiFactory />,
    link: "/solutions/industrial-invisible-grills",
  },
  {
    name: "Swimming Pool Invisible Grills",
    icon: <FaWater />,
    link: "/solutions/swimming-pool-invisible-grills",
  },
];

const resources: FooterItem[] = [
  { name: "Blog", icon: <FaBlog />, link: "/blogs" },
  { name: "FAQs", icon: <FaQuestionCircle />, link: "/faq" },
  { name: "Privacy Policy", icon: <MdPrivacyTip />, link: "/privacy-policy" },
  { name: "Terms & Conditions", icon: <MdPolicy />, link: "/terms-and-conditions" },
];

const Footer: React.FC = () => {
  return (
    <footer
  className="bg-[#26395A] text-gray-200 border-t border-teal-700/40"
  role="contentinfo"
>
  <div className="max-w-7xl mx-auto px-6 py-12">
    
    <FooterCompanyInfo />

    <hr className="my-6 border-gray-600" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <FooterSection
        title="Pigeon & Bird Nets"
        items={pigeonBirdNets}
        iconColor="text-blue-400"
      />
      <FooterSection
        title="Safety Nets"
        items={safetyNets}
        iconColor="text-green-400"
      />
      <FooterSection
        title="Invisible Grills"
        items={invisibleGrills}
        iconColor="text-green-400"
      />
      <FooterSection
        title="Resources"
        items={resources}
        iconColor="text-yellow-400"
      />
    </div>

    <hr className="my-6 border-gray-600" />

    <FooterBottom />
  </div>
</footer>

  );
};

export default Footer;
