import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = { delay?: number; className?: string; children: ReactNode };

export const Reveal = ({ delay = 0, className, children }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);
