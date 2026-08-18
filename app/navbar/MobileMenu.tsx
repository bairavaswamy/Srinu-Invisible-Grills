"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Info,
  CalendarCheck,
  PhoneCall,
  Layers3,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  MapPin,
  ThumbsUp,
} from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { balconylocalServices, invisibleGrillLocalService, nearMeBalconyServices,nearMeInvisibleServices } from "./constants";

/* ================= MAIN LINKS ================= */
const links = [
  { href: "/", label: "HOME", icon: <Home size={18} /> },
  { href: "/about", label: "ABOUT", icon: <Info size={18} /> },
  { href: "/gallery", label: "GALLERY", icon: <CalendarCheck size={18} /> },
  { href: "/contactUs", label: "CONTACT US", icon: <PhoneCall size={18} /> },
];

const serviceLinks = [ 
  { href: "/services/balcony", text: "Balcony Safety Nets" },
   { href: "/services/invisible", text: "Invisible Grills" },
    { href: "/services/spikes", text: "Bird Spikes" }, 
    { href: "/services/residential", text: "Residential Safety Nets" },
     { href: "/services/sports", text: "Sports Safety Nets" },
      { href: "/services/construction", text: "Construction Safety Nets" },
      { href: "/solutions/pigeon-safety-nets", text: "Pigeon Safety Nets" },
      { href: "/solutions/anti-bird-nets", text: "Anti Bird Nets" },
      { href: "/solutions/bird-nets-for-balconies", text: "Bird Nets for Balconies" },
      { href: "/solutions/pigeon-bird-spikes", text: "Bird Spikes" },
      { href: "/solutions/building-safety-nets", text: "Building Safety Nets" },
      { href: "/solutions/industrial-safety-nets", text: "Industrial Safety Nets" },
     ];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const pathname = usePathname();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNearMeBalcony, setOpenNearMeBalcony] = useState(false);
  const [openNearMeInvisible, setOpenNearMeInvisible] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" 
        aria-label="Open navigation menu">
        {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 px-6 py-6 z-40 md:hidden
        bg-gradient-to-br from-[#354664] to-[#26395A] text-white overflow-y-auto pb-24
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="relative flex flex-col items-center mb-5">
          <div className="relative w-20 h-20 mb-2">
            <Image
              src="/srinulogo.webp"
              alt="Servani Logo"
              fill
              className="object-contain rounded-full"
            />
          </div>

          <h1 className="text-md font-extrabold text-[#E78946]">
            SRINU INVISIBLE GRILLS
          </h1>

          <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0" 
            aria-label="Close navigation menu">
            <RxCross2 size={24} />
          </button>
        </div>

        <hr className="border-white/20 mb-3" />

        {/* Main Links */}
        <div className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                isActive(link.href)
                  ? "bg-white/15 text-[#E78946]"
                  : "hover:bg-white/10 hover:text-[#E78946]"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        <hr className="border-white/25 my-4" />

        {/* Services */}
        <div>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Layers3 size={18} />
              Services
            </div>
            {isServicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {isServicesOpen && (
            <ul className="ml-4 mt-2 space-y-1">

              {/* BALCONY DROPDOWN */}
              <li>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "balcony" ? null : "balcony")
                  }
                  className="flex w-full justify-between px-3 py-2 hover:text-[#E78946]"
                >
                  Balcony Safety Nets
                  {openDropdown === "balcony" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openDropdown === "balcony" && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {balconylocalServices.map((b) => (
                      <li key={b.href}>
                        <Link
                          href={b.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm hover:text-[#E78946]"
                        >
                          {b.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* INVISIBLE GRILLS DROPDOWN */}
              <li>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "invisible" ? null : "invisible")
                  }
                  className="flex w-full justify-between px-3 py-2 hover:text-[#E78946]"
                >
                  Invisible Grills
                  {openDropdown === "invisible" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openDropdown === "invisible" && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {invisibleGrillLocalService.map((g) => (
                      <li key={g.href}>
                        <Link
                          href={g.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm hover:text-[#E78946]"
                        >
                          {g.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

                            {/* NEAR ME BALCONY DROPDOWN */}
              <li>
                <button
                  onClick={() => setOpenNearMeBalcony(!openNearMeBalcony)}
                  className="flex w-full justify-between px-3 py-2 hover:text-[#E78946]"
                >
                  Near Me Balcony Nets
                  {openNearMeBalcony ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {openNearMeBalcony && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {nearMeBalconyServices.map((b) => (
                      <li key={b.href}>
                        <Link
                          href={b.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 text-sm hover:text-[#E78946]"
                        >
                          {b.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

                              {/* NEAR ME INVISIBLE GRILLS DROPDOWN */}
                <li>
                  <button
                    onClick={() => setOpenNearMeInvisible(!openNearMeInvisible)}
                    className="flex w-full justify-between px-3 py-2 hover:text-[#E78946]"
                  >
                    Near Me Invisible Grills
                    {openNearMeInvisible ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {openNearMeInvisible && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {nearMeInvisibleServices.map((g) => (
                        <li key={g.href}>
                          <Link
                            href={g.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-1 text-sm hover:text-[#E78946]"
                          >
                            {g.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

              {/* NORMAL LINKS */}
              {serviceLinks
                .filter((s) => s.href)
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 hover:text-[#E78946]"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-10 border-t border-white/20 pt-5 text-center space-y-3 text-sm text-[#E78946]">
          <div className="flex justify-center gap-2">
            <ShieldCheck size={16} /> Certified Quality Materials
          </div>
          <div className="flex justify-center gap-2">
            <MapPin size={16} /> Serving All Major Cities
          </div>
          <div className="flex justify-center gap-2">
            <ThumbsUp size={16} /> 5K+ Happy Customers
          </div>
        </div>
      </div>
    </>
  );
}
