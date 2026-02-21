import React from 'react';
import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue } from "framer-motion";

/* ── MAGNETIC BUTTON ───────────────────────────── */
export function Btn({ children, className = "", onClick, v = "primary", type = "button" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const handleMouse = (e) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; x.set((e.clientX - r.left - r.width / 2) * 0.12); y.set((e.clientY - r.top - r.height / 2) * 0.12); };
  const reset = () => { x.set(0); y.set(0); };

  const styles = {
    primary: "bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-xl shadow-red-500/20 hover:shadow-red-500/30",
    outline: "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    white: "bg-white text-[#0A0A0A] hover:bg-gray-100 shadow-xl",
    glass: "glass-strong text-white hover:bg-white/10",
  };

  return (
    <motion.button ref={ref} type={type} style={{ x, y }} onMouseMove={handleMouse} onMouseLeave={reset} onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300  ${styles[v] || styles.primary} ${className}`}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

/* ── ANIMATED COUNTER ──────────────────────────── */
export function Counter({ value, suffix = "", dur = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const num = parseFloat(value);
  useEffect(() => {
    if (!inView) return;
    let s = 0; const inc = num / (dur * 60);
    const t = setInterval(() => { s += inc; if (s >= num) { setCount(num); clearInterval(t); } else setCount(s); }, 1000 / 60);
    return () => clearInterval(t);
  }, [inView, num, dur]);
  return <span ref={ref}>{num % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}{suffix}</span>;
}

/* ── REVEAL ON SCROLL ──────────────────────────── */
export function Reveal({ children, className = "", delay = 0, dir = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const origins = { up: { y: 50 }, down: { y: -50 }, left: { x: 50 }, right: { x: -50 }, scale: { scale: 0.92 } };
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, ...origins[dir] }}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  );
}

/* ── STAGGER ───────────────────────────────────── */
export function Stagger({ children, className = "", delay = 0.08 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: delay } } }}
      className={className}
    >{children}</motion.div>
  );
}
export function StaggerChild({ children, className = "" }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── PARALLAX IMAGE ────────────────────────────── */
export function PxImage({ src, alt, className = "", speed = 0.2 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-[130%] object-cover" loading="lazy" />
    </div>
  );
}

/* ── SECTION HEADING ───────────────────────────── */
export function Heading({ tag, title, accent, desc, center = true, className = "" }) {
  return (
    <Reveal className={`${center ? "text-center" : ""} mb-16 lg:mb-20 ${className}`}>
      {tag && <span className="inline-flex items-center gap-2 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-4"><span className="w-8 h-px bg-[#DC2626]" />{tag}<span className="w-8 h-px bg-[#DC2626]" /></span>}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 font-display tracking-tight leading-[1.05]">
        {title}{accent && <><br className="hidden sm:block" /><span className="text-gradient">{accent}</span></>}
      </h2>
      {desc && <p className={`text-gray-400 mt-5 text-lg leading-relaxed font-body ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}>{desc}</p>}
    </Reveal>
  );
}

/* ── MORPH BLOB ────────────────────────────────── */
export function MorphBlob({ className = "", color = "rgba(220,38,38,0.08)", size = 400 }) {
  return <div className={`absolute animate-morph pointer-events-none ${className}`} style={{ width: size, height: size, background: color, filter: "blur(80px)" }} />;
}

/* ── FLOATING ORBS (background) ────────────────── */
export function Orbs({ variant = "default" }) {
  const orbs = useMemo(() => Array.from({ length: 5 }, (_, i) => ({
    id: i, x: 10 + Math.random() * 80, y: 10 + Math.random() * 80,
    size: 150 + Math.random() * 350, dur: 18 + Math.random() * 15,
  })), []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map(o => (
        <motion.div key={o.id} className="absolute rounded-full" style={{ width: o.size, height: o.size, left: `${o.x}%`, top: `${o.y}%`,
          background: variant === "red" ? `radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)` : `radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)`,
        }}
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* ── WAVE DIVIDER ──────────────────────────────── */
export function Wave({ color = "#111", flip = false }) {
  return (
    <div className={`absolute ${flip ? "top-0 rotate-180" : "bottom-0"} left-0 w-full overflow-hidden leading-none pointer-events-none`} style={{ height: 80 }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill={color} />
      </svg>
    </div>
  );
}
