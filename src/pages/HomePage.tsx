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
    <>
      <section className="hero-section">
        <motion.img
          src={asset("/images/doodles/cher-hi.svg")}
          alt="doodle of me"
          className="hero-image"
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
          <h4 className="mini-titel">Full Stack Web Developer</h4>
          <AnimatedWords
            as="h2"
            className="hero-titel"
            text="Hi, Cheryl here"
            delay={START + 0.2}
          />
          <div className="location">
            <img
              className="location-icon"
              src={asset("/images/doodles/location_on.svg")}
            />
            <p>Brussels, Belgium</p>
          </div>
          <p className="hero-desc-p">
            I build <span className="bold-word">full-stack websites</span> as
            creative solutions to weird problems. (And normal problems, too)
          </p>
          <div className="hero-links">
            <Link to="/about-me" className="button">
              More about me
            </Link>
            <a
              href={asset("documents/Cheryl_Aitchedji_CV.pdf")}
              download="Cheryl_Aitchedji_CV.pdf"
              className="cv"
            >
              <img src={asset("/images/doodles/download.svg")} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="selected-section">
        <h3 className="selected-title">Selected Works</h3>
        <div className="selected-list">
          <SelectedWorks />
        </div>
        <Link to="/projects" className="button selected-more">
          See More Works
        </Link>
      </section>
      <section className="tech-section">
        <h3>My Tech Stack</h3>
        <p className="desc-technologies">
          Current technologies I use for my projects
        </p>
        <div className="tech-cards-container">
          {tools.map((tool) => (
            <motion.div key={tool.id} variants={fadeUp}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact-info">
          <h3>Lets make something happen.</h3>
          <p>
            I'm currently looking for{" "}
            <span className="bold-word">an internship</span> and would love to
            connect with you.
          </p>
          <div className="contact-links">
            <a className="button" href="mailto:cheryl.aitchedji@gmail.com.com">
              Get in touch
            </a>
            <a
              className="button"
              href="https://github.com/cheryl-oop/cheryl-oop.git"
            >
              Github
            </a>
            <a className="button" href="mailto:cheryl.aitchedji@gmail.com.com">
              Linkdin
            </a>
          </div>
        </div>
        <img src={asset("/images/doodles/cher-mail.svg")} />
      </section>
    </>
  );
};
