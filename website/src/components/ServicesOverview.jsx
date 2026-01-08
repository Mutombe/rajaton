import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Users, 
  ShoppingBag, 
  Truck, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import SectionHeader from './SectionHeader'

const services = [
  {
    id: 'key-accounts',
    icon: Users,
    title: 'Key Account Management',
    description: 'Strategic relationships with major retailers. We manage your brand\'s presence across all key retail channels in South Africa.',
    features: ['Retailer negotiations', 'Trade marketing', 'Category management'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    id: 'merchandising',
    icon: ShoppingBag,
    title: 'Merchandising & Sales',
    description: 'Expert in-store execution and merchandising. Our teams ensure optimal product visibility and shelf presence nationwide.',
    features: ['Planogram execution', 'Stock management', 'POS materials'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    id: 'distribution',
    icon: Truck,
    title: 'Distribution & Logistics',
    description: 'Seamless warehousing and national distribution. We handle the supply chain so you can focus on growth.',
    features: ['National coverage', 'Cold chain capable', 'Real-time tracking'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    id: 'private-label',
    icon: Sparkles,
    title: 'Private Label Development',
    description: 'Create high-margin branded products. From concept to launch, we guide you through the entire private label journey.',
    features: ['Brand strategy', 'Product sourcing', 'Quality assurance'],
    color: 'from-rajaton-red to-rajaton-red-light',
    bgColor: 'bg-rajaton-cream',
    iconColor: 'text-rajaton-red',
  },
]

function ServicesOverview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden niveau-font">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rajaton-cream rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rajaton-cream rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />
      
      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Brand Solutions"
          subtitle="Tailored to your business needs. From distribution to brand development, we've got you covered."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/services#${service.id}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full bg-white rounded-3xl border border-gray-100 p-8 transition-all duration-500 hover:shadow-strong hover:border-transparent"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                    <service.icon size={32} className={service.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-rajaton-charcoal mb-3 group-hover:text-rajaton-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-rajaton-slate mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-rajaton-slate">
                        <CheckCircle2 size={16} className={service.iconColor} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-rajaton-red font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview