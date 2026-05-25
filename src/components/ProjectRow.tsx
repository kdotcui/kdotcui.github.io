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
          <h2 className="project-row__title">{project.title}</h2>
          <p className="project-row__period">{project.period}</p>
        </header>
        <p className="project-row__tags">{project.tags.join(", ")}</p>
        <p className="project-row__description">{project.description}</p>
      </div>
      <ImageStrip
        images={project.images}
        title={project.title}
        priorityFirstImage={priorityFirstImage}
      />
    </article>
  );
}
