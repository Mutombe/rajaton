import React from 'react'
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp, BarChart3, Target, Zap, Quote } from "lucide-react";
import { useSEO } from "@/hooks";
import { SEO, CASES, TESTIMONIALS } from "@/data/constants";
import { Btn, Reveal, Counter, Heading, Orbs, MorphBlob } from "@/components/ui";

/* ═══════════════════════════════════════════════════
   CASE STUDIES LIST PAGE
   Bento masonry: hero card + staggered grid + CTA
   ═══════════════════════════════════════════════════ */
export default function CaseStudiesPage() {
  useSEO(SEO["/case-studies"].t, SEO["/case-studies"].d);

  return (
    <>
      {/* ═══ HERO — Split: text left, featured case image mosaic right ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-hero noise">
        <Orbs variant="red" />
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="absolute -right-[5vw] top-1/2 -translate-y-1/2 text-[30vw] font-extrabold text-white/[0.012] leading-none select-none pointer-events-none ">CS</div>

        <div className="ctn py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  <span className="text-white/40 text-xs font-medium font-heading tracking-wide">4 impact stories</span>
                </span>
                <h1 className="text-[clamp(3rem,7vw,6rem)] font-extrabold text-white leading-[0.95] tracking-tight ">
                  Proven<br /><span className="text-gradient">Results</span>
                </h1>
                <p className="text-white/35 text-base mt-7 max-w-sm leading-relaxed">
                  Real stories of transformation, growth, and measurable impact. Every number backed by execution.
                </p>

                {/* Aggregate stats */}
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/5">
                  {[
                    { n: "340", s: "%", l: "Max Growth" },
                    { n: "50", s: "M", l: "Revenue Generated" },
                    { n: "45", s: "%", l: "Cost Reduction" },
                  ].map((s, i) => (
                    <div key={i}>
                      <p className="text-white font-extrabold text-2xl  leading-none">
                        <Counter value={s.n} suffix={s.s} />
                      </p>
                      <p className="text-white/20 text-[10px] font-heading mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Featured case — large cinematic card */}
            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
            >
              <Link to={`/case-studies/${CASES[0].id}`}>
                <div className="group relative rounded-[2rem] overflow-hidden h-[400px] md:h-[480px] cursor-pointer">
                  <img src={CASES[0].hero || CASES[0].img} alt={CASES[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Featured badge */}
                  <div className="absolute top-5 left-5 glass-strong rounded-full px-4 py-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    <span className="text-white/60 text-[10px] font-heading font-semibold tracking-wide">Featured Case Study</span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                    <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">{CASES[0].cat}</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white  tracking-tight mt-2 group-hover:text-[#DC2626] transition-colors">{CASES[0].title}</h3>
                    <p className="text-white/35 text-sm mt-2 max-w-md">{CASES[0].challenge}</p>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="glass rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
                        <TrendingUp size={13} className="text-[#DC2626]" />
                        <p className="text-[#DC2626] font-bold text-sm font-heading">{CASES[0].result}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-white/40 font-semibold text-xs font-heading group-hover:text-white group-hover:gap-3 transition-all">
                        Read Story <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>

                  {/* Number watermark */}
                  <div className="absolute top-4 right-6 text-[120px] font-extrabold text-white/[0.03]  leading-none select-none pointer-events-none">01</div>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ REMAINING CASES — Each with unique layout ═══ */}
      <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="top-[20%] right-0" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">

          {/* ── Case 2: Full-width horizontal — image left, content right ── */}
          <Reveal className="mb-6">
            <Link to={`/case-studies/${CASES[1].id}`}>
              <motion.div className="group grid md:grid-cols-12 gap-0 glass-card rounded-[2rem] overflow-hidden" whileHover={{ y: -4 }}>
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <img src={CASES[1].hero || CASES[1].img} alt={CASES[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/30" />
                  <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 text-7xl font-extrabold text-white/[0.06]  leading-none">02</div>
                </div>
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#DC2626]/3 blur-3xl" />
                  <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">{CASES[1].cat}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white  tracking-tight mt-2 group-hover:text-[#DC2626] transition-colors">{CASES[1].title}</h3>
                  <p className="text-white/30 text-sm mt-3 leading-relaxed max-w-md">{CASES[1].challenge}</p>
                  {/* Inline outcomes */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {CASES[1].outcomes.slice(0, 3).map((o, oi) => (
                      <span key={oi} className="inline-flex items-center gap-1.5 glass text-white/30 px-3 py-1.5 rounded-full text-[10px] font-heading font-medium">
                        <CheckCircle2 size={10} className="text-[#DC2626]" />{o}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 mt-7">
                    <div className="glass-red rounded-xl px-5 py-3">
                      <p className="text-[#DC2626] font-bold text-base font-heading">{CASES[1].result}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-white/40 font-semibold text-xs font-heading group-hover:text-white group-hover:gap-3 transition-all">
                      Full Story <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </Link>
          </Reveal>

          {/* ── Cases 3 & 4: Side-by-side bento ── */}
          <div className="grid md:grid-cols-12 gap-4">
            {/* Case 3 — Tall portrait card with overlaid content */}
            <Reveal className="md:col-span-7">
              <Link to={`/case-studies/${CASES[2].id}`}>
                <motion.div className="group relative rounded-[2rem] overflow-hidden h-[380px] md:h-[420px] cursor-pointer" whileHover={{ y: -4 }}>
                  <img src={CASES[2].hero || CASES[2].img} alt={CASES[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" />
                  <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Content overlaid left */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
                    <div className="max-w-sm">
                      <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">{CASES[2].cat}</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white  tracking-tight mt-2 group-hover:text-[#DC2626] transition-colors">{CASES[2].title}</h3>
                      <p className="text-white/30 text-sm mt-2">{CASES[2].challenge}</p>
                      <div className="flex items-center gap-4 mt-5">
                        <div className="glass rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
                          <TrendingUp size={13} className="text-[#DC2626]" />
                          <p className="text-[#DC2626] font-bold text-sm font-heading">{CASES[2].result}</p>
                        </div>
                        <span className="flex items-center gap-1.5 text-white/40 font-semibold text-xs font-heading group-hover:text-white group-hover:gap-3 transition-all">
                          Read Story <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-6 text-8xl font-extrabold text-white/[0.04]  leading-none">03</div>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DC2626] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </motion.div>
              </Link>
            </Reveal>

            {/* Case 4 — Glass card (no image, pure data) + Testimonial stacked */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Reveal delay={0.1}>
                <Link to={`/case-studies/${CASES[3].id}`}>
                  <motion.div className="group glass-card rounded-[2rem] p-7 md:p-8 relative overflow-hidden cursor-pointer h-full min-h-[240px] flex flex-col justify-between" whileHover={{ y: -3 }}>
                    <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#DC2626]/5 blur-3xl group-hover:bg-[#DC2626]/10 transition-colors duration-700" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">{CASES[3].cat}</span>
                        <span className="text-white/[0.04] text-6xl font-extrabold  leading-none">04</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white  tracking-tight group-hover:text-[#DC2626] transition-colors">{CASES[3].title}</h3>
                      <p className="text-white/25 text-sm mt-2 leading-relaxed">{CASES[3].challenge}</p>
                    </div>
                    <div className="relative z-10 flex items-center justify-between mt-5 pt-5 border-t border-white/5">
                      <div className="glass-red rounded-lg px-4 py-2">
                        <p className="text-[#DC2626] font-bold text-sm font-heading">{CASES[3].result}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#DC2626]/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-all duration-300">
                        <ArrowUpRight size={14} className="text-[#DC2626] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#DC2626] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  </motion.div>
                </Link>
              </Reveal>

              {/* Mini testimonial */}
              <Reveal delay={0.2}>
                <div className="mesh-red rounded-[1.5rem] p-6 relative overflow-hidden noise">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-black/10 blur-2xl" />
                  <Quote size={24} className="text-white/10 mb-3" />
                  <p className="text-white/60 text-sm italic leading-relaxed">"{TESTIMONIALS[0].text.slice(0, 120)}..."</p>
                  <div className="mt-4 flex items-center gap-2.5">
                    <img src={TESTIMONIALS[0].img} alt={TESTIMONIALS[0].name} className="w-8 h-8 rounded-full object-cover border border-white/20" loading="lazy" />
                    <div>
                      <p className="text-white font-semibold text-xs font-heading">{TESTIMONIALS[0].name}</p>
                      <p className="text-white/40 text-[10px]">{TESTIMONIALS[0].role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0A0A0A]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="ctn relative z-10 max-w-3xl mx-auto">
          <Reveal dir="scale">
            <div className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#DC2626]/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#DC2626]/10 blur-3xl" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Your Turn</span>
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white  tracking-tight leading-[1.05]">Ready for<br /><span className="text-gradient">Similar Results?</span></h2>
                <p className="text-white/30 text-sm mt-5 max-w-md mx-auto">Every case study started with a single conversation. Let's start yours.</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                  <Link to="/contact"><Btn><span className="flex items-center gap-2">Start a Conversation <ArrowRight size={15} /></span></Btn></Link>
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

/* ═══════════════════════════════════════════════════
   CASE STUDY DETAIL PAGE
   Cinematic hero → floating result bar → side-by-side
   challenge/solution with sticky outcomes panel
   ═══════════════════════════════════════════════════ */
export function CaseStudyDetailPage() {
  const { caseId } = useParams();
  const cs = CASES.find(c => c.id === caseId);
  const csIndex = CASES.findIndex(c => c.id === caseId);
  useSEO(cs ? `${cs.title} | Rajaton` : "Case Study", cs?.challenge || "");
  if (!cs) return <Navigate to="/case-studies" replace />;

  const others = CASES.filter(c => c.id !== caseId);

  return (
    <>
      {/* ═══ HERO — Full-bleed cinematic with content at bottom ═══ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={cs.hero || cs.img} alt={cs.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />
          <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 noise pointer-events-none" />

        {/* Large number */}
        <div className="absolute top-[15%] right-[5%] text-[200px] md:text-[300px] font-extrabold text-white/[0.03]  leading-none select-none pointer-events-none">
          0{csIndex + 1}
        </div>

        <div className="ctn pb-16 pt-40 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span className="text-white/40 text-xs font-heading font-medium">{cs.cat}</span>
            </span>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[0.95] tracking-tight ">{cs.title}</h1>
            <p className="text-white/30 text-sm mt-4 font-heading">Client: <span className="text-white/50">{cs.client}</span></p>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESULT BAR — Floating glass strip overlapping hero ═══ */}
      <div className="ctn relative z-20 -mt-10">
        <Reveal>
          <div className="glass-strong rounded-[1.5rem] p-6 md:p-8 shadow-2xl flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-[#DC2626]/15 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={22} className="text-[#DC2626]" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-heading font-semibold tracking-[0.15em] uppercase">Key Result</p>
                <p className="text-2xl md:text-3xl font-extrabold text-white  tracking-tight">{cs.result}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {cs.outcomes.slice(0, 2).map((o, i) => (
                <div key={i} className="glass rounded-xl px-4 py-2 flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-[#DC2626]" />
                  <span className="text-white/50 text-xs font-heading font-semibold">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ═══ CONTENT — Challenge & Solution side by side + Outcomes ═══ */}
      <section className="relative py-24 md:py-32 mesh-section overflow-hidden noise">
        <MorphBlob className="top-[10%] right-0" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Main content — left */}
            <div className="lg:col-span-7 space-y-10">
              {/* Challenge */}
              <Reveal>
                <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#DC2626]/5 blur-2xl group-hover:bg-[#DC2626]/10 transition-colors" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
                      <Target size={16} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Phase 01</span>
                      <h2 className="text-white text-lg font-bold font-heading">The Challenge</h2>
                    </div>
                  </div>
                  <p className="text-white/35 text-sm leading-[1.8]">{cs.challenge}</p>
                  <p className="text-white/20 text-sm mt-4 leading-[1.8]">
                    The client needed a partner who could understand the complexity of their operations and deliver a solution that scaled across multiple markets while maintaining consistency and compliance.
                  </p>
                </div>
              </Reveal>

              {/* Solution */}
              <Reveal delay={0.1}>
                <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#DC2626]/5 blur-2xl group-hover:bg-[#DC2626]/10 transition-colors" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
                      <Zap size={16} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Phase 02</span>
                      <h2 className="text-white text-lg font-bold font-heading">Our Solution</h2>
                    </div>
                  </div>
                  <p className="text-white/35 text-sm leading-[1.8]">{cs.solution}</p>
                  <p className="text-white/20 text-sm mt-4 leading-[1.8]">
                    Our team deployed dedicated specialists on the ground, implemented real-time tracking and reporting dashboards, and established KPIs aligned with the client's growth targets from day one.
                  </p>
                </div>
              </Reveal>

              {/* Process timeline strip */}
              <Reveal delay={0.2}>
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                  {["Discovery", "Strategy", "Execution", "Optimization"].map((step, i) => (
                    <div key={i} className="glass-card rounded-xl p-4 min-w-[140px] flex-shrink-0 group">
                      <div className="text-3xl font-extrabold text-[#DC2626]/[0.1]  mb-1">0{i + 1}</div>
                      <p className="text-white font-bold text-xs font-heading">{step}</p>
                      <div className="w-full h-[2px] mt-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#DC2626] rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar — sticky outcomes panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-5">
              {/* Outcomes card */}
              <Reveal delay={0.15}>
                <div className="mesh-red rounded-[2rem] p-7 md:p-8 relative overflow-hidden noise">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-black/10 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <BarChart3 size={16} className="text-white" />
                      <h3 className="text-white font-bold font-heading text-sm">Key Outcomes</h3>
                    </div>
                    <div className="space-y-3">
                      {cs.outcomes.map((o, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.08 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 size={15} className="text-white flex-shrink-0" />
                          <span className="text-white font-semibold text-sm font-heading">{o}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* CTA */}
              <Reveal delay={0.25}>
                <Link to="/contact">
                  <motion.div className="glass-card rounded-[1.5rem] p-6 group cursor-pointer relative overflow-hidden" whileHover={{ y: -3 }}>
                    <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-[#DC2626]/5 blur-xl group-hover:bg-[#DC2626]/10 transition-colors" />
                    <h3 className="text-white font-bold font-heading text-sm mb-1.5">Want similar results?</h3>
                    <p className="text-white/20 text-xs mb-4">Let's discuss your distribution challenges.</p>
                    <span className="flex items-center gap-2 text-[#DC2626] font-semibold text-xs font-heading group-hover:gap-3 transition-all">
                      Start a Conversation <ArrowRight size={12} />
                    </span>
                  </motion.div>
                </Link>
              </Reveal>

              {/* Related testimonial */}
              <Reveal delay={0.3}>
                <div className="glass-card rounded-[1.5rem] p-6 relative overflow-hidden">
                  <Quote size={20} className="text-[#DC2626]/[0.08] absolute top-4 right-4" />
                  <p className="text-white/30 text-xs italic leading-relaxed">"{TESTIMONIALS[csIndex % TESTIMONIALS.length]?.text.slice(0, 150)}..."</p>
                  <div className="mt-3 flex items-center gap-2">
                    <img src={TESTIMONIALS[csIndex % TESTIMONIALS.length]?.img} alt="" className="w-7 h-7 rounded-full object-cover border border-white/10" loading="lazy" />
                    <div>
                      <p className="text-white/50 text-[10px] font-heading font-semibold">{TESTIMONIALS[csIndex % TESTIMONIALS.length]?.name}</p>
                      <p className="text-white/15 text-[9px]">{TESTIMONIALS[csIndex % TESTIMONIALS.length]?.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MORE CASE STUDIES — Horizontal card row ═══ */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5">
        <div className="ctn">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white font-heading">More Case Studies</h3>
              <Link to="/case-studies" className="flex items-center gap-1.5 text-[#DC2626] font-semibold text-xs font-heading hover:gap-3 transition-all">
                View All <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.slice(0, 3).map((c, i) => (
              <Reveal key={c.id} delay={i * 0.08}>
                <Link to={`/case-studies/${c.id}`}>
                  <motion.div className="group relative rounded-[1.5rem] overflow-hidden h-[220px] cursor-pointer" whileHover={{ y: -4 }}>
                    <img src={c.hero || c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                    <div className="absolute inset-0 bg-[#DC2626]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[#DC2626] text-[9px] font-bold tracking-[0.2em] uppercase font-heading">{c.cat}</span>
                      <h4 className="text-white font-bold font-heading text-sm mt-0.5 group-hover:text-[#DC2626] transition-colors">{c.title}</h4>
                      <p className="text-[#DC2626] font-bold text-xs font-heading mt-1.5">{c.result}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}