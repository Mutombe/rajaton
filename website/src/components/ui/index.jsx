import React from 'react';
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue } from "framer-motion";

/* ============================================================
   MAGNETIC BUTTON — Follows cursor on hover
   ============================================================ */
export function MagneticButton({ children, className = "", onClick, variant = "primary", type = "button" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const reset = () => { x.set(0); y.set(0); };

  const styles = {
    primary: "bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-lg shadow-red-500/20",
    outline: "border-2 border-fg/30 text-fg hover:bg-fg/10 hover:border-fg/60",
    white: "bg-fg text-surface hover:bg-fg/90",
    ghost: "text-fg hover:bg-fg/5",
    glass: "bg-fg/10 backdrop-blur-md text-fg hover:bg-fg/20 border border-border-3",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase transition-colors duration-300 ${styles[variant] || styles.primary} ${className}`}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

/* ============================================================
   ANIMATED COUNTER — Counts up when visible
   ============================================================ */
export function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericValue;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {numericValue % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

/* ============================================================
   REVEAL SECTION — Scroll-triggered fade-in
   ============================================================ */
export function RevealSection({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const origins = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    scale: { scale: 0.9 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...origins[direction], ...(direction !== "scale" ? {} : { y: 0 }) }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   STAGGER CONTAINER + ITEM — Staggered reveals
   ============================================================ */
export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   PARALLAX IMAGE — Parallax scrolling image
   ============================================================ */
export function ParallaxImage({ src, alt, className = "", speed = 0.3 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ============================================================
   SECTION HEADING — Reusable section header
   ============================================================ */
export function SectionHeading({ tag, title, titleAccent, accent, description, desc, center = true, className = "" }) {
  const resolvedAccent = titleAccent || accent;
  const resolvedDesc = description || desc;
  return (
    <RevealSection className={`${center ? "text-center" : ""} mb-16 lg:mb-20 ${className}`}>
      {tag && (
        <span className="text-[#DC2626] text-sm font-semibold tracking-widest uppercase">{tag}</span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-fg mt-4 font-heading" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        {title} {resolvedAccent && <span className="text-[#DC2626]">{resolvedAccent}</span>}
      </h2>
      {resolvedDesc && (
        <p className={`text-fg-muted mt-6 text-lg ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {resolvedDesc}
        </p>
      )}
    </RevealSection>
  );
}

/* ============================================================
   SHORT-NAME ALIASES — Used by pages
   ============================================================ */
export function Btn({ children, className, onClick, v, variant, type = "button" }) {
  return <MagneticButton variant={v || variant || "primary"} className={className} onClick={onClick} type={type}>{children}</MagneticButton>;
}

export function Reveal({ children, className = "", delay = 0, dir, direction }) {
  return <RevealSection className={className} delay={delay} direction={direction || dir || "up"}>{children}</RevealSection>;
}

export function Stagger({ children, className = "", delay, staggerDelay }) {
  return <StaggerContainer className={className} staggerDelay={staggerDelay || delay || 0.1}>{children}</StaggerContainer>;
}

export { AnimatedCounter as Counter };
export { StaggerItem as StaggerChild };
export { ParallaxImage as PxImage };
export { SectionHeading as Heading };
export { FloatingShapes as Orbs } from "../backgrounds";

export function MorphBlob({ className = "", size = 400, color = "rgba(220,38,38,0.06)" }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-3xl ${className}`}
      style={{ width: size, height: size, background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      animate={{ scale: [1, 1.15, 0.95, 1], x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function Wave({ color, flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
        <path d="M0 50 C360 0, 720 100, 1080 50 S1440 0, 1440 50 L1440 100 L0 100 Z" fill={color || "var(--th-bg)"} />
      </svg>
    </div>
  );
}
