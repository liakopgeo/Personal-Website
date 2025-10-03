import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="text-sm sm:text-base text-center text-gray-700 mb-8">
          Feel free to reach out! I’m open to opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6 text-center">
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-sm sm:text-base">liakopgeo@gmail.com</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-sm sm:text-base">+30 6948334710</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-sm sm:text-base">Patras, Greece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
