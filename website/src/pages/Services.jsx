import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, Store, Truck, Tag, CheckCircle2, ArrowRight,
  Target, Users, BarChart3, Shield, Package, Headphones,
  TrendingUp, Eye, Boxes, FileText, Award
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTA'
import Button from '../components/Button'

const services = [
  {
    id: 'key-accounts',
    icon: Briefcase,
    title: 'Key Account Management',
    shortDesc: 'Strategic retail partnerships with major South African retailers.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    hero: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&auto=format&fit=crop&q=80',
    description: 'Our Key Account Management service provides comprehensive representation of your brand across all major retail chains in South Africa. We leverage our established relationships and deep understanding of each retailer\'s requirements to maximize your brand\'s presence and performance.',
    features: [
      { icon: Target, title: 'Listing Negotiations', desc: 'Expert negotiation for optimal shelf placement and promotional opportunities' },
      { icon: Users, title: 'Buyer Relationships', desc: 'Direct relationships with category buyers at all major retailers' },
      { icon: BarChart3, title: 'Sales Analytics', desc: 'Comprehensive reporting and insights on sales performance' },
      { icon: Shield, title: 'Brand Protection', desc: 'Active management of brand standards and positioning' },
    ],
    retailers: ['Shoprite/Checkers', 'Pick n Pay', 'Woolworths', 'Spar', 'Massmart', 'Game'],
    benefits: [
      'Access to all major retail chains through a single partner',
      'Dedicated account managers for each retail relationship',
      'Proven track record of successful listings and growth',
      'Real-time reporting and transparent communication',
    ],
  },
  {
    id: 'merchandising',
    icon: Store,
    title: 'Merchandising & Execution',
    shortDesc: 'In-store excellence through professional merchandising teams.',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
    hero: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&auto=format&fit=crop&q=80',
    description: 'Our professional merchandising teams ensure your products are always perfectly presented on shelf, fully stocked, and positioned for maximum visibility. We combine technology-driven insights with boots-on-the-ground execution to deliver exceptional retail presence.',
    features: [
      { icon: Eye, title: 'Planogram Compliance', desc: 'Ensuring products are positioned according to approved layouts' },
      { icon: Package, title: 'Stock Management', desc: 'Proactive ordering and inventory optimization' },
      { icon: TrendingUp, title: 'Display Execution', desc: 'Building and maintaining promotional displays' },
      { icon: FileText, title: 'Reporting & Photos', desc: 'Real-time compliance reporting with photo evidence' },
    ],
    retailers: ['National Coverage', '500+ Stores Weekly', 'GPS-Tracked Visits', 'Real-Time Reporting'],
    benefits: [
      'Dedicated merchandising teams in all major metros',
      'Technology-enabled visit tracking and compliance',
      'Rapid response to out-of-stock situations',
      'Promotional display execution expertise',
    ],
  },
  {
    id: 'distribution',
    icon: Truck,
    title: 'Distribution & Logistics',
    shortDesc: 'Comprehensive distribution network covering all 9 provinces.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-100',
    textColor: 'text-amber-600',
    hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    description: 'Our distribution network spans all 9 provinces of South Africa, providing efficient and reliable delivery to retailers of all sizes. From major chain stores to independent outlets, we ensure your products reach every corner of the market.',
    features: [
      { icon: Boxes, title: 'Warehousing', desc: 'Strategic warehouse locations for optimal coverage' },
      { icon: Truck, title: 'Fleet Network', desc: 'Own fleet and contracted vehicles for flexibility' },
      { icon: BarChart3, title: 'Order Management', desc: 'Integrated systems for seamless order processing' },
      { icon: Shield, title: 'Cold Chain', desc: 'Temperature-controlled logistics capabilities' },
    ],
    retailers: ['Gauteng Hub', 'Western Cape Hub', 'KZN Hub', 'National Coverage'],
    benefits: [
      'Single distribution partner for national coverage',
      'Scalable solutions from small orders to full loads',
      'Cold chain capabilities for temperature-sensitive products',
      'Integration with major retailer ordering systems',
    ],
  },
  {
    id: 'private-label',
    icon: Tag,
    title: 'Private Label Development',
    shortDesc: 'End-to-end private label product development and management.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    hero: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=1200&auto=format&fit=crop&q=80',
    description: 'Transform your retail brand with our comprehensive private label development services. From concept to shelf, we manage the entire process of creating unique products that strengthen retailer brands and drive customer loyalty.',
    features: [
      { icon: Briefcase, title: 'Supplier Sourcing', desc: 'Identifying and qualifying best-fit manufacturers' },
      { icon: FileText, title: 'Product Development', desc: 'Specification development and quality management' },
      { icon: Award, title: 'Packaging Design', desc: 'Creating distinctive and compliant packaging' },
      { icon: Headphones, title: 'Ongoing Management', desc: 'Continuous quality assurance and supplier relations' },
    ],
    retailers: ['Concept to Shelf', 'Quality Assured', 'Competitive Pricing', 'Regulatory Compliance'],
    benefits: [
      'Access to extensive network of qualified suppliers',
      'Full project management from concept to launch',
      'Quality assurance and regulatory compliance',
      'Competitive costing through supplier relationships',
    ],
  },
]

const processSteps = [
  { number: '01', title: 'Discovery', desc: 'Understanding your brand, goals, and market positioning' },
  { number: '02', title: 'Strategy', desc: 'Developing a tailored go-to-market strategy' },
  { number: '03', title: 'Execution', desc: 'Implementing across retail channels with precision' },
  { number: '04', title: 'Optimization', desc: 'Continuous improvement through data-driven insights' },
]

function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <PageTransition>
      <SEO
        title="Our Services"
        description="Comprehensive FMCG services including key account management, merchandising, distribution, and private label development across South Africa."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-rajaton-off-white via-white to-rajaton-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-rajaton-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-rajaton-cream rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-rajaton-charcoal mb-6">
              Comprehensive <span className="text-rajaton-red">FMCG Solutions</span>
            </h1>
            <p className="text-lg text-rajaton-slate leading-relaxed">
              From strategic retail partnerships to on-shelf execution, we provide end-to-end solutions 
              that help brands succeed in the competitive South African market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 bg-white border-b border-rajaton-cream sticky top-[72px] z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeService.id === service.id
                    ? 'bg-rajaton-red text-white shadow-lg'
                    : 'bg-rajaton-off-white text-rajaton-charcoal hover:bg-rajaton-cream'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <service.icon size={20} />
                <span className="hidden sm:inline">{service.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeService.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="section-padding bg-white"
        >
          <div className="container-custom">
            {/* Service Hero */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${activeService.lightColor} ${activeService.textColor} font-semibold rounded-full text-sm mb-6`}>
                  <activeService.icon size={18} />
                  {activeService.title}
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-rajaton-charcoal mb-6">
                  {activeService.shortDesc}
                </h2>
                <p className="text-lg text-rajaton-slate mb-8 leading-relaxed">
                  {activeService.description}
                </p>
                <Button href="/contact" icon={ArrowRight}>
                  Get Started
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={activeService.hero}
                    alt={activeService.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className={`absolute inset-0 ${activeService.color} opacity-20`} />
                </div>

                {/* Coverage Tags */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex flex-wrap gap-2">
                    {activeService.retailers.map((retailer, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-rajaton-off-white text-rajaton-charcoal text-sm rounded-full font-medium"
                      >
                        {retailer}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="mb-20">
              <h3 className="font-display text-2xl font-bold text-rajaton-charcoal mb-8 text-center">
                What's Included
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeService.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-rajaton-off-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-12 h-12 ${activeService.lightColor} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-6 h-6 ${activeService.textColor}`} />
                    </div>
                    <h4 className="font-display font-bold text-rajaton-charcoal mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-rajaton-slate text-sm">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-rajaton-charcoal to-rajaton-charcoal/90 rounded-3xl p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                    Why Choose Our {activeService.title}
                  </h3>
                  <p className="text-white/70 mb-8">
                    Partner with Rajaton to unlock the full potential of your brand in the South African market.
                  </p>
                </div>
                <div className="space-y-4">
                  {activeService.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-8 h-8 ${activeService.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white/90">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Our Process */}
      <section className="section-padding bg-rajaton-off-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A proven methodology that delivers results for brands of all sizes."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-rajaton-cream z-0" />
                )}
                <div className="bg-white rounded-2xl p-8 relative z-10 h-full">
                  <span className="font-display text-5xl font-bold text-rajaton-red/20">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-rajaton-charcoal mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-rajaton-slate">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="All Services"
            title="Complete FMCG Solutions"
            subtitle="Everything your brand needs to succeed in South African retail."
            center
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl border border-rajaton-cream overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.hero}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${service.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-rajaton-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-rajaton-slate mb-6">
                    {service.shortDesc}
                  </p>
                  <button
                    onClick={() => {
                      setActiveService(service)
                      window.scrollTo({ top: 500, behavior: 'smooth' })
                    }}
                    className={`inline-flex items-center gap-2 ${service.textColor} font-semibold group-hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  )
}

export default Services
