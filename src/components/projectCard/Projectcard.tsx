import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Project } from "../data/projects";

export const Projectcard = () => {
  return (
    <div className="card-container">
      <img src="..." />
      <p>date</p>
      <h4>Name Project</h4>
      <p>Tools</p>
    </div>
  );
};
