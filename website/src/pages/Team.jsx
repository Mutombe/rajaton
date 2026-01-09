import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, Phone, ChevronDown, Users, Award, Target, Heart } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTA'

const leadership = [
  {
    name: 'Johan van Rensburg',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    bio: 'Johan founded Rajaton in 2008 with a vision to transform how FMCG brands connect with South African consumers. With over 25 years in the industry, he has built Rajaton into one of the leading sales and distribution companies in the country.',
    linkedin: '#',
    email: 'johan@rajaton.co.za',
    expertise: ['Strategic Planning', 'Retail Relationships', 'Business Development'],
  },
  {
    name: 'Nomvula Dlamini',
    role: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
    bio: 'Nomvula oversees all operational aspects of Rajaton, ensuring seamless execution across merchandising, distribution, and key account management. Her focus on operational excellence has been instrumental in our growth.',
    linkedin: '#',
    email: 'nomvula@rajaton.co.za',
    expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'],
  },
  {
    name: 'David Botha',
    role: 'Commercial Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'David leads our commercial strategy and key account relationships with major retailers. His deep understanding of the retail landscape and strong buyer relationships drive our clients\' success on shelf.',
    linkedin: '#',
    email: 'david@rajaton.co.za',
    expertise: ['Key Account Management', 'Trade Marketing', 'Category Management'],
  },
  {
    name: 'Priya Naidoo',
    role: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Priya manages all financial operations and strategic planning at Rajaton. Her expertise ensures sustainable growth while maintaining strong financial controls and transparency with all stakeholders.',
    linkedin: '#',
    email: 'priya@rajaton.co.za',
    expertise: ['Financial Strategy', 'Risk Management', 'Business Analytics'],
  },
]

const departments = [
  {
    name: 'Key Accounts',
    count: 12,
    description: 'Dedicated account managers building relationships with major retailers',
    icon: Target,
    color: 'bg-blue-500',
  },
  {
    name: 'Merchandising',
    count: 85,
    description: 'Field teams ensuring perfect execution across 500+ stores weekly',
    icon: Users,
    color: 'bg-emerald-500',
  },
  {
    name: 'Operations',
    count: 28,
    description: 'Logistics and distribution specialists keeping products moving',
    icon: Award,
    color: 'bg-amber-500',
  },
  {
    name: 'Support',
    count: 15,
    description: 'Finance, HR, and admin teams supporting our operations',
    icon: Heart,
    color: 'bg-purple-500',
  },
]

const values = [
  { title: 'Collaborative Spirit', desc: 'We work together as one team, supporting each other to achieve shared goals.' },
  { title: 'Customer Focus', desc: 'Every decision we make centers on delivering value to our clients and their consumers.' },
  { title: 'Continuous Learning', desc: 'We invest in our people\'s growth through training and development opportunities.' },
  { title: 'Work-Life Balance', desc: 'We believe in sustainable performance through balanced, healthy lifestyles.' },
]

function Team() {
  const [expandedLeader, setExpandedLeader] = useState(null)

  return (
    <PageTransition>
      <SEO
        title="Our Team"
        description="Meet the experienced leadership team and dedicated professionals behind Rajaton Brand Solutions' success in the FMCG industry."
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
              Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-rajaton-charcoal mb-6">
              The People Behind <span className="text-rajaton-red">Our Success</span>
            </h1>
            <p className="text-lg text-rajaton-slate leading-relaxed">
              Meet the dedicated professionals who make Rajaton the trusted partner for 
              leading FMCG brands across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-rajaton-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <dept.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-display text-4xl font-bold text-white mb-1">{dept.count}+</p>
                <p className="text-rajaton-red font-semibold mb-1">{dept.name}</p>
                <p className="text-white/60 text-sm">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Leadership"
            title="Executive Team"
            subtitle="Experienced leaders driving our vision and strategy."
            center
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-rajaton-cream overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="font-display text-xl font-bold text-rajaton-charcoal">
                      {leader.name}
                    </h3>
                    <p className="text-rajaton-red font-semibold mb-3">{leader.role}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-rajaton-off-white text-rajaton-slate text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Bio */}
                    <AnimatePresence>
                      {expandedLeader === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-rajaton-slate text-sm mb-4 overflow-hidden"
                        >
                          {leader.bio}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => setExpandedLeader(expandedLeader === index ? null : index)}
                      className="flex items-center gap-1 text-rajaton-charcoal text-sm font-medium hover:text-rajaton-red transition-colors mb-4"
                    >
                      {expandedLeader === index ? 'Show Less' : 'Read Bio'}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedLeader === index ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Contact Links */}
                    <div className="flex gap-3">
                      <a
                        href={leader.linkedin}
                        className="w-9 h-9 bg-rajaton-off-white rounded-lg flex items-center justify-center hover:bg-rajaton-red hover:text-white transition-colors"
                        aria-label={`${leader.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="w-9 h-9 bg-rajaton-off-white rounded-lg flex items-center justify-center hover:bg-rajaton-red hover:text-white transition-colors"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding bg-rajaton-off-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red font-semibold rounded-full text-sm mb-6">
                Our Culture
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-rajaton-charcoal mb-6">
                A Great Place to <span className="text-rajaton-red">Grow</span>
              </h2>
              <p className="text-lg text-rajaton-slate mb-8 leading-relaxed">
                At Rajaton, we believe that our people are our greatest asset. We've built a culture 
                that empowers individuals to do their best work while growing their careers in the 
                exciting FMCG industry.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 bg-rajaton-red rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-bold text-rajaton-charcoal mb-1">
                        {value.title}
                      </h4>
                      <p className="text-rajaton-slate">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=80"
                  alt="Team meeting"
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=80"
                  alt="Team planning"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&auto=format&fit=crop&q=80"
                  alt="Team presentation"
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-rajaton-cream border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-display font-bold text-rajaton-charcoal">140+ Team Members</p>
                    <p className="text-rajaton-slate text-sm">Across South Africa</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-gradient-to-br from-rajaton-charcoal to-rajaton-charcoal/90 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rajaton-red/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white font-semibold rounded-full text-sm mb-6">
                Join Our Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Build Your Career With <span className="text-rajaton-red">Rajaton</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                We're always looking for talented individuals who share our passion for the FMCG industry. 
                Explore current opportunities and join a team that's shaping the future of retail in South Africa.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-rajaton-red text-white font-semibold rounded-full hover:bg-rajaton-red/90 transition-colors"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection variant="simple" />
    </PageTransition>
  )
}

export default Team
