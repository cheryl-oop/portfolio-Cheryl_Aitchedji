import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { PANEL_DURATION, PANEL_EASE } from "../components/animations/timing.ts";

export const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        className="page"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-15%", opacity: 0.5 }}
        transition={{ duration: PANEL_DURATION, ease: PANEL_EASE }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};
