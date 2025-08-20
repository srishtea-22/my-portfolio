"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { anton, unbounded } from "@/lib/fonts";
import { Skill } from "../skillsData";

gsap.registerPlugin(ScrollTrigger);

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleElement = titleRef.current;
    const skillsElement = skillsRef.current;

    if (!section || !titleElement || !skillsElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleElement,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    tl.fromTo(
      skillsElement.children,
      {
        opacity: 0,
        y: 40,
        x: -30,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="grid sm:grid-cols-12">
      <div className="sm:col-span-5">
        <p
          ref={titleRef}
          className={`${anton.className} text-2xl md:text-4xl mb-4`}
        >
          {title}
        </p>
      </div>
      <div
        ref={skillsRef}
        className="sm:col-span-7 flex gap-x-6 gap-y-9 flex-wrap"
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <div>{skill.icon}</div>
            <div className={`${unbounded.className}`}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
