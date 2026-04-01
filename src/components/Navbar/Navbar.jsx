import React, { useState } from "react";
import { Logs, ShoppingBag, X } from "lucide-react";
import Cart from "../Cart/Cart";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const toggleCart = () => setOpenCart((prev) => !prev);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="relative flex justify-between items-center px-10 py-2.5 bg-pink-500 z-40">
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {openMenu ? <X size={24} /> : <Logs size={24} />}
        </button>

        <h1 className="font-medium text-xl">
          <span className="text-amber-400">Medi</span>
          <span className="text-white">Cine</span>
        </h1>

        {/* Mobile Menu */}
        <ul
          className={`
          absolute top-full left-0 w-full flex flex-col px-8 gap-4 text-white font-medium 
          bg-amber-400 overflow-hidden transition-all duration-300 ease-in-out md:hidden z-50
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

        <div className="flex items-center">
          <button onClick={toggleCart} className="relative p-2">
            <ShoppingBag className="text-white cursor-pointer hover:scale-110 transition-transform" />
            {/* Optional: Small badge for items */}
            <span className="absolute top-0 right-0 bg-amber-400 text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>
      </nav>

      {/* --- Shopping Cart Sidebar Design --- */}

      {/* 1. Dark Overlay (Backdrop) */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${openCart ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleCart}
      ></div>

      {/* 2. Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transition-transform duration-300 ease-in-out transform ${openCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between py-2.5 px-6 bg-pink-500">
          <h1 className="font-medium text-xl">
            <span className="text-amber-400">Medi</span>
            <span className="text-white">Cine</span>
          </h1>
          <button
            onClick={toggleCart}
            className="p-2 rounded-full transition-colors text-white"
          >
            <X size={24} className="cursor-pointer" />
          </button>
        </div>

        {/* Content Area - Using your Cart design but styled for a sidebar */}
        <div className="overflow-y-auto h-[calc(100vh-200px)] p-6 ">
          <div className="flex justify-between items-center">
            <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
                alt="product"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex justify-between items-start gap-10">
                <h3 className="text-sm font-bold text-gray-800">
                  Nike Air Max Pulse
                </h3>
                <p className="text-sm font-semibold text-gray-900">$160.00</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-6 mt-6">
                <div className="flex items-center border border-gray-200 rounded-full px-4 py-1 gap-4">
                  <button className="text-gray-400 hover:text-black font-medium">
                    —
                  </button>
                  <span className="text-sm font-bold w-4 text-center">1</span>
                  <button className="text-gray-400 hover:text-black font-medium">
                    +
                  </button>
                </div>
                <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Total and Button */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="text-xl font-bold">$335.00</span>
          </div>
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl transition-all shadow-md">
            Check Out Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
