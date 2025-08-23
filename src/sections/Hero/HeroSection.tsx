"use client";

import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { anton, unbounded } from "@/lib/fonts";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import { useHeroAnimation } from "@/hooks/useGSAPanimations";

export default function HeroSection() {
  const opacity = useScrollOpacity(300, 1.5);
  const { scrollY: motionScrollY } = useScroll();
  const textRef = useHeroAnimation();

  const backgroundY = useTransform(motionScrollY, (value) => value * 0.5);
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.section
      className="relative h-[90vh] md:h-[120vh] bg-cover bg-top"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundPositionY: smoothBackgroundY,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"
        style={{ opacity }}
      />
      <div className="absolute inset-0 flex flex-col items-center pt-40 md:pt-40 text-white">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <h1
            className={`${anton.className} text-6xl md:text-8xl leading-tight`}
          >
            SHRISTY CHAUDHARY
          </h1>
          <h3
            className={`${unbounded.className} text-xl md:text-4xl leading-tight`}
          >
            Full stack developer
          </h3>
        </div>
        <div
          className={`${unbounded.className} text-l md:text-2xl flex text-center max-w-[500px] pt-30 md:pt-40 px-1 md:px-0`}
        >
          <p ref={textRef}>
            Crafting seamless experiences,
            <br /> one line at a time.
          </p>
        </div>
        <div className="flex gap-8 pt-20">
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/shristy-chaudhary-3003002a5"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-1"
            >
              <path
                className="draw-icon1"
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect
                className="draw-icon1"
                width="4"
                height="12"
                x="2"
                y="9"
              ></rect>
              <circle className="draw-icon1" cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            className="cursor-pointer"
            href="https://github.com/srishtea-22"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-1"
            >
              <path
                className="draw-icon2"
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path className="draw-icon2" d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a
            className="cursor-pointer"
            href="https://leetcode.com/u/srishtea_22/"
            target="_blank"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="28"
              width="28"
            >
              <g>
                <path
                  className="draw-icon3"
                  d="M33.8092,34.8772,26.8725,41.814a5.7258,5.7258,0,0,1-8.1154,0L8.6127,31.67a5.726,5.726,0,0,1,0-8.1155L18.7571,13.41a5.7258,5.7258,0,0,1,8.1154,0L34.5,21.0373"
                ></path>
                <path
                  className="draw-icon3"
                  d="M18.7571,13.41,27.7647,4.5"
                ></path>
                <path className="draw-icon3" d="M19.5838,27.5918h21.49"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
