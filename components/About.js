import Section from "./Section";
import { about, facts, person } from "../data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[40rem] space-y-5 text-[1.125rem] leading-[1.7] text-ink/85">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <dl className="mt-12 grid max-w-[44rem] border-t border-line">
        {facts.map((f) => (
          <div key={f.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="text-slate">{f.label}</dt>
            <dd className="text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 font-semibold text-bronze-ink">
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
          LinkedIn
        </a>
        <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-link">
          GitHub
        </a>
        <a href={`mailto:${person.email}`} className="text-link">
          {person.email}
        </a>
      </div>
    </Section>
  );
}
