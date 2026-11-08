import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { PANEL_DURATION, PANEL_EASE } from "../components/animations/timing.ts";
import { Header } from "./Header.tsx";
import "./Layout.css";

export const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          className="page"
          initial={{ y: "100%", zIndex: 2 }}
          animate={{ y: 0, zIndex: 2 }}
          exit={{ y: 0, zIndex: 1, filter: "brightness(0.6)" }}
          transition={{
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            zIndex: { duration: 0 },
          }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
