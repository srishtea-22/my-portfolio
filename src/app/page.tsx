import HeroSection from "@/sections/Hero/HeroSection";
import Navbar from "@/components/Navbar";
import Skills from "@/sections/Skills/Skills";
import Projects from "@/sections/Projects/Projects";
import Footer from "@/sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
