import { Github, Lock } from "lucide-react";
import { projectsTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";

import { projects } from "../../libs/Projects";
import { useState } from "react";
import DescriptionText from "../share/DescriptionText";

type ProjectItem = (typeof projects)[number];

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-fuchsia-500/20 p-4 shadow transition hover:scale-105 hover:border-fuchsia-600 hover:bg-white/3 hover:shadow-lg">
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
          className="inline-flex items-center gap-1 pt-2 text-sm text-gray-500 hover:text-white"
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
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-8 flex justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded px-3 py-1 text-sm text-white disabled:opacity-30"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded px-3 py-1 text-sm ${
            currentPage === page
              ? "bg-fuchsia-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded px-3 py-1 text-sm text-white disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
}

export default function Project() {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <BoxText id="projects" className="scroll-mt-20">
      <TitleText>{projectsTitle}</TitleText>

      {/* Project Description */}
      <div className="mx-6 mb-6 text-sm">
        <DescriptionText field="Project" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {currentProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </BoxText>
  );
}
