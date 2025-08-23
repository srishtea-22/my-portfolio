import { skillIcons } from "@/data/skillIcons";
import { anton, unbounded } from "@/lib/fonts";

interface ProjectItemProps {
  title: string;
  description: string;
  imageSrc: string;
  gitLink: string;
  liveLink?: string;
  skills: string[];
}

const ProjectItem = ({
  title,
  description,
  imageSrc,
  gitLink,
  liveLink,
  skills
}: ProjectItemProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24">
      <div className="flex flex-col justify-center">
        <div className="self-end relative md:w-160 md:h-90 flex flex-col justify-center items-center overflow-hidden group hover:scale-95 transtion-transform duration-600">
          <img
            src={imageSrc}
            className="object-cover transition-transform duration-600 group-hover:scale-120"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start max-w-lg">
        <h1 className={`text-2xl md:text-4xl ${anton.className}`}>{title}</h1>
        <p
          className={`mt-4 tracking-wide ${unbounded.className} md:w-100 text-gray-300 leading-relaxed text-center md:text-left`}
        >
          {description}
        </p>
        <div className="flex items-center mt-6 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="transform hover:scale-120 transition-transform duration-200">{skillIcons[skill]}</div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-4">
          <a href={gitLink} target="_blank">
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path className="draw-icon2" d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
