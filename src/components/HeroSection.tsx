'use client'

import { useEffect, useState } from "react"
import { Anton } from "next/font/google"
import { Unbounded } from 'next/font/google'
const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' })
const unbounded = Unbounded({subsets: ['latin'], weight: '400', display: 'swap'})

export default function HeroSection() {

const [opacity, setOpacity] = useState(0.6);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const easedOpacity = Math.min(1, Math.pow(scrollY / 300, 1.5)); 
    setOpacity(easedOpacity);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


    return (
      <section className="relative min-h-[150vh] bg-cover bg-top" style={{ backgroundImage: "url('/hero-image.png')" }}>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"
          style={{ opacity }}
        />
        <div className="absolute inset-0 flex flex-col text-white transition duration-300 py-40 px-6 md:py-64 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className={`${anton.className} text-5xl sm:text-7xl md:text-9xl leading-tight`}>
              <div>SHRISTY</div>
              <div>CHAUDHARY</div>
            </div>
            <div className={`${unbounded.className} max-w-md text-lg sm:text-xl md:text-3xl`}>
              I&apos;m a full-stack developer based in Bengaluru and a second-year Information Science and Engineering student at NMIT. I enjoy reading, drawing, and diving into history in my free time.
            </div>
          </div>
        </div>
      </section>

    )
}