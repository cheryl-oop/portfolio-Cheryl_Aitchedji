import type { Project } from "../../data/projects.ts";
import { Link } from "react-router";

type ProjectCardProps = {
  project: Pick<Project, "id" | "name" | "date" | "coverImage" | "tools">;
};

export const Projectcard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`} className="card-container">
      <img src={project.coverImage} alt={project.name} />
      <p>{project.date}</p>
      <h4>{project.name}</h4>
      <p>{project.tools.join(", ")}</p>
    </Link>
  );
};
