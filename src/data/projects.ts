import projectsData from "./projects.json";

export type Project = {
  id: string;
  date: string;
  type: string;
  name: string;
  description: string;
  tools: string[];
  images: string[];
  website: string;
  githubLink: string;
};

export const projects: Project[] = projectsData;
