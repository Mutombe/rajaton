import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/hooks/useTheme";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--th-glass-dark-bg)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--th-border-2)",
              color: "var(--th-fg)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            },
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
