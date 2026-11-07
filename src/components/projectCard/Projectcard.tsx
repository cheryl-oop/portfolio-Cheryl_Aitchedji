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
      <img src={project.coverImage} alt={project.name} />
      <h4 className="card-name">{project.name}</h4>
      <p className="card-tools">{project.tools.join(", ")}</p>
    </Link>
  );
};
