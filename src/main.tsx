import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Intro from "./intro";
import Projects from "./projects";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Intro />
    <Projects />
    <Analytics />
  </StrictMode>
);
