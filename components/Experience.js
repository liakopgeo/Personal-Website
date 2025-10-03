import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      company: "Hellenic Army, Ioannina",
      role: "IT Research Office",
      duration: "Jan 2025 – Aug 2025",
      description: "Served in the IT Research Office of the Electronic Warfare Signal Corps.\
      Gained hands-on experience in technical troubleshooting and operational support within \
      a demanding environment. Awarded the honorary rank of Lance Corporal by the Brigade \
      Commander in recognition of outstanding performance and contribution. "
    },
    {
      company: "Conference & Cultural Center, University of Patras",
      role: "Audio Visual Support Technician",
      duration: "Oct 2017 - Oct 2025",
      description: "Supported cultural events, ensuring seamless \
      technical support during live and hybrid presentations. Performed inspection, maintenance,\
      and troubleshooting of AV equipment, computers, and network connectivity to guarantee reliable\
      performance.Managed livestreaming and digital broadcasting (including YouTube), delivering \
      professional-quality online event experiences. Collaborated with event organizers, speakers, \
      and technical teams to fulfill requirements and adapt quickly to challenges in fast-paced environments. \
      Developed strong skills in technical problem-solving, teamwork, and customer-focused service, contributing\
      to the smooth and impactful execution of events. "
    },
    {
      company: "University of Patras",
      role: "Integrated Master, Electrical & Computer Engineering",
      duration: "Oct 2016- Jun 2024",
      description: "Courses: Algorithms, OOP in Python, Operating Systems, Data Structures, Data \
      Mining, C, Computer & Network Security, Information Retrieval,\
      Communications Networks, Databases, Web Programming.\
      Thesis: Implementation of an IEEE 802.11-like MAC sublayer protocol for\
      networking automation applications using Arduino and nRF24L01 modules\
      (Grade 10/10).\
      Grade: 6.69/10"
    }
    // Add more experiences here
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
