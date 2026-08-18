'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contactUs', label: 'CONTACT US' },
];

const serviceLinks = [
  { href: '/services/balcony', text: 'Balcony Safety Nets' },
  { href: '/services/invisible', text: 'Invisible Grills' },
  { href: '/services/spikes', text: 'Bird Spikes' },
  { href: '/services/residential', text: 'Residential Safety Nets' },
  { href: '/services/sports', text: 'Sports Safety Nets' },
  { href: '/services/construction', text: 'Construction Safety Nets' },
];

export default function DesktopMenu() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => pathname === path;

  const handleMouseEnter = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setIsDropdownOpen(false), 150); // slight delay
    setHoverTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
    };
  }, [hoverTimer]);

  return (
    <ul className="hidden md:flex space-x-6 items-center font-medium relative text-white">
      {links.map((link) => (
        <li key={link.href} className="relative">
          <Link
            href={link.href}
            className={`px-2 py-1 transition-all duration-300 ${
              isActive(link.href)
                ? 'text-[#E78946] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#E78946] after:rounded-full'
                : 'hover:text-[#E78946]'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}

      {/* SERVICES DROPDOWN */}
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`px-2 py-1 transition-all duration-300 ${
            pathname.startsWith('/services')
              ? 'text-[#E78946] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-amber-400 after:rounded-full'
              : 'hover:text-[#E78946]'
          }`}
        >
          SERVICES
        </button>

        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 w-64 bg-[#354664] text-white rounded-xl shadow-lg border border-[#E78946]/20 overflow-hidden z-50">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-[#354664] text-white font-semibold'
                      : 'hover:bg-[#354664] hover:text-[#e78946]'
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}
