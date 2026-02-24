import React from 'react';
import { useMemo } from "react";
import { motion } from "framer-motion";

/* ============================================================
   FLOATING SHAPES — Animated ambient background orbs
   ============================================================ */
export function FloatingShapes({ variant = "default" }) {
  const shapes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 300,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            background:
              variant === "red"
                ? `radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)`
                : `radial-gradient(circle, var(--th-glass-bg) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   GRID PATTERN — Subtle grid overlay
   ============================================================ */
export function GridPattern({ opacity = 0.03 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(var(--th-dot) 1px, transparent 1px),
          linear-gradient(90deg, var(--th-dot) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

/* ============================================================
   NOISE OVERLAY — Film grain texture
   ============================================================ */
export function NoiseOverlay({ opacity = 0.015 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

/* ============================================================
   GRADIENT LINE — Decorative divider
   ============================================================ */
export function GradientLine() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />
  );
}
