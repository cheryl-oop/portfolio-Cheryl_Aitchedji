import "../styles/AboutMe.css";
import { motion } from "motion/react";
import { AnimatedWords } from "../components/animations/AnimatedWords.tsx";
import { START } from "../components/animations/timing.ts";
import { asset } from "../utils/assets.ts";
import { Footer } from "../layouts/Footer.tsx";

export const AboutMe = () => {
  return (
    <>
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
            src={asset("/images/doodles/cher-hi.svg")}
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
            src={asset("/images/doodles/scribble.svg")}
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
            I'm a final-year multimedia student from Brussels with a passion for
            combining creativity and technology. I enjoy turning ideas and
            problems into fun solutions! I work across the stack, building
            responsive interfaces with React and TypeScript and developing
            backend solutions with Node.js, PHP and MongoDB.
          </p>

          <p>
            I'm currently looking for an webdevelopment internship where I can
            put my skills into practice, contribute to meaningful projects and
            learn from experienced developers. I'm excited to take on new
            challenges and continue growing as a full-stack developer.
          </p>
          <h3>How I work:</h3>
          <p>
            I enjoy more than just writing code. Through taking on Product Owner
            and SPOC responsibilities in team projects, I've learned the
            importance of communication, collaboration and keeping everyone on
            the same page. I'm an independent learner who enjoys exploring new
            technologies and finding creative ways to solve problems (usually
            fueled by a lot of tea).
          </p>
          <p>
            Offline: I’m a native Dutch and French speaker (with fluent
            English!), and when I’m not coding, you’ll find me painting,
            cooking, gaming, or lifting weights at the gym.
          </p>
          <h3>Beyond the screen</h3>
          <p>
            I'm a native Dutch and French speaker, fluent in English, and a
            creative at heart. When I'm not coding, you'll probably find me
            painting, cooking, gaming or lifting weights at the gym.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};
