"use client";

import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import AnimatedButton from "./components/AnimatedButton";
import { anton, unbounded } from "@/lib/fonts";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function Footer() {
  const opacity = useScrollOpacity(300, 1.5);
  const { scrollY: motionScrollY } = useScroll();

  const backgroundY = useTransform(motionScrollY, (value) => -value * 0.5);
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.footer
      id="contact"
      className="relative min-h-[30vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundPositionY: smoothBackgroundY,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black to-transparent"
          style={{ opacity }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center relative z-10 px-4 md:px-20 py-10 md:py-20 gap-8 md:gap-0">
        <div
          className={`${anton.className} text-4xl md:text-8xl text-center md:text-left`}
        >
          LET'S <br /> CONNECT
        </div>
        <div className="flex flex-col justify-around gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center justify-centerr">
            <span
              className={`${unbounded.className} text-base md:text-xl text-center md:text-left`}
            >
              Want to work together?
            </span>
            <AnimatedButton
              text="CONTACT ME"
              href="mailto:shristychaudhary4679@gmail.com"
              className="w-40 md:w-[10rem]"
            />
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
            <AnimatedButton
              text="LINKEDIN"
              className="w-30 md:w-[7.7rem]"
              href="https://www.linkedin.com/in/shristy-chaudhary-3003002a5/"
            />
            <AnimatedButton
              text="GITHUB"
              className="w-27 md:w-[6.7rem]"
              href="https://github.com/srishtea-22"
            />
            <AnimatedButton
              text="LEETCODE"
              className="w-34 md:w-[8.5rem]"
              href="https://leetcode.com/u/srishtea_22/"
            />
            <AnimatedButton
              text="RESUME"
              className="w-28 md:w-[7.4rem]"
              href="https://drive.google.com/file/d/19X3XKaMbFakhMyQZwC0p9Zu5T7yw3SbW/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
