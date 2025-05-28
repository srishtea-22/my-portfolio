import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
    </main>
  );
}
