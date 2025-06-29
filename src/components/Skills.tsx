'use client'

import { Unbounded } from "next/font/google"
const unbounded = Unbounded({ subsets: ['latin'], weight: '400', display: 'swap' })
const skillRows = [
  ['python', 'cpp', 'java', 'cs', 'js', 'ts'],
  ['html', 'tailwind', 'react', 'nextjs', 'nodejs', 'express'],
  ['mongodb', 'git', 'unity', 'linux', 'wasm', 'webpack'],
  ['postgres', 'prisma', 'postman', 'supabase', 'svelte']
]
const skillNames: Record<string, string> = {
  'python': "Python", 'cpp': "C++", 'java': "Java", 'cs': "C#", 'js': "Javascript", 'ts': "Typescript",
  'html': "HTML", 'tailwind': "Tailwind", 'react': "React", 'nextjs': "Next.js", 'nodejs': "Node.js", 'express': "Express",
  'mongodb': "Mongodb", 'git': "Git", 'unity': "Unity", 'linux': "Linux", 'wasm': "Webassembly", 'webpack': "Webpack", 'postgres': "Postgres", 'prisma': "Prisma", 'postman': "Postman", 'supabase': "Supabase", 'svelte': "Svelte"
}

export default function Skills() {
    return (
        <div className="flex flex-col bg-black items-center">
          {skillRows.map((row, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 md:gap-15 mb-10">
              {row.map(skill => (
                <div key={skill} className="relative group">
                <img
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  className="w-9 sm:w-12 md:w-12 h-9 sm:h-12 md:h-12"
                  alt={skill}
                />
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1.5 rounded text-xs sm:text-sm md:text-sm whitespace-nowrap opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 ${unbounded.className}`}>
                    {skillNames[skill]}
                </span>
                </div>
              ))}
            </div>
          ))}
        </div>
    )
}