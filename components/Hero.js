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
          src="/hero-bg.jpg" // put your image in /public
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-5"></div>

      {/* Hero Content */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeInDown">
        Hi, I&apos;m George Liakopoulos
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xs sm:max-w-md md:max-w-2xl animate-fadeIn">
        I&apos;m an Electrical & Computer Engineering graduate from the University of Patras. I love building cool projects and solving challenging problems!
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 shadow-lg transition-transform duration-300 animate-fadeInDelay"
      >
        Explore My Work
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl relative">
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

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeInDelay {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
        .animate-fadeIn { animation: fadeIn 1.5s ease forwards; }
        .animate-fadeInDelay { animation: fadeInDelay 2s ease forwards; }
      `}</style>
    </section>
  );
}



