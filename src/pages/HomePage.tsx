import { motion } from "motion/react";
import { ToolCard } from "../components/ToolCard/ToolCard";
import { tools } from "../data/tools.ts";
import { fadeUp } from "../components/animations/variants.ts";
import "../styles/Homepage.css";
import { SelectedWorks } from "./SelectedWorks.tsx";

export const HomePage = () => {
  return (
    <div className="page-wrapper">
      <section className="hero-section"></section>
      <section className="tech-section">
        <h3>Current technologies</h3>
        <p className="desc-technologies">
          My current technologies I use for my projects
        </p>
        <div className="tech-cards-container">
          {tools.map((tool) => (
            <motion.div key={tool.id} variants={fadeUp}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="selected-section">
        <h3>Selected Works</h3>
        <SelectedWorks />
      </section>
    </div>
  );
};
