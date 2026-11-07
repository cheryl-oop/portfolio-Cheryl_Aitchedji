import { projects } from "../data/projects.ts";
import { Projectcard } from "../components/projectCard/Projectcard.tsx";
import { useState } from "react";

const types = ["All", ...new Set(projects.map((p) => p.type))];

export const ProjectsPage = () => {
  const [activeType, setActiveType] = useState("All");

  const filteredProjects =
    activeType === "All"
      ? projects
      : projects.filter((p) => p.type === activeType);
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
        <div className="filters">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={type === activeType ? "filter active" : "filter"}
              aria-pressed={type === activeType}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="project-cards">
          {filteredProjects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
