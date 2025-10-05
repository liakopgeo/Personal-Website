export default function ExperienceCard({ company, role, duration, description }) {
  const bulletPoints = description.split(". ").filter((line) => line.trim() !== "");

  return (
    <div className="bg-[#2c2c2c] shadow-md rounded-2xl p-4 sm:p-6 hover:shadow-xl transition duration-300 flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-bold mb-1 text-[#bf8138]">{role}</h3>
      <h4 className="text-sm sm:text-base font-semibold mb-1 text-gray-200">{company}</h4>
      <p className="text-xs sm:text-sm mb-3 text-gray-400">{duration}</p>
      <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm space-y-1">
        {bulletPoints.map((point, idx) => (
          <li key={idx}>{point.trim()}.</li>
        ))}
      </ul>
    </div>
  );
}
