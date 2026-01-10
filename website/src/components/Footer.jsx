import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUpRight,
  Heart
} from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import { useModal } from '../hooks/useModal'

const footerLinks = {
  services: [
    { name: 'Key Account Management', path: '/services#key-accounts' },
    { name: 'Merchandising & Sales', path: '/services#merchandising' },
    { name: 'Distribution & Logistics', path: '/services#distribution' },
    { name: 'Private Label Development', path: '/services#private-label' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/contact#faq' },
    { name: 'Partner With Us', path: '/contact#partner' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/rajaton' },
  { name: 'Twitter', icon: FaXTwitter, href: 'https://twitter.com/rajaton' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/rajaton' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/rajaton' },
]

function Footer() {
  const { openModal } = useModal()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-rajaton-charcoal text-white overflow-hidden niveau-font">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rajaton-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rajaton-red rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with
                <span className="text-rajaton-red"> Industry Insights</span>
              </h3>
              <p className="text-white/70">
                Get the latest FMCG trends, brand strategies, and market insights delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-rajaton-red transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                  <ArrowUpRight size={18} className="ml-2" />
                </motion.button>
              </form>
              <p className="mt-3 text-sm text-white/50">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img src="/logo2.png" alt="Rajaton Logo" className="w-10 h-8" />
              </div>
              <span className="font-display text-2xl font-bold">Rajaton</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              South Africa's trusted brand solutions and distribution partner. 
              Empowering brands to reach every corner of the nation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rajaton-red transition-colors duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-rajaton-red transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-rajaton-red transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-rajaton-red transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@rajaton.co.za"
                  className="flex items-start gap-3 text-white/70 hover:text-rajaton-red transition-colors group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">info@rajaton.co.za</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+27110000000"
                  className="flex items-start gap-3 text-white/70 hover:text-rajaton-red transition-colors"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+27 (0) 11 XXX XXXX</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Cape Town, South Africa</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm flex items-center gap-1">
              © {currentYear} Rajaton Brand Solutions. Crafted with 
              <Heart size={14} className="text-rajaton-red fill-rajaton-red" />
              in South Africa
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => openModal('privacy')}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal('terms')}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => openModal('cookies')}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer