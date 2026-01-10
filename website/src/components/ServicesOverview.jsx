import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Users, 
  ShoppingBag, 
  Truck, 
  Sparkles, 
  ArrowRight,
  ArrowUpRight,
  Check,
  Play,
  BarChart3,
  Target,
  Zap
} from 'lucide-react'

const services = [
  {
    id: 'key-accounts',
    icon: Users,
    title: 'Key Account Management',
    shortTitle: 'Key Accounts',
    description: 'Strategic relationships with major retailers. We manage your brand\'s presence across all key retail channels in South Africa.',
    features: ['Retailer negotiations', 'Trade marketing', 'Category management', 'Promotional planning'],
    stats: { value: '50+', label: 'Retail Partners' },
    gradient: 'from-blue-500 to-indigo-600',
    lightGradient: 'from-blue-50 to-indigo-50',
    accentColor: 'blue',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  },
  {
    id: 'merchandising',
    icon: ShoppingBag,
    title: 'Merchandising & Sales',
    shortTitle: 'Merchandising',
    description: 'Expert in-store execution and merchandising. Our teams ensure optimal product visibility and shelf presence nationwide.',
    features: ['Planogram execution', 'Stock management', 'POS materials', 'Display optimization'],
    stats: { value: '500+', label: 'Stores Covered' },
    gradient: 'from-violet-500 to-purple-600',
    lightGradient: 'from-violet-50 to-purple-50',
    accentColor: 'violet',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
  },
  {
    id: 'distribution',
    icon: Truck,
    title: 'Distribution & Logistics',
    shortTitle: 'Distribution',
    description: 'Seamless warehousing and national distribution. We handle the supply chain so you can focus on growth.',
    features: ['National coverage', 'Cold chain capable', 'Real-time tracking', 'Same-day delivery'],
    stats: { value: '9', label: 'Provinces' },
    gradient: 'from-emerald-500 to-teal-600',
    lightGradient: 'from-emerald-50 to-teal-50',
    accentColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
  },
  {
    id: 'private-label',
    icon: Sparkles,
    title: 'Private Label Development',
    shortTitle: 'Private Label',
    description: 'Create high-margin branded products. From concept to launch, we guide you through the entire private label journey.',
    features: ['Brand strategy', 'Product sourcing', 'Quality assurance', 'Market positioning'],
    stats: { value: '30+', label: 'Brands Launched' },
    gradient: 'from-red-500 to-orange-500',
    lightGradient: 'from-red-50 to-orange-50',
    accentColor: 'red',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop'
  },
]

// Floating decorative orbs
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"
    />
  </div>
)

// Interactive Service Card - Large Featured Style
const FeaturedServiceCard = ({ service, index, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className={`relative group h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-br ' + service.gradient + ' shadow-2xl scale-[1.02]' 
            : 'bg-white border border-gray-100 hover:shadow-xl hover:border-transparent'
        }`}
      >
        {/* Background Pattern for active state */}
        {isActive && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        )}

        <div className="relative p-8">
          {/* Top Row - Icon and Stats */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : `bg-gradient-to-br ${service.lightGradient}`
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <service.icon size={28} className={isActive ? 'text-white' : `text-${service.accentColor}-500`} />
            </motion.div>

            {/* Stats Badge */}
            <div className={`px-4 py-2 rounded-full ${
              isActive 
                ? 'bg-white/20 backdrop-blur-sm' 
                : 'bg-gray-50'
            }`}>
              <span className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                {service.stats.value}
              </span>
              <span className={`text-xs ml-1 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                {service.stats.label}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-2xl font-bold mb-3 transition-colors ${
            isActive ? 'text-white' : 'text-gray-900 group-hover:text-red-500'
          }`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`mb-6 leading-relaxed ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}>
            {service.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-2"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  <Check size={12} className={isActive ? 'text-white' : `text-${service.accentColor}-500`} />
                </div>
                <span className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link to={`/services#${service.id}`}>
            <motion.div 
              className={`inline-flex items-center gap-2 font-semibold transition-all ${
                isActive 
                  ? 'text-white hover:gap-3' 
                  : 'text-red-500 hover:gap-3'
              }`}
              whileHover={{ x: 5 }}
            >
              Learn more
              <ArrowRight size={18} />
            </motion.div>
          </Link>
        </div>

        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 transition-opacity ${
          isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
        }`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-bl-full`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Compact Service Pill for Mobile
const ServicePill = ({ service, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all whitespace-nowrap ${
      isActive 
        ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg` 
        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
    }`}
  >
    <service.icon size={18} />
    <span className="font-medium">{service.shortTitle}</span>
  </motion.button>
)

// Bento Grid Layout Component
const BentoCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`bg-white rounded-3xl border border-gray-100 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
)

function ServicesOverview() {
  const [activeService, setActiveService] = useState(0)
  const currentService = services[activeService]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <FloatingOrbs />
      
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Comprehensive
            <span className="relative inline-block ml-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Solutions
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full origin-left"
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tailored to your business needs. From distribution to brand development, we've got you covered.
          </motion.p>
        </div>

        {/* DESKTOP: Bento Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6">
            
            {/* Main Featured Card - Spans 7 columns */}
            <div className="col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${currentService.gradient} p-10 shadow-2xl`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div 
                        className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <currentService.icon size={40} className="text-white" />
                      </motion.div>

                      {/* Title & Description */}
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {currentService.title}
                      </h3>
                      <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                        {currentService.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {currentService.features.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                              <Check size={14} className="text-white" />
                            </div>
                            <span className="text-white/90">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Link to={`/services#${currentService.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold shadow-lg flex items-center gap-2 group"
                          >
                            Learn More
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                          </motion.button>
                        </Link>
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute top-10 right-10 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <span className="text-3xl font-bold text-white">{currentService.stats.value}</span>
                        <span className="text-white/80 ml-2">{currentService.stats.label}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Service Selector Cards */}
            <div className="col-span-5 space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => setActiveService(index)}
                    whileHover={{ x: 8 }}
                    className={`w-full p-6 rounded-2xl text-left transition-all ${
                      activeService === index
                        ? 'bg-gray-900 text-white shadow-xl'
                        : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeService === index
                          ? 'bg-white/10'
                          : `bg-gradient-to-br ${service.lightGradient}`
                      }`}>
                        <service.icon size={24} className={
                          activeService === index ? 'text-white' : `text-${service.accentColor}-500`
                        } />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          activeService === index ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.shortTitle}
                        </h4>
                        <p className={`text-sm ${
                          activeService === index ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {service.stats.value} {service.stats.label}
                        </p>
                      </div>
                      <ArrowUpRight size={20} className={
                        activeService === index ? 'text-white' : 'text-gray-400'
                      } />
                    </div>
                  </motion.button>
                </motion.div>
              ))}

              {/* Mini Stats Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <BentoCard className="p-5" delay={0.4}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                      <BarChart3 size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-xs text-gray-500">Success Rate</p>
                    </div>
                  </div>
                </BentoCard>
                <BentoCard className="p-5" delay={0.5}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                      <Target size={20} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15+</p>
                      <p className="text-xs text-gray-500">Years Experience</p>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: Card Stack with Pills */}
        <div className="lg:hidden">
          {/* Service Pills - Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-6 mb-8 scrollbar-hide -mx-5 px-5">
            {services.map((service, index) => (
              <ServicePill 
                key={service.id}
                service={service}
                isActive={activeService === index}
                onClick={() => setActiveService(index)}
              />
            ))}
          </div>

          {/* Active Service Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${currentService.gradient} p-8 shadow-xl`}>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <currentService.icon size={32} className="text-white" />
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-xl font-bold text-white">{currentService.stats.value}</span>
                      <span className="text-white/80 text-sm ml-1">{currentService.stats.label}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {currentService.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {currentService.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {currentService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/services#${currentService.id}`} className="block">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-white text-gray-900 rounded-2xl font-semibold shadow-lg flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Mini Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <BarChart3 size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">98%</p>
                  <p className="text-xs text-gray-500">Success Rate</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Target size={20} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">15+</p>
                  <p className="text-xs text-gray-500">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(239, 68, 68, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold shadow-lg shadow-red-500/25 inline-flex items-center gap-3 group"
            >
              View All Services
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview