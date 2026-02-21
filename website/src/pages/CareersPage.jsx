import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Layers, ArrowRight, Globe, TrendingUp, Heart, DollarSign, Calendar, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useSEO } from "@/hooks";
import { SEO, JOBS } from "@/data/constants";
import { Btn, Reveal, Stagger, StaggerChild, Heading, Orbs, MorphBlob } from "@/components/ui";

export default function CareersPage() {
  useSEO(SEO["/careers"].t, SEO["/careers"].d);
  const [filter, setFilter] = useState("All");
  const depts = ["All", ...new Set(JOBS.map(j => j.dept))];
  const filtered = filter === "All" ? JOBS : JOBS.filter(j => j.dept === filter);

  const perks = [
    { icon: Globe, t: "Remote Flexibility", d: "Work from anywhere, global hybrid model" },
    { icon: TrendingUp, t: "Career Growth", d: "Clear paths to leadership" },
    { icon: Heart, t: "Health & Wellness", d: "Comprehensive medical & mental health" },
    { icon: DollarSign, t: "Competitive Pay", d: "Above-market comp with equity" },
    { icon: Calendar, t: "Generous PTO", d: "30 days plus national holidays" },
    { icon: Sparkles, t: "Learning Budget", d: "$5K annual development fund" },
  ];

  return (
    <>
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-hero">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <Orbs />
        <div className="ctn py-20 md:py-40 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-flex items-center gap-2 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-4"><span className="w-8 h-px bg-[#DC2626]" />Careers</span>
            <h1 className="text-[clamp(2.2rem,7vw,6.5rem)] font-extrabold text-white leading-[0.95] tracking-tight ">
              Build the Future<br />of <span className="text-gradient">Distribution</span>
            </h1>
            <p className="text-white/35 text-base md:text-lg mt-8 max-w-lg">Join a global team reshaping how brands reach the world.</p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 md:py-24 mesh-red relative overflow-hidden noise">
        <div className="ctn relative z-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white  tracking-tight">Why Rajaton?</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" delay={0.06}>
            {perks.map((p, i) => (
              <StaggerChild key={i}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 h-full">
                  <p.icon size={20} className="text-white mb-3" />
                  <h3 className="text-white font-bold text-sm font-heading">{p.t}</h3>
                  <p className="text-white/50 text-xs mt-1">{p.d}</p>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-16 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 dots pointer-events-none" />
        <MorphBlob className="top-[5%] right-0" size={400} color="rgba(220,38,38,0.04)" />
        <div className="ctn relative z-10">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white  tracking-tight">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {depts.map(d => (
                <button key={d} onClick={() => setFilter(d)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold font-heading transition-all duration-300 ${
                    filter === d ? "bg-[#DC2626] text-white shadow-lg shadow-red-500/20" : "glass text-white/40 hover:text-white/70"
                  }`}>{d}</button>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-2.5">
              {filtered.map((job, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.04 } }}
                  className="glass-card rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer"
                  whileHover={{ x: 4 }}
                  onClick={() => toast.success(`Application for ${job.title} — coming soon!`)}>
                  <div>
                    <h3 className="text-white font-bold text-sm font-heading group-hover:text-[#DC2626] transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-white/25 text-xs"><MapPin size={11} />{job.loc}</span>
                      <span className="flex items-center gap-1 text-white/25 text-xs"><Briefcase size={11} />{job.type}</span>
                      <span className="flex items-center gap-1 text-white/25 text-xs"><Layers size={11} />{job.level}</span>
                      <span className="flex items-center gap-1 text-white/25 text-xs"><DollarSign size={11} />{job.pay}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <span className="text-[10px] glass text-white/25 px-3 py-1.5 rounded-full font-heading font-semibold">{job.dept}</span>
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-all duration-300">
                      <ArrowRight size={13} className="text-[#DC2626] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/25">No positions in this department right now.</p>
              <p className="text-white/15 text-xs mt-1">Send your CV to careers@rajaton.com</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
