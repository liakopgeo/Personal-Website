import React from "react";
import Image from "next/image";

export default function Hero() {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5"></div>

      {/* Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[45vh] sm:h-[50vh] md:h-[55vh] 
        bg-gradient-to-b from-transparent via-white/30 via-50% to-white z-0"
      ></div>

      {/* Hero Content */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 relative z-10 drop-shadow-lg">
        Hi, I&apos;m George Liakopoulos
      </h1>

      <p className="text-sm sm:text-base md:text-xl text-white mb-6 max-w-xs sm:max-w-md md:max-w-2xl relative z-10 drop-shadow-md">
        I&apos;m an Electrical & Computer Engineering graduate from the University of Patras.
        I love building cool projects!
      </p>

      {/* Explore Button */}
      <button
        onClick={scrollToExperience}
        className="px-3 sm:px-6 py-2 sm:py-3 rounded-md border-2 border-[#bf8138] bg-white text-[#434343] font-semibold hover:opacity-90 transition relative z-10"
      >
        Explore My Work
      </button>
    </section>
  );
}













