import Section from "./Section";
import { skills, work } from "../data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & work">
      <div className="grid border-t border-line sm:grid-cols-2">
        {skills.map((s, i) => (
          <div
            key={s.group}
            className={`border-b border-line py-6 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}`}
          >
            <h3 className="heading text-[1.05rem] text-ink">{s.group}</h3>
            <p className="mt-2 text-slate">{s.items.join(", ")}</p>
          </div>
        ))}
      </div>

      <h3 className="heading mt-16 text-[1.35rem] text-ink">Selected work</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {work.map((w) => (
          <article key={w.title} className="flex flex-col border border-line bg-surface p-6">
            <h4 className="heading text-[1.15rem] text-ink">{w.title}</h4>
            <p className="mt-2 flex-1 text-ink/85">{w.text}</p>
            <p className="mt-4 text-[0.92rem] text-slate">{w.tags.join(" / ")}</p>
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-4 self-start font-semibold text-bronze-ink"
            >
              {w.linkText}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
