import React from 'react';
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSEO } from "@/hooks";
import { SERVICES } from "@/data/constants";
import { Btn, Reveal, Stagger, StaggerChild, Heading, Orbs, MorphBlob } from "@/components/ui";

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const svc = SERVICES.find(s => s.id === serviceId);
  useSEO(svc ? `${svc.title} | Rajaton` : "Not Found", svc?.description || "");
  if (!svc) return <Navigate to="/services" replace />;
  const Icon = svc.icon;
  const others = SERVICES.filter(s => s.id !== serviceId);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={svc.hero || svc.image} alt={svc.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/8 to-transparent mix-blend-overlay" />
        </div>
        <Orbs />
        <div className="ctn pb-16 pt-40 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center glow-red-sm"><Icon size={20} className="text-[#DC2626]" /></div>
              <span className="text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase ">Solutions</span>
            </div>
            <h1 className="text-[clamp(2rem,6vw,5.5rem)] font-extrabold text-white leading-[0.95] tracking-tight font-display">{svc.title}</h1>
            <p className="text-white/40 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">{svc.long || svc.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 mesh-red relative noise">
        <div className="ctn relative z-10">
          <div className="grid grid-cols-3 gap-6 text-center">
            {Object.entries(svc.stats).map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.1}>
                <p className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight">{v}</p>
                <p className="text-white/50 text-xs  font-semibold mt-1 tracking-[0.15em] uppercase">{svc.sLabels?.[k] || k}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="top-[10%] right-0" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <Heading tag="Capabilities" title="What's" accent=" Included" center={false} />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" delay={0.06}>
            {svc.features.map((f, i) => (
              <StaggerChild key={i}>
                <div className="glass-card rounded-2xl p-6 h-full group">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#DC2626]/20 transition-colors">
                      <CheckCircle2 size={15} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm ">{f.name}</h3>
                      <p className="text-white/25 text-xs mt-1.5 leading-relaxed">{f.d}</p>
                    </div>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
          <Reveal className="mt-14 text-center"><Link to="/contact"><Btn><span className="flex items-center gap-2">Discuss Your Needs <ArrowRight size={14} /></span></Btn></Link></Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 mesh-section relative overflow-hidden noise">
        <div className="ctn relative z-10">
          <Heading tag="Process" title="How We" accent=" Deliver" />
          <div className="grid md:grid-cols-4 gap-5">
            {["Discovery & Audit", "Strategy & Planning", "Execution & Deploy", "Monitor & Optimize"].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group">
                  <div className="text-5xl font-extrabold text-[#DC2626]/[0.08] font-display mb-3">0{i + 1}</div>
                  <h3 className="text-white font-bold  text-sm">{step}</h3>
                  <p className="text-white/25 text-xs mt-2 leading-relaxed">
                    {i === 0 && "Assess your current landscape and identify opportunities."}
                    {i === 1 && "Custom strategy aligned to your growth targets."}
                    {i === 2 && "Precision execution across all channels."}
                    {i === 3 && "Continuous real-time optimization and reporting."}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5">
        <div className="ctn">
          <Reveal className="mb-10"><h2 className="text-2xl font-bold text-white ">Other Solutions</h2></Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map(s => (
              <Link to={`/services/${s.id}`} key={s.id}>
                <motion.div className="glass-card rounded-2xl p-5 h-full group" whileHover={{ y: -3 }}>
                  <s.icon size={20} className="text-[#DC2626] mb-3" />
                  <h3 className="text-white font-bold  text-sm group-hover:text-[#DC2626] transition-colors">{s.title}</h3>
                  <p className="text-white/20 text-xs mt-1.5">{s.short}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
