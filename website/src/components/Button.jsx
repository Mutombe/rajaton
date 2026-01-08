import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  showArrow = false,
  className = '',
  ...props 
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-8 py-4',
    lg: 'px-10 py-5 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      disabled={disabled || loading}
      className={`${variants[variant]} ${sizeClasses[size]} ${className} group`}
      {...props}
    >
      {loading && (
        <Loader2 size={18} className="animate-spin mr-2" />
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
      
      {showArrow && !loading && (
        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
      )}
    </motion.button>
  )
}

export default Button