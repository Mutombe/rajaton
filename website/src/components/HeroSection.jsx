import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Store, TrendingUp, Award, Users, Globe, Truck, ShoppingBag } from 'lucide-react';

// --- Configuration ---
const stats = [
  { value: '150+', label: 'Retail Partners', icon: Store, gradient: 'from-red-500 to-orange-500' },
  { value: '98%', label: 'Client Retention', icon: Award, gradient: 'from-amber-500 to-yellow-500' },
  { value: '9', label: 'Provinces Covered', icon: Globe, gradient: 'from-emerald-500 to-teal-500' },
];

const services = [
  { title: 'Route-to-Market', icon: Truck },
  { title: 'Key Accounts', icon: Users },
  { title: 'Private Label', icon: ShoppingBag },
];

// Floating blob animation
const blobVariants = {
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// --- Decorative Elements ---
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large gradient orb */}
    <motion.div
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl"
    />
    {/* Small accent orb */}
    <motion.div
      animate={{
        x: [0, -20, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-1/3 left-10 w-32 h-32 bg-gradient-to-br from-red-400/30 to-transparent rounded-full blur-2xl"
    />
    {/* Bottom orb */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-t from-orange-500/10 to-transparent rounded-full blur-3xl"
    />
  </div>
);

// --- Stat Card Component ---
const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.6 + index * 0.15, duration: 0.5, ease: "backOut" }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-lg shadow-black/5">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
          <stat.icon size={22} className="text-white" />
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Service Pill Component ---
const ServicePill = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 + index * 0.1 }}
    whileHover={{ scale: 1.05, x: 5 }}
    className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm cursor-pointer group"
  >
    <service.icon size={16} className="text-red-500" />
    <span className="text-sm font-medium text-gray-700">{service.title}</span>
    <ArrowUpRight size={14} className="text-gray-400 group-hover:text-red-500 transition-colors" />
  </motion.div>
);

// --- Image Blob Component ---
const ImageBlob = ({ src, className, blobColor, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: "backOut" }}
    className={`relative ${className}`}
  >
    {/* Animated blob background */}
    <motion.div
      variants={blobVariants}
      animate="animate"
      className={`absolute inset-0 ${blobColor} rounded-[40%_60%_70%_30%/40%_50%_60%_50%]`}
      style={{ transform: 'scale(1.1)' }}
    />
    {/* Image container with mask */}
    <div className="relative w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden">
      <img 
        src={src} 
        alt="Team" 
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

// --- DESKTOP HERO ---
const DesktopHero = () => (
  <div className="hidden lg:block relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30">
    <FloatingOrbs />
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }} />

    <div className="container-custom relative z-10 pt-28 pb-20">
      <div className="grid grid-cols-12 gap-6 items-center min-h-[80vh]">
        
        {/* Left Content - 5 columns */}
        <div className="col-span-5 space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold border border-red-100">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-red-500 rounded-full"
              />
              South Africa's Premier FMCG Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]">
              Brand
              <br />
              <span className="relative inline-block">
                Solutions
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 12" 
                  fill="none"
                >
                  <motion.path 
                    d="M2 8C40 2 80 10 100 6C120 2 160 10 198 4" 
                    stroke="url(#gradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                for South Africa
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed max-w-md"
          >
            Your trusted partner for route-to-market excellence, key account management, 
            and private label development across all nine provinces.
          </motion.p>

          {/* Service Pills */}
          <motion.div className="flex flex-wrap gap-3">
            {services.map((service, idx) => (
              <ServicePill key={idx} service={service} index={idx} />
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 pt-4"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(239, 68, 68, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold shadow-lg shadow-red-500/25 flex items-center gap-2 group"
              >
                Explore Services
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <Play size={18} className="text-red-500 ml-1" fill="currentColor" />
              </div>
              Watch Story
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - 7 columns - Bento Grid */}
        <div className="col-span-7 relative h-[600px]">
          {/* Main large image with blob - LEFT SIDE */}
          <ImageBlob
            src="/4.jpg"
            className="w-72 h-72 xl:w-80 xl:h-80 absolute top-8 left-0"
            blobColor="bg-gradient-to-br from-red-400 to-orange-400"
            delay={0.3}
          />

          {/* Secondary image - BOTTOM LEFT */}
          <ImageBlob
            src="/5.jpg"
            className="w-44 h-44 xl:w-52 xl:h-52 absolute bottom-16 left-24"
            blobColor="bg-gradient-to-br from-gray-800 to-gray-900"
            delay={0.5}
          />

          {/* Floating decorative element - FAR RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="absolute top-16 right-0 w-16 h-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-2 border-dashed border-red-300 rounded-full"
            />
            <div className="absolute inset-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <TrendingUp size={20} className="text-white" />
            </div>
          </motion.div>

          {/* Stats Cards - RIGHT SIDE of images */}
          <div className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 space-y-4 w-64">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} index={idx} />
            ))}
          </div>

          {/* Accent dots - BOTTOM RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-0 right-24 flex gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-orange-400' : 'bg-yellow-400'}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

// --- MOBILE HERO ---
const MobileHero = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:hidden relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-red-50/50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-red-400/20 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 px-5 pt-28 pb-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-semibold border border-red-100">
            <motion.span 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-red-500 rounded-full"
            />
            SA's Premier FMCG Partner
          </span>
        </motion.div>

        {/* Creative Image Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-64 mb-8"
        >
          {/* Main blob image */}
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-500 rounded-[40%_60%_55%_45%/45%_40%_60%_55%] scale-110" />
            <div className="relative w-full h-full rounded-[40%_60%_55%_45%/45%_40%_60%_55%] overflow-hidden shadow-2xl shadow-red-500/20">
              <img src="/4.jpg" alt="Team" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Floating mini image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute right-4 bottom-0 w-24 h-24"
          >
            <div className="absolute inset-0 bg-gray-900 rounded-2xl rotate-6" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <img src="/5.jpg" alt="Team" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-4 top-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
          >
            <TrendingUp size={20} className="text-red-500" />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute right-8 top-8 w-8 h-8 border-2 border-dashed border-orange-300 rounded-full"
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Brand Solutions
            <br />
            <span className="relative inline-block mt-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                for South Africa
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full origin-left"
              />
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 mb-8 px-4 leading-relaxed"
        >
          Your trusted partner for route-to-market excellence and key account management nationwide.
        </motion.p>

        {/* Animated Stats Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative h-28 mb-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {stats.map((stat, idx) => idx === activeCard && (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute inset-0 flex justify-center"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-black/5 border border-white/50 flex items-center gap-5 w-full max-w-xs">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Carousel indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {stats.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveCard(idx)}
                animate={{ 
                  width: idx === activeCard ? 24 : 8,
                  backgroundColor: idx === activeCard ? '#ef4444' : '#d1d5db'
                }}
                className="h-2 rounded-full transition-colors"
              />
            ))}
          </div>
        </motion.div>

        {/* Service Pills - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide justify-center flex-wrap"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm shrink-0"
            >
              <service.icon size={16} className="text-red-500" />
              <span className="text-sm font-medium text-gray-700">{service.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-3 px-1"
        >
          <Link to="/services" className="block">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight size={18} />
            </motion.button>
          </Link>
          
          <Link to="/about" className="block">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-white text-gray-700 rounded-2xl font-semibold border border-gray-200 flex items-center justify-center gap-2"
            >
              <Play size={16} className="text-red-500" fill="currentColor" />
              Watch Our Story
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 mt-10"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
              className={`w-2 h-2 rounded-full ${
                i === 0 || i === 4 ? 'bg-red-300' : 
                i === 1 || i === 3 ? 'bg-red-400' : 'bg-red-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
function HeroSection() {
  return (
    <section className="relative niveau-font">
      <MobileHero />
      <DesktopHero />
    </section>
  );
}

export default HeroSection;