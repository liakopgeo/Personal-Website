import Section from "./Section";
import { experience } from "../data/profile";

function Diamond({ filled }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute left-0 top-[0.55rem] block h-[11px] w-[11px] -translate-x-1/2 rotate-45 border-[2.5px] ${
        filled ? "border-bronze bg-bronze" : "border-[#4a4f57] bg-paper"
      }`}
    />
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Over nine years of hands-on technical work, from live events to IT and systems support.">
      <ol className="relative ml-[5px] border-l-2 border-line">
        {experience.map((job) => (
          <li key={job.role} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <Diamond filled={job.end === "Present"} />
            <p className="text-[0.95rem] text-slate">
              <time>{job.start}</time> – <time>{job.end}</time>
              {job.note && <span> &nbsp;/&nbsp; {job.note}</span>}
            </p>
            <h3 className="heading mt-1 text-[1.35rem] text-ink">{job.role}</h3>
            <p className="mt-0.5 font-medium text-bronze-ink">
              {job.org}, {job.place}
            </p>
            <ul className="mt-4 max-w-[40rem] space-y-2.5 text-ink/85">
              {job.points.map((pt) => (
                <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-line">
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
