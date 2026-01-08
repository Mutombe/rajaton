import React from 'react'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSection'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTA'

function Home() {
  return (
    <PageTransition>
      <SEO
        title="Home"
        description="Rajaton Brand Solutions - Your trusted partner for route-to-market excellence, key account management, and private label development across South Africa."
        keywords="FMCG, brand solutions, distribution, South Africa, private label, merchandising, retail"
        url="/"
      />

      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </PageTransition>
  )
}

export default Home