import React from 'react'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, Clock, Briefcase, Search, Filter, ChevronDown, 
  ChevronRight, X, Building2, DollarSign, GraduationCap,
  Heart, TrendingUp, Users, Coffee, Award, Sparkles
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const jobs = [
  {
    id: 1,
    title: 'Senior Key Account Manager',
    department: 'Key Accounts',
    location: 'Johannesburg',
    type: 'Full-time',
    level: 'Senior',
    salary: 'R45,000 - R65,000',
    posted: '2 days ago',
    description: 'Lead strategic relationships with major retail accounts, driving growth and ensuring excellent service delivery.',
    requirements: [
      '5+ years key account management experience in FMCG',
      'Proven track record with major South African retailers',
      'Strong negotiation and presentation skills',
      'Bachelor\'s degree in Business or related field',
    ],
    benefits: ['Company car', 'Performance bonus', 'Medical aid contribution'],
  },
  {
    id: 2,
    title: 'Merchandising Team Lead',
    department: 'Merchandising',
    location: 'Cape Town',
    type: 'Full-time',
    level: 'Mid-level',
    salary: 'R28,000 - R38,000',
    posted: '1 week ago',
    description: 'Manage a team of merchandisers ensuring excellent in-store execution across assigned territory.',
    requirements: [
      '3+ years merchandising experience',
      'Team leadership experience',
      'Valid driver\'s license',
      'Strong organizational skills',
    ],
    benefits: ['Company vehicle', 'Fuel allowance', 'Cell phone allowance'],
  },
  {
    id: 3,
    title: 'Field Merchandiser',
    department: 'Merchandising',
    location: 'Durban',
    type: 'Full-time',
    level: 'Entry',
    salary: 'R12,000 - R18,000',
    posted: '3 days ago',
    description: 'Execute merchandising activities in assigned stores, ensuring products are well-displayed and stocked.',
    requirements: [
      'Matric certificate',
      'Previous retail or merchandising experience preferred',
      'Own reliable transport',
      'Physically fit for in-store work',
    ],
    benefits: ['Travel allowance', 'Performance incentives', 'Training provided'],
  },
  {
    id: 4,
    title: 'Distribution Coordinator',
    department: 'Operations',
    location: 'Johannesburg',
    type: 'Full-time',
    level: 'Mid-level',
    salary: 'R25,000 - R35,000',
    posted: '5 days ago',
    description: 'Coordinate distribution activities ensuring timely delivery to retail customers across Gauteng.',
    requirements: [
      '3+ years logistics/distribution experience',
      'Knowledge of major retailer delivery requirements',
      'Strong Excel and system skills',
      'Degree or diploma in Logistics preferred',
    ],
    benefits: ['Medical aid', 'Provident fund', 'Annual bonus'],
  },
  {
    id: 5,
    title: 'Private Label Project Manager',
    department: 'Private Label',
    location: 'Johannesburg',
    type: 'Full-time',
    level: 'Senior',
    salary: 'R55,000 - R75,000',
    posted: '1 day ago',
    description: 'Lead private label product development projects from concept to shelf for major retail partners.',
    requirements: [
      '5+ years product development experience',
      'Understanding of food manufacturing processes',
      'Project management certification preferred',
      'Experience with retailer private label programs',
    ],
    benefits: ['Flexible working', 'Performance bonus', 'International travel opportunities'],
  },
  {
    id: 6,
    title: 'Sales Representative',
    department: 'Key Accounts',
    location: 'Pretoria',
    type: 'Full-time',
    level: 'Entry',
    salary: 'R15,000 - R22,000',
    posted: '1 week ago',
    description: 'Support key account managers with sales activities and build relationships with assigned retail accounts.',
    requirements: [
      'Degree in Sales, Marketing, or Business',
      '1-2 years sales experience preferred',
      'Excellent communication skills',
      'Valid driver\'s license',
    ],
    benefits: ['Commission structure', 'Company phone', 'Growth opportunities'],
  },
]

const departments = ['All Departments', 'Key Accounts', 'Merchandising', 'Operations', 'Private Label']
const locations = ['All Locations', 'Johannesburg', 'Cape Town', 'Durban', 'Pretoria']
const levels = ['All Levels', 'Entry', 'Mid-level', 'Senior']

const benefits = [
  { icon: Heart, title: 'Medical Aid', desc: 'Comprehensive medical coverage for you and your family' },
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear career paths and development programs' },
  { icon: GraduationCap, title: 'Training & Development', desc: 'Continuous learning and skills development' },
  { icon: Coffee, title: 'Work-Life Balance', desc: 'Flexible arrangements and leave benefits' },
  { icon: Award, title: 'Recognition Programs', desc: 'Rewards for exceptional performance' },
  { icon: Users, title: 'Great Team Culture', desc: 'Collaborative and supportive work environment' },
]

function Careers() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedLevel, setSelectedLevel] = useState('All Levels')
  const [expandedJob, setExpandedJob] = useState(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesDepartment = selectedDepartment === 'All Departments' || job.department === selectedDepartment
      const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation
      const matchesLevel = selectedLevel === 'All Levels' || job.level === selectedLevel
      return matchesSearch && matchesDepartment && matchesLocation && matchesLevel
    })
  }, [searchQuery, selectedDepartment, selectedLocation, selectedLevel])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedDepartment('All Departments')
    setSelectedLocation('All Locations')
    setSelectedLevel('All Levels')
  }

  const hasActiveFilters = searchQuery || selectedDepartment !== 'All Departments' || 
                           selectedLocation !== 'All Locations' || selectedLevel !== 'All Levels'

  return (
    <PageTransition>
      <SEO
        title="Careers"
        description="Join Rajaton Brand Solutions - explore exciting career opportunities in FMCG sales, merchandising, and distribution across South Africa."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-rajaton-off-white via-white to-rajaton-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-rajaton-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-rajaton-cream rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red font-semibold rounded-full text-sm mb-6">
                Join Our Team
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-rajaton-charcoal mb-6 leading-tight">
                Build Your <span className="text-rajaton-red">Future</span> With Us
              </h1>
              <p className="text-lg text-rajaton-slate mb-8 leading-relaxed">
                Join a dynamic team shaping the future of FMCG in South Africa. We offer 
                exciting opportunities for growth, development, and making a real impact.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-rajaton-charcoal">
                  <Sparkles className="text-rajaton-red" size={20} />
                  <span className="font-semibold">{jobs.length} Open Positions</span>
                </div>
                <div className="flex items-center gap-2 text-rajaton-charcoal">
                  <MapPin className="text-rajaton-red" size={20} />
                  <span className="font-semibold">4 Locations</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rajaton-red/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-rajaton-red" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-rajaton-charcoal">140+</p>
                    <p className="text-rajaton-slate text-sm">Team Members</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-rajaton-charcoal">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Why Work at Rajaton?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-rajaton-red mb-4" />
                <h3 className="font-display font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Open Positions"
            title="Current Opportunities"
            subtitle="Find your perfect role and start your journey with Rajaton."
            center
          />

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-rajaton-slate" size={20} />
              <input
                type="text"
                placeholder="Search jobs by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-rajaton-off-white rounded-xl border border-transparent focus:border-rajaton-red focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-rajaton-off-white rounded-lg mb-4"
            >
              <Filter size={18} />
              Filters
              <ChevronDown size={18} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Filters */}
            <div className={`grid md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
              {/* Department Filter */}
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-rajaton-slate" size={18} />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-rajaton-off-white rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rajaton-red/20"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-rajaton-slate pointer-events-none" size={18} />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-rajaton-slate" size={18} />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-rajaton-off-white rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rajaton-red/20"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-rajaton-slate pointer-events-none" size={18} />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-rajaton-slate" size={18} />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-rajaton-off-white rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rajaton-red/20"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-rajaton-slate pointer-events-none" size={18} />
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm text-rajaton-slate">Active filters:</span>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-1 bg-rajaton-red/10 text-rajaton-red rounded-full text-sm hover:bg-rajaton-red/20 transition-colors"
                >
                  Clear all <X size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <p className="text-center text-rajaton-slate mb-8">
            Showing {filteredJobs.length} of {jobs.length} positions
          </p>

          {/* Job Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-rajaton-cream overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Job Header */}
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-rajaton-red/10 text-rajaton-red text-xs font-semibold rounded-full">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-rajaton-off-white text-rajaton-slate text-xs rounded-full">
                            {job.level}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-rajaton-charcoal mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-rajaton-slate">
                          <span className="flex items-center gap-1">
                            <MapPin size={16} /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={16} /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign size={16} /> {job.salary}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-rajaton-slate">{job.posted}</span>
                        <ChevronRight
                          size={24}
                          className={`text-rajaton-red transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-rajaton-cream">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-display font-bold text-rajaton-charcoal mb-3">
                                About the Role
                              </h4>
                              <p className="text-rajaton-slate mb-6">{job.description}</p>

                              <h4 className="font-display font-bold text-rajaton-charcoal mb-3">
                                Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-rajaton-slate">
                                    <ChevronRight size={18} className="text-rajaton-red flex-shrink-0 mt-0.5" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-display font-bold text-rajaton-charcoal mb-3">
                                What We Offer
                              </h4>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {job.benefits.map((benefit, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-2 bg-rajaton-off-white text-rajaton-charcoal text-sm rounded-lg"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>

                              <Button
                                href={`mailto:careers@rajaton.co.za?subject=Application: ${job.title}`}
                                className="w-full justify-center"
                              >
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-rajaton-off-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-rajaton-slate" />
                </div>
                <h3 className="font-display text-xl font-bold text-rajaton-charcoal mb-2">
                  No positions found
                </h3>
                <p className="text-rajaton-slate mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-rajaton-red font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-rajaton-off-white">
        <div className="container-custom">
          <SectionHeader
            badge="Application Process"
            title="How to Join Us"
            subtitle="Our straightforward hiring process designed to find the right fit."
            center
          />

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your application via email or LinkedIn' },
              { step: '02', title: 'Review', desc: 'Our HR team reviews your application' },
              { step: '03', title: 'Interview', desc: 'Meet the team through interviews' },
              { step: '04', title: 'Offer', desc: 'Receive your offer and join the team' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-rajaton-cream z-0" />
                )}
                <div className="w-16 h-16 bg-rajaton-red text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold relative z-10">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-rajaton-charcoal mb-2">{item.title}</h3>
                <p className="text-rajaton-slate text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="section-padding bg-gradient-to-br from-rajaton-charcoal to-rajaton-charcoal/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                We're always looking for talented individuals. Send us your CV and we'll keep you 
                in mind for future opportunities that match your skills and experience.
              </p>
              <a
                href="mailto:careers@rajaton.co.za?subject=General Application"
                className="inline-flex items-center gap-2 px-8 py-4 bg-rajaton-red text-white font-semibold rounded-full hover:bg-rajaton-red/90 transition-colors"
              >
                Submit General Application
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Careers
