import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeader from './SectionHeader'

const testimonials = [
  {
    id: 1,
    quote: "Rajaton transformed our national distribution strategy. Their expertise in key account management helped us secure shelf space in every major retailer within 6 months.",
    author: "Sarah van der Berg",
    role: "CEO",
    company: "Premium Foods SA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    id: 2,
    quote: "The private label development team at Rajaton exceeded our expectations. They delivered a complete product line that now generates 30% of our store revenue.",
    author: "Michael Ndlovu",
    role: "Head of Retail Operations",
    company: "HealthMart Pharmacies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their merchandising team is exceptional. Store execution improved dramatically, and we saw immediate uplift in sales across all our SKUs.",
    author: "Lisa Pretorius",
    role: "Brand Manager",
    company: "Urban Beverages",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
    rating: 5,
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="niveau-font section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-rajaton-cream rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-rajaton-cream rounded-full blur-3xl opacity-50" />
      
      {/* Large Quote Mark */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2">
        <Quote size={200} className="text-rajaton-cream" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from the brands we've helped grow and succeed in the South African market."
        />

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-rajaton-charcoal font-medium leading-relaxed mb-8">
                    "{testimonials[current].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-rajaton-cream"
                    />
                    <div className="text-left">
                      <p className="font-display font-bold text-rajaton-charcoal text-lg">
                        {testimonials[current].author}
                      </p>
                      <p className="text-rajaton-slate">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 bg-rajaton-off-white rounded-full flex items-center justify-center hover:bg-rajaton-cream transition-colors"
            >
              <ChevronLeft size={24} className="text-rajaton-charcoal" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1)
                    setCurrent(idx)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === current 
                      ? 'bg-rajaton-red w-8' 
                      : 'bg-rajaton-cream hover:bg-rajaton-red/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 bg-rajaton-off-white rounded-full flex items-center justify-center hover:bg-rajaton-cream transition-colors"
            >
              <ChevronRight size={24} className="text-rajaton-charcoal" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials