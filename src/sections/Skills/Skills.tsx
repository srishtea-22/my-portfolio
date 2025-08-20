"use client";

import SkillSection from "./components/skillSection";
import { outfit } from "@/lib/fonts";
import {
  frontendSkills,
  backendSkills,
  dbCloudSkills,
  toolsPlatformSkills,
} from "./skillsData";

export default function Skills() {
  return (
    <div className="flex flex-col bg-black px-10 md:px-60">
      <div className="mb-20 flex gap-2 items-center mx-auto">
        <svg
          fill="#FFFFFF"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="star"
          data-name="Flat Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon flat-color animate-[spin_3s_linear_infinite]"
        >
          <path
            id="primary"
            d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
          ></path>
        </svg>
        <span className={`${outfit.className} text-xl md:text-2xl`}>
          SKILLS
        </span>
      </div>
      <div className="space-y-20">
        <SkillSection title="FRONTEND" skills={frontendSkills} />
        <SkillSection title="BACKEND" skills={backendSkills} />
        <SkillSection title="DB AND CLOUD" skills={dbCloudSkills} />
        <SkillSection
          title="TOOLS AND PLATFORMS"
          skills={toolsPlatformSkills}
        />
      </div>
    </div>
  );
}
