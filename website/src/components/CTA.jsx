import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

function CTASection({ variant = 'default' }) {
  if (variant === 'simple') {
    return (
      <section className="section-padding bg-rajaton-cream niveau-font">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-rajaton-charcoal mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Brand?
            </h2>
            <p className="text-xl text-rajaton-slate mb-8 niveau-font">
              Let's discuss how Rajaton Brand Solutions can help you achieve your FMCG goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Schedule a Consultation
                  <Calendar size={18} className="ml-2" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-rajaton-charcoal relative overflow-hidden niveau-font ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rajaton-charcoal via-rajaton-charcoal to-rajaton-red/30" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rajaton-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rajaton-red/10 rounded-full blur-3xl" />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-rajaton-red/20 text-rajaton-red rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-rajaton-red rounded-full animate-pulse" />
              Get Started Today
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <br />
              <span className="text-rajaton-red">Your Brand?</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-8 max-w-lg">
              Let's discuss how Rajaton Brand Solutions can help you achieve 
              your FMCG goals and expand your market presence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary group"
                >
                  Schedule a Consultation
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:info@rajaton.co.za"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-rajaton-red/20 rounded-xl flex items-center justify-center group-hover:bg-rajaton-red/30 transition-colors">
                    <Mail size={24} className="text-rajaton-red" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <p className="text-white font-medium">info@rajaton.co.za</p>
                  </div>
                </a>

                <a 
                  href="tel:+27110000000"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-rajaton-red/20 rounded-xl flex items-center justify-center group-hover:bg-rajaton-red/30 transition-colors">
                    <Phone size={24} className="text-rajaton-red" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <p className="text-white font-medium">+27 (0) 11 XXX XXXX</p>
                  </div>
                </a>

                <Link 
                  to="/contact"
                  className="flex items-center gap-4 p-4 bg-rajaton-red rounded-2xl hover:bg-rajaton-red-dark transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80 text-sm">Ready to start?</p>
                    <p className="text-white font-medium">Book a consultation</p>
                  </div>
                  <ArrowRight size={20} className="text-white transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rajaton-red/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rajaton-red/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection