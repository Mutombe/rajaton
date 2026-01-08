import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Check } from 'lucide-react'
import { useModal } from '../hooks/useModal';

const cookieCategories = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    required: true,
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources to measure and improve site performance.',
    required: false,
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'These cookies enable personalized features and functionality based on your interactions.',
    required: false,
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies may be set by our advertising partners to build a profile of your interests.',
    required: false,
  },
]

function CookiesModal() {
  const { modals, closeModal } = useModal()
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false,
  })

  const handleToggle = (id) => {
    if (id === 'essential') return // Can't toggle essential cookies
    setPreferences(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    localStorage.setItem('cookieConsent', 'customized')
    closeModal('cookies')
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsent', 'accepted')
    closeModal('cookies')
  }

  return (
    <AnimatePresence>
      {modals.cookies && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeModal('cookies')}
            className="modal-overlay"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-3xl shadow-strong z-50 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rajaton-cream rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-rajaton-red" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-rajaton-charcoal">Cookie Settings</h2>
                  <p className="text-sm text-rajaton-slate">Manage your cookie preferences</p>
                </div>
              </div>
              <button
                onClick={() => closeModal('cookies')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-rajaton-slate mb-6 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze 
                our traffic. You can customize your cookie preferences below or accept all cookies.
              </p>

              <div className="space-y-4">
                {cookieCategories.map((category) => (
                  <div 
                    key={category.id}
                    className="p-4 bg-rajaton-off-white rounded-2xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-rajaton-charcoal">
                            {category.name}
                          </h4>
                          {category.required && (
                            <span className="text-xs px-2 py-0.5 bg-rajaton-red/10 text-rajaton-red rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-rajaton-slate">
                          {category.description}
                        </p>
                      </div>
                      <button
                        onClick={() => handleToggle(category.id)}
                        disabled={category.required}
                        className={`relative w-12 h-7 rounded-full transition-colors ${
                          preferences[category.id] 
                            ? 'bg-rajaton-red' 
                            : 'bg-gray-300'
                        } ${category.required ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                      >
                        <motion.div
                          layout
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md ${
                            preferences[category.id] ? 'right-1' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cookie Details */}
              <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                <h4 className="font-semibold text-rajaton-charcoal mb-2">What are cookies?</h4>
                <p className="text-sm text-rajaton-slate leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website. They help us 
                  remember your preferences, understand how you use our site, and improve your experience. 
                  You can manage or delete cookies through your browser settings at any time.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-rajaton-cream/50">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 border-2 border-rajaton-charcoal text-rajaton-charcoal rounded-full font-semibold hover:bg-rajaton-charcoal hover:text-white transition-colors"
                >
                  Save Preferences
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAcceptAll}
                  className="flex-1 btn-primary justify-center"
                >
                  <Check size={18} className="mr-2" />
                  Accept All
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CookiesModal