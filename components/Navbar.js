import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* --- Logo (clickable, links to #home) --- */}
        <a href="#home" className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Place logo.png inside /public
            alt="George Liakopoulos Logo"
            width={45}
            height={45}
            className="rounded-md hover:opacity-80 transition"
          />
        </a>

        {/* --- Desktop Menu --- */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <li><a href="#home" className="hover:text-indigo-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
          <li><a href="#experience" className="hover:text-indigo-600 transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>

        {/* --- Resume Button (Desktop) --- */}
        <a
          href="/GeorgeLiakopoulosCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
        >
          <span className="block rounded-md px-4 py-2 bg-black text-white font-semibold text-sm">
            Resume
          </span>
        </a>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">About</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">Experience</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600 transition">Contact</a></li>
            <li>
              <a
                href="/GeorgeLiakopoulos_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
              >
                <span className="block rounded-md px-4 py-2 bg-black text-white font-semibold text-sm">
                  Resume
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
