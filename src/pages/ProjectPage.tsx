import { useParams, Navigate } from "react-router";
import { getProjectById } from "../data/projects";
import "../styles/projectPage.css";

import { motion } from "motion/react";
import { AnimatedWords } from "../components/animations/AnimatedWords.tsx";
import { Reveal } from "../components/animations//Reveal.tsx";
import { START } from "../components/animations/timing.ts";
import { fadeUp } from "../components/animations//variants.ts";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const tools = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: START + 1.5 },
    },
  };

  return (
    <div className=".page-wrapper">
      <section className="project-page-section">
        <div className="project-page-description">
          <p>{project.date}</p>
          <h2>{project.name}</h2>

          <div className="project-details">
            <p>{project.description}</p>

            <Reveal delay={START + 0.3} className="project-links">
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                  Visit website
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </Reveal>

            <div className="tech-stack-wrapper">
              <Reveal delay={START + 0.5}>
                <div className="tech-stack-description">
                  <h3>Tech Stack</h3>
                  <motion.ul
                    className="project-tools"
                    variants={tools}
                    initial="hidden"
                    animate="visible"
                  >
                    {project.tools.map((tool) => (
                      <motion.li key={tool}>{tool}</motion.li>
                    ))}
                  </motion.ul>
                </div>
              </Reveal>
              <motion.img
                className="doodle"
                src="/images/doodles/cher-working.jpg"
                alt=""
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                  delay: START + 1.5,
                }}
              />
            </div>
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="project-images">
            {project.images.map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                loading="lazy"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i < 2 ? START + 0.5 + i * 0.15 : 0,
                }}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
