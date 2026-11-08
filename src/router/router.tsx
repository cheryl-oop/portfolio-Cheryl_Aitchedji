import { createBrowserRouter } from "react-router";
import { ProjectsPage } from "../pages/ProjectsPage.tsx";
import { ProjectPage } from "../pages/ProjectPage.tsx";
import { Layout } from "../layouts/Layout.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:id", element: <ProjectPage /> },
    ],
  },
]);
