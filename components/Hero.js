import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/50 -z-5"></div>

      <div
        className="absolute bottom-0 left-0 w-full h-[45vh] sm:h-[50vh] md:h-[55vh] 
        bg-gradient-to-b from-transparent via-white/30 via-50% to-white z-0"
      ></div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 relative z-10 drop-shadow-lg">
        Hi, I&apos;m George Liakopoulos
      </h1>

      <p className="text-sm sm:text-base md:text-xl text-white mb-6 max-w-xs sm:max-w-md md:max-w-2xl relative z-10 drop-shadow-md">
        I&apos;m an Electrical & Computer Engineering graduate from the University of Patras.
        I love building cool projects!
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-3 sm:px-6 py-2 sm:py-3 rounded-md border-2 border-[#bf8138] bg-white text-[#434343] font-semibold hover:opacity-90 transition relative z-10"
      >
        Explore My Work
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm text-center shadow-xl relative">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-700 mb-6">
              I’m currently building my portfolio. Check back soon!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-md border-2 border-[#bf8138] bg-white text-[#434343] font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}









