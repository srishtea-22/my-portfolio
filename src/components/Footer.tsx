'use client'

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform, useScroll} from 'framer-motion'
import AnimatedButton from "./AnimatedButton"
import { Anton } from "next/font/google"
import { Unbounded } from 'next/font/google'
const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' })
const unbounded = Unbounded({subsets: ['latin'], weight: '400', display: 'swap'})

export default function Footer() {
  const [opacity, setOpacity] = useState(0.6);
  const { scrollY: motionScrollY } = useScroll();

  const backgroundY = useTransform(motionScrollY, (value) => -value * 0.5);
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

  return (
    <motion.footer
      className="relative min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-image.png')", backgroundPositionY: smoothBackgroundY }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" style={{ opacity }}></div>
      </div>

      <div className="relative z-10 grid grid-rows-[auto_auto] md:grid-cols-[auto_1fr] items-center">
      <div className={`${anton.className} relative text-5xl sm:text-7xl md:text-9xl leading-tight pl-4 pt-10 md:pl-8 md:pt-20`}>
        <div>LET'S</div>
        <div>CONNECT</div>
      </div>
      <div className={`flex flex-col ${unbounded.className} md:text-2xl md:gap-8 md:pt-16`}>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 md:justify-center pb-5">
          Want to work together?
          <div>
            <AnimatedButton text="CONTACT ME" className="w-40 md:w-[14rem]" href="mailto:shristychaudhary4679@gmail.com" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:pt-8 pb-8">
            <div>
            <AnimatedButton text="LINKEDIN" className="w-30 md:w-[10.5rem]" href="https://www.linkedin.com/in/shristy-chaudhary-3003002a5/" />
            </div>
            <div>
            <AnimatedButton text="GITHUB" className="w-27 md:w-[9rem]" href="https://github.com/srishtea-22"/>
            </div>
            <div>
            <AnimatedButton text="LEETCODE" className="w-34 md:w-[11.5rem]" href="https://leetcode.com/u/srishtea_22/"/>
            </div>
            <div>
            <AnimatedButton text="RESUME" className="w-28 md:w-[9.6rem]" href="https://drive.google.com/file/d/1Cdqtsiwfru8JikM4C6M-PZsf0QamqI2f/view?usp=sharing"/>
            </div>
        </div>
      </div>
      </div>
    </motion.footer>

  )
}
