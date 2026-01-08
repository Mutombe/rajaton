import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  MapPin, 
  Zap, 
  Handshake,
  Target,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import StatsCounter from './StatsCounter'

const reasons = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Deep experience in FMCG sales, distribution, and brand development across South Africa.',
  },
  {
    icon: MapPin,
    title: 'National Coverage',
    description: 'Partnerships with major retailers and logistics providers ensure nationwide reach.',
  },
  {
    icon: Zap,
    title: 'Agile & Responsive',
    description: 'We move fast and adapt to market changes, ensuring your brand stays ahead.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnership',
    description: 'We\'re invested in your success. Your growth is our growth.',
  },
]

const stats = [
  { value: '150', suffix: '+', label: 'Retail Partners' },
  { value: '98', suffix: '%', label: 'Client Retention' },
  { value: '15', suffix: '+', label: 'Years Experience' },
  { value: '9', suffix: '', label: 'Provinces Covered' },
]

function WhyChooseUs() {
  return (
    <section className="niveau-font section-padding bg-rajaton-charcoal text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rajaton-charcoal via-rajaton-charcoal to-rajaton-red/20" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-rajaton-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-rajaton-red/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Why Rajaton"
          title="Why Choose Us?"
          subtitle="We bring together expertise, innovation, and dedication to help your brand succeed in the South African market."
          light
        />

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-rajaton-red/50">
                {/* Icon */}
                <div className="w-14 h-14 bg-rajaton-red/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rajaton-red/30 transition-colors">
                  <reason.icon size={28} className="text-rajaton-red" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-rajaton-red/0 via-rajaton-red/50 to-rajaton-red/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <StatsCounter stats={stats} light />
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs