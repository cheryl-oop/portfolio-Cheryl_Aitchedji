import type { Tool } from "../../data/tools.ts";
import "./ToolCard.css";

type ToolCardProps = {
  tool: Pick<Tool, "id" | "name" | "description" | "img">;
};

export const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <div className="tool-card-container">
      <img src={tool.img} alt={`${tool.name} logo`} />
      <div className="tool-card-desc">
        <h5>{tool.name}</h5>
        <p>{tool.description}</p>
      </div>
    </div>
  );
};
