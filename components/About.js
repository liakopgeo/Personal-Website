import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10 bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">About Me</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              Hi! I&apos;m George Liakopoulos, an Electrical & Computer Engineering graduate from the University of Patras...
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              I have hands-on experience from my time serving in the Hellenic Army IT Research Office...
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              In my free time, I enjoy learning about new technologies, experimenting with personal projects...
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a href="https://www.linkedin.com/in/george-liakopoulos-a6a3b3364/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition text-sm sm:text-base">
                <Linkedin size={24} /> LinkedIn
              </a>
              <a href="https://github.com/liakopgeo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition text-sm sm:text-base">
                <Github size={24} /> GitHub
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[250px]">
            <Image src="/profile.jpg" alt="My Photo" width={250} height={250} className="rounded-2xl shadow-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


