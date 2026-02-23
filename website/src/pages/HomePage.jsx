import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Globe, Zap, Award, Star, Quote, CheckCircle2 } from "lucide-react";
import { useSEO } from "@/hooks";
import { SEO, SERVICES, STATS, TESTIMONIALS, CASES } from "@/data/constants";
import { Btn, Counter, Reveal, Stagger, StaggerChild, PxImage, Heading, Orbs, MorphBlob, Wave } from "@/components/ui";

/* ═══════════════════════════════════════════════════
   HERO PILL MOSAIC — 3-column cinematic layout
   Tall stadium-pill containers in a dramatic
   3-column staggered grid with vivid accent blobs,
   floating glass stat cards, and parallax depth
   ═══════════════════════════════════════════════════ */
const MOSAIC_ITEMS = [
  { src: "/34.jpg", alt: "Strategic partnership", accent: "#DC2626", link: "/services/key-account-management" },
  { src: "/26.jpg", alt: "Logistics warehouse", accent: "#F97316", link: "/services/distribution-logistics" },
  { src: "/14.jpg", alt: "Retail merchandising", accent: "#EAB308", link: "/services/merchandising-execution" },
  { src: "/33.jpg", alt: "Business strategy", accent: "#8B5CF6", link: "/services/key-account-management" },
  { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80", alt: "Supply chain", accent: "#06B6D4", link: "/services/distribution-logistics" },
  { src: "/30.jpg", alt: "Global shipping", accent: "#10B981", link: "/services/distribution-logistics" },
  { src: "/36.jpg", alt: "Consumer goods", accent: "#EC4899", link: "/services/private-label" },
];

/* Slot definitions for the 3-column mosaic grid (right-aligned) */
const SLOTS = [
  { top: 80, right: 355, w: 150, h: 220 },
  { top: 320, right: 355, w: 150, h: 190 },
  { top: 0, right: 175, w: 165, h: 240 },
  { top: 260, right: 175, w: 165, h: 210 },
  { top: 490, right: 175, w: 165, h: 170 },
  { top: 32, right: 0, w: 140, h: 200 },
  { top: 252, right: 0, w: 140, h: 230 },
];

function HeroMosaic() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5, 6]);

  const swap = useCallback(() => {
    setOrder(prev => {
      const next = [...prev];
      const a = Math.floor(Math.random() * 7);
      let b = Math.floor(Math.random() * 7);
      while (b === a) b = Math.floor(Math.random() * 7);
      [next[a], next[b]] = [next[b], next[a]];
      return next;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(swap, 3500);
    return () => clearInterval(id);
  }, [swap]);

  return (
    <div className="relative w-full" style={{ height: 680 }}>
      {/* Floating accent orbs */}
      <motion.div className="absolute -top-8 left-[8%] w-16 h-16 rounded-full" style={{ background: "#DC2626" }}
        animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute top-[28%] -left-6 w-10 h-10 rounded-full" style={{ background: "#8B5CF6" }}
        animate={{ y: [0, 12, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 1 }} />
      <motion.div className="absolute bottom-[20%] left-[2%] w-12 h-12 rounded-full" style={{ background: "#F97316" }}
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} />
      <motion.div className="absolute -bottom-4 right-[35%] w-8 h-8 rounded-full" style={{ background: "#06B6D4" }}
        animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2 }} />
      <motion.div className="absolute top-[60%] right-0 w-7 h-7 rounded-full" style={{ background: "#10B981" }}
        animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }} />

      {/* Animated mosaic pills */}
      {MOSAIC_ITEMS.map((item, itemIdx) => {
        const slotIdx = order.indexOf(itemIdx);
        const slot = SLOTS[slotIdx];
        return (
          <motion.div
            key={itemIdx}
            className="absolute group"
            initial={false}
            animate={{ top: slot.top, right: slot.right, width: slot.w, height: slot.h }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute -inset-3 rounded-[3.5rem] opacity-25 blur-md group-hover:opacity-50 group-hover:blur-lg transition-all duration-700"
              style={{ background: item.accent }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Link to={item.link} className="relative block w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-700 mix-blend-overlay" style={{ background: item.accent }} />
            </Link>
          </motion.div>
        );
      })}

      {/* Floating glass stat cards */}
      <motion.div
        className="absolute top-[18%] left-[5%] z-30 glass-strong rounded-2xl px-5 py-4 shadow-2xl glow-red-sm"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#DC2626]/20 flex items-center justify-center">
            <TrendingUp size={16} className="text-[#DC2626]" />
          </div>
          <div>
            <p className="text-white font-extrabold text-base leading-none">+340%</p>
            <p className="text-white/25 text-[9px] mt-0.5">Avg Partner Growth</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] left-[12%] z-30 glass-strong rounded-2xl px-5 py-4 shadow-2xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center">
            <CheckCircle2 size={16} className="text-[#10B981]" />
          </div>
          <div>
            <p className="text-white font-extrabold text-base leading-none">15K+</p>
            <p className="text-white/25 text-[9px] mt-0.5">Stores Served Daily</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════ */
export default function HomePage() {
  useSEO(SEO["/"].t, SEO["/"].d);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOp = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
      {/* ═══ HERO + MOSAIC GLOW WRAPPER — contains overflow-x on mobile so glow can bleed vertically ═══ */}
      <div className="relative z-10 lg:contents" style={{ overflowX: 'clip' }}>

      {/* ═══ HERO — Cinematic full-screen, the crown jewel ═══ */}
      <section ref={heroRef} className="relative z-10 lg:z-auto min-h-0 lg:min-h-screen flex items-center lg:overflow-hidden mesh-hero noise">
        <Orbs variant="red" />

        {/* Dot grid */}
        <div className="absolute inset-0 dots pointer-events-none" />

        {/* Large watermark letters */}
        <div className="absolute -left-[5vw] top-[10%] md:top-1/2 md:-translate-y-1/2 text-[75vw] md:text-[40vw] font-extrabold text-white/[0.015] leading-none select-none pointer-events-none font-display">R</div>

        {/* Subtle top gradient for depth */}
        <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#0A0A0A] to-transparent z-[1] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOp }} className="relative z-10 ctn py-10 md:py-22">
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-4 items-center min-h-0 lg:min-h-[80vh] pt-4 lg:pt-10">

            {/* ── LEFT: Content — larger, bolder ── */}
            <div className="lg:col-span-5 xl:col-span-5 relative z-10 pr-4 lg:pr-0">
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-4 lg:mb-8 mt-14 lg:mt-12"
              >
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span className="text-white/50 text-xs font-medium  tracking-wide">Trusted by 200+ global brands</span>
              </motion.div>

              {/* Title — THE largest on the site */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.2rem,6.5vw,6rem)] font-extrabold text-white leading-[0.92] tracking-tight font-display"
              >
                Powering<br />
                <span className="text-gradient">Global Brand</span><br />
                Distribution
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="text-white/35 text-sm md:text-lg mt-4 lg:mt-7 max-w-[420px] leading-relaxed"
              >
                From shelf to scale — flawless execution across key account management, merchandising, logistics, and private label in 47+ countries.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-wrap items-center gap-3 mt-5 lg:mt-9"
              >
                <Link to="/contact"><Btn><span className="flex items-center gap-2">Start a Partnership <ArrowRight size={15} /></span></Btn></Link>
                <Link to="/case-studies"><Btn v="glass">Case Studies</Btn></Link>
              </motion.div>

              {/* Animated counter stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-7 mt-6 lg:mt-12 pt-5 lg:pt-8 border-t border-white/5"
              >
                {[
                  { v: "99.2", s: "%", l: "On-Time Delivery" },
                  { v: "200", s: "+", l: "Brand Partners" },
                  { v: "8", s: "K+", l: "SKUs Managed" },
                ].map((b, i) => (
                  <div key={i}>
                    <p className="text-white font-extrabold text-xl font-display leading-none tracking-tight">
                      <Counter value={b.v} suffix={b.s} />
                    </p>
                    <p className="text-white/20 text-[10px]  mt-1">{b.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: 3-column pill mosaic (desktop) ── */}
            <div className="lg:col-span-7 xl:col-span-7 relative hidden lg:block">
              <HeroMosaic />
            </div>

            {/* ── MOBILE: Infinite scrolling pill marquee ── */}
            <div className="lg:hidden relative -mx-5 py-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
                style={{ overflowX: 'clip' }}
              >
                <div className="flex animate-pills whitespace-nowrap">
                  {[...MOSAIC_ITEMS, ...MOSAIC_ITEMS].map((item, i) => (
                    <div key={i} className={`relative flex-shrink-0 mx-2 ${i % 2 === 0 ? "mt-4" : "-mt-2"}`}>
                      <div className="absolute -inset-6 rounded-[3rem] blur-xl" style={{ background: item.accent, opacity: 0.4 }} />
                      <div className="absolute -inset-14 rounded-full blur-3xl" style={{ background: item.accent, opacity: 0.2 }} />
                      <Link to={item.link} className="relative block w-[65px] h-[110px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="eager" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ background: item.accent }} />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span className="text-white/15 text-[10px] tracking-[0.3em] uppercase ">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#DC2626]/60 to-transparent" />
        </motion.div>
      </section>

      </div>{/* close glow wrapper */}

      {/* ═══ MOBILE MOSAIC GLOW BRIDGE — ambient color blobs that straddle the hero/marquee boundary ═══
           Lives OUTSIDE both hero and marquee so it is not clipped by either section's overflow.
           Zero-height in flow; the absolute child extends upward into the hero's mosaic zone
           and downward through the marquee. z-20 places it above section backgrounds.
           The marquee has z-30 with a transparent mobile bg so its text floats above the glow. */}
      <div className="lg:hidden relative z-20 pointer-events-none" style={{ height: 0 }}>
        <div className="absolute left-0 right-0" style={{ height: '280px', top: '-180px' }}>
          <div className="absolute left-[0%] top-[0%] w-[60%] h-[100%] rounded-full blur-[100px]" style={{ background: '#DC2626', opacity: 0.22 }} />
          <div className="absolute left-[15%] top-[10%] w-[50%] h-[80%] rounded-full blur-[100px]" style={{ background: '#F97316', opacity: 0.16 }} />
          <div className="absolute right-[-5%] top-[5%] w-[55%] h-[95%] rounded-full blur-[100px]" style={{ background: '#8B5CF6', opacity: 0.16 }} />
          <div className="absolute right-[10%] top-[15%] w-[45%] h-[70%] rounded-full blur-[100px]" style={{ background: '#06B6D4', opacity: 0.13 }} />
          <div className="absolute left-[30%] top-[0%] w-[40%] h-[70%] rounded-full blur-[80px]" style={{ background: '#10B981', opacity: 0.10 }} />
          <div className="absolute left-[45%] top-[5%] w-[35%] h-[90%] rounded-full blur-[90px]" style={{ background: '#EC4899', opacity: 0.10 }} />
        </div>
      </div>

      {/* ═══ MARQUEE ═══ */}
      <div className="relative z-30 py-4 border-y border-transparent lg:border-white/5 overflow-hidden marquee-bg">
        <div className="relative flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }, (_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {["Key Account Management", "Merchandising & Execution", "Distribution & Logistics", "Private Label Development", "47+ Countries", "200+ Brands", "99.2% On-Time"].map((t, j) => (
                <span key={j} className="flex items-center gap-3 text-white/15 text-sm  font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]/40" />{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ STATS — Bento Grid: 1 hero stat + 3 supporting ═══ */}
      <section className="relative z-30 py-12 md:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="ctn relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Hero stat — large left block */}
            <Reveal className="md:col-span-5">
              <div className="relative rounded-[2rem] p-8 md:p-12 h-full min-h-[220px] md:min-h-[260px] flex flex-col justify-between overflow-hidden noise border border-white/[0.06] md:border-0">
                {/* Background image -- visible on mobile, hidden on md+ where mesh-red takes over */}
                <img src="/22.avif" alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" loading="lazy" />
                {/* Left-heavy gradient overlay for mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]/30 md:hidden" />
                <div className="absolute inset-0 bg-[#DC2626]/20 mix-blend-overlay md:hidden" />
                {/* Desktop mesh-red background */}
                <div className="absolute inset-0 hidden md:block mesh-red" />
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
                <span className="text-white/50 text-xs  font-semibold tracking-[0.2em] uppercase relative z-10">Global Presence</span>
                <div className="relative z-10">
                  <p className="text-5xl md:text-8xl font-extrabold text-white font-display tracking-tight leading-none">
                    <Counter value="47" suffix="+" />
                  </p>
                  <p className="text-white/50 text-sm  mt-2">Countries across 6 continents with local operational teams</p>
                </div>
              </div>
            </Reveal>

            {/* 3 stacked stats — right column */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { val: "200", suf: "+", label: "Brand Partners", sub: "Fortune 500 to emerging", icon: Award, img: "/30.jpg" },
                { val: "15", suf: "K+", label: "Retail Locations", sub: "Stores served daily", icon: Globe, img: "/29.jpg" },
                { val: "99.2", suf: "%", label: "On-Time Delivery", sub: "Industry-leading SLA", icon: TrendingUp, img: "/31.jpg" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div className="relative rounded-[1.5rem] p-6 h-full flex flex-col justify-between min-h-[125px] group overflow-hidden border border-white/[0.06]" whileHover={{ y: -4 }}>
                    {/* Background image -- visible on mobile */}
                    <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" loading="eager" />
                    {/* Left-heavy gradient overlay for mobile -- opaque left, transparent right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/25 md:hidden" />
                    {/* Desktop glass-card background */}
                    <div className="absolute inset-0 hidden md:block glass-card rounded-[1.5rem]" />
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-4 group-hover:bg-[#DC2626]/20 transition-colors">
                      <s.icon size={16} className="text-[#DC2626]" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight leading-none">
                        <Counter value={s.val} suffix={s.suf} />
                      </p>
                      <p className="text-white/60 text-xs  font-semibold mt-1.5">{s.label}</p>
                      <p className="text-white/20 text-[10px] mt-0.5">{s.sub}</p>
                    </div>
                    {/* Mobile bottom border line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 md:hidden" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — Magazine Editorial Layout ═══
           Featured service: full-width cinematic strip
           Remaining 3: horizontal numbered list with image peeks
      */}
      <section className="relative py-16 md:py-32 mesh-section overflow-hidden noise">
        <Orbs variant="red" />
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="ctn relative z-10">
          <Heading tag="What We Do" title="End-to-End Distribution" accent=" Excellence" desc="Four pillars of capability that transform how brands reach consumers worldwide." />

          {/* ── Featured Service: Cinematic full-width strip ── */}
          <Reveal>
            <Link to={`/services/${SERVICES[0].id}`}>
              <motion.div className="group relative rounded-[2rem] overflow-hidden mb-6 cursor-pointer" whileHover={{ y: -4 }}>
                <div className="relative h-[400px] md:h-[480px]">
                  <img src={SERVICES[0].hero || SERVICES[0].image} alt={SERVICES[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                {/* Content overlay — left-aligned editorial */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center glow-red-sm">
                        {(() => { const I0 = SERVICES[0].icon; return <I0 size={18} className="text-[#DC2626]" />; })()}
                      </div>
                      <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.3em] uppercase ">Featured Solution</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.05] group-hover:text-[#DC2626] transition-colors duration-500">{SERVICES[0].title}</h3>
                    <p className="text-white/40 text-sm md:text-base mt-3 max-w-md leading-relaxed">{SERVICES[0].description}</p>
                    <div className="flex items-center gap-6 mt-6">
                      {Object.entries(SERVICES[0].stats).slice(0, 3).map(([k, v], si) => (
                        <div key={k}>
                          <p className="text-white font-bold text-lg ">{v}</p>
                          <p className="text-white/20 text-[10px]">{SERVICES[0].sLabels?.[k] || k}</p>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 mt-6 text-[#DC2626] font-semibold text-sm  group-hover:gap-4 transition-all">
                      Explore Solution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
                {/* Large number watermark */}
                <div className="absolute top-6 right-8 text-[120px] md:text-[180px] font-extrabold text-white/[0.03] font-display leading-none select-none pointer-events-none">01</div>
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </Link>
          </Reveal>

          {/* ── Remaining 3 Services: Horizontal numbered cards with image peek ── */}
          <div className="grid md:grid-cols-3 gap-4">
            {SERVICES.slice(1).map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1}>
                <Link to={`/services/${s.id}`}>
                  <motion.div className="group relative glass-card rounded-[1.5rem] overflow-hidden h-full cursor-pointer" whileHover={{ y: -5 }}>
                    {/* Image strip at top */}
                    <div className="relative h-36 overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
                      <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* Large number */}
                      <div className="absolute top-3 right-4 text-5xl font-extrabold text-white/[0.06] font-display leading-none">0{i + 2}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-[#DC2626]/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-all duration-400">
                          <s.icon size={15} className="text-[#DC2626] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-white font-bold text-sm  group-hover:text-[#DC2626] transition-colors">{s.title}</h3>
                      </div>
                      <p className="text-white/25 text-xs leading-relaxed mb-4">{s.short}</p>
                      <span className="flex items-center text-[#DC2626] font-semibold text-[11px]  gap-1.5 group-hover:gap-3 transition-all tracking-wide">
                        Learn More <ArrowRight size={11} />
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT — Overlapping image collage + text ═══
           3 photos in a creative stacked/overlapping arrangement
           with a glass panel overlaying the text
      */}
      <section className="relative py-16 md:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="top-[10%] right-[5%]" size={500} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

            {/* ── Left: Overlapping image collage ── */}
            <Reveal className="lg:col-span-6" dir="left">
              <div className="relative h-[380px] md:h-[580px]">
                {/* Back image — large, slightly rotated */}
                <motion.div
                  className="absolute top-0 left-0 w-[65%] h-[70%] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
                  whileHover={{ rotate: 0 }}
                  initial={{ rotate: -3 }}
                >
                  <img src="/11.jpg" alt="Container port" className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
                </motion.div>

                {/* Middle image — overlapping right */}
                <motion.div
                  className="absolute top-[15%] right-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden border border-white/8 shadow-2xl z-10"
                  whileHover={{ rotate: 0 }}
                  initial={{ rotate: 2 }}
                >
                  <img src="/9.jpg" alt="Team meeting" className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
                </motion.div>

                {/* Front image — small accent, bottom-left */}
                <motion.div
                  className="absolute bottom-0 left-[10%] w-[40%] h-[40%] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-xl z-20"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src="/23.jpg" alt="Logistics" className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
                </motion.div>

                {/* Glass badge floating over collage */}
                <motion.div
                  className="absolute bottom-[25%] right-[5%] z-30 glass-strong rounded-2xl px-5 py-4 shadow-2xl glow-red-sm"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-white font-extrabold text-3xl font-display leading-none">25+</p>
                  <p className="text-white/40 text-[10px]  font-semibold mt-1">Years of Excellence</p>
                </motion.div>

                {/* Decorative accent blobs */}
                <div className="absolute -top-4 right-[30%] w-20 h-20 rounded-full bg-[#DC2626]/8 blur-2xl" />
                <div className="absolute bottom-[10%] -left-4 w-14 h-14 rounded-full bg-[#DC2626]/10 blur-xl" />
              </div>
            </Reveal>

            {/* ── Right: Content in glass panel ── */}
            <Reveal className="lg:col-span-6" dir="right" delay={0.15}>
              <div className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                {/* Subtle corner glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#DC2626]/5 blur-3xl" />

                <span className="inline-flex items-center gap-2 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase  mb-5">
                  <span className="w-8 h-px bg-[#DC2626]" />About Rajaton
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.05]">
                  Built on Precision.<br /><span className="text-gradient">Driven by Results.</span>
                </h2>
                <p className="text-white/35 mt-6 text-sm leading-relaxed">
                  Rajaton — meaning "limitless" — was founded with a singular vision: to create the world's most trusted brand distribution company. Today, we operate across 47 countries, serving 200+ brands with unmatched precision.
                </p>

                {/* Inline feature pills */}
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {[
                    { icon: Shield, l: "Fortune 500 trusted" },
                    { icon: Globe, l: "47+ countries" },
                    { icon: Zap, l: "AI-powered logistics" },
                    { icon: Award, l: "Industry-leading" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-4 py-2 hover:border-[#DC2626]/20 transition-colors">
                      <item.icon size={13} className="text-[#DC2626] flex-shrink-0" />
                      <p className="text-white/40 text-[11px]  font-medium">{item.l}</p>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-block mt-8"><Btn v="outline"><span className="flex items-center gap-2">Our Story <ArrowRight size={14} /></span></Btn></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS — Featured spotlight + side cards ═══
           Large featured quote on the left with portrait,
           2 stacked cards on the right
      */}
      <section className="relative py-16 md:py-32 mesh-section overflow-hidden noise">
        <div className="ctn relative z-10">
          <Heading tag="Testimonials" title="What Our Partners" accent=" Say" />

          <div className="grid lg:grid-cols-12 gap-5">
            {/* ── Featured testimonial: large spotlight ── */}
            <Reveal className="lg:col-span-7">
              <div className="relative h-full mesh-red rounded-[2rem] p-8 md:p-12 overflow-hidden noise min-h-[360px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-black/10 blur-3xl" />
                <Quote size={48} className="text-white/10 relative z-10" />
                <div className="relative z-10 mt-4">
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed italic font-body">"{TESTIMONIALS[0].text}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <img src={TESTIMONIALS[0].img} alt={TESTIMONIALS[0].name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-lg" loading="lazy" />
                    <div>
                      <p className="text-white font-bold ">{TESTIMONIALS[0].name}</p>
                      <p className="text-white/50 text-sm">{TESTIMONIALS[0].role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: 5 }, (_, si) => <Star key={si} size={14} className="text-white fill-white" />)}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Side testimonials: 2 stacked glass cards ── */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {TESTIMONIALS.slice(1, 3).map((t, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1} dir="right">
                  <motion.div className="glass-card rounded-[1.5rem] p-6 h-full group relative overflow-hidden" whileHover={{ x: 4 }}>
                    <Quote size={24} className="text-[#DC2626]/[0.06] absolute top-4 right-4" />
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }, (_, si) => <Star key={si} size={10} className="text-[#DC2626] fill-[#DC2626]" />)}
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed italic line-clamp-3">"{t.text}"</p>
                    <div className="mt-4 flex items-center gap-3">
                      <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
                      <div>
                        <p className="text-white font-semibold text-xs ">{t.name}</p>
                        <p className="text-white/20 text-[10px]">{t.role}</p>
                      </div>
                    </div>
                    {/* Left accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#DC2626] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 4th testimonial as a full-width bottom bar */}
          {TESTIMONIALS[3] && (
            <Reveal delay={0.3}>
              <div className="mt-5 glass-card rounded-[1.5rem] p-6 flex flex-col md:flex-row md:items-center gap-5">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <img src={TESTIMONIALS[3].img} alt={TESTIMONIALS[3].name} className="w-10 h-10 rounded-full object-cover border border-white/10" loading="lazy" />
                  <div>
                    <p className="text-white font-semibold text-xs ">{TESTIMONIALS[3].name}</p>
                    <p className="text-white/20 text-[10px]">{TESTIMONIALS[3].role}</p>
                  </div>
                  <div className="flex gap-0.5 ml-2">
                    {Array.from({ length: 5 }, (_, si) => <Star key={si} size={9} className="text-[#DC2626] fill-[#DC2626]" />)}
                  </div>
                </div>
                <p className="text-white/35 text-sm italic leading-relaxed flex-1">"{TESTIMONIALS[3].text}"</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ═══ CASE STUDIES — Bento Masonry Grid ═══
           1 large card spanning 2 rows, 2 medium cards, 1 wide bottom card
      */}
      <section className="relative py-16 md:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="bottom-[10%] left-0" size={500} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <Heading tag="Case Studies" title="Proven" accent=" Impact" />

          <div className="grid md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {/* Card 1 — Large, spans 2 rows */}
            <Reveal className="md:col-span-7 md:row-span-2">
              <Link to={`/case-studies/${CASES[0].id}`} className="block h-full">
                <motion.div className="group relative rounded-[1.5rem] overflow-hidden h-full cursor-pointer" whileHover={{ y: -4 }}>
                  <img src={CASES[0].hero || CASES[0].img} alt={CASES[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">{CASES[0].cat}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight mt-1.5 group-hover:text-[#DC2626] transition-colors">{CASES[0].title}</h3>
                    <p className="text-white/30 text-sm mt-2 max-w-sm hidden md:block">{CASES[0].challenge}</p>
                    <div className="glass rounded-xl px-4 py-2.5 mt-4 inline-flex items-center gap-2">
                      <TrendingUp size={13} className="text-[#DC2626]" />
                      <p className="text-[#DC2626] font-bold text-sm ">{CASES[0].result}</p>
                    </div>
                  </div>
                  {/* Number watermark */}
                  <div className="absolute top-4 right-6 text-[100px] font-extrabold text-white/[0.03] font-display leading-none select-none pointer-events-none">01</div>
                </motion.div>
              </Link>
            </Reveal>

            {/* Card 2 — Top-right */}
            <Reveal className="md:col-span-5" delay={0.1}>
              <Link to={`/case-studies/${CASES[1].id}`} className="block h-full">
                <motion.div className="group relative rounded-[1.5rem] overflow-hidden h-full cursor-pointer" whileHover={{ y: -3 }}>
                  <img src={CASES[1].img} alt={CASES[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">{CASES[1].cat}</span>
                    <h3 className="text-lg font-bold text-white  mt-1 group-hover:text-[#DC2626] transition-colors">{CASES[1].title}</h3>
                    <p className="text-[#DC2626] font-bold text-xs  mt-2">{CASES[1].result}</p>
                  </div>
                  <div className="absolute top-3 right-4 text-6xl font-extrabold text-white/[0.03] font-display leading-none">02</div>
                </motion.div>
              </Link>
            </Reveal>

            {/* Card 3 — Bottom-right, glass style */}
            <Reveal className="md:col-span-5" delay={0.2}>
              <Link to={`/case-studies/${CASES[2].id}`} className="block h-full">
                <motion.div className="group relative glass-card rounded-[1.5rem] overflow-hidden h-full cursor-pointer flex flex-col justify-between p-6" whileHover={{ y: -3 }}>
                  <div>
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">{CASES[2].cat}</span>
                    <h3 className="text-lg font-bold text-white  mt-1 group-hover:text-[#DC2626] transition-colors">{CASES[2].title}</h3>
                    <p className="text-white/20 text-xs mt-2 line-clamp-2">{CASES[2].challenge}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="glass-red rounded-lg px-3 py-1.5"><p className="text-[#DC2626] font-bold text-xs ">{CASES[2].result}</p></div>
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-all">
                      <ArrowRight size={12} className="text-[#DC2626] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-4 text-6xl font-extrabold text-white/[0.02] font-display leading-none">03</div>
                </motion.div>
              </Link>
            </Reveal>
          </div>

          {/* Wide bottom card — Card 4 */}
          {CASES[3] && (
            <Reveal delay={0.3}>
              <Link to={`/case-studies/${CASES[3].id}`}>
                <motion.div className="group mt-4 relative rounded-[1.5rem] overflow-hidden h-[180px] cursor-pointer" whileHover={{ y: -3 }}>
                  <img src={CASES[3].img} alt={CASES[3].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full">
                      <div className="flex-1">
                        <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">{CASES[3].cat}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white  mt-1 group-hover:text-[#DC2626] transition-colors">{CASES[3].title}</h3>
                      </div>
                      <div className="glass rounded-xl px-5 py-3 flex-shrink-0">
                        <p className="text-[#DC2626] font-bold text-sm ">{CASES[3].result}</p>
                      </div>
                      <div className="hidden md:block text-8xl font-extrabold text-white/[0.03] font-display leading-none select-none">04</div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          )}

          <Reveal className="text-center mt-10">
            <Link to="/case-studies"><Btn v="outline"><span className="flex items-center gap-2">All Case Studies <ArrowRight size={14} /></span></Btn></Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA — Full-bleed image background with glass overlay ═══ */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0A0A0A]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="ctn relative z-10">
          <div className="max-w-3xl mx-auto">
            <Reveal dir="scale">
              <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-16 text-center relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#DC2626]/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#DC2626]/10 blur-3xl" />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">Let's Talk</span>
                  </span>
                  <h2 className="text-3xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.05]">Ready to Scale<br />Your Distribution?</h2>
                  <p className="text-white/35 text-sm md:text-base mt-5 max-w-md mx-auto leading-relaxed">Join 200+ global brands that trust Rajaton. Let's build something extraordinary together.</p>
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    <Link to="/contact"><Btn><span className="flex items-center gap-2">Get Started <ArrowRight size={15} /></span></Btn></Link>
                    <Link to="/about"><Btn v="outline">Learn More</Btn></Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}