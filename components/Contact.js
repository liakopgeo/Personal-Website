export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-100">
          Contact Me
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-300 mb-8">
          Feel free to reach out! I’m open to opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6 text-center">
          {/* --- Email --- */}
          <div className="bg-[#2c2c2c] shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Email</h3>
            <a
              href="mailto:liakopgeo@gmail.com"
              className="text-sm sm:text-base text-gray-300 hover:text-[#bf8138] transition"
            >
              liakopgeo@gmail.com
            </a>
          </div>

          {/* --- Phone --- */}
          <div className="bg-[#2c2c2c] shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Phone</h3>
            <a
              href="tel:+306948334710"
              className="text-sm sm:text-base text-gray-300 hover:text-[#bf8138] transition"
            >
              +30 6948334710
            </a>
          </div>

          {/* --- Location --- */}
          <div className="bg-[#2c2c2c] shadow-md rounded-xl p-4 sm:p-6 flex-1 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Location</h3>
            <p className="text-sm sm:text-base text-gray-300">Patras, Greece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
