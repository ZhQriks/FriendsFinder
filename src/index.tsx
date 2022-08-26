import React from "react";
import AppWrapper from "./shared/layout/AppWraper";
import { createRoot } from "react-dom/client";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
