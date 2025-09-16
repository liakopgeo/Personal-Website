import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">George</div>

        {/* Menu + Resume Button */}
        <div className="flex items-center space-x-6">
          {/* Menu Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-indigo-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-indigo-600 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-600 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Resume Button */}
          <a
            href="/GeorgeLiakopoulosCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
          >
            <span className="block rounded-md px-4 py-2 bg-black text-white font-semibold text-sm">
              Resume
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
