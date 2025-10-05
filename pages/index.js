import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>George Liakopoulos | Portfolio</title>  {/* Tab name */}
        <link rel="icon" href="/logo.png" />       {/* Tab logo */}
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

