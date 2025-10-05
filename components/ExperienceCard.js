export default function ExperienceCard({ company, role, duration, description, companyColor }) {
  return (
    <div className="bg-[#2c2c2c] shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold mb-1 text-gray-100">{role}</h3>
      <p className="text-sm font-medium mb-1" style={{ color: companyColor }}>
        {company}
      </p>
      <p className="text-xs text-gray-400 mb-3">{duration}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
