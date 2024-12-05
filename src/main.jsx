import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/sidebarContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>
);
