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
                <p className={`mt-4 text-base tracking-wide text-center ${unbounded.className} md:w-100`}>TexResume is a web-based resume builder designed specifically for tech students and professionals. It allows users to create structured, professional LaTeX resumes easily through a form.</p>
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
                <p className={`mt-4 text-base tracking-wide ${unbounded.className} text-center md:w-100`}>Chrome Dino 3D is a 3D recreation of the iconic Chrome T-Rex game, built using C# in the Unity Game Engine. It features enhanced visuals and gameplay and is deployed on the Unity platform.</p>
              </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-24">
              <div className="flex flex-col justify-center items-center">
                <h1 className={`text-2xl md:text-4xl ${anton.className}`}>
                  GDG CTF Platform
                </h1>
                <p className={`mt-4 text-base tracking-wide text-center ${unbounded.className} md:w-100`}>Built and maintained the "Capture the Flag" website for CodeSprint 3.0 event, hosted by Google Developer Groups at NMIT.</p>
              </div>
              <div className="flex-col justify-center items-center">
              <div className="self-start relative md:w-130 md:h-60 flex overflow-hidden group hover:scale-95 transition-transform duration-600">
                <img src="/gdg-ctf.png" className="self-start md:w-130 md:h-60 object-cover transition-transfrom duration-600 group-hover:scale-120" />
              </div>
              </div>
              </div>
            </div>
        </div>
    )
}