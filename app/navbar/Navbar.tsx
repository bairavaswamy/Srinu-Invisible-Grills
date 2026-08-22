"use client";

import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="site-header fixed left-0 top-0 z-50 h-[76px] w-full border-b text-white"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <DesktopMenu />

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
