import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
