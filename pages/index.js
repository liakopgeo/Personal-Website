import Head from "next/head";
import ScrollProgressBar from "../components/ScrollProgressBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>George Liakopoulos | Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

