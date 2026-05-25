import { SiteSidebar } from "@/components/SiteSidebar";
import { ProjectRow } from "@/components/ProjectRow";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteSidebar />
      <main className="site-main">
        {projects.map((project, projectIndex) => (
          <ProjectRow
            key={project.slug}
            project={project}
            priorityFirstImage={projectIndex === 0}
          />
        ))}
      </main>
    </div>
  );
}
