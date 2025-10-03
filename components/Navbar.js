import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuLinks = ["home", "about", "experience", "contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer hover:text-indigo-600 transition">
          George Liakopoulos
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="capitalize hover:text-indigo-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/GeorgeLiakopoulosCV.pdf"
          download
          className="hidden md:inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
        >
          <span className="block rounded-md px-4 py-2 bg-black text-white font-semibold text-sm">
            Resume
          </span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {menuLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="capitalize hover:text-indigo-600 transition">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/GeorgeLiakopoulosCV.pdf"
              download
              className="rounded-md px-4 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
