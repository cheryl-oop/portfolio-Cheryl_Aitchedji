import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);

    // Wait for the new page to render
    requestAnimationFrame(() => {
      const element = document.getElementById(id);

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location]);

  return null;
}
