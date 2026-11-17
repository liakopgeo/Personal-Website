import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { person, site } from "../data/profile";

const title = "George Liakopoulos | IT & Systems Support Engineer";
const description =
  "Electrical & computer engineer in Patras, Greece. IT & Systems Support Engineer at the Institute of Biomedical Technology (INBIT) and MBA student at the University of Patras.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  url: site.url,
  image: `${site.url}${person.photo}`,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Patras", addressCountry: "GR" },
  worksFor: { "@type": "Organization", name: "Institute of Biomedical Technology (INBIT)" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Patras" },
  sameAs: [person.linkedin, person.github],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${site.url}/`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${site.url}/`} />
        <meta property="og:image" content={`${site.url}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site.url}/og-image.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
