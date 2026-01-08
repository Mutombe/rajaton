import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield } from 'lucide-react'
import { useModal } from '../hooks/useModal'

function PrivacyPolicyModal() {
  const { modals, closeModal } = useModal()

  return (
    <AnimatePresence>
      {modals.privacy && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeModal('privacy')}
            className="modal-overlay"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full bg-white rounded-3xl shadow-strong z-50 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rajaton-cream rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-rajaton-red" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-rajaton-charcoal">Privacy Policy</h2>
                  <p className="text-sm text-rajaton-slate">Last updated: January 2026</p>
                </div>
              </div>
              <button
                onClick={() => closeModal('privacy')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  1. Information We Collect
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  At Rajaton Brand Solutions, we collect information you provide directly to us, such as when you create an account, 
                  make a purchase, contact us, or participate in any interactive features of our services. This information may include 
                  your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  2. How We Use Your Information
                </h3>
                <p className="text-rajaton-slate leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-rajaton-slate space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  3. Information Sharing
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  We do not share, sell, or otherwise disclose your personal information for purposes other than those outlined in 
                  this Privacy Policy. We may share information with vendors, consultants, and other service providers who need access 
                  to such information to carry out work on our behalf.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  4. Data Security
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, 
                  disclosure, alteration, and destruction. All data is encrypted in transit and at rest using industry-standard 
                  encryption protocols.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  5. Your Rights (POPIA Compliance)
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  Under South Africa's Protection of Personal Information Act (POPIA), you have the right to access, correct, or 
                  delete your personal information. You may also object to the processing of your personal information or request 
                  that we restrict processing. To exercise these rights, please contact our Information Officer at privacy@rajaton.co.za.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  6. Contact Us
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> privacy@rajaton.co.za<br />
                  <strong>Phone:</strong> +27 (0) 11 XXX XXXX<br />
                  <strong>Address:</strong> Cape Town, South Africa
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-rajaton-cream/50">
              <button
                onClick={() => closeModal('privacy')}
                className="btn-primary w-full justify-center"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PrivacyPolicyModal