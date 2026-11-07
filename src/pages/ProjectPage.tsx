import { useParams, Navigate } from "react-router";
import { getProjectById } from "../data/projects";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <section>
      <div className="project-page-description">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>{project.tools.join(", ")}</p>
        <a href={project.website} target="_blank" rel="noreferrer">
          Website
        </a>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      {project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
