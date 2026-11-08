import { motion } from "motion/react";
import type { Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  visible: ({ delay, stagger }: { delay: number; stagger: number }) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
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
  as?: "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
  className?: string;
};

export const AnimatedWords = ({
  text,
  as = "p",
  delay = 0,
  stagger = 0.06,
  className,
}: AnimatedWordsProps) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={container}
      custom={{ delay, stagger }}
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
