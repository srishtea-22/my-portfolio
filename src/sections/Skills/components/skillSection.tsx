"use client";

import { anton, unbounded } from "@/lib/fonts";
import { Skill } from "../../../data/skillsData";
import { useSkillAnimation } from "@/hooks/useGSAPanimations";

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  const { sectionRef, titleRef, skillsRef } = useSkillAnimation();
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
