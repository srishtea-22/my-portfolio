import { Unbounded } from "next/font/google"
import { Anton } from "next/font/google"
const unbounded = Unbounded({subsets: ['latin'], weight: '400', display: 'swap'})
const anton = Anton({subsets: ['latin'], weight: '400', display: 'swap'})

export default function Projects() {
    return (
        <div id="projects" className="bg-black md:pb-24">
            <div className="flex items-center justify-center pt-20 pb-10 md:pt-40 md:pb-30">
                <p className={`${unbounded.className} text-white text-3xl sm:text-4xl md:text-5xl`}>PROJECTS</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-10 md:gap-y-40 bg-black text-white p-8 min-h-screen">
              <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-24">
              <div className="flex flex-col justify-center items-center">
                <h1 className={`text-2xl md:text-4xl ${anton.className}`}>
                  TexResume
                </h1>
                <p className={`mt-4 text-base tracking-wide text-center ${unbounded.className} md:w-100`}>A web-based resume builder designed specifically for tech students and professionals. It allows users to create structured LaTeX resumes easily through a form.
                Built using React, CSS and Webassembly. 
                </p>
                <div className="flex justify-center mt-6 gap-6">
                  <a href="https://github.com/srishtea-22/TexResume" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  </a>
                  <a href="https://tex-resume.vercel.app/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff" className="cursor-pointer"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                  </a>
                </div>
              </div>
              <div className="flex-col justify-center items-center">
              <div className="self-start relative md:w-130 md:h-60 flex overflow-hidden group hover:scale-95 transition-transform duration-600">
                <img src="/texresume.png" className="self-start md:w-130 md:h-60 object-cover transition-transfrom duration-600 group-hover:scale-120" />
              </div>
              </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24">
              <div className="flex flex-col justify-center">
                <div className="self-end relative md:w-130 md:h-60 flex flex-col justify-center items-center overflow-hidden group hover:scale-95 transtion-transform duration-600">
                <img src="/chrome-dino.jpg" className="md:w-130 md:h-60 object-cover transition-transform duration-600 group-hover:scale-120" />
              </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className={`text-2xl md:text-4xl ${anton.className}`}>
                  Chrome Dino 3D
                </h1>
                <p className={`mt-4 text-base tracking-wide ${unbounded.className} text-center md:w-100`}>A 3D recreation of the iconic Chrome T-Rex game by Google, built using C# in the Unity Game Engine. It features enhanced visuals and gameplay and is deployed on the Unity platform.</p>
                <div className="flex justify-center mt-6 gap-6">
                  <a href="https://gitlab.com/we-mini-project/chrome-dino-3d" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gitlab cursor-pointer" viewBox="0 0 16 16"><path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/></svg>
                  </a>
                  <a href="https://play.unity.com/en/games/9ce547f6-4703-4d05-b6f5-64182fcc6234/webglbuild" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff" className="cursor-pointer"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                  </a>                  
                </div>
              </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-24">
              <div className="flex flex-col justify-center items-center">
                <h1 className={`text-2xl md:text-4xl ${anton.className}`}>
                  GDG CTF Platform
                </h1>
                <p className={`mt-4 text-base tracking-wide text-center ${unbounded.className} md:w-100`}>Built and maintained the "Capture the Flag" website for CodeSprint 3.0 event, hosted by Google Developer Groups at NMIT.</p>
                <div className="flex justify-center mt-6 gap-6">
                  <a href="https://github.com/krishna-shrivastav232702/gdg-ctf-2025" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  </a>
                  <a href="https://gdg-ctf-2025.vercel.app/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff" className="cursor-pointer"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                  </a>
                </div>
              </div>
              <div className="flex-col justify-center items-center">
              <div className="self-start relative md:w-130 md:h-60 flex overflow-hidden group hover:scale-95 transition-transform duration-600">
                <img src="/gdg-ctf.png" className="self-start md:w-130 md:h-60 object-cover transition-transfrom duration-600 group-hover:scale-120" />
              </div>
              </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24">
              <div className="flex flex-col justify-center">
                <div className="self-end relative md:w-130 md:h-60 flex flex-col justify-center items-center overflow-hidden group hover:scale-95 transtion-transform duration-600">
                <img src="/notes.png" className="md:w-130 md:h-60 object-cover transition-transform duration-600 group-hover:scale-120" />
              </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className={`text-2xl md:text-4xl ${anton.className}`}>
                  Notes
                </h1>
                <p className={`mt-4 text-base tracking-wide ${unbounded.className} text-center md:w-100`}>A simple and minimal note-taking web app with color-coded notes, search functionality, and responsive UI. Built using Svelte and Tailwind CSS.</p>
                <div className="flex justify-center mt-6 gap-6">
                  <a href="https://github.com/srishtea-22/notes" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  </a>
                  {/* <a href="https://play.unity.com/en/games/9ce547f6-4703-4d05-b6f5-64182fcc6234/webglbuild" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff" className="cursor-pointer"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                  </a>                   */}
                </div>
              </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-24">
              <div className="flex flex-col justify-center items-center">
                <h1 className={`text-2xl md:text-4xl ${anton.className}`}>
                  Docstack
                </h1>
                <p className={`mt-4 text-base tracking-wide text-center ${unbounded.className} md:w-100`}>A web-based file storage and management app where users can upload, download, share and organize their files and folders. Currently being built with Next.js, Express, PostgreSQL, Prisma and Supabase.</p>
                <div className="flex justify-center mt-6 gap-6">
                  <a href="https://github.com/srishtea-22/docstack" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  </a>
                  {/* <a href="https://gdg-ctf-2025.vercel.app/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff" className="cursor-pointer"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                  </a> */}
                </div>
              </div>
              <div className="flex-col justify-center items-center">
              <div className="self-start relative md:w-130 md:h-60 flex overflow-hidden group hover:scale-95 transition-transform duration-600">
                <img src="/docstack.png" className="self-start md:w-130 md:h-60 object-cover transition-transfrom duration-600 group-hover:scale-120" />
              </div>
              </div>
              </div>
            </div>
        </div>
    )
}