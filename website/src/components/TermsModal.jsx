import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText } from 'lucide-react'
import { useModal } from '../hooks/useModal'

function TermsModal() {
  const { modals, closeModal } = useModal()

  return (
    <AnimatePresence>
      {modals.terms && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeModal('terms')}
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
                  <FileText className="w-6 h-6 text-rajaton-red" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-rajaton-charcoal">Terms of Service</h2>
                  <p className="text-sm text-rajaton-slate">Last updated: January 2026</p>
                </div>
              </div>
              <button
                onClick={() => closeModal('terms')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  1. Acceptance of Terms
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  By accessing and using the services provided by Rajaton Brand Solutions ("Company", "we", "us", or "our"), 
                  you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do 
                  not use our services.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  2. Services Description
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  Rajaton Brand Solutions provides brand development, distribution, merchandising, key account management, 
                  and private label development services across South Africa. Our services are designed to help businesses 
                  optimize their route-to-market strategies and achieve retail excellence.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  3. Client Obligations
                </h3>
                <p className="text-rajaton-slate leading-relaxed mb-3">
                  As a client of Rajaton Brand Solutions, you agree to:
                </p>
                <ul className="list-disc list-inside text-rajaton-slate space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees and charges in a timely manner</li>
                  <li>Not engage in any activity that interferes with our services</li>
                </ul>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  4. Intellectual Property
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  All content, trademarks, logos, and intellectual property displayed on this website and in our services 
                  are owned by Rajaton Brand Solutions or our licensors. You may not use, reproduce, or distribute any 
                  content without our prior written consent.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  5. Limitation of Liability
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  To the maximum extent permitted by law, Rajaton Brand Solutions shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                  incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  6. Confidentiality
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information 
                  exchanged during the course of our business relationship. This obligation survives the termination 
                  of these Terms.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  7. Termination
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  Either party may terminate the service agreement with 30 days written notice. We reserve the right 
                  to suspend or terminate services immediately if you breach these Terms or engage in fraudulent or 
                  illegal activities.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  8. Governing Law
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of 
                  South Africa.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg font-semibold text-rajaton-charcoal mb-3">
                  9. Contact Information
                </h3>
                <p className="text-rajaton-slate leading-relaxed">
                  For any questions regarding these Terms of Service, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> legal@rajaton.co.za<br />
                  <strong>Phone:</strong> +27 (0) 11 XXX XXXX<br />
                  <strong>Address:</strong> Cape Town, South Africa
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-rajaton-cream/50">
              <button
                onClick={() => closeModal('terms')}
                className="btn-primary w-full justify-center"
              >
                I Accept
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TermsModal