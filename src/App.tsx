import { router } from "./router/router.tsx";
import { RouterProvider } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
