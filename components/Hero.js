import Image from "next/image";
import { person, site, status } from "../data/profile";

// Geometry for the portrait frame, drawn on a 460 x 520 canvas.
// It echoes the GL logo: an open charcoal diamond with a bronze chevron inside.
const C = { x: 225, y: 250, r: 215 };
const at = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const top = [C.x, C.y - C.r];
const right = [C.x + C.r, C.y];
const bottom = [C.x, C.y + C.r];
const left = [C.x - C.r, C.y];
const gapEnd = at(top, right, 0.45);
const gapStart = at(top, right, 0.18);
const diamondPath = `M${gapEnd} L${right} L${bottom} L${left} L${top} L${gapStart}`;
const chevronPath = "M150 160 L60 250 L150 340";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7">
          <p className="rise mb-5 text-[1.05rem] font-semibold text-bronze-ink" style={{ animationDelay: "0.1s" }}>
            {person.role}
          </p>
          <h1 className="display rise text-[clamp(2.9rem,7.2vw,5.6rem)] text-ink" style={{ animationDelay: "0.2s" }}>
            George
            <br />
            Liakopoulos
          </h1>
          <p className="rise mt-7 max-w-[34rem] text-[1.15rem] leading-[1.6] text-slate" style={{ animationDelay: "0.35s" }}>
            {person.intro}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.5s" }}>
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] bg-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-bronze-ink"
            >
              View CV
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] border border-ink/25 px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink"
            >
              LinkedIn profile
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[460/520] w-full max-w-[380px] lg:max-w-[440px]">
            <svg viewBox="0 0 460 520" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d={diamondPath}
                fill="none"
                stroke="#4a4f57"
                strokeWidth="11"
                strokeLinejoin="miter"
                className="draw"
                style={{ "--len": 1140 }}
              />
              <path
                d={chevronPath}
                fill="none"
                stroke="var(--color-bronze)"
                strokeWidth="11"
                strokeLinejoin="miter"
                className="draw"
                style={{ "--len": 260, animationDelay: "0.6s" }}
              />
            </svg>
            <div className="absolute left-[32.6%] top-[23%] h-[69.2%] w-[58.7%] overflow-hidden border border-line bg-white shadow-[0_24px_48px_-28px_rgba(23,32,43,0.45)]">
              <Image
                src={person.photo}
                alt={`Portrait of ${person.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 260px, 60vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl gap-y-5 px-5 py-6 sm:grid-cols-3 sm:gap-x-8 sm:px-8">
          {status.map((s) => (
            <div key={s.label}>
              <dt className="text-[0.85rem] text-slate">{s.label}</dt>
              <dd className="mt-0.5 font-semibold text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
