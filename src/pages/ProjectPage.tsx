import { useParams, Navigate } from "react-router";
import { getProjectById } from "../data/projects";
import "../styles/projectPage.css";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className=".page-wrapper">
      <section className="project-page-section">
        <div className="project-page-description">
          <p>{project.date}</p>
          <h2>{project.name}</h2>

          <div className="project-details">
            <ul className="project-tools">
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <p>{project.description}</p>
            <div className="project-links">
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                  Visit website ↗
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="project-images">
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
