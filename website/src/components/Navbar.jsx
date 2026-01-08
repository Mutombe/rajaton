import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Key Account Management', path: '/services#key-accounts' },
      { name: 'Merchandising & Sales', path: '/services#merchandising' },
      { name: 'Distribution & Logistics', path: '/services#distribution' },
      { name: 'Private Label Development', path: '/services#private-label' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveSubmenu(null)
  }, [location])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`niveau-font fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-soft py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-rajaton-red rounded-xl flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">R</span>
                </div>
                <span className="font-display text-2xl font-bold text-rajaton-charcoal">
                  Rajaton
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link px-4 py-2 flex items-center gap-1 ${
                      isActive(link.path) ? 'active' : ''
                    }`}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeSubmenu === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="trytonos-font bg-white rounded-2xl shadow-strong border border-gray-100 py-3 min-w-[280px] overflow-hidden">
                          {link.submenu.map((sublink, idx) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="flex items-center gap-3 px-5 py-3 text-rajaton-slate hover:text-rajaton-red hover:bg-rajaton-cream transition-all duration-200 group"
                            >
                              <span className="w-2 h-2 rounded-full bg-rajaton-red/30 group-hover:bg-rajaton-red transition-colors" />
                              <span className="font-medium trytonos-font">{sublink.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary group trytonos-font"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-rajaton-charcoal"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="h-full pt-24 pb-8 px-6 overflow-y-auto"
            >
              <div className="space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-4 text-2xl font-display font-semibold transition-colors ${
                        isActive(link.path) 
                          ? 'text-rajaton-red' 
                          : 'text-rajaton-charcoal hover:text-rajaton-red'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 space-y-2 mb-4">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block py-2 text-rajaton-slate hover:text-rajaton-red transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <p className="text-rajaton-slate text-sm mb-2">Get in touch</p>
                <a 
                  href="mailto:info@rajaton.co.za" 
                  className="text-rajaton-charcoal font-medium hover:text-rajaton-red transition-colors"
                >
                  info@rajaton.co.za
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar