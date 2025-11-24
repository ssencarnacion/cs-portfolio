import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Intro from "./intro";
import Projects from "./projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Intro />
    <Projects />
  </StrictMode>
);
