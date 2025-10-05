import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-visible"
    >
      {/* --- Background Image with Darker Gradient Overlay --- */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/home-bg.jpg" // Ensure the image is in public/
          alt="Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="z-0"
          priority
        />
        {/* Darker gradient overlay from 50% black to full black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10"></div>
      </div>

      {/* --- Hero Name --- */}
      <h1 className="relative z-20 text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent animate-gradient leading-[1.1] sm:leading-[1.2] md:leading-[1.2]">
        George Liakopoulos
      </h1>

      {/* --- Hero Description --- */}
      <p className="relative z-20 text-sm sm:text-base md:text-xl text-gray-200 mb-6 max-w-xs sm:max-w-md md:max-w-2xl drop-shadow-md">
        I&apos;m an Electrical & Computer Engineering graduate.
        Explore my portfolio!
      </p>

      {/* --- Explore Button --- */}
      <button
        onClick={() => {
          const experienceSection = document.getElementById("experience");
          if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="relative z-20 px-3 sm:px-6 py-2 sm:py-3 rounded-md border-2 border-[#bf8138] bg-gray-800 text-gray-200 font-semibold hover:opacity-90 transition"
      >
        Explore My Work
      </button>
    </section>
  );
}
