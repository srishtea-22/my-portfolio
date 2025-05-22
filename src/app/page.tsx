import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <div className="h-screen bg-black flex items-center justify-center">
  <p className="text-xl">Section 1</p>
</div>

<div className="h-screen bg-gray-200 flex items-center justify-center">
  <p className="text-xl">Section 2</p>
</div>

<div className="h-screen bg-gray-300 flex items-center justify-center">
  <p className="text-xl">Section 3</p>
</div>
    </main>
  );
}
