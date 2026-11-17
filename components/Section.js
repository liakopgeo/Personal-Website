export default function Section({ id, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`border-b border-line ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="heading text-[clamp(1.85rem,3.4vw,2.5rem)] text-ink">{title}</h2>
            {intro && <p className="mt-3 max-w-xs text-slate">{intro}</p>}
          </div>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
