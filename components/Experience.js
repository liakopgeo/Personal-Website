import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      company: "Hellenic Army, Ioannina",
      role: "IT Research Office",
      duration: "Jan 2025 – Aug 2025",
      description:
        "Served in the IT Research Office of the Electronic Warfare Signal Corps. Gained hands-on experience in technical troubleshooting and operational support within a demanding environment. Awarded the honorary rank of Lance Corporal by the Brigade Commander in recognition of performance and contribution"
    },
    {
      company: "Conference & Cultural Center, University of Patras",
      role: "Audio Visual Support Technician",
      duration: "Oct 2017 - Oct 2025",
      description:
        "Supported cultural events, ensured seamless technical support during live and hybrid presentations. Managed livestreaming and digital broadcasting. Collaborated with event organizers and technical teams to deliver professional-quality online event experiences"
    },
    {
      company: "University of Patras",
      role: "Integrated Master, Electrical & Computer Engineering",
      duration: "Oct 2016 - Jun 2024",
      description:
        "Courses: Algorithms, OOP in Python, Operating Systems, Data Structures, Networking. Thesis: Implementation of an IEEE 802.11-like MAC protocol using Arduino and nRF24L01 modules. Grade: 6.69/10"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-100">
          Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              {...exp}
              companyColor="#bf8138" // <— Pass the gold color to ExperienceCard
            />
          ))}
        </div>
      </div>
    </section>
  );
}
