import Image from "next/image";
import type { Project } from "@/content/projects";
import { ImageStrip } from "./ImageStrip";

type ProjectRowProps = {
  project: Project;
  priorityFirstImage?: boolean;
};

export function ProjectRow({
  project,
  priorityFirstImage = false,
}: ProjectRowProps) {
  return (
    <article id={project.slug} className="project-row">
      <div className="project-row__text">
        <header className="project-row__header">
          <h2 className="project-row__title">
            {project.logo ? (
              <Image
                src={project.logo.src}
                alt={project.logo.alt}
                width={project.logo.width}
                height={project.logo.height}
                className="project-row__logo"
                sizes="(max-width: 900px) 60vw, 18vw"
              />
            ) : (
              project.title
            )}
          </h2>
          {project.period ? (
            <p className="project-row__period">{project.period}</p>
          ) : null}
        </header>
        <p className="project-row__description">{project.description}</p>
      </div>
      <ImageStrip
        media={project.media}
        title={project.title}
        priorityFirstImage={priorityFirstImage}
      />
    </article>
  );
}
