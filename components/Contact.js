import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="text-center text-gray-700 mb-8">
          Feel free to reach out! I’m open to opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex flex-col md:flex-row md:justify-center gap-6 text-center">
          <div className="bg-white shadow-md rounded-lg p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>liakopgeo@gmail.com</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+30 6948334710 </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>Patras, Greece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
