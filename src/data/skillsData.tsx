import { ReactNode } from "react";
import { skillIcons } from "./skillIcons";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export const frontendSkills: Skill[] = [
  {
    name: "JavaScript",
    icon: skillIcons["JavaScript"],
  },
  {
    name: "TypeScript",
    icon: skillIcons["TypeScript"],
  },
  {
    name: "HTML",
    icon: skillIcons["HTML"],
  },
  {
    name: "CSS",
    icon: skillIcons["CSS"],
  },
  {
    name: "Tailwind CSS",
    icon: skillIcons["Tailwind"],
  },
  {
    name: "shadcn/ui",
    icon: skillIcons["shadcn"],
  },
  {
    name: "React",
    icon: skillIcons["React"],
  },
  {
    name: "Next.js",
    icon: skillIcons["Next"],
  },
  {
    name: "Svelte",
    icon: skillIcons["Svelte"],
  },
  {
    name: "GSAP",
    icon: skillIcons["GSAP"],
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: skillIcons["Node"],
  },
  {
    name: "Express.js",
    icon: skillIcons["Express"],
  },
  {
    name: "Python",
    icon: skillIcons["Python"],
  },
  {
    name: "Go",
    icon: skillIcons["Go"],
  },
  {
    name: "C++",
    icon: skillIcons["CPP"],
  },
  {
    name: "Elixir",
    icon: skillIcons["Elixir"]
  },
];

export const dbCloudSkills: Skill[] = [
  {
    name: "MongoDB",
    icon: skillIcons["MongoDB"],
  },
  {
    name: "Convex",
    icon: skillIcons["Convex"],
  },
  {
    name: "PostgreSQL",
    icon: skillIcons["PostgreSQL"],
  },
  {
    name: "Prisma",
    icon: skillIcons["Prisma"],
  },
  {
    name: "Supabase",
    icon: skillIcons["Supabase"],
  },
];

export const toolsPlatformSkills: Skill[] = [
  {
    name: "Docker",
    icon: skillIcons["Docker"],
  },
  {
    name: "Unity",
    icon: skillIcons["Unity"],
  },
  {
    name: "Git",
    icon: skillIcons["Git"],
  },
  {
    name: "Linux",
    icon: skillIcons["Linux"],
  },
  {
    name: "WebAssembly",
    icon: skillIcons["WebAssembly"],
  },
  {
    name: "Postman",
    icon: skillIcons["Postman"],
  },
  {
    name: "Clerk",
    icon: skillIcons["Clerk"],
  },
  {
    name: "LaTeX",
    icon: skillIcons["LaTeX"],
  },
  {
    name: "Webpack",
    icon: skillIcons["Webpack"],
  },
];
