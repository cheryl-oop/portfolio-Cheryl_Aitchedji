import { motion } from "motion/react";
import { ToolCard } from "../components/ToolCard/ToolCard";
import { tools } from "../data/tools.ts";
import { fadeUp } from "../components/animations/variants.ts";
import { AnimatedWords } from "../components/animations/AnimatedWords.tsx";
import { START } from "../components/animations/timing.ts";
import { SelectedWorks } from "./SelectedWorks.tsx";
import { Link } from "react-router";
import "../styles/HomePage.css";
import { asset } from "../utils/assets.ts";

export const HomePage = () => {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <motion.img
          src={asset("/images/doodles/cher-hi.jpg")}
          alt=""
          initial={{ scale: 0, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 14,
            delay: START,
          }}
        />
        <div className="hero-desc">
          <AnimatedWords
            as="h2"
            className="hero-titel"
            text="Hi, Cheryl here"
            delay={START + 0.2}
          />
          <h3 className="hero-tussentitel">
            Final year multimedia student from Brussels
          </h3>
          <p className="hero-desc-p">
            I build <span className="bold-word">full-stack websites</span> as
            creative solutions to weird problems. (And normal problems, too)
          </p>
          <Link to="/" className="button">
            More about me
          </Link>
        </div>
      </section>
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
