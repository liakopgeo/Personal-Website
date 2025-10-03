import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* --- Background Image --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"   // <-- your uploaded image in /public
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* --- Overlay for readability --- */}
      <div className="absolute inset-0 bg-black/40 -z-5"></div>

      {/* --- Hero Content --- */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeInDown">
        Hi, I&apos;m George Liakopoulos
      </h1>

      <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fadeIn">
        I&apos;m an Electrical & Computer Engineering graduate from the University of Patras. I love building cool projects and solving challenging problems!
      </p>

      <a
        href="#projects"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 shadow-lg transition-transform duration-300 animate-fadeInDelay"
      >
        Explore My Work
      </a>

      {/* --- Tailwind Animations --- */}
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

        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
        .animate-fadeInDelay {
          animation: fadeInDelay 2s ease forwards;
        }
      `}</style>
    </section>
  );
}

