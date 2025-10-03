import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg" // place your image in /public
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5"></div>

      {/* Hero Content */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I&apos;m George Liakopoulos
      </h1>

      <p className="text-sm sm:text-base md:text-xl text-white mb-6 max-w-xs sm:max-w-md md:max-w-2xl">
        I&apos;m an Electrical & Computer Engineering graduate from the University of Patras. I love building cool projects!
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-3 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 shadow-lg transition-transform duration-300"
      >
        Explore My Work
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm text-center shadow-xl relative">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-700 mb-6">
              I’m currently building my portfolio. Check back soon!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}




