import React from 'react';
import { useState, useEffect } from "react";

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export function useWindowSize() {
  const [s, setS] = useState({ w: typeof window !== "undefined" ? window.innerWidth : 1200, h: 800 });
  useEffect(() => {
    const h = () => setS({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return s;
}

export function useSEO(title, desc) {
  useEffect(() => {
    if (title) document.title = title;
    if (desc) { const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", desc); }
  }, [title, desc]);
}

export { useScrollY as useScrollPosition };

export { useTheme, ThemeProvider } from "./useTheme";
