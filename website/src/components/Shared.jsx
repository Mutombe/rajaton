import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Lock, X, ArrowUp } from "lucide-react";
import { useScrollPosition, useWindowSize } from "@/hooks";

/* ============================================================
   COOKIE BANNER
   ============================================================ */
export function CookieBanner({ onAccept, onManage }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6"
    >
      <div className="max-w-5xl mx-auto bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie size={20} className="text-[#DC2626]" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">We value your privacy</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button onClick={onManage} className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Manage
            </button>
            <button onClick={onAccept} className="px-6 py-2.5 rounded-full bg-[#DC2626] text-white text-sm font-semibold hover:bg-[#B91C1C] transition-colors">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   POLICY MODAL
   ============================================================ */
export function PolicyModal({ type, onClose }) {
  const content =
    type === "privacy"
      ? {
          title: "Privacy Policy",
          icon: Lock,
          sections: [
            { heading: "Information We Collect", text: "We collect information you provide directly, including name, email, phone number, and company details when you contact us, apply for positions, or request information about our services. We also collect usage data through cookies and similar technologies." },
            { heading: "How We Use Information", text: "Your information is used to provide and improve our services, communicate with you, process job applications, and comply with legal obligations. We use analytics data to understand user behavior and improve our website experience. We never sell personal data to third parties." },
            { heading: "Data Sharing & Transfers", text: "We may share data with trusted service providers who assist in our operations. International transfers are protected by Standard Contractual Clauses and appropriate safeguards under GDPR and applicable data protection laws." },
            { heading: "Data Security", text: "We implement industry-standard security measures including encryption in transit and at rest, access controls, regular security audits, and incident response procedures across all our systems and data centers." },
            { heading: "Data Retention", text: "We retain personal data only as long as necessary for the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time, subject to legal retention requirements." },
            { heading: "Your Rights", text: "Under GDPR and applicable laws, you have the right to access, correct, delete, restrict processing, and port your personal data. You also have the right to withdraw consent and lodge complaints with supervisory authorities. Contact our Data Protection Officer at privacy@rajaton.com." },
          ],
        }
      : {
          title: "Cookie Policy",
          icon: Cookie,
          sections: [
            { heading: "What Are Cookies", text: "Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing traffic, and enabling certain functionality." },
            { heading: "Essential Cookies", text: "Required for basic site functionality including navigation, security features, session management, and load balancing. These cannot be disabled as they are necessary for the site to function properly." },
            { heading: "Analytics Cookies", text: "Help us understand how visitors interact with our website by collecting anonymous usage data including pages visited, time on site, and navigation patterns. This helps us improve the user experience and content relevance." },
            { heading: "Marketing Cookies", text: "Used to deliver relevant advertisements and track campaign effectiveness across platforms. These cookies may be set by our advertising partners and used to build a profile of your interests for targeted advertising." },
            { heading: "Third-Party Cookies", text: "Some cookies are placed by third-party services that appear on our pages, including analytics providers (Google Analytics), social media platforms, and advertising networks." },
            { heading: "Managing Your Preferences", text: "You can manage cookie preferences through your browser settings or through our cookie management tool accessible via the cookie icon. Note that disabling certain cookies may affect site functionality and your user experience." },
          ],
        };

  const Icon = content.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="bg-[#1A1A1A] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/5 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
              <Icon size={20} className="text-[#DC2626]" />
            </div>
            <h2 className="text-white text-xl font-bold">{content.title}</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <X size={18} className="text-gray-400" />
          </button>
        </div>
        <div className="px-8 py-6 space-y-6">
          {content.sections.map((s, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold text-lg mb-2">{s.heading}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
          <div className="pt-4 border-t border-white/5">
            <p className="text-gray-600 text-sm">Last updated: February 2026 · Rajaton Global Ltd.</p>
            <p className="text-gray-600 text-sm">For questions, contact: privacy@rajaton.com</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   CURSOR FOLLOWER (desktop only)
   ============================================================ */
export function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      setHovering(!!e.target.closest("a, button, [data-cursor-hover], input, textarea, select"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [width]);

  if (width < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-[#DC2626] pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
        scale: hovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}

/* ============================================================
   SCROLL TO TOP BUTTON
   ============================================================ */
export function ScrollToTop() {
  const scrollY = useScrollPosition();

  return (
    <AnimatePresence>
      {scrollY > 600 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[50] w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg shadow-red-500/30 hover:bg-[#B91C1C] transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   SCROLL RESTORATION — scroll to top on route change
   ============================================================ */
export function ScrollRestoration() {
  const { pathname } = (typeof window !== "undefined" && window.location) || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
