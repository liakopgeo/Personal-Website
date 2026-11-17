import Section from "./Section";
import { education, activities } from "../data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-10">
        {education.map((e) => (
          <article key={e.degree} className="max-w-[42rem]">
            <p className="text-[0.95rem] text-slate">
              {e.start} – {e.end}
            </p>
            <h3 className="heading mt-1 text-[1.35rem] text-ink">{e.degree}</h3>
            <p className="mt-0.5 font-medium text-bronze-ink">{e.school}</p>
            <p className="mt-3 text-ink/85">{e.text}</p>
            {e.extra && <p className="mt-2 text-slate">{e.extra}</p>}
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-[42rem] border-t border-line pt-8">
        <h3 className="heading text-[1.1rem] text-ink">Activities</h3>
        <ul className="mt-3 space-y-2.5 text-ink/85">
          {activities.map((a) => (
            <li key={a} className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-line">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
