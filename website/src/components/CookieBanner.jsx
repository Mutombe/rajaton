import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'
import { useModal } from '../hooks/useModal'

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-strong border border-gray-100 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-rajaton-cream rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cookie size={28} className="text-rajaton-red" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-rajaton-charcoal mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-rajaton-slate text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.{' '}
                    <button
                      onClick={() => openModal('cookies')}
                      className="text-rajaton-red hover:underline font-medium"
                    >
                      Learn more
                    </button>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => openModal('cookies')}
                    className="flex items-center gap-2 px-4 py-2.5 text-rajaton-slate hover:text-rajaton-charcoal transition-colors text-sm font-medium"
                  >
                    <Settings size={16} />
                    Customize
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2.5 border-2 border-gray-200 rounded-full text-rajaton-charcoal hover:border-rajaton-charcoal transition-colors text-sm font-medium"
                  >
                    Decline
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAccept}
                    className="btn-primary text-sm py-2.5"
                  >
                    Accept All
                  </motion.button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-4 right-4 md:static p-2 text-rajaton-slate hover:text-rajaton-charcoal transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner