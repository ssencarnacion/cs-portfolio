import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Intro from "./intro";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Intro />
  </StrictMode>
);
