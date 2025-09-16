import React from "react";

export default function ExperienceCard({ company, role, duration, description }) {
  // Split the description into sentences
  const bulletPoints = description.split(". ").filter(line => line.trim() !== "");

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{role}</h3>
      <h4 className="text-indigo-600 font-semibold mb-1">{company}</h4>
      <p className="text-gray-500 text-sm mb-4">{duration}</p>
      <ul className="list-disc list-inside text-gray-700">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point.trim()}.</li>
        ))}
      </ul>
    </div>
  );
}
