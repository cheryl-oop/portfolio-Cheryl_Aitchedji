import { createBrowserRouter } from "react-router";
import { ProjectsPage } from "../pages/ProjectsPage.tsx";
import { ProjectPage } from "../pages/ProjectPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/:id",
    element: <ProjectPage />,
  },
]);
