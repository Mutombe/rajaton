import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks";
import { SEO, INDUSTRIES } from "@/data/constants";
import { Btn, Reveal, Counter, Orbs, MorphBlob } from "@/components/ui";

const ACCENTS = ["#DC2626", "#F97316", "#10B981"];

const FEATURES = [
  ["Fleet management & route optimization", "Cross-border freight solutions", "Last-mile delivery networks"],
  ["Payment infrastructure distribution", "Regulatory compliance support", "Fintech product partnerships"],
  ["Remote site provisioning", "Equipment & parts distribution", "Safety-compliant supply chains"],
];

export default function IndustriesPage() {
  useSEO(SEO["/industries"].t, SEO["/industries"].d);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-hero noise">
        <Orbs variant="red" />
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="absolute -right-[8vw] top-1/2 -translate-y-1/2 text-[28vw] font-extrabold text-white/[0.012] leading-none select-none pointer-events-none">IN</div>

        <div className="ctn py-20 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  <span className="text-white/40 text-xs font-medium font-heading tracking-wide">3 core sectors</span>
                </span>
                <h1 className="text-[clamp(2.2rem,7vw,6rem)] font-extrabold text-white leading-[0.95] tracking-tight">
                  Sector<br /><span className="text-gradient">Expertise</span>
                </h1>
                <p className="text-white/35 text-base mt-7 max-w-sm leading-relaxed">
                  Deep domain knowledge across key industries driving Southern Africa's economy. Each sector team brings specialized experience and tailored solutions.
                </p>

                {/* Quick stats */}
                <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/5">
                  {[{ n: "3", l: "Industries" }, { n: "500", s: "+", l: "Active Routes" }, { n: "50", s: "+", l: "Mine Sites" }].map((s, i) => (
                    <div key={i}>
                      <p className="text-white font-extrabold text-lg"><Counter value={s.n} suffix={s.s || ""} /></p>
                      <p className="text-white/20 text-[10px] font-heading">{s.l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Industry image pills */}
            <div className="lg:col-span-7 hidden lg:flex gap-5 justify-end items-center relative">
              {/* Decorative dots */}
              <motion.div className="absolute -top-6 left-[20%] w-12 h-12 rounded-full" style={{ background: ACCENTS[0] }} animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="absolute bottom-[15%] left-[5%] w-8 h-8 rounded-full" style={{ background: ACCENTS[2] }} animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />

              {INDUSTRIES.map((ind, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.12, duration: 0.8 }} className="relative group" style={{ marginTop: idx === 1 ? "-2rem" : idx === 2 ? "3rem" : 0 }}>
                  <div className="absolute -inset-2 rounded-[3rem] opacity-20 blur-sm group-hover:opacity-35 transition-opacity" style={{ background: ACCENTS[idx] }} />
                  <div className={`relative w-[160px] ${idx === 1 ? "h-[220px]" : "h-[190px]"} rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl`}>
                    <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-xs font-heading truncate">{ind.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Floating glass badge */}
              <motion.div className="absolute bottom-[15%] left-[5%] z-20 glass-strong rounded-2xl px-5 py-3 shadow-2xl glow-red-sm" animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <p className="text-white font-extrabold text-xl leading-none">500+</p>
                <p className="text-white/30 text-[9px] font-heading font-semibold mt-0.5">Active Routes</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY 1 — Transport & Logistics — Full-bleed cinematic banner ═══ */}
      <section className="relative py-0 overflow-hidden">
        <Reveal>
          <div className="group relative h-[400px] md:h-[500px] overflow-hidden">
            <img src={INDUSTRIES[0].img} alt={INDUSTRIES[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/30" />
            <div className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `${ACCENTS[0]}08` }} />
            <div className="absolute inset-0 noise pointer-events-none" />

            <div className="absolute inset-0 ctn flex items-center">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center" style={{ boxShadow: `0 0 20px ${ACCENTS[0]}15` }}>
                    {(() => { const Ic = INDUSTRIES[0].icon; return <Ic size={20} style={{ color: ACCENTS[0] }} />; })()}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-heading" style={{ color: ACCENTS[0] }}>01 · Core Sector</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[0.95]">{INDUSTRIES[0].name}</h2>
                <p className="text-white/40 text-sm mt-4 max-w-md leading-relaxed">{INDUSTRIES[0].d}</p>
                <div className="mt-5 space-y-2">
                  {FEATURES[0].map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} style={{ color: ACCENTS[0] }} className="flex-shrink-0" />
                      <span className="text-white/35 text-xs font-heading">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="glass rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
                    <TrendingUp size={13} style={{ color: ACCENTS[0] }} />
                    <p className="font-bold text-sm font-heading" style={{ color: ACCENTS[0] }}>{INDUSTRIES[0].stat}</p>
                  </div>
                  <Link to="/contact" className="flex items-center gap-1.5 text-white/40 font-semibold text-xs font-heading hover:text-white hover:gap-3 transition-all">
                    Discuss Your Needs <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute top-[10%] right-[5%] text-[180px] md:text-[250px] font-extrabold text-white/[0.03] leading-none select-none pointer-events-none">01</div>
          </div>
        </Reveal>
      </section>

      {/* ═══ INDUSTRY 2 — Finance & Fintechs — Side-by-side: image + glass card ═══ */}
      <section className="relative py-12 md:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="top-[10%] left-0" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <div className="grid md:grid-cols-12 gap-4">
            {/* Image card */}
            <Reveal className="md:col-span-7">
              <motion.div className="group relative rounded-[2rem] overflow-hidden h-[380px] md:h-[440px]" whileHover={{ y: -4 }}>
                <img src={INDUSTRIES[1].img} alt={INDUSTRIES[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 to-transparent" />
                <div className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `${ACCENTS[1]}08` }} />

                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
                  <div className="max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ background: `${ACCENTS[1]}15` }}>
                        {(() => { const Ic = INDUSTRIES[1].icon; return <Ic size={16} style={{ color: ACCENTS[1] }} />; })()}
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-heading" style={{ color: ACCENTS[1] }}>02</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{INDUSTRIES[1].name}</h3>
                    <p className="text-white/35 text-sm mt-2">{INDUSTRIES[1].d}</p>
                    <div className="glass rounded-lg px-3 py-2 mt-4 inline-flex items-center gap-2">
                      <p className="font-bold text-sm font-heading" style={{ color: ACCENTS[1] }}>{INDUSTRIES[1].stat}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-6 text-8xl font-extrabold text-white/[0.04] leading-none">02</div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{ background: `linear-gradient(to right, ${ACCENTS[1]}, transparent)` }} />
              </motion.div>
            </Reveal>

            {/* Glass data card */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Reveal delay={0.1}>
                <motion.div className="group glass-card rounded-[2rem] p-7 relative overflow-hidden min-h-[240px] flex flex-col justify-between" whileHover={{ y: -3 }}>
                  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-3xl transition-colors duration-700" style={{ background: `${ACCENTS[1]}05` }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-heading" style={{ color: ACCENTS[1] }}>Key Capabilities</span>
                      <span className="text-white/[0.04] text-5xl font-extrabold">02</span>
                    </div>
                    <div className="space-y-3">
                      {FEATURES[1].map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2.5">
                          <CheckCircle2 size={13} style={{ color: ACCENTS[1] }} className="flex-shrink-0" />
                          <span className="text-white/40 text-xs font-heading">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                    <div className="glass rounded-lg px-3 py-2">
                      <p className="font-bold text-xs font-heading" style={{ color: ACCENTS[1] }}>{INDUSTRIES[1].stat}</p>
                    </div>
                    <Link to="/contact" className="flex items-center gap-1.5 text-white/30 text-xs font-heading hover:gap-3 transition-all" style={{ color: `${ACCENTS[1]}99` }}>
                      Discuss <ArrowRight size={11} />
                    </Link>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ background: ACCENTS[1] }} />
                </motion.div>
              </Reveal>

              {/* Image peek */}
              <Reveal delay={0.15}>
                <div className="relative rounded-[1.5rem] overflow-hidden h-[175px] group">
                  <img src={INDUSTRIES[1].img} alt={INDUSTRIES[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
                  <div className="absolute inset-0 mix-blend-overlay" style={{ background: `${ACCENTS[1]}05` }} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY 3 — Mining — Reversed horizontal: content left, image bleeds right ═══ */}
      <section className="relative py-0 overflow-hidden">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-0 items-center bg-[#0A0A0A]">
            {/* Glass content — left */}
            <div className="lg:col-span-5 p-8 md:p-0 relative z-10">
              <div className="glass-card rounded-[2rem] p-8 md:p-10 lg:ml-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:mr-0 lg:my-16 relative overflow-hidden group">
                <div className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full blur-3xl transition-colors" style={{ background: `${ACCENTS[2]}05` }} />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${ACCENTS[2]}15` }}>
                    {(() => { const Ic = INDUSTRIES[2].icon; return <Ic size={20} style={{ color: ACCENTS[2] }} />; })()}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-heading" style={{ color: ACCENTS[2] }}>03</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{INDUSTRIES[2].name}</h2>
                <p className="text-white/30 text-sm mt-3 leading-relaxed">{INDUSTRIES[2].d}</p>
                <div className="mt-5 space-y-2">
                  {FEATURES[2].map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} style={{ color: ACCENTS[2] }} className="flex-shrink-0" />
                      <span className="text-white/35 text-xs font-heading">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="glass rounded-lg px-3 py-2">
                    <p className="font-bold text-sm font-heading" style={{ color: ACCENTS[2] }}>{INDUSTRIES[2].stat}</p>
                  </div>
                  <Link to="/contact" className="flex items-center gap-1.5 font-semibold text-xs font-heading hover:gap-3 transition-all" style={{ color: ACCENTS[2] }}>
                    Discuss Your Needs <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ background: ACCENTS[2] }} />
              </div>
            </div>

            {/* Image bleeding right */}
            <div className="lg:col-span-7 relative h-[320px] lg:h-[480px]">
              <img src={INDUSTRIES[2].img} alt={INDUSTRIES[2].name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 mix-blend-overlay" style={{ background: `${ACCENTS[2]}05` }} />
              <div className="absolute inset-0 noise pointer-events-none" />
              <div className="absolute bottom-6 right-8 text-[120px] font-extrabold text-white/[0.04] leading-none select-none">03</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ CROSS-SECTOR CAPABILITIES ═══ */}
      <section className="relative py-12 md:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="ctn relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-4">
              <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Cross-Sector</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2 leading-[1.05]">
                Capabilities That<br /><span className="text-gradient">Scale Across</span>
              </h2>
              <p className="text-white/30 text-sm mt-4 leading-relaxed">Every industry benefits from our core platform infrastructure.</p>
            </Reveal>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
              {[
                { l: "AI Route Optimization", d: "40% reduction in delivery costs" },
                { l: "Real-Time Analytics", d: "24/7 dashboards and alerts" },
                { l: "Fleet Management", d: "GPS tracking & maintenance" },
                { l: "Regulatory Compliance", d: "Industry-specific certifications" },
                { l: "Demand Forecasting", d: "95% prediction accuracy" },
                { l: "Local Market Teams", d: "On-the-ground expertise" },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <motion.div className="glass-card rounded-xl p-4 group" whileHover={{ y: -3 }}>
                    <CheckCircle2 size={14} className="text-[#DC2626] mb-2" />
                    <h4 className="text-white font-bold text-xs font-heading">{c.l}</h4>
                    <p className="text-white/20 text-[10px] mt-1">{c.d}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0A0A0A]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="ctn relative z-10 max-w-3xl mx-auto">
          <Reveal dir="scale">
            <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-16 text-center relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#DC2626]/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#DC2626]/10 blur-3xl" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Any Sector</span>
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">Don't See<br /><span className="text-gradient">Your Industry?</span></h2>
                <p className="text-white/30 text-sm mt-5 max-w-md mx-auto">Our platform adapts to any sector. Let's discuss your unique challenges and build a custom solution.</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                  <Link to="/contact"><Btn><span className="flex items-center gap-2">Get in Touch <ArrowRight size={15} /></span></Btn></Link>
                  <Link to="/services"><Btn v="outline">Our Solutions</Btn></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
