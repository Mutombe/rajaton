import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Home, Layers, Info, Users, Rocket, FileText, Mail 
} from 'lucide-react'

// Updated configuration with Icons
const navLinks = [
  // --- LEFT SIDE (3 Links) ---
  { name: 'Home', path: '/', icon: Home },
  { 
    name: 'Services', 
    path: '/services', 
    icon: Layers,
    submenu: [
      { name: 'Key Account Management', path: '/services#key-accounts' },
      { name: 'Merchandising & Sales', path: '/services#merchandising' },
      { name: 'Distribution & Logistics', path: '/services#distribution' },
      { name: 'Private Label Development', path: '/services#private-label' },
    ]
  },
  { name: 'About', path: '/about', icon: Info },
  
  // --- RIGHT SIDE (4 Links) ---
  { name: 'Team', path: '/team', icon: Users },
  { name: 'Careers', path: '/careers', icon: Rocket },
  { name: 'Blog', path: '/blog', icon: FileText },
  { name: 'Contact', path: '/contact', icon: Mail },
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

  // Helper to render a single desktop link to avoid code duplication
  const renderDesktopLink = (link) => (
    <div 
      key={link.name}
      className="relative"
      onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
      onMouseLeave={() => setActiveSubmenu(null)}
    >
      <Link
        to={link.path}
        className={`nav-link px-3 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-rajaton-red ${
          isActive(link.path) ? 'text-rajaton-red bg-rajaton-red/5 rounded-lg' : 'text-rajaton-charcoal'
        }`}
      >
        <link.icon size={16} className={isActive(link.path) ? 'text-rajaton-red' : 'text-rajaton-slate'} />
        {link.name}
        {link.submenu && (
          <ChevronDown 
            size={14} 
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
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
          >
            <div className="bg-white rounded-2xl shadow-strong border border-gray-100 py-3 min-w-[260px] overflow-hidden">
              {link.submenu.map((sublink) => (
                <Link
                  key={sublink.name}
                  to={sublink.path}
                  className="flex items-center gap-3 px-5 py-3 text-rajaton-slate hover:text-rajaton-red hover:bg-rajaton-cream transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rajaton-red/30 group-hover:bg-rajaton-red transition-colors" />
                  <span className="font-medium text-sm">{sublink.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

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
            <Link to="/" className="relative z-10 flex-shrink-0">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-rajaton-red rounded-xl flex items-center justify-center shadow-lg shadow-rajaton-red/20">
                  <span className="text-white font-display font-bold text-xl">R</span>
                </div>
                <span className="font-display text-2xl font-bold text-rajaton-charcoal">
                  Rajaton
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation (Split Layout) */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              {/* Left Group (3 Links) */}
              <div className="flex items-center gap-1">
                {navLinks.slice(0, 3).map(renderDesktopLink)}
              </div>

              {/* The "Split" Gap */}
              <div className="w-24 xl:w-32 h-px bg-transparent mx-2" aria-hidden="true" />

              {/* Right Group (4 Links) */}
              <div className="flex items-center gap-1">
                {navLinks.slice(3).map(renderDesktopLink)}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary group !py-2.5 !px-5 text-sm"
                >
                  Get Started
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-rajaton-charcoal hover:bg-gray-100 rounded-lg transition-colors"
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
              <div className="space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        isActive(link.path) 
                          ? 'bg-rajaton-red/5 text-rajaton-red' 
                          : 'text-rajaton-charcoal hover:bg-gray-50'
                      }`}
                      onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                    >
                      <link.icon size={24} className={isActive(link.path) ? 'text-rajaton-red' : 'text-rajaton-slate'} />
                      <span className="text-xl font-display font-semibold">{link.name}</span>
                    </Link>
                    
                    {link.submenu && (
                      <div className="ml-14 space-y-3 mt-2 mb-4 border-l-2 border-gray-100 pl-4">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1 text-rajaton-slate hover:text-rajaton-red transition-colors"
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
                className="mt-8 px-4"
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center py-4 text-lg"
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-gray-100 text-center"
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