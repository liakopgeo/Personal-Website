import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white shadow-lg rounded-2xl p-8 md:p-12">
          
          {/* --- Description LEFT --- */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi! I'm George, an Electrical & Computer Engineering graduate from the University of Patras,
              passionate about programming, technology, and creating impactful solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I have hands-on experience from my time serving in the Hellenic Army IT Research Office and
              working as an Audio Visual Support Technician at the University of Patras Conference & Cultural Center.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In my free time, I enjoy learning about new technologies, experimenting with personal projects,
              and finding ways to improve user experience through thoughtful design and clean code.
            </p>

            {/* --- Social Links --- */}
            <div className="mt-6 flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/george-liakopoulos-a6a3b3364/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 transition"
              >
                <Linkedin size={28} />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/liakopgeo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900 transition"
              >
                <Github size={28} />
                <span className="font-medium">View GitHub</span>
              </a>
            </div>
          </div>

          {/* --- Photo RIGHT --- */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="My Photo"
              width={250}
              height={250}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
