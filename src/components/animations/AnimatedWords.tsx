// components/AnimatedWords.tsx
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import "./AnimatedWords.css";

const container: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

type AnimatedWordsProps = {
  text: string;
  as?: "h2" | "p";
  delay?: number;
  className?: string;
};

export const AnimatedWords = ({
  text,
  as = "p",
  delay = 0,
  className,
}: AnimatedWordsProps) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="word-mask" aria-hidden="true">
          <motion.span variants={word} className="word">
            {w}
          </motion.span>
          {"\u00A0"}
        </span>
      ))}
    </Tag>
  );
};
