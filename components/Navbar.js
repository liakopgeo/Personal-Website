import { useEffect, useState } from "react";
import Image from "next/image";
import { person, site } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "bg-paper/90 backdrop-blur-md border-line" : "bg-paper border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={34} height={35} priority />
          <span className="heading text-[1.05rem] text-ink">{person.name}</span>
        </a>

        <ul className="hidden items-center gap-7 text-[0.95rem] text-slate lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-[3px] bg-ink px-4 py-2 text-[0.92rem] font-semibold text-white transition-colors hover:bg-bronze-ink lg:inline-block"
        >
          View CV
        </a>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 top-0 h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[12px] h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-lg text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href={site.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[3px] bg-ink px-4 py-3 text-center font-semibold text-white"
              >
                View CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
