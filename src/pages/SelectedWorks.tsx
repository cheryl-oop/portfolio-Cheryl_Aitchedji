import { useMemo } from "react";
import { projects, getProjectById } from "../data/projects.ts";
import { Projectcard } from "../components/projectCard/Projectcard.tsx";

export const SelectedWorks = () => {
  const selectedProjects = useMemo(() => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    const randomIds = shuffled.slice(0, 2).map((project) => project.id);

    return randomIds.map((id) => getProjectById(id)).filter(Boolean);
  }, []);

  return (
    <div className="selected-works-container">
      {selectedProjects.map((project) => (
        <Projectcard key={project!.id} project={project!} />
      ))}
    </div>
  );
};
