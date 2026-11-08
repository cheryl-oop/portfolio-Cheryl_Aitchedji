import toolsData from "./tools.json";

export type Tool = {
  id: string;
  name: string;
  description: string;
  img: string;
};

export const tools: Tool[] = toolsData;