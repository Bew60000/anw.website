import { Github, Lock } from "lucide-react";
import { projectsTitle } from "../../libs/Title";
import BoxText from "../text-layout-size/BoxText";
import TitleText from "../text-layout-size/TitleText";
import { descriptionProject, projects } from "../../libs/ProjectInfo";

export default function Project() {
  return (
    <BoxText id="projects" className="scroll-mt-19">
      <TitleText>{projectsTitle}</TitleText>

      <div className="text-sm mx-6 mb-6">{descriptionProject}</div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-fuchsia-500/20 hover:border-2 hover:border-fuchsia-600 rounded-2xl p-4 shadow hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <p className="text-lg font-semibold my-2">{project.title}</p>
            <p className="text-sm text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-fuchsia-600 text-sm px-2 py-1 rounded-full"
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
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-white transition pt-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            ) : (
              <div className="inline-flex items-center gap-1 text-sm text-gray-400">
                <Lock className="w-4 h-4" />
                Private
              </div>
            )}
          </div>
        ))}
      </div>
    </BoxText>
  );
}
