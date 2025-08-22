import { unbounded, outfit, anton } from "@/lib/fonts";
import ProjectItem from "./components/ProjectItem";

export default function Projects() {
  return (
    <div className="flex flex-col bg-black px-10 md:px-60 py-20 md:py-40">
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
          PROJECTS
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-10 md:gap-y-40 bg-black text-white p-8 min-h-screen">
        <ProjectItem 
          title="Slate"
          description="A real-time note-taking app with instant updates for your notes, authentication, and a clean, responsive UI."
          imageSrc="/slate.png"
          gitLink="https://github.com/srishtea-22/slate"
          liveLink="https://slate-pymm.vercel.app/"
        />
        <ProjectItem
          title="Docstack"
          description="A web-based file storage and management app where users can
              upload, download, share and organize their files and folders.
              Built with Next.js, Express, PostgreSQL, Prisma
              and Supabase."
          gitLink="https://github.com/srishtea-22/docstack"
          imageSrc="/docstack.png"
        />
        <ProjectItem
          title="TexResume"
          description="A web-based resume builder designed specifically for tech students and professionals. It allows users to create structured LaTeX resumes easily through a form.
                Built using React and Webassembly."
          imageSrc="/texresume.png"
          gitLink="https://github.com/srishtea-22/TexResume"
        />
        <ProjectItem
          title="Chrome Dino 3D"
          description="A 3D recreation of the iconic Chrome T-Rex game by Google, built
              using C# in the Unity Game Engine. It features enhanced visuals
              and gameplay and is deployed on the Unity platform."
          imageSrc="/chrome-dino.jpg"
          gitLink="https://gitlab.com/we-mini-project/chrome-dino-3d"
          liveLink="https://play.unity.com/en/games/9ce547f6-4703-4d05-b6f5-64182fcc6234/webglbuild"
        />

        <ProjectItem
          title="GDG CTF Platform"
          description="Built and maintained the Capture the Flag Platform for CodeSprint
              3.0 event, hosted by Google Developer Groups at NMIT."
          gitLink="https://github.com/krishna-shrivastav232702/gdg-ctf-2025"
          liveLink="https://gdg-ctf-2025.vercel.app/"
          imageSrc="/gdg-ctf.png"
        />

        <ProjectItem
          title="Notes"
          description="A simple and minimal note-taking web app with color-coded notes,
              search functionality, and responsive UI. Built using Svelte and
              Tailwind CSS."
          imageSrc="/notes.png"
          gitLink="https://github.com/srishtea-22/notes"
        />
      </div>
    </div>
  );
}
