import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp, BarChart3, Layers, Workflow } from "lucide-react";
import { useSEO } from "@/hooks";
import { SEO, SERVICES } from "@/data/constants";
import { Btn, Reveal, Counter, Heading, Orbs, MorphBlob } from "@/components/ui";

export default function ServicesPage() {
  useSEO(SEO["/services"].t, SEO["/services"].d);

  return (
    <>
      {/* ═══ HERO — Full-screen with floating service pills ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-hero noise">
        <Orbs variant="red" />
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="absolute -left-[8vw] top-1/2 -translate-y-1/2 text-[30vw] font-extrabold text-white/[0.012] leading-none select-none pointer-events-none ">S</div>

        <div className="ctn py-20 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  <span className="text-white/40 text-xs font-medium font-heading tracking-wide">4 core solutions</span>
                </span>
                <h1 className="text-[clamp(2.2rem,7vw,6rem)] font-extrabold text-white leading-[0.95] tracking-tight ">
                  Distribution<br /><span className="text-gradient">Reimagined</span>
                </h1>
                <p className="text-white/35 text-base mt-7 max-w-sm leading-relaxed">
                  Four pillars of excellence that power global brand growth from shelf to scale. Each one built to compound results.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-9">
                  <Link to="/contact"><Btn><span className="flex items-center gap-2">Get a Proposal <ArrowRight size={15} /></span></Btn></Link>
                  <Link to="/case-studies"><Btn v="glass">See Results</Btn></Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Service preview grid — 2x2 glass cards with icons */}
            <div className="lg:col-span-7 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {SERVICES.map((s, i) => {
                  const Icon = s.icon;
                  const accents = ["#DC2626", "#F97316", "#8B5CF6", "#06B6D4"];
                  return (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link to={`/services/${s.id}`}>
                        <motion.div
                          className="group glass-card rounded-[1.5rem] p-5 relative overflow-hidden cursor-pointer h-[180px] flex flex-col justify-between"
                          whileHover={{ y: -5, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-xl group-hover:opacity-25 transition-all duration-500" style={{ background: accents[i] }} />
                          <div className="flex items-center justify-between">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-500" style={{ background: `${accents[i]}15` }}>
                              <Icon size={18} style={{ color: accents[i] }} />
                            </div>
                            <span className="text-white/[0.04] text-4xl font-extrabold ">0{i + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-sm font-heading group-hover:text-[#DC2626] transition-colors">{s.title}</h3>
                            <p className="text-white/20 text-[10px] mt-1 line-clamp-2">{s.short}</p>
                          </div>
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ background: accents[i] }} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE 1 — Full-width cinematic banner ═══ */}
      <section className="relative py-0 overflow-hidden">
        <Reveal>
          <Link to={`/services/${SERVICES[0].id}`}>
            <div className="group relative h-[450px] md:h-[550px] cursor-pointer overflow-hidden">
              <img src={SERVICES[0].hero || SERVICES[0].image} alt={SERVICES[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/30" />
              <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 noise pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 ctn flex items-center">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center glow-red-sm">
                      {(() => { const Ic = SERVICES[0].icon; return <Ic size={20} className="text-[#DC2626]" />; })()}
                    </div>
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.3em] uppercase font-heading">01 · Flagship Solution</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-extrabold text-white  tracking-tight leading-[0.95] group-hover:text-[#DC2626] transition-colors duration-500">{SERVICES[0].title}</h2>
                  <p className="text-white/40 text-sm md:text-base mt-4 max-w-md leading-relaxed">{SERVICES[0].description}</p>

                  {/* Stats inline */}
                  <div className="flex items-center gap-6 mt-7">
                    {Object.entries(SERVICES[0].stats).slice(0, 3).map(([k, v], si) => (
                      <div key={k}>
                        <p className="text-white font-bold text-lg font-heading">{v}</p>
                        <p className="text-white/20 text-[10px]">{SERVICES[0].sLabels?.[k] || k}</p>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 mt-8 text-[#DC2626] font-semibold text-sm font-heading group-hover:gap-4 transition-all">
                    Explore Solution <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Number watermark */}
              <div className="absolute top-[10%] right-[5%] text-[200px] md:text-[280px] font-extrabold text-white/[0.03]  leading-none select-none pointer-events-none">01</div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          </Link>
        </Reveal>
      </section>

      {/* ═══ SERVICE 2 — Reversed: content left in glass panel, image right bleeding to edge ═══ */}
      <section className="relative py-12 md:py-0 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            {/* Glass content panel — left */}
            <div className="lg:col-span-5 relative z-10 p-8 md:p-0">
              <Link to={`/services/${SERVICES[1].id}`} className="block">
                <motion.div className="glass-card rounded-[2rem] p-8 md:p-10 lg:ml-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:mr-0 lg:my-16 relative overflow-hidden group cursor-pointer" whileHover={{ x: 4 }}>
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#F97316]/5 blur-3xl group-hover:bg-[#F97316]/10 transition-colors" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F97316]/15 flex items-center justify-center">
                      {(() => { const Ic = SERVICES[1].icon; return <Ic size={20} className="text-[#F97316]" />; })()}
                    </div>
                    <span className="text-[#F97316] text-[10px] font-bold tracking-[0.3em] uppercase font-heading">02</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white  tracking-tight group-hover:text-[#F97316] transition-colors">{SERVICES[1].title}</h2>
                  <p className="text-white/30 text-sm mt-3 leading-relaxed">{SERVICES[1].description}</p>

                  {/* Features as checklist */}
                  <div className="mt-6 space-y-2.5">
                    {SERVICES[1].features.slice(0, 4).map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} className="text-[#F97316] flex-shrink-0" />
                        <span className="text-white/40 text-xs font-heading">{f.name}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 mt-7 text-[#F97316] font-semibold text-xs font-heading group-hover:gap-3 transition-all tracking-wide">
                    Explore Solution <ArrowRight size={12} />
                  </span>
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F97316] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                </motion.div>
              </Link>
            </div>

            {/* Image — right, bleeding to viewport edge */}
            <div className="lg:col-span-7 relative h-[350px] lg:h-[520px]">
              <img src={SERVICES[1].hero || SERVICES[1].image} alt={SERVICES[1].title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 bg-[#F97316]/5 mix-blend-overlay" />
              <div className="absolute inset-0 noise pointer-events-none" />
              {/* Number */}
              <div className="absolute bottom-6 right-8 text-[120px] font-extrabold text-white/[0.04]  leading-none select-none">02</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ SERVICES 3 & 4 — Side-by-side bento: tall portrait + stacked ═══ */}
      <section className="relative py-12 md:py-24 mesh-section overflow-hidden noise">
        <MorphBlob className="top-[10%] right-0" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <div className="grid md:grid-cols-12 gap-4">

            {/* Service 3 — Tall portrait cinematic card */}
            <Reveal className="md:col-span-7">
              <Link to={`/services/${SERVICES[2].id}`}>
                <motion.div className="group relative rounded-[2rem] overflow-hidden h-[420px] md:h-[500px] cursor-pointer" whileHover={{ y: -4 }}>
                  <img src={SERVICES[2].hero || SERVICES[2].image} alt={SERVICES[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" />
                  <div className="absolute inset-0 bg-[#8B5CF6]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 noise pointer-events-none" />

                  <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
                    <div className="max-w-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/15 flex items-center justify-center backdrop-blur-sm">
                          {(() => { const Ic = SERVICES[2].icon; return <Ic size={18} className="text-[#8B5CF6]" />; })()}
                        </div>
                        <span className="text-[#8B5CF6] text-[10px] font-bold tracking-[0.3em] uppercase font-heading">03</span>
                      </div>
                      <h2 className="text-2xl md:text-4xl font-extrabold text-white  tracking-tight leading-[1.05] group-hover:text-[#8B5CF6] transition-colors">{SERVICES[2].title}</h2>
                      <p className="text-white/35 text-sm mt-3 leading-relaxed">{SERVICES[2].short}</p>

                      {/* Stats inline */}
                      <div className="flex items-center gap-5 mt-5">
                        {Object.entries(SERVICES[2].stats).slice(0, 2).map(([k, v]) => (
                          <div key={k} className="glass rounded-lg px-3 py-2">
                            <p className="text-white font-bold text-sm font-heading">{v}</p>
                            <p className="text-white/20 text-[9px]">{SERVICES[2].sLabels?.[k] || k}</p>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 mt-6 text-[#8B5CF6] font-semibold text-xs font-heading group-hover:gap-3 transition-all tracking-wide">
                        Explore Solution <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-6 text-[100px] font-extrabold text-white/[0.04]  leading-none select-none pointer-events-none">03</div>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </motion.div>
              </Link>
            </Reveal>

            {/* Service 4 — Stacked: glass data card + image peek + mini CTA */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Reveal delay={0.1}>
                <Link to={`/services/${SERVICES[3].id}`}>
                  <motion.div className="group glass-card rounded-[2rem] p-7 md:p-8 relative overflow-hidden cursor-pointer min-h-[240px] flex flex-col justify-between" whileHover={{ y: -3 }}>
                    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-[#06B6D4]/5 blur-3xl group-hover:bg-[#06B6D4]/10 transition-colors duration-700" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-[#06B6D4]/15 flex items-center justify-center">
                            {(() => { const Ic = SERVICES[3].icon; return <Ic size={18} className="text-[#06B6D4]" />; })()}
                          </div>
                          <span className="text-[#06B6D4] text-[10px] font-bold tracking-[0.3em] uppercase font-heading">04</span>
                        </div>
                        <span className="text-white/[0.04] text-6xl font-extrabold  leading-none">04</span>
                      </div>
                      <h2 className="text-xl font-extrabold text-white  tracking-tight group-hover:text-[#06B6D4] transition-colors">{SERVICES[3].title}</h2>
                      <p className="text-white/25 text-sm mt-2 leading-relaxed">{SERVICES[3].description}</p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2 mt-5">
                      {SERVICES[3].features.slice(0, 3).map((f, fi) => (
                        <span key={fi} className="inline-flex items-center gap-1.5 glass text-white/25 px-3 py-1.5 rounded-full text-[10px] font-heading font-medium">
                          <CheckCircle2 size={9} className="text-[#06B6D4]" />{f.name}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 mt-6 text-[#06B6D4] font-semibold text-xs font-heading group-hover:gap-3 transition-all tracking-wide relative z-10">
                      Explore Solution <ArrowRight size={12} />
                    </span>
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#06B6D4] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  </motion.div>
                </Link>
              </Reveal>

              {/* Image peek — small accent card */}
              <Reveal delay={0.2}>
                <div className="relative rounded-[1.5rem] overflow-hidden h-[180px] group">
                  <img src={SERVICES[3].hero || SERVICES[3].image} alt={SERVICES[3].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                  <div className="absolute inset-0 bg-[#06B6D4]/5 mix-blend-overlay" />
                  {/* Floating stat */}
                  <motion.div className="absolute bottom-4 left-4 glass-strong rounded-xl px-4 py-2.5 shadow-lg" animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <p className="text-white font-bold text-sm font-heading">{Object.values(SERVICES[3].stats)[0]}</p>
                    <p className="text-white/25 text-[9px]">{SERVICES[3].sLabels?.[Object.keys(SERVICES[3].stats)[0]] || Object.keys(SERVICES[3].stats)[0]}</p>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Horizontal process strip ═══ */}
      <section className="relative py-12 md:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="ctn relative z-10">
          <Heading tag="Process" title="How We" accent=" Deliver" desc="A proven methodology refined over 25 years of global execution." />

          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#DC2626]/30 via-white/5 to-[#DC2626]/30" />

            {["Discovery & Audit", "Strategy & Design", "Execution & Deploy", "Optimize & Scale"].map((step, i) => {
              const colors = ["#DC2626", "#F97316", "#8B5CF6", "#06B6D4"];
              const icons = [BarChart3, Layers, Workflow, TrendingUp];
              const Ic = icons[i];
              const descs = [
                "We audit your current landscape, map opportunities, and benchmark against competitors.",
                "Custom strategy aligned to your growth targets with clear KPIs and milestones.",
                "Precision rollout across all channels with dedicated on-ground teams.",
                "Continuous real-time optimization, reporting, and strategic scaling.",
              ];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div className="group relative text-center px-4 py-6" whileHover={{ y: -4 }}>
                    {/* Circle node */}
                    <div className="w-[52px] h-[52px] rounded-full mx-auto flex items-center justify-center relative z-10 transition-all duration-500 group-hover:shadow-lg border border-white/5 bg-[#111]" style={{ boxShadow: `0 0 0 0px ${colors[i]}00` }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500" style={{ background: `${colors[i]}15` }}>
                        <Ic size={16} style={{ color: colors[i] }} />
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="text-5xl font-extrabold  mt-4 leading-none" style={{ color: `${colors[i]}10` }}>0{i + 1}</div>

                    <h3 className="text-white font-bold text-sm font-heading mt-2">{step}</h3>
                    <p className="text-white/20 text-[11px] mt-2 leading-relaxed max-w-[200px] mx-auto">{descs[i]}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON — Why Rajaton strip ═══ */}
      <section className="relative py-12 md:py-24 mesh-section overflow-hidden noise">
        <div className="ctn relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <Reveal className="lg:col-span-4">
              <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Why Rajaton?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white  tracking-tight mt-2 leading-[1.05]">
                The Distribution<br /><span className="text-gradient">Advantage</span>
              </h2>
              <p className="text-white/30 text-sm mt-4 leading-relaxed">What separates us from every other distributor on the planet.</p>
            </Reveal>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {[
                { n: "47+", l: "Countries", d: "Local teams with global coordination" },
                { n: "99.2%", l: "On-Time Rate", d: "Industry-leading delivery SLA" },
                { n: "24/7", l: "Real-Time Data", d: "AI-powered dashboards and alerts" },
                { n: "$50M+", l: "Revenue Generated", d: "Measurable ROI for every partner" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <motion.div className="glass-card rounded-[1.5rem] p-6 group relative overflow-hidden" whileHover={{ y: -3 }}>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#DC2626]/5 blur-xl group-hover:bg-[#DC2626]/10 transition-colors" />
                    <p className="text-3xl font-extrabold text-white  tracking-tight">{s.n}</p>
                    <p className="text-[#DC2626] text-xs font-bold font-heading mt-1">{s.l}</p>
                    <p className="text-white/20 text-[10px] mt-1.5">{s.d}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA — Glass card over image ═══ */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
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
                  <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Custom Solutions</span>
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white  tracking-tight leading-[1.05]">Need Something<br /><span className="text-gradient">Tailored?</span></h2>
                <p className="text-white/30 text-sm mt-5 max-w-md mx-auto">Our team will design a bespoke distribution strategy for your brand's unique needs.</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                  <Link to="/contact"><Btn><span className="flex items-center gap-2">Talk to Our Team <ArrowRight size={15} /></span></Btn></Link>
                  <Link to="/about"><Btn v="outline">About Rajaton</Btn></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}