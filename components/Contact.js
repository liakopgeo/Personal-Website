import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center !text-black">
          Contact Me
        </h2>
        <p className="text-sm sm:text-base text-center mb-8 !text-black">
          Feel free to reach out! I’m open to opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6 text-center">
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2 !text-black">Email</h3>
            <p className="text-sm sm:text-base !text-black">
              <a href="mailto:liakopgeo@gmail.com" className="hover:underline">
                liakopgeo@gmail.com
              </a>
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2 !text-black">Phone</h3>
            <p className="text-sm sm:text-base !text-black">
              <a href="tel:+306948334710" className="hover:underline">
                +30 6948334710
              </a>
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2 !text-black">Location</h3>
            <p className="text-sm sm:text-base !text-black">Patras, Greece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
