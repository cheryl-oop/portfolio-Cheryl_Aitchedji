import type { Project } from "../../data/projects.ts";
import { Link } from "react-router";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Pick<Project, "id" | "name" | "date" | "coverImage" | "tools">;
};

export const Projectcard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`} className="card-container">
      <p className="card-date">{project.date}</p>
      <div className="card-image">
        <img src={project.coverImage} alt={project.name} loading="lazy" />
      </div>
      <h4 className="card-name">{project.name}</h4>
      <div className="card-tools">
        {project.tools.map((tool) => (
          <p key={tool}>{tool}</p>
        ))}
      </div>
    </Link>
  );
};
