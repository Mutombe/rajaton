import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, TrendingUp, Users, ShoppingCart, BarChart3 } from 'lucide-react'
import SectionHeader from './SectionHeader'

const caseStudies = [
  {
    id: 1,
    client: 'Premium Foods SA',
    industry: 'Food & Beverage',
    title: 'National Distribution Rollout',
    description: 'Transformed a regional snack brand into a national presence across all major retail chains within 18 months.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60',
    stats: [
      { label: 'Revenue Growth', value: '+156%', icon: TrendingUp },
      { label: 'New Stores', value: '2,400+', icon: ShoppingCart },
      { label: 'SKU Expansion', value: '12→48', icon: BarChart3 },
    ],
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 2,
    client: 'Fresh Health Co',
    industry: 'Health & Wellness',
    title: 'Private Label Success Story',
    description: 'Developed and launched a premium health supplement line for a major pharmacy chain.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
    stats: [
      { label: 'Market Share', value: '23%', icon: TrendingUp },
      { label: 'Store Presence', value: '850+', icon: ShoppingCart },
      { label: 'Customer Rating', value: '4.8★', icon: Users },
    ],
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 3,
    client: 'Urban Beverages',
    industry: 'Beverages',
    title: 'Key Account Optimization',
    description: 'Restructured key account strategy resulting in improved shelf space and promotional support.',
    image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=800&auto=format&fit=crop&q=60',
    stats: [
      { label: 'Shelf Space', value: '+85%', icon: ShoppingCart },
      { label: 'Promotions', value: '3x more', icon: BarChart3 },
      { label: 'Sales Lift', value: '+92%', icon: TrendingUp },
    ],
    color: 'from-blue-400 to-cyan-500',
  },
]

function CaseStudies() {
  const [activeCase, setActiveCase] = useState(caseStudies[0])
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="niveau-font section-padding bg-rajaton-off-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Success Stories"
          title="Brands We've Elevated"
          subtitle="See how we've helped leading brands achieve remarkable growth and market presence."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Case Study Selector */}
          <div className="lg:col-span-2 space-y-4">
            {caseStudies.map((caseStudy, index) => (
              <motion.button
                key={caseStudy.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCase(caseStudy)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeCase.id === caseStudy.id
                    ? 'bg-white shadow-strong border-l-4 border-rajaton-red'
                    : 'bg-white/50 hover:bg-white hover:shadow-soft'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm text-rajaton-red font-medium">
                      {caseStudy.industry}
                    </span>
                    <h4 className="font-display text-lg font-bold text-rajaton-charcoal mt-1">
                      {caseStudy.title}
                    </h4>
                    <p className="text-sm text-rajaton-slate mt-1">
                      {caseStudy.client}
                    </p>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className={`transition-transform ${
                      activeCase.id === caseStudy.id ? 'text-rajaton-red translate-x-1' : 'text-gray-400'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Case Study Display */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-strong overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={activeCase.image}
                    alt={activeCase.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: isHovering ? 1.05 : 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeCase.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Client Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="font-semibold text-rajaton-charcoal text-sm">
                      {activeCase.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="inline-flex items-center gap-2 text-sm text-rajaton-red font-medium mb-2">
                    <span className="w-2 h-2 bg-rajaton-red rounded-full" />
                    {activeCase.industry}
                  </span>
                  
                  <h3 className="font-display text-2xl font-bold text-rajaton-charcoal mb-4">
                    {activeCase.title}
                  </h3>
                  
                  <p className="text-rajaton-slate leading-relaxed mb-6">
                    {activeCase.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {activeCase.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center p-4 bg-rajaton-off-white rounded-2xl"
                      >
                        <stat.icon size={20} className="mx-auto mb-2 text-rajaton-red" />
                        <p className="font-display text-xl font-bold text-rajaton-charcoal">
                          {stat.value}
                        </p>
                        <p className="text-xs text-rajaton-slate">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-rajaton-red font-semibold group"
                  >
                    View Full Case Study
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies