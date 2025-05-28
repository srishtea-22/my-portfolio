'use client'

import { useEffect, useState } from "react"
import {motion, useSpring, useTransform, useScroll} from 'framer-motion'
import { Anton } from "next/font/google"
import { Unbounded } from 'next/font/google'
const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' })
const unbounded = Unbounded({subsets: ['latin'], weight: '400', display: 'swap'})

export default function HeroSection() {

const [opacity, setOpacity] = useState(0.6);
const {scrollY: motionScrollY} = useScroll();

const backgroundY = useTransform(motionScrollY, (value) => value * 0.5);
const smoothBackgroundY = useSpring(backgroundY, { stiffness: 50, damping: 20 });

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const easedOpacity = Math.min(1, Math.pow(scrollY / 300, 1.5)); 
    setOpacity(easedOpacity);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const lines = [
  "             I'm a full-stack developer ",
  "based in Bengaluru and a second",
  "year Information Science and",
  "Engineering student at NMIT. I",
  "enjoy reading, drawing, and diving ",
  "into history in my free time."
];
const duration = 0.5;
const gap = 0.01;
    return (
      <motion.section className="relative min-h-[140vh] bg-cover bg-top" style={{ backgroundImage: "url('/hero-image.png')" , backgroundPositionY: smoothBackgroundY}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"
          style={{ opacity }}
        />
        <div className="absolute inset-0 flex flex-col text-white transition duration-300 py-40 px-6 md:py-50 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className={`${anton.className} text-5xl sm:text-7xl md:text-9xl leading-tight`}>
              <div><motion.div
                initial={{y: '100%', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8}}
              >SHRISTY
                </motion.div></div>
              <div><motion.div
                initial={{y: '100%', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.3}}
              >CHAUDHARY
                </motion.div></div>
            </div>
            <div className={`${unbounded.className} max-w-md text-base sm:text-xl md:text-3xl`}>
              <div className="md:-ml-40">
                {lines.map((line, i) => (
                  <motion.div
                    key={i}
                    style={{ overflow: 'hidden', whiteSpace: 'pre' }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration, ease: 'easeInOut', delay: i * (duration + gap) }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div id="skills" className="flex items-center justify-center relative z-10 mt-80 mt-20 sm:mt-40 md:mt-80">
            <p className={`${unbounded.className} text-3xl sm:text-4xl md:text-5xl`}>SKILLS</p>
          </div>
        </div>
      </motion.section>
    )
}