import { createBrowserRouter } from "react-router";
import { ProjectsPage } from "../pages/ProjectsPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);
