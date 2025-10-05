import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Increased py from 3 → 5 for taller navbar */}

        {/* --- Logo --- */}
        <a href="#home" className="flex items-center space-x-2">
          <Image
            src="/GLlogo.png"
            alt="George Liakopoulos Logo"
            width={50}
            height={50}
            className="rounded-md hover:opacity-80 transition"
          />
        </a>

        {/* --- Desktop Menu --- */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-200 font-semibold text-lg sm:text-xl">
          {/* Increased font size to lg → sm:text-xl, and font-weight to font-semibold */}
          <li><a href="#home" className="hover:text-[#bf8138] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#bf8138] transition">About</a></li>
          <li><a href="#experience" className="hover:text-[#bf8138] transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-[#bf8138] transition">Contact</a></li>
        </ul>

        {/* --- Resume Button (Desktop) --- */}
        <a
          href="/GeorgeLiakopoulos_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-md px-4 py-2 border-2 border-[#bf8138] bg-gray-900 text-gray-200 font-semibold text-base sm:text-lg hover:opacity-90 transition"
        >
          View Resume
        </a>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-200 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-200 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-200 transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-lg border-t border-gray-800">
          <ul className="flex flex-col items-center py-5 space-y-4 text-gray-200 font-semibold text-lg">
            {/* Increased font size and bold for mobile menu too */}
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#bf8138] transition">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#bf8138] transition">About</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-[#bf8138] transition">Experience</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#bf8138] transition">Contact</a></li>
            <li>
              <a
                href="/GeorgeLiakopoulos_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md px-4 py-2 border-2 border-[#bf8138] bg-gray-900 text-gray-200 font-semibold text-base sm:text-lg hover:opacity-90 transition"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
