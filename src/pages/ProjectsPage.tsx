import { projects } from "../data/projects.ts";
import { Projectcard } from "../components/projectCard/Projectcard.tsx";
import { useState } from "react";
import "../styles/projectsPage.css";

import { motion } from "motion/react";
import { AnimatedWords } from "../components/animations/AnimatedWords.tsx";
import { START } from "../components/animations/timing.ts";
import { fadeUp, cardList } from "../components/animations/variants.ts";
import { asset } from "../utils/assets.ts";

const types = ["All", ...new Set(projects.map((p) => p.type))];

export const ProjectsPage = () => {
  const [activeType, setActiveType] = useState("All");

  const filteredProjects =
    activeType === "All"
      ? projects
      : projects.filter((p) => p.type === activeType);
  return (
    <>
      <div className="page-wrapper">
        <section>
          <div className="projects-page-description">
            <motion.img
              className="doodle"
              src={asset("/images/doodles/cher-working.jpg")}
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
            <AnimatedWords as="h2" text="Projects" delay={START} />
            <p>
              A selection of my works where I explore different frameworks,
              challenges and creative solutions
            </p>
          </div>

          <div>
            <motion.div
              className="filters"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: START + 0.9,
              }}
            >
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={type === activeType ? "filter active" : "filter"}
                  aria-pressed={type === activeType}
                >
                  {type}
                </button>
              ))}
            </motion.div>

            <motion.div
              className="project-cards"
              variants={cardList}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  className="card-wrapper"
                >
                  <Projectcard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};
