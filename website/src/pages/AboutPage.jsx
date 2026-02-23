import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Rocket, Target, Globe, Lightbulb, Shield, Heart, Linkedin, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { useSEO } from "@/hooks";
import { SEO, TEAM } from "@/data/constants";
import { Btn, Reveal, Stagger, StaggerChild, Heading, Orbs, MorphBlob, Counter } from "@/components/ui";

const VALUES = [
  { icon: Target, title: "Precision", d: "Every detail matters. Surgical accuracy across all operations.", accent: "#DC2626" },
  { icon: Globe, title: "Global Reach", d: "Local expertise meets global scale. 47+ countries, one standard.", accent: "#F97316" },
  { icon: Lightbulb, title: "Innovation", d: "AI-driven logistics and data-powered merchandising at every level.", accent: "#8B5CF6" },
  { icon: Shield, title: "Integrity", d: "Transparent partnerships built on trust, accountability, and results.", accent: "#10B981" },
  { icon: Rocket, title: "Agility", d: "Rapid adaptation with flexible, scalable solutions for any market.", accent: "#06B6D4" },
  { icon: Heart, title: "Partnership", d: "Your success is our success. Deep investment in every relationship.", accent: "#EAB308" },
];

const TIMELINE = [
  { year: "2001", title: "Founded", d: "Rajaton established in Sandton, South Africa with a vision of limitless excellence.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" },
  { year: "2007", title: "First Expansion", d: "Expanded to 10 countries across Europe and the Middle East.", img: "/11.jpg" },
  { year: "2013", title: "Tech Transformation", d: "Launched proprietary AI supply chain management platform.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
  { year: "2018", title: "Global Scale", d: "30 countries, 100+ brands, 5,000 employees worldwide.", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80" },
  { year: "2023", title: "Industry Leader", d: "47 countries, 200+ brands, #1 global distribution partner.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" },
  { year: "2026", title: "The Future", d: "Autonomous logistics and predictive AI merchandising.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
];

export default function AboutPage() {
  useSEO(SEO["/about"].t, SEO["/about"].d);

  return (
    <>
      {/* ═══ HERO — Split: text left, stacked pill images right ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-hero noise">
        <Orbs variant="red" />
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="absolute -left-[10vw] top-1/2 -translate-y-1/2 text-[35vw] font-extrabold text-white/[0.012] leading-none select-none pointer-events-none font-display">A</div>

        <div className="ctn py-20 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Text */}
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  <span className="text-white/40 text-xs font-medium  tracking-wide">Est. 2001 · Sandton, South Africa</span>
                </span>
                <h1 className="text-[clamp(2.2rem,7vw,6.5rem)] font-extrabold text-white leading-[0.95] tracking-tight font-display">
                  Limitless<br />by <span className="text-gradient">Design</span>
                </h1>
                <p className="text-white/35 text-base md:text-lg mt-8 max-w-md leading-relaxed">
                  "Rajaton" means limitless in Finnish. It's not just our name — it's our philosophy. No borders, no boundaries, no limits to what we can achieve together.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-10">
                  <Link to="/contact"><Btn><span className="flex items-center gap-2">Partner With Us <ArrowRight size={15} /></span></Btn></Link>
                  <Link to="/careers"><Btn v="glass">Join Our Team</Btn></Link>
                </div>

                {/* Quick stats row */}
                <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5">
                  {[{ n: "25+", l: "Years" }, { n: "47", l: "Countries" }, { n: "200+", l: "Brands" }, { n: "8K+", l: "Team" }].map((s, i) => (
                    <div key={i}>
                      <p className="text-white font-extrabold text-lg font-display">{s.n}</p>
                      <p className="text-white/20 text-[10px] ">{s.l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Pill image collage — right side */}
            <div className="lg:col-span-6 relative hidden lg:flex gap-4 justify-end items-center">
              {/* Decorative blobs */}
              <motion.div className="absolute -top-8 left-[20%] w-14 h-14 rounded-full bg-[#DC2626]" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="absolute bottom-[10%] left-[5%] w-9 h-9 rounded-full bg-[#F97316]" animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
              <motion.div className="absolute top-[30%] -right-2 w-7 h-7 rounded-full bg-[#8B5CF6]" animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />

              {/* Col 1 */}
              <div className="flex flex-col gap-4 pt-16">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative group">
                  <div className="absolute -inset-2 rounded-[3rem] bg-[#DC2626] opacity-20 blur-sm group-hover:opacity-35 transition-opacity" />
                  <div className="relative w-[140px] h-[190px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative group">
                  <div className="absolute -inset-2 rounded-[3rem] bg-[#10B981] opacity-20 blur-sm group-hover:opacity-35 transition-opacity" />
                  <div className="relative w-[140px] h-[160px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" alt="Operations" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                  </div>
                </motion.div>
              </div>

              {/* Col 2 — taller, offset up */}
              <div className="flex flex-col gap-4 -mt-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="relative group">
                  <div className="absolute -inset-2 rounded-[3rem] bg-[#F97316] opacity-20 blur-sm group-hover:opacity-35 transition-opacity" />
                  <div className="relative w-[150px] h-[210px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/10.jpg" alt="Global logistics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }} className="relative group">
                  <div className="absolute -inset-2 rounded-[3rem] bg-[#8B5CF6] opacity-20 blur-sm group-hover:opacity-35 transition-opacity" />
                  <div className="relative w-[150px] h-[180px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="Strategy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                  </div>
                </motion.div>
              </div>

              {/* Col 3 — short, offset down */}
              <div className="flex flex-col gap-4 pt-24">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative group">
                  <div className="absolute -inset-2 rounded-[3rem] bg-[#06B6D4] opacity-20 blur-sm group-hover:opacity-35 transition-opacity" />
                  <div className="relative w-[130px] h-[200px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" alt="Warehouse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                  </div>
                </motion.div>
              </div>

              {/* Floating glass badge */}
              <motion.div className="absolute bottom-[20%] left-[10%] z-20 glass-strong rounded-2xl px-5 py-4 shadow-2xl glow-red-sm"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <p className="text-white font-extrabold text-2xl font-display leading-none">25+</p>
                <p className="text-white/30 text-[9px]  font-semibold mt-1">Years of Excellence</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION & VISION — Cinematic image with overlapping glass panels ═══ */}
      <section className="relative py-0 overflow-hidden">
        {/* Full-bleed cinematic image */}
        <div className="relative h-[500px] md:h-[600px]">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80" alt="Rajaton headquarters" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay" />
          <div className="absolute inset-0 noise pointer-events-none" />

          {/* Large text watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-extrabold text-white/[0.03] font-display leading-none select-none pointer-events-none whitespace-nowrap">RAJATON</div>
        </div>

        {/* Glass panels overlapping from below — pulled up into the image */}
        <div className="ctn relative z-10 -mt-48 md:-mt-56">
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal dir="left">
              <div className="glass-dark rounded-[2rem] p-8 md:p-10 h-full relative overflow-hidden group">
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#DC2626]/5 blur-3xl group-hover:bg-[#DC2626]/10 transition-colors duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#DC2626]/15 flex items-center justify-center">
                      <Eye size={20} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">Our Mission</span>
                      <h3 className="text-white text-lg font-bold ">Why We Exist</h3>
                    </div>
                  </div>
                  <p className="text-white/40 text-sm md:text-base leading-relaxed">
                    To be the invisible force connecting great brands with every consumer, everywhere. We make distribution seamless, intelligent, and limitless — empowering brands to focus on what they do best while we handle the rest.
                  </p>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.1}>
              <div className="mesh-red rounded-[2rem] p-8 md:p-10 h-full relative overflow-hidden noise group">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-black/15 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Rocket size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase ">Our Vision</span>
                      <h3 className="text-white text-lg font-bold ">Where We're Going</h3>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    A world where every product reaches its consumer through the most efficient, sustainable, and intelligent distribution network ever built. Technology and human expertise, combined without limits.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ VALUES — Bento Layout: 2 large featured + 4 compact + decorative image ═══ */}
      <section className="relative py-16 md:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="top-[10%] right-[5%]" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <Heading tag="Our Values" title="The Principles That" accent=" Guide Us" />

          <div className="grid md:grid-cols-12 gap-4">
            {/* Large card 1 */}
            <Reveal className="md:col-span-5 md:row-span-2">
              <motion.div className="glass-card rounded-[2rem] p-8 h-full relative overflow-hidden group min-h-[320px] flex flex-col justify-between" whileHover={{ y: -4 }}>
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-15 blur-2xl transition-all duration-700 group-hover:opacity-30" style={{ background: VALUES[0].accent }} />
                {(() => { const Ic = VALUES[0].icon; return (
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-lg" style={{ background: `${VALUES[0].accent}15` }}>
                  <Ic size={22} style={{ color: VALUES[0].accent }} />
                </div>
                ); })()}
                <div>
                  <h3 className="text-white text-2xl font-bold  mb-2">{VALUES[0].title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed">{VALUES[0].d}</p>
                  <p className="text-white/15 text-xs mt-4 leading-relaxed">From warehouse temperature controls to shelf-level planogram compliance, our obsession with precision creates trust that compound over decades.</p>
                </div>
                {/* Number watermark */}
                <div className="absolute top-6 right-8 text-[100px] font-extrabold text-white/[0.02] font-display leading-none select-none">01</div>
              </motion.div>
            </Reveal>

            {/* Large card 2 */}
            <Reveal className="md:col-span-7" delay={0.08}>
              <motion.div className="relative rounded-[2rem] overflow-hidden h-[200px] group cursor-default" whileHover={{ y: -3 }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Global team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
                <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center p-8">
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${VALUES[1].accent}15` }}>
                      {(() => { const Ic = VALUES[1].icon; return <Ic size={20} style={{ color: VALUES[1].accent }} />; })()}
                    </div>
                    <h3 className="text-white text-xl font-bold ">{VALUES[1].title}</h3>
                    <p className="text-white/35 text-sm mt-1.5 max-w-xs">{VALUES[1].d}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-6 text-7xl font-extrabold text-white/[0.04] font-display leading-none">02</div>
              </motion.div>
            </Reveal>

            {/* 4 compact cards */}
            {VALUES.slice(2).map((v, i) => (
              <Reveal key={i} className="md:col-span-3 lg:col-span-3 xl:col-span-3" delay={0.12 + i * 0.06}>
                <motion.div className="glass-card rounded-[1.5rem] p-5 h-full group relative overflow-hidden" whileHover={{ y: -4 }}>
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full opacity-10 blur-xl group-hover:opacity-25 transition-all duration-500" style={{ background: v.accent }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-md" style={{ background: `${v.accent}15` }}>
                        <v.icon size={16} style={{ color: v.accent }} />
                      </div>
                      <span className="text-white/[0.04] text-3xl font-extrabold font-display">0{i + 3}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm  mb-1.5">{v.title}</h3>
                    <p className="text-white/25 text-xs leading-relaxed">{v.d}</p>
                  </div>
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ background: v.accent }} />
                </motion.div>
              </Reveal>
            ))}

            {/* Extra: decorative accent — small image pill */}
            <Reveal className="hidden xl:block xl:col-span-1" delay={0.4}>
              <div className="relative h-full min-h-[120px]">
                <div className="absolute -inset-1 rounded-[1.5rem] bg-[#DC2626] opacity-15 blur-sm" />
                <div className="relative rounded-[1.5rem] overflow-hidden h-full border border-white/10">
                  <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE — Horizontal scrolling cards with connected line ═══ */}
      <section className="relative py-16 md:py-32 mesh-section overflow-hidden noise">
        <div className="ctn relative z-10">
          <Heading tag="Our Journey" title="25 Years of" accent=" Limitless Growth" />

          {/* Desktop: Horizontal connected timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[100px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {TIMELINE.map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <motion.div className="group relative" whileHover={{ y: -6 }}>
                    {/* Image pill at top */}
                    <div className="relative mx-auto w-full max-w-[140px] h-[100px] rounded-[1.5rem] overflow-hidden mb-4 border border-white/8 shadow-lg">
                      <img src={t.img} alt={t.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay bg-[#DC2626]" />
                    </div>

                    {/* Dot on the line */}
                    <div className="hidden md:flex justify-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#DC2626] border-[3px] border-[#111] glow-red-sm group-hover:scale-150 transition-transform" />
                    </div>

                    {/* Content card */}
                    <div className="glass-card rounded-xl p-4 text-center group-hover:border-[#DC2626]/20 transition-colors">
                      <span className="text-gradient font-extrabold text-xl font-display">{t.year}</span>
                      <h3 className="text-white font-bold text-xs  mt-1">{t.title}</h3>
                      <p className="text-white/20 text-[10px] mt-1.5 leading-relaxed">{t.d}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TEAM — Featured CEO + Creative Grid ═══ */}
      <section id="team" className="relative py-16 md:py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="bottom-[5%] right-[5%]" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <Heading tag="Leadership" title="Meet the" accent=" Team" />

          <div className="grid md:grid-cols-12 gap-4">
            {/* ── Featured: CEO — Large cinematic card ── */}
            <Reveal className="md:col-span-5 md:row-span-2">
              <motion.div className="group relative rounded-[2rem] overflow-hidden h-full min-h-[500px]" whileHover={{ y: -4 }}>
                <img src={TEAM[0].img} alt={TEAM[0].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <div className="glass-strong rounded-2xl p-5 shadow-2xl">
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">{TEAM[0].role}</span>
                    <h3 className="text-white text-2xl font-bold  mt-1">{TEAM[0].name}</h3>
                    <p className="text-white/30 text-sm mt-2">{TEAM[0].bio}</p>
                    <a href="#" className="inline-flex mt-3 w-8 h-8 rounded-full bg-white/5 items-center justify-center hover:bg-[#DC2626]/20 transition-colors">
                      <Linkedin size={13} className="text-white/40" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* ── Remaining 5 team members: 2-col grid ── */}
            {TEAM.slice(1).map((m, i) => (
              <Reveal key={i} className="md:col-span-3 lg:col-span-3 xl:col-span-3" delay={0.08 + i * 0.06}>
                <motion.div className="group relative rounded-[1.5rem] overflow-hidden h-[240px]" whileHover={{ y: -4 }}>
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                  <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="glass-strong rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-xs ">{m.name}</h3>
                          <p className="text-[#DC2626] text-[10px] font-semibold ">{m.role}</p>
                        </div>
                        <a href="#" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#DC2626]/20 transition-colors flex-shrink-0">
                          <Linkedin size={10} className="text-white/30" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}

            {/* Join the team CTA card — fills remaining space */}
            <Reveal className="md:col-span-4" delay={0.4}>
              <Link to="/careers">
                <motion.div className="glass-red rounded-[1.5rem] h-[240px] flex flex-col items-center justify-center text-center p-6 group cursor-pointer relative overflow-hidden" whileHover={{ y: -4 }}>
                  <div className="absolute inset-0 bg-[#DC2626]/5 group-hover:bg-[#DC2626]/10 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#DC2626]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#DC2626]/30 group-hover:scale-110 transition-all">
                      <ArrowUpRight size={20} className="text-[#DC2626]" />
                    </div>
                    <h3 className="text-white font-bold  text-sm">Join Our Team</h3>
                    <p className="text-white/25 text-xs mt-1">10+ open positions worldwide</p>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA — Full-bleed image with glass card ═══ */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0A0A0A]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
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
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase ">Partner With Us</span>
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.05]">Ready to Go<br /><span className="text-gradient">Limitless?</span></h2>
                  <p className="text-white/30 text-sm mt-5 max-w-md mx-auto">Let's discuss how Rajaton can transform your distribution strategy across any market.</p>
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    <Link to="/contact"><Btn><span className="flex items-center gap-2">Get Started <ArrowRight size={15} /></span></Btn></Link>
                    <Link to="/services"><Btn v="outline">Our Solutions</Btn></Link>
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