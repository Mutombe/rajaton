import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Check, TrendingUp, Users, Truck, Award } from 'lucide-react'

const features = [
  { icon: TrendingUp, text: 'Nationwide distribution coverage' },
  { icon: Users, text: 'Expert merchandising teams' },
  { icon: Award, text: 'Private label development' },
]

const floatingCards = [
  { value: '150+', label: 'Retail Partners', icon: Users, position: 'top-20 right-10' },
  { value: '98%', label: 'Client Retention', icon: Award, position: 'bottom-32 left-10' },
]

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient niveau-font">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-rajaton-red/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-rajaton-red-light/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-40 w-80 h-80 bg-rajaton-red/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        
        {/* Decorative Lines */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1440 320">
          <path 
            fill="none" 
            stroke="#f94449" 
            strokeWidth="2"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-rajaton-red/10 text-rajaton-red rounded-full text-sm font-medium mb-6">
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
              <span className="relative">
                <span className="gradient-text">for South Africa</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path 
                    d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" 
                    stroke="#f94449" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-rajaton-slate max-w-lg leading-relaxed"
            >
              Your trusted partner for route-to-market excellence, key account management, 
              and private label development across the nation.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rajaton-red/10 flex items-center justify-center">
                    <Check size={14} className="text-rajaton-red" />
                  </div>
                  <span className="text-rajaton-slate">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary group"
                >
                  Explore Services
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 pt-8"
            >
              <p className="text-sm text-rajaton-slate">Trusted by leading brands</p>
              <div className="flex items-center gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 bg-gray-200 rounded-lg opacity-60" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative lg:h-[600px]">
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rajaton-red/20 to-rajaton-red-light/10 rounded-3xl blur-2xl" />
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-strong p-8 overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-rajaton-red/5 rounded-bl-full" />
                
                {/* Content Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Truck, label: 'Distribution', value: '9 Provinces' },
                    { icon: Users, label: 'Retailers', value: '150+' },
                    { icon: TrendingUp, label: 'Growth', value: '45%' },
                    { icon: Award, label: 'Experience', value: '15+ Years' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="bg-rajaton-off-white rounded-2xl p-4"
                    >
                      <item.icon size={24} className="text-rajaton-red mb-2" />
                      <p className="text-2xl font-display font-bold text-rajaton-charcoal">
                        {item.value}
                      </p>
                      <p className="text-sm text-rajaton-slate">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-rajaton-slate">National Coverage</span>
                    <span className="font-semibold text-rajaton-red">98%</span>
                  </div>
                  <div className="h-2 bg-rajaton-off-white rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '98%' }}
                      transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-rajaton-red to-rajaton-red-light rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -right-4 top-20 bg-white rounded-2xl shadow-strong p-4 hidden lg:flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-rajaton-slate">Revenue Growth</p>
                <p className="text-xl font-bold text-rajaton-charcoal">+45%</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -left-4 bottom-32 bg-white rounded-2xl shadow-strong p-4 hidden lg:flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-rajaton-cream rounded-xl flex items-center justify-center">
                <Award size={24} className="text-rajaton-red" />
              </div>
              <div>
                <p className="text-sm text-rajaton-slate">Client Satisfaction</p>
                <p className="text-xl font-bold text-rajaton-charcoal">98%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-rajaton-charcoal/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-rajaton-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection