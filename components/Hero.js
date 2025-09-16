import React from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m George</h1>
      <p className="text-xl text-gray-700 mb-8">
        I&apos;m an ECE graduate from the University of Patras. I love building cool projects!
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Explore My Work
      </a>
    </section>
  );
}
