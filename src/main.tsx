import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// 👇 add these
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>,
);
