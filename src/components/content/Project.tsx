import { Github, Lock } from "lucide-react";
import { projectsTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";

import { descriptions } from "../../libs/Resume";
import { projects } from "../../libs/Projects";

export default function Project() {
  return (
    <BoxText id="projects" className="scroll-mt-20">
      <TitleText>{projectsTitle}</TitleText>

      {/* Project Description */}
      <div className="mx-6 mb-6 text-sm">
        {descriptions.map((description, index) => (
          <p key={index} className="text-[14px]">
            {description.Project}
          </p>
        ))}
      </div>

      {/* Project Card */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-fuchsia-500/20 p-4 shadow transition hover:scale-105 hover:border-1 hover:border-fuchsia-600 hover:bg-white/3 hover:p-3 hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <p className="my-2 text-lg font-semibold">{project.title}</p>
            <p className="mb-2 line-clamp-2 text-sm text-gray-400">
              {project.description}
            </p>
            <div className="mb-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-fuchsia-600 px-2 py-1 text-sm hover:bg-fuchsia-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 pt-2 text-sm text-gray-500 transition hover:text-white"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            ) : (
              <div className="inline-flex items-center gap-1 text-sm text-gray-400">
                <Lock className="h-4 w-4" />
                Private
              </div>
            )}
          </div>
        ))}
      </div>
    </BoxText>
  );
}
