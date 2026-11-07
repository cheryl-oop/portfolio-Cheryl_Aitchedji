import type { Variants } from "motion/react";
import { START } from "./timing";

export const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const cardList: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: START + 1.2 },
  },
};
