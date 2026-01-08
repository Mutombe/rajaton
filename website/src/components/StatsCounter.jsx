import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedNumber({ value, duration = 2, suffix = '', prefix = '' }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateNumber = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.round(easeOutQuart * numericValue)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

function StatsCounter({ stats, light = false }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${
            light ? 'text-white' : 'text-rajaton-charcoal'
          }`}>
            <AnimatedNumber 
              value={stat.value} 
              suffix={stat.suffix || ''} 
              prefix={stat.prefix || ''}
            />
          </div>
          <p className={`text-sm md:text-base ${
            light ? 'text-white/70' : 'text-rajaton-slate'
          }`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCounter