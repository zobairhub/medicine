import React, { useState } from "react";
import { Logs, ShoppingBag, X } from "lucide-react"; // Added X for a better toggle UI
import Cart from "../Cart/Cart";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <>
      <nav className="relative flex justify-between items-center px-10 py-2.5 bg-pink-500 z-50">
        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {/* Toggle icon between Logs and X for better UX */}
          {openMenu ? <X size={24} /> : <Logs size={24} />}
        </button>

        {/* Brand */}
        <h1 className="font-medium text-xl">
          <span className="text-amber-400">Medi</span>
          <span className="text-white">Cine</span>
        </h1>

        {/* Mobile Menu */}
        <ul
          className={`
          absolute top-full left-0 w-full flex flex-col px-8 gap-4 text-white font-medium 
          bg-amber-400 overflow-hidden transition-all duration-300 ease-in-out md:hidden
          ${openMenu ? "max-h-60 py-6 opacity-100 shadow-lg" : "max-h-0 py-0 opacity-0"}
        `}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpenMenu(false)}
                className="block py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center">
          <button aria-label="Shopping Bag">
            <ShoppingBag className="text-white cursor-pointer hover:scale-110 transition-transform" />
          </button>
        </div>
      </nav>
      <Cart></Cart>
    </>
  );
};

export default Navbar;
