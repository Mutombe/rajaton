import React from 'react'
import { motion } from 'framer-motion'

function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  align = 'center',
  light = false,
  className = '' 
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 md:mb-16 niveau-font ${alignClass[align]} ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            light 
              ? 'bg-white/10 text-white/90' 
              : 'bg-rajaton-cream text-rajaton-red'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          {badge}
        </motion.span>
      )}
      
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-rajaton-charcoal'
      }`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${
          light ? 'text-white/70' : 'text-rajaton-slate'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader