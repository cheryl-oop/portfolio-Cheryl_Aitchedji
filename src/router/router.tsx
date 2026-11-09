import { createBrowserRouter } from "react-router";
import { ProjectsPage } from "../pages/ProjectsPage.tsx";
import { ProjectPage } from "../pages/ProjectPage.tsx";
import { Layout } from "../layouts/Layout.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { AboutMe } from "../pages/AboutMe.tsx";
import { Contacts } from "../pages/Contacts.tsx";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/projects/:id", element: <ProjectPage /> },
        { path: "/about-me", element: <AboutMe /> },
        { path: "/contacts", element: <Contacts /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
