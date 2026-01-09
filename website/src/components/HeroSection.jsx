import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, TrendingUp, Award, Users, Globe } from 'lucide-react';
import { FaPersonWalking } from "react-icons/fa6";

// --- Configuration ---
const features = [
  { icon: TrendingUp, text: 'Nationwide distribution coverage' },
  { icon: Users, text: 'Expert merchandising teams' },
  { icon: Award, text: 'Private label development' },
];

const floatingCards = [
  { value: '150+', label: 'Retail Partners', icon: FaPersonWalking, color: 'bg-blue-50 text-blue-600', position: 'top-[15%] right-[10%] delay-0' },
  { value: '98%', label: 'Client Retention', icon: Award, color: 'bg-yellow-50 text-yellow-600', position: 'top-[45%] right-[25%] delay-1000' },
  { value: '9 Prov', label: 'Coverage', icon: Globe, color: 'bg-green-50 text-green-600', position: 'bottom-[20%] right-[5%] delay-2000' },
];

const backgroundImages = {
  left: "/4.jpg",
  right: "/5.jpg",
  full: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
};

// --- MOBILE BACKGROUND ---
const MobileBackground = () => {
  const images = Object.values(backgroundImages);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden md:hidden bg-rajaton-charcoal">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt="Background"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-white/90" />
    </div>
  );
};

// --- DESKTOP BACKGROUND ---
const DesktopBackground = () => {
  const [phase, setPhase] = useState('split'); 

  useEffect(() => {
    const cycle = async () => {
      setPhase('split');
      await new Promise(r => setTimeout(r, 4000));
      setPhase('transition-out');
      await new Promise(r => setTimeout(r, 1000));
      setPhase('full');
      await new Promise(r => setTimeout(r, 4000));
      setPhase('full-exit');
      await new Promise(r => setTimeout(r, 1000));
    };

    const interval = setInterval(() => { cycle(); }, 10000); 
    cycle(); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden hidden md:block bg-rajaton-charcoal">
      {/* Layer 1: Full Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ 
          x: phase === 'full-exit' ? '-100%' : '0%',
          opacity: phase === 'full-exit' ? 0.5 : 1
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
         <img src={backgroundImages.full} alt="Full BG" className="w-full h-full object-cover opacity-40" />
      </motion.div>

      {/* Layer 2: Split Images */}
      <div className="absolute inset-0 flex">
        <motion.div 
          className="relative w-1/2 h-full overflow-hidden"
          initial={{ y: '-100%' }}
          animate={{ 
            y: phase === 'split' ? '0%' : (phase === 'transition-out' ? '100%' : (phase === 'full' ? '100%' : '-100%'))
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-rajaton-charcoal/60 mix-blend-multiply z-10" />
          <img src={backgroundImages.left} alt="Left" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="relative w-1/2 h-full overflow-hidden"
          initial={{ y: '100%' }}
          animate={{ 
            y: phase === 'split' ? '0%' : (phase === 'transition-out' ? '-100%' : (phase === 'full' ? '-100%' : '100%'))
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-rajaton-red/20 mix-blend-multiply z-10" />
          <img src={backgroundImages.right} alt="Right" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-20" />
    </div>
  );
};

// --- Main Hero Component ---
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden niveau-font">
      
      <MobileBackground />
      <DesktopBackground />

      <div className="container-custom relative z-30 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-rajaton-red/10 text-rajaton-red rounded-full text-sm font-medium mb-6 border border-rajaton-red/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-rajaton-red rounded-full animate-pulse" />
                South Africa's Premier FMCG Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-rajaton-charcoal leading-tight"
            >
              Brand Solutions
              <br />
              {/* RESTORED STYLISH UNDERLINE */}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rajaton-red to-orange-600 z-10 relative">
                  for South Africa
                </span>
                <svg 
                  className="absolute -bottom-2 left-0 w-full z-0" 
                  viewBox="0 0 300 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path 
                    d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" 
                    stroke="#f94449" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-rajaton-slate max-w-lg leading-relaxed font-medium mx-auto lg:mx-0"
            >
              Your trusted partner for route-to-market excellence, key account management, 
              and private label development across the nation.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 flex flex-col items-center lg:items-start"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rajaton-red/10 flex items-center justify-center">
                    <Check size={14} className="text-rajaton-red" />
                  </div>
                  <span className="text-rajaton-slate font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-rajaton-red text-white rounded-full font-bold shadow-lg shadow-rajaton-red/30 flex items-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-rajaton-charcoal text-rajaton-charcoal rounded-full font-bold"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards Only (Hidden on Mobile) */}
          <div className="relative h-[500px] lg:h-[700px] hidden lg:block pointer-events-none">
            {floatingCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0] // Floating animation
                }}
                transition={{ 
                  opacity: { delay: 0.5 + (idx * 0.2), duration: 0.5 },
                  scale: { delay: 0.5 + (idx * 0.2), duration: 0.5 },
                  y: { 
                    repeat: Infinity, 
                    duration: 4 + idx, 
                    ease: "easeInOut",
                    delay: idx 
                  }
                }}
                className={`absolute ${card.position} p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-strong border border-white/50 flex items-center gap-4 max-w-[240px] z-40`}
              >
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center shadow-sm`}>
                  <card.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-rajaton-charcoal">
                    {card.value}
                  </p>
                  <p className="text-sm font-medium text-rajaton-slate">{card.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection