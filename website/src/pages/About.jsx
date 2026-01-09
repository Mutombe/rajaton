import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Building2,
  Briefcase,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import StatsCounter from "../components/StatsCounter";
import CTASection from "../components/CTA";
import Button from "../components/Button";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are deeply passionate about the FMCG industry and committed to delivering excellence in everything we do.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Briefcase,
    title: "Partnership",
    description:
      "We build lasting relationships based on trust, transparency, and mutual success with our clients and retail partners.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    description:
      "We are results-driven, constantly measuring and optimizing to deliver measurable growth for our partners.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with the highest ethical standards, building trust through honest and transparent business practices.",
    color: "bg-purple-100 text-purple-600",
  },
];

const milestones = [
  {
    year: "2008",
    title: "Founded",
    description: "Rajaton Brand Solutions established in Johannesburg",
  },
  {
    year: "2012",
    title: "National Expansion",
    description: "Extended operations to all 9 South African provinces",
  },
  {
    year: "2016",
    title: "50 Partners",
    description: "Reached milestone of 50 brand partnerships",
  },
  {
    year: "2019",
    title: "Private Label Launch",
    description: "Introduced comprehensive private label services",
  },
  {
    year: "2022",
    title: "100+ Brands",
    description: "Grew portfolio to over 100 active brand partnerships",
  },
  {
    year: "2024",
    title: "Tech Innovation",
    description: "Launched data-driven merchandising analytics platform",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Brand Partners" },
  { value: 9, suffix: "", label: "Provinces Covered" },
  { value: 500, suffix: "+", label: "Retail Relationships" },
];

function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Learn about Rajaton Brand Solutions - over 15 years of FMCG expertise, helping brands grow across South Africa through strategic key account management and distribution."
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
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-rajaton-red/10 text-rajaton-red font-semibold rounded-full text-sm mb-6">
                About Rajaton
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-rajaton-charcoal mb-6 leading-tight">
                Powering <span className="text-rajaton-red">Brand Growth</span>{" "}
                Across South Africa
              </h1>
              <p className="text-lg text-rajaton-slate mb-8 leading-relaxed">
                For over 15 years, Rajaton Brand Solutions has been at the
                forefront of FMCG sales and distribution in South Africa. We
                connect exceptional brands with consumers through strategic
                retail partnerships, expert merchandising, and comprehensive
                distribution networks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/services" icon={Target}>
                  Our Services
                </Button>
                <Button href="/contact" variant="secondary" icon={Users}>
                  Meet the Team
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
                  alt="Rajaton team collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rajaton-charcoal/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-rajaton-red/10 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-rajaton-red" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-rajaton-charcoal">
                      15+ Years
                    </p>
                    <p className="text-rajaton-slate">Industry Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
{/* Stats Section */}
<section className="py-16 bg-rajaton-charcoal">
  <div className="container-custom">
    <StatsCounter stats={stats} light />
  </div>
</section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rajaton-red to-rajaton-red/80 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">
                  Our Mission
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To be the most trusted sales and distribution partner for FMCG
                  brands in South Africa, delivering exceptional value through
                  strategic retail relationships, operational excellence, and
                  deep market expertise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-rajaton-charcoal to-rajaton-charcoal/90 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To transform how brands connect with South African consumers
                  by building the most comprehensive and effective retail
                  network in the country, driving growth for our partners while
                  creating value for retailers and consumers alike.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-rajaton-off-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="Our core values guide every decision we make and every relationship we build."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon; // Capitalize and extract the component
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-rajaton-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-rajaton-slate leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="15 Years of Growth"
            subtitle="From our founding to becoming a leading FMCG solutions provider in South Africa."
            center
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rajaton-cream hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow inline-block ${
                        index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-rajaton-red/10 text-rajaton-red font-bold rounded-full text-sm mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-display text-xl font-bold text-rajaton-charcoal mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-rajaton-slate">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-5 h-5 bg-rajaton-red rounded-full border-4 border-rajaton-cream relative z-10 hidden lg:block" />

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-rajaton-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rajaton-red/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 text-white font-semibold rounded-full text-sm mb-6">
                Our Presence
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Nationwide <span className="text-rajaton-red">Coverage</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                With our headquarters in Johannesburg and regional teams across
                all 9 provinces, we provide comprehensive coverage and local
                expertise throughout South Africa.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rajaton-red/20 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-rajaton-red" />
                  </div>
                  <div>
                    <p className="font-semibold">Head Office</p>
                    <p className="text-white/70">Johannesburg, Gauteng</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rajaton-red/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rajaton-red" />
                  </div>
                  <div>
                    <p className="font-semibold">Regional Offices</p>
                    <p className="text-white/70">Cape Town, Durban, Pretoria</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rajaton-red/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rajaton-red" />
                  </div>
                  <div>
                    <p className="font-semibold">Operating Hours</p>
                    <p className="text-white/70">
                      Monday - Friday, 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80"
                  alt="South Africa map coverage"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="simple" />
    </PageTransition>
  );
}

export default About;
