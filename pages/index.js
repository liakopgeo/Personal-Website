import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
