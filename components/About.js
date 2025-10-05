import { Linkedin, Github } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-black min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-[#2a2a2a] shadow-lg rounded-2xl p-6 sm:p-8 md:p-12 h-full">
          
          {/* --- Text Column --- */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-100">About Me</h2>
              <p className="text-sm sm:text-base text-gray-300 mb-3">
                Hi! I&apos;m George Liakopoulos, an Electrical & Computer Engineering graduate from the University of Patras.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-3">
                I have hands-on experience from my time serving in the Hellenic Army IT Research Office. I have also developped various skills as an Audio Visual support technician in the Conference and Cultural Center of the University of Patras.
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                In my free time, I enjoy learning about new technologies and experimenting with personal projects.
              </p>
            </div>

            {/* --- Social Buttons pinned at bottom-left --- */}
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/in/george-liakopoulos-a6a3b3364/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#bf8138] hover:text-[#d89d5d] transition text-sm sm:text-base"
              >
                <Linkedin size={24} /> LinkedIn
              </a>
              <a
                href="https://github.com/liakopgeo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-gray-400 transition text-sm sm:text-base"
              >
                <Github size={24} /> GitHub
              </a>
            </div>
          </div>

          {/* --- Image Column (Rounded and Zoomed-Out Photo) --- */}
          <div className="flex-shrink-0 w-full sm:w-[250px] flex justify-center items-center">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden shadow-md border-2 border-[#bf8138]">
              <img
                src="/profile.png"
                alt="My Photo"
                className="w-full h-full object-contain scale-320"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
