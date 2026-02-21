import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Btn, Orbs, MorphBlob } from "@/components/ui";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-hero noise">
      <Orbs variant="red" />
      <MorphBlob className="top-1/4 left-1/4" size={500} color="rgba(220,38,38,0.06)" />
      <div className="absolute inset-0 dots pointer-events-none" />
      <div className="ctn py-32 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-[25vw] md:text-[200px] font-extrabold text-gradient leading-none select-none  opacity-20">404</div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white -mt-8 md:-mt-14  tracking-tight">
            Page Not <span className="text-gradient">Found</span>
          </h1>
          <p className="text-white/25 text-base mt-6 max-w-sm mx-auto">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <Link to="/"><Btn><span className="flex items-center gap-2"><Home size={14} /> Back to Home</span></Btn></Link>
            <Link to="/contact"><Btn v="outline">Contact Us</Btn></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
