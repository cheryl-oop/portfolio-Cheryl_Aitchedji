import { projects } from "../data/projects.ts";
import { Projectcard } from "../components/projectCard/Projectcard.tsx";

export const ProjectsPage = () => {
  return (
    <section>
      <div className="projects-page-description">
        <h2>Projects</h2>
        <p>
          A selection of my works where I explore different frameworks,
          challenges and creative solutions
        </p>
      </div>
      <div>
        <div className="filters"></div>
        <div className="project-cards">
          {projects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
