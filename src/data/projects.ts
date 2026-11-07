import projectsData from "./projects.json";

export type Project = {
  id: string;
  date: string;
  type: string;
  name: string;
  description: string;
  tools: string[];
  coverImage: string;
  images: string[];
  website: string;
  githubLink: string;
};

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const projects: Project[] = projectsData;
