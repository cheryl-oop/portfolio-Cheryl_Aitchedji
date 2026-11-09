import "../styles/AboutMe.css";
import { motion } from "motion/react";
import { AnimatedWords } from "../components/animations/AnimatedWords.tsx";
import { START } from "../components/animations/timing.ts";
import { asset } from "../utils/assets.ts";

export const AboutMe = () => {
  return (
    <div className="page-wrapper">
      <section className="aboutme-section">
        <div className="image-section">
          <motion.img
            className="image-main"
            src={asset("/images/doodles/cher.jpeg")}
            alt="Cheryl with her figurine"
            initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: START,
            }}
          />
          <motion.img
            className="image-doodle-top"
            src={asset("/images/doodles/cher-hi-trans.png")}
            alt=""
            initial={{ scale: 0, rotate: -25, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: START + 0.8,
            }}
          />
          <motion.img
            className="image-scribble"
            src={asset("/images/doodles/scribble.png")}
            alt=""
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: START + 1.2,
            }}
          />
        </div>
        <div className="aboutme-description">
          <AnimatedWords as="h2" text="Heya" delay={START + 0.3} />
          <p>
            I’m a creative problem solver who believes the best digital
            experiences happen when design and logic meet. I work across the
            stack—from building responsive UIs with React and TypeScript to
            architecting backends with Node.js, PHP, and MongoDB.
          </p>
          <h3>How I work:</h3>
          <p>
            Because I’ve acted as a Product Owner and SPOC in team projects, I
            don't just write code; I know how to communicate with clients,
            manage deadlines, and keep a team aligned. I’m an independent
            learner who loves finding creative solutions (usually fueled by a
            lot of tea).
          </p>
          <p>
            Offline: I’m a native Dutch and French speaker (with fluent
            English!), and when I’m not coding, you’ll find me painting,
            cooking, gaming, or lifting weights at the gym.
          </p>
        </div>
      </section>
    </div>
  );
};
