import Image from "next/image";
import { person, site } from "../data/profile";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-graphite text-white">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2.4rem,5.5vw,4.2rem)] text-white">Get in touch</h2>
            <p className="mt-5 max-w-md text-[1.1rem] text-white/70">
              The quickest way to reach me is by email, or send me a message on LinkedIn.
            </p>
            <a
              href={`mailto:${person.email}`}
              className="mt-8 inline-block break-all text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold text-white underline decoration-bronze decoration-2 underline-offset-[10px] transition-colors hover:text-[#e7c79f]"
            >
              {person.email}
            </a>
          </div>

          <dl className="self-end lg:col-span-5">
            {[
              { label: "LinkedIn", value: "George Liakopoulos", href: person.linkedin },
              { label: "GitHub", value: "liakopgeo", href: person.github },
              { label: "CV", value: "View as PDF", href: site.cvPath },
              { label: "Location", value: person.location },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-[7rem_1fr] border-b border-graphite-line py-3.5 first:border-t">
                <dt className="text-white/55">{row.label}</dt>
                <dd>
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-link text-white">
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-white">{row.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 flex items-center gap-3 border-t border-graphite-line pt-6 text-[0.9rem] text-white/50">
          <Image src="/logo.png" alt="" width={22} height={23} className="opacity-80 brightness-[1.6]" />
          <span>© {year} {person.name}</span>
        </div>
      </div>
    </footer>
  );
}
