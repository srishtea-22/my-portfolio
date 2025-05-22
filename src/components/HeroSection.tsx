'use client'

import { useEffect, useState } from "react"

export default function HeroSection() {

const [opacity, setOpacity] = useState(0.4);

useEffect(() => {
  const handleScroll = () => {
      const scrollY = window.scrollY;
  const easedOpacity = Math.min(1, 0.4 + Math.pow(scrollY / 1000, 1.5));
    setOpacity(easedOpacity);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


    return (
        <section className="relative min-h-[150vh] bg-cover bg-top" style={{ backgroundImage: "url('/starrynight.png')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition duration-300 " style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
                <h1>Shristy Chaudhary</h1>
            </div>
        </section>
    )
}