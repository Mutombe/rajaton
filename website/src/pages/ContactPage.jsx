import { useState } from "react";
import { motion } from "framer-motion";
import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { useSEO } from "@/hooks";
import { SEO, SERVICES } from "@/data/constants";
import { Btn, Reveal, Orbs, MorphBlob } from "@/components/ui";

export default function ContactPage() {
  useSEO(SEO["/contact"].t, SEO["/contact"].d);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const up = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent! We'll respond within 24 hours.");
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }, 3000);
  };

  const offices = [
    { city: "Sandton", addr: "11 Alice Lane, Bowmans Building, Level 2", phone: "+27 11 669 9000", tz: "SAST" },
    { city: "London", addr: "One Canada Square, Canary Wharf, E14 5AB", phone: "+44 20 7946 0958", tz: "GMT" },
    { city: "Dubai", addr: "DIFC Gate Village, Building 5", phone: "+971 4 401 9500", tz: "GST" },
    { city: "Singapore", addr: "Marina Bay Financial Centre, Tower 1", phone: "+65 6823 4567", tz: "SGT" },
  ];

  const inputCls = "w-full bg-white/[0.03] border border-white/8 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/15 focus:outline-none focus:border-[#DC2626]/40 focus:ring-2 focus:ring-[#DC2626]/10 transition-all font-body";

  return (
    <>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden mesh-hero noise">
        <Orbs variant="red" />
        <MorphBlob className="top-[20%] right-[10%]" size={500} color="rgba(220,38,38,0.06)" />
        <div className="absolute inset-0 dots pointer-events-none" />
        <div className="ctn py-20 md:py-40 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-flex items-center gap-2 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-4"><span className="w-8 h-px bg-[#DC2626]" />Contact</span>
            <h1 className="text-[clamp(2.2rem,7vw,6.5rem)] font-extrabold text-white leading-[0.95] tracking-tight ">
              Let's Build<br /><span className="text-gradient">Together</span>
            </h1>
            <p className="text-white/35 text-base md:text-lg mt-8 max-w-lg">Whether you're a brand looking to scale or a retailer seeking solutions — we'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 mesh-section relative overflow-hidden noise">
        <div className="ctn relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <Reveal className="lg:col-span-3" dir="left">
              <div className="glass-card rounded-[2rem] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white font-heading mb-1.5">Send us a message</h2>
                <p className="text-white/25 text-sm mb-8">We'll get back to you within 24 hours.</p>
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-heading font-semibold">Full Name *</label>
                      <input type="text" value={form.name} onChange={e => up("name", e.target.value)} className={inputCls} placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-heading font-semibold">Work Email *</label>
                      <input type="email" value={form.email} onChange={e => up("email", e.target.value)} className={inputCls} placeholder="john@company.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-heading font-semibold">Company</label>
                      <input type="text" value={form.company} onChange={e => up("company", e.target.value)} className={inputCls} placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-heading font-semibold">Service Interest</label>
                      <select value={form.service} onChange={e => up("service", e.target.value)} className={`${inputCls} appearance-none cursor-pointer`}>
                        <option value="" className="bg-[#111]">Select a service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-[#111]">{s.title}</option>)}
                        <option value="other" className="bg-[#111]">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/30 text-xs mb-1.5 font-heading font-semibold">Message *</label>
                    <textarea value={form.message} onChange={e => up("message", e.target.value)} rows={4} className={`${inputCls} resize-none`} placeholder="Tell us about your goals..." required />
                  </div>
                  <Btn type="submit">
                    <span className="flex items-center gap-2">
                      {sent ? <><CheckCircle2 size={14} /> Sent!</> : <><Send size={14} /> Send Message</>}
                    </span>
                  </Btn>
                </form>
              </div>
            </Reveal>

            {/* Offices */}
            <Reveal className="lg:col-span-2" dir="right" delay={0.15}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white font-heading mb-4">Global Offices</h2>
                {offices.map((o, i) => (
                  <motion.div key={i} className="glass-card rounded-2xl p-5 group" whileHover={{ x: 4 }}>
                    <h3 className="text-white font-bold font-heading text-sm flex items-center gap-2">
                      <MapPin size={13} className="text-[#DC2626]" />{o.city}
                    </h3>
                    <p className="text-white/20 text-xs mt-1.5">{o.addr}</p>
                    <div className="flex items-center gap-4 mt-2.5">
                      <p className="text-white/30 text-xs flex items-center gap-1"><Phone size={10} />{o.phone}</p>
                      <p className="text-white/15 text-[10px] flex items-center gap-1"><Clock size={9} />{o.tz}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="glass-card rounded-2xl p-5 mt-4">
                  <h3 className="text-white font-bold font-heading text-sm mb-3">Quick Contact</h3>
                  <div className="space-y-2.5">
                    <a href="mailto:partnerships@rajaton.com" className="text-white/25 text-xs flex items-center gap-2.5 hover:text-[#DC2626] transition-colors"><Mail size={12} className="text-[#DC2626]" />partnerships@rajaton.com</a>
                    <a href="mailto:careers@rajaton.com" className="text-white/25 text-xs flex items-center gap-2.5 hover:text-[#DC2626] transition-colors"><Mail size={12} className="text-[#DC2626]" />careers@rajaton.com</a>
                    <p className="text-white/25 text-xs flex items-center gap-2.5"><Phone size={12} className="text-[#DC2626]" />+44 20 7946 0958</p>
                    <p className="text-white/25 text-xs flex items-center gap-2.5"><Clock size={12} className="text-[#DC2626]" />Mon–Fri 9:00–18:00 GMT</p>
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
