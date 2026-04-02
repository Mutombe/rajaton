import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowUp,
  Cookie,
  Lock,
  FileText,
} from "lucide-react";
import { useScrollY, useWindowSize } from "@/hooks";
import { useTheme } from "@/hooks/useTheme";
import { NAV, SEARCH_INDEX } from "@/data/constants";
import { Btn } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";

/* ═══════════════════════════════════════════════════
   NAVIGATION — Glassmorphic with mega-dropdown
   ═══════════════════════════════════════════════════ */
export function Navigation() {
  const [mob, setMob] = useState(false);
  const [dd, setDd] = useState(null);
  const [search, setSearch] = useState(false);
  const y = useScrollY();
  const loc = useLocation();
  const scrolled = y > 50;

  useEffect(() => {
    setMob(false);
    setDd(null);
  }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = mob ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mob]);
  useEffect(() => {
    const h = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "py-2" : "py-3"}`}
      >
        <div
          className={`ctn transition-all duration-700 ${scrolled ? "" : ""}`}
        >
          <div
            className={`flex items-center justify-between h-16 md:h-18 px-5 md:px-8 rounded-2xl transition-all duration-700 ${
              scrolled
                ? "glass-dark shadow-2xl shadow-black/40"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="relative z-10 flex items-center gap-2.5 group"
            >
              <div className="relative">
                <div className="w-24 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                  <img
                    src="/logo.png"
                    alt="Rajaton Logo"
                    className="w-24 h-auto "
                    loading="eager"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map((item, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => item.children && setDd(i)}
                  onMouseLeave={() => setDd(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-fg-2 hover:text-fg transition-colors rounded-xl hover:bg-fg/5">
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${dd === i ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-[13px] font-medium transition-colors rounded-xl hover:bg-fg/5 ${loc.pathname === item.path ? "text-[#DC2626]" : "text-fg-2 hover:text-fg"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  <AnimatePresence>
                    {item.children && dd === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 glass-dark rounded-2xl shadow-2xl shadow-black/60 overflow-hidden p-1.5"
                      >
                        {item.children.map((c, ci) => (
                          <Link
                            key={ci}
                            to={c.path}
                            onClick={() => setDd(null)}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-fg/5 transition-colors group"
                          >
                            <ArrowRight
                              size={12}
                              className="text-[#DC2626] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                            />
                            <div>
                              <p className="text-fg-2 font-medium text-sm">
                                {c.label}
                              </p>
                              {c.d && (
                                <p className="text-fg-4 text-xs mt-0.5">
                                  {c.d}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearch(true)}
                className="w-9 h-9 rounded-xl bg-fg/5 hover:bg-fg/10 flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <Search size={15} className="text-fg-3" />
              </button>
              <ThemeToggle />
              <Link to="/contact" className="hidden md:block">
                <Btn className="!py-2.5 !px-5 !text-xs">Get Started</Btn>
              </Link>
              <button
                onClick={() => setMob(!mob)}
                className="lg:hidden w-9 h-9 rounded-xl bg-fg/5 hover:bg-fg/10 flex items-center justify-center transition-colors"
                aria-label="Menu"
              >
                {mob ? (
                  <X size={18} className="text-fg" />
                ) : (
                  <Menu size={18} className="text-fg" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mob && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[90] bg-surface pt-28 px-6 pb-12 overflow-y-auto"
          >
            <div className="space-y-1">
              {NAV.map((item, i) => (
                <div key={i}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setDd(dd === i ? null : i)}
                        className="w-full flex items-center justify-between py-4 text-fg text-base font-semibold border-b border-border"
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${dd === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {dd === i && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-3 space-y-0.5">
                              {item.children.map((c, ci) => (
                                <Link
                                  key={ci}
                                  to={c.path}
                                  onClick={() => setMob(false)}
                                  className="flex items-center gap-2 py-3 text-fg-3 hover:text-fg transition-colors text-sm"
                                >
                                  <ChevronRight
                                    size={12}
                                    className="text-[#DC2626]"
                                  />
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMob(false)}
                      className="block py-4 text-fg text-base font-semibold border-b border-border "
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-8 flex flex-col gap-3">
                <div className="flex items-center justify-between py-3">
                  <span className="text-fg-3 text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/contact" onClick={() => setMob(false)}>
                  <Btn className="w-full justify-center">Get Started</Btn>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={search} close={() => setSearch(false)} />
    </>
  );
}

/* ═══════════════════════════════════════════════════
   SEARCH OVERLAY
   ═══════════════════════════════════════════════════ */
function SearchOverlay({ open, close }) {
  const [q, setQ] = useState("");
  const ref = useRef(null);
  const nav = useNavigate();
  useEffect(() => {
    if (open) setTimeout(() => ref.current?.focus(), 200);
    else setQ("");
  }, [open]);
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [close]);
  const results =
    q.length > 1
      ? SEARCH_INDEX.filter(
          (i) =>
            i.title.toLowerCase().includes(q.toLowerCase()) ||
            i.d.toLowerCase().includes(q.toLowerCase()),
        )
      : [];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl flex items-start justify-center pt-[12vh]"
          onClick={close}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="w-full max-w-xl px-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-fg-4"
                size={20}
              />
              <input
                ref={ref}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search Rajaton..."
                className="w-full glass-strong rounded-2xl py-4.5 pl-14 pr-12 text-fg text-base placeholder-fg-3 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 transition-all "
              />
              <button
                onClick={close}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-fg-4 hover:text-fg transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 glass-dark rounded-2xl overflow-hidden divide-y divide-border"
              >
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      nav(r.path);
                      close();
                    }}
                    className="w-full px-5 py-3.5 text-left hover:bg-fg/5 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-fg-2 font-medium text-sm ">
                        {r.title}
                      </p>
                      <p className="text-fg-3 text-xs mt-0.5 line-clamp-1">
                        {r.d}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#DC2626] bg-[#DC2626]/10 px-2.5 py-1 rounded-full  font-semibold flex-shrink-0 ml-3">
                      {r.s}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
            {q.length > 1 && !results.length && (
              <p className="text-center text-fg-3 mt-8 text-sm">
                No results for "{q}"
              </p>
            )}
            {!q && (
              <p className="text-center text-fg-4 mt-8 text-xs">
                Try "logistics", "careers", or "merchandising" ·{" "}
                <kbd className="glass px-1.5 py-0.5 rounded text-fg-3 text-[10px]">
                  ESC
                </kbd>{" "}
                to close
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════ */
export function Footer({ openPolicy }) {
  const links = [
    {
      t: "Solutions",
      items: [
        { l: "Key Account Management", p: "/services/key-account-management" },
        { l: "Merchandising", p: "/services/merchandising-execution" },
        {
          l: "Distribution & Logistics",
          p: "/services/distribution-logistics",
        },
        { l: "Private Label", p: "/services/private-label" },
      ],
    },
    {
      t: "Company",
      items: [
        { l: "About", p: "/about" },
        { l: "Careers", p: "/careers" },
        { l: "Case Studies", p: "/case-studies" },
        { l: "Contact", p: "/contact" },
      ],
    },
    {
      t: "Industries",
      items: [
        { l: "Transport & Logistics", p: "/industries" },
        { l: "Finance & Fintechs", p: "/industries" },
        { l: "Mining", p: "/industries" },
      ],
    },
  ];
  return (
    <footer className="relative mesh-dark border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/20 to-transparent" />
      <div className="ctn pt-16 md:pt-28 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pt-6 md:pt-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-24 rounded-lg  flex items-center justify-center">
                <img src="/logo.png" alt="Rajaton Logo" className="w-24 h-auto " loading="eager"/>
              </div>
            </Link>
            <p className="text-fg-4 text-sm leading-relaxed max-w-sm">
              The world's premier brand distribution company. Strategic
              partnerships, flawless execution, supply chain excellence across
              47+ countries.
            </p>
          </div>
          {links.map((g, i) => (
            <div key={i}>
              <h4 className="text-fg-3 font-semibold mb-5 text-xs tracking-[0.15em] uppercase ">
                {g.t}
              </h4>
              <ul className="space-y-2.5">
                {g.items.map((l, li) => (
                  <li key={li}>
                    <Link
                      to={l.p}
                      className="text-fg-4 hover:text-fg transition-colors text-sm"
                    >
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fg-4 text-xs">
            &copy; {new Date().getFullYear()} Rajaton Global Ltd.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => openPolicy("privacy")}
              className="text-fg-4 hover:text-fg-2 text-xs transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => openPolicy("cookie")}
              className="text-fg-4 hover:text-fg-2 text-xs transition-colors"
            >
              Cookies
            </button>
            <button
              onClick={() => openPolicy("terms")}
              className="text-fg-4 hover:text-fg-2 text-xs transition-colors"
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════
   COOKIE BANNER
   ═══════════════════════════════════════════════════ */
export function CookieBanner({ onAccept, onManage }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto glass-dark rounded-2xl p-6 md:p-7 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-9 h-9 rounded-xl bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie size={16} className="text-[#DC2626]" />
            </div>
            <div>
              <h3 className="text-fg font-semibold text-sm ">
                We value your privacy
              </h3>
              <p className="text-fg-4 text-xs mt-1 leading-relaxed">
                We use cookies to enhance your experience and analyze traffic.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={onManage}
              className="px-5 py-2 rounded-full border border-border-3 text-fg-2 text-xs font-semibold hover:bg-fg/5 transition-colors "
            >
              Manage
            </button>
            <button
              onClick={onAccept}
              className="px-5 py-2 rounded-full bg-[#DC2626] text-white text-xs font-semibold hover:bg-[#B91C1C] transition-colors "
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   POLICY MODAL
   ═══════════════════════════════════════════════════ */
export function PolicyModal({ type, onClose }) {
  const Icon = type === "privacy" ? Lock : type === "terms" ? FileText : Cookie;
  const title = type === "privacy" ? "Privacy Policy" : type === "terms" ? "Terms & Conditions" : "Cookie Policy";

  const PRIVACY_SECTIONS = [
    {
      h: "Rajaton Brand Solutions Privacy Notice",
      t: "At Rajaton Brand Solutions (Pty) Ltd and its subsidiary companies (collectively referred to as \"Rajaton\", \"we\", \"our\", or \"us\"), we are committed to protecting your privacy and ensuring the security of your personal information. We process personal data in compliance with the Protection of Personal Information Act 4 of 2013 (\"POPIA\"), including but not limited to Section 4 (Conditions for Lawful Processing) and Section 5 (Rights of Data Subjects).\n\nThis policy explains how we collect, use, share, and protect your data, and your rights regarding this information.",
    },
    {
      h: "1. Information We Collect",
      t: "Personal Identifiers: Name, ID number, passport number, and date of birth.\n\nContact Information: Address, phone numbers, and email addresses.\n\nFinancial Information: Bank account details, transaction history, and credit assessments.\n\nDigital Data: IP addresses, browser type, cookies, and website activity.\n\nSensitive Data: Biometric data (e.g., fingerprints) and health-related data for specific services, with safeguards as per Section 26 of POPIA.\n\nChildren's Data: No collection without parental or guardian consent, per Section 35 of POPIA.\n\nLocation Data: Collected strictly for fraud prevention, logistics optimisation, and security purposes.\n\nThird-Party Sources: We may collect data from partners, service providers, professional representatives, and regulatory authorities, all under lawful compliance.",
    },
    {
      h: "2. How We Use Your Data",
      t: "We use your personal information for the following purposes:\n\n• Service delivery and fulfilment across our distribution, merchandising, key account management, and private label operations\n• Legal and regulatory compliance\n• Fraud prevention and security monitoring\n• Marketing and personalisation (with your consent)\n• Recruitment and talent management\n• Analytics to improve our services and your experience\n\nLawful Basis: Consent, contract performance, compliance with law, and legitimate interests (e.g., fraud prevention and operational improvement).",
    },
    {
      h: "3. Data Sharing",
      t: "We may share your data with regulatory authorities, service providers, retail and brand partners, logistics operators, and other parties as required by law. All third parties are bound by confidentiality agreements and POPIA compliance. We never sell your personal data to third parties.",
    },
    {
      h: "4. Data Retention",
      t: "Personal Identifiers: Up to 7 years after the end of the business relationship.\n\nFinancial Records: 7 years (regulatory compliance).\n\nSensitive Data: Retained only as long as necessary for the purpose for which it was collected.\n\nDigital Data: Retained for up to 2 years for analytics purposes.",
    },
    {
      h: "5. Your Rights",
      t: "You have rights under Section 23 of POPIA, including:\n\n• Access to your personal information\n• Correction of inaccurate or incomplete data\n• Deletion of personal information where applicable\n• Objection to the processing of your data\n• Right to be informed about data collection\n• Consent management and withdrawal\n• Right to complain to the Information Regulator\n• Right not to be subject to automated decision-making",
    },
    {
      h: "6. Security Measures",
      t: "We apply industry-standard encryption, strict access controls, regular security audits, penetration testing, and 24/7 monitoring across all our systems and operations in 47+ countries.",
    },
    {
      h: "7. Cookies and Tracking",
      t: "Cookies are used for secure session management, analytics, and enhancing user experience. Preferences can be managed via your browser settings or our cookie management options.",
    },
    {
      h: "8. International Data Transfers",
      t: "Given our operations across 47+ countries, data may be transferred outside South Africa under Section 72 of POPIA, with adequate safeguards and protections in place to ensure your data remains secure.",
    },
    {
      h: "9. Updates to this Policy",
      t: "We may update this policy periodically. The latest version will always be available on our website at rajaton.co.za.",
    },
    {
      h: "10. Contact Us",
      t: "Information Officer\nRajaton Brand Solutions (Pty) Ltd\nSandton, Johannesburg\nSouth Africa\n\nEmail: privacy@rajaton.co.za\nWebsite: rajaton.co.za",
    },
  ];

  const TERMS_SECTIONS = [
    {
      h: "Introduction",
      t: "These Terms and Conditions (\"Terms\") govern your use of the Rajaton Brand Solutions website (rajaton.co.za) and any services provided by Rajaton Brand Solutions (Pty) Ltd and its subsidiaries (collectively, \"Rajaton\", \"we\", \"our\", or \"us\"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.",
    },
    {
      h: "1. Use of the Website",
      t: "You may use this website for lawful purposes only. You agree not to:\n\n• Use the website in any way that violates applicable local, national, or international law\n• Transmit or procure the sending of any unsolicited advertising or promotional material\n• Attempt to gain unauthorised access to any part of the website, server, or database\n• Use the website to collect or harvest personal information of other users\n• Interfere with or disrupt the integrity or performance of the website",
    },
    {
      h: "2. Intellectual Property",
      t: "All content on this website — including but not limited to text, graphics, logos, images, videos, the Rajaton brand identity, and software — is the property of Rajaton Brand Solutions (Pty) Ltd or its licensors and is protected by South African and international intellectual property laws.\n\nYou may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.",
    },
    {
      h: "3. Services and Information",
      t: "The information provided on this website about our services — including key account management, merchandising, distribution & logistics, and private label development — is for general informational purposes only. It does not constitute a binding offer or contract.\n\nAll service engagements are subject to separate commercial agreements between Rajaton and the relevant parties.",
    },
    {
      h: "4. Third-Party Links",
      t: "Our website may contain links to third-party websites or services that are not owned or controlled by Rajaton. We assume no responsibility for the content, privacy policies, or practices of any third-party sites. You access them at your own risk.",
    },
    {
      h: "5. Limitation of Liability",
      t: "To the fullest extent permitted by law, Rajaton shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website, even if we have been advised of the possibility of such damages.\n\nOur total liability for any claim arising from these Terms or your use of the website shall not exceed the amount you paid to us, if any, in the 12 months preceding the claim.",
    },
    {
      h: "6. Disclaimer of Warranties",
      t: "This website is provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.\n\nWe do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
    },
    {
      h: "7. Indemnification",
      t: "You agree to indemnify and hold harmless Rajaton, its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from your use of the website or violation of these Terms.",
    },
    {
      h: "8. Privacy",
      t: "Your use of the website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information in compliance with the Protection of Personal Information Act 4 of 2013 (POPIA).",
    },
    {
      h: "9. Governing Law",
      t: "These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of South Africa.",
    },
    {
      h: "10. Changes to These Terms",
      t: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes acceptance of the updated Terms.",
    },
    {
      h: "11. Contact Us",
      t: "If you have any questions about these Terms, please contact us:\n\nRajaton Brand Solutions (Pty) Ltd\nSandton, Johannesburg\nSouth Africa\n\nEmail: legal@rajaton.co.za\nWebsite: rajaton.co.za",
    },
  ];

  const COOKIE_SECTIONS = [
    {
      h: "About This Cookie Policy",
      t: "This Cookie Policy explains how Rajaton Brand Solutions (Pty) Ltd (\"Rajaton\", \"we\", \"our\", or \"us\") uses cookies and similar tracking technologies when you visit our website at rajaton.co.za. This policy should be read alongside our Privacy Policy.",
    },
    {
      h: "1. What Are Cookies?",
      t: "Cookies are small text files placed on your device when you visit a website. They help the website recognise your device and remember information about your visit, such as your preferences and settings. Cookies can be \"session\" cookies (deleted when you close your browser) or \"persistent\" cookies (remaining on your device for a set period).",
    },
    {
      h: "2. Essential Cookies",
      t: "These cookies are strictly necessary for the website to function and cannot be disabled. They enable core functionality such as:\n\n• Session management and secure navigation\n• Theme preferences (dark/light mode)\n• Cookie consent preferences\n• Security and fraud prevention\n\nWithout these cookies, the website cannot function properly.",
    },
    {
      h: "3. Analytics Cookies",
      t: "We use analytics cookies to collect anonymous usage data that helps us understand how visitors interact with our website. This data includes:\n\n• Pages visited and time spent on each page\n• Navigation paths through the site\n• Device type, browser, and operating system\n• Referring website or source\n\nThis information is aggregated and anonymised, and is used solely to improve our website and user experience.",
    },
    {
      h: "4. Marketing Cookies",
      t: "With your consent, we may use marketing cookies to:\n\n• Deliver relevant advertisements based on your interests\n• Track the effectiveness of our marketing campaigns\n• Limit the number of times you see a specific advertisement\n• Help us measure the reach and engagement of our content\n\nThese cookies may be set by third-party advertising partners.",
    },
    {
      h: "5. Third-Party Cookies",
      t: "Some cookies on our website are placed by third-party services we use, such as analytics providers and embedded content platforms. These third parties have their own privacy and cookie policies, and we encourage you to review them. We do not control these cookies.",
    },
    {
      h: "6. Managing Your Cookie Preferences",
      t: "You can manage your cookie preferences in the following ways:\n\n• Browser Settings: Most browsers allow you to block or delete cookies through their settings menu.\n• Cookie Banner: When you first visit our website, you can choose to accept or manage cookie preferences.\n• Opt-Out Links: Some third-party cookies offer direct opt-out mechanisms.\n\nPlease note that disabling certain cookies may affect the functionality and your experience of our website.",
    },
    {
      h: "7. Data Retention",
      t: "Cookie data is retained for varying periods depending on the type:\n\n• Essential cookies: Duration of your session or up to 1 year\n• Analytics cookies: Up to 2 years\n• Marketing cookies: Up to 1 year\n\nYou can clear cookies at any time through your browser settings.",
    },
    {
      h: "8. Updates to This Policy",
      t: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. The latest version will always be available on our website.",
    },
    {
      h: "9. Contact Us",
      t: "If you have any questions about our use of cookies, please contact us:\n\nRajaton Brand Solutions (Pty) Ltd\nSandton, Johannesburg\nSouth Africa\n\nEmail: privacy@rajaton.co.za\nWebsite: rajaton.co.za",
    },
  ];

  const sections = type === "privacy" ? PRIVACY_SECTIONS : type === "terms" ? TERMS_SECTIONS : COOKIE_SECTIONS;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        className="glass-dark rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 glass-dark border-b border-border px-7 py-5 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
              <Icon size={16} className="text-[#DC2626]" />
            </div>
            <h2 className="text-fg font-bold ">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-fg/5 flex items-center justify-center hover:bg-fg/10 transition-colors"
          >
            <X size={14} className="text-fg-4" />
          </button>
        </div>
        <div className="px-7 py-6 space-y-5">
          {sections.map((s, i) => (
            <div key={i}>
              <h3 className="text-fg font-semibold text-sm  mb-1.5">
                {s.h}
              </h3>
              <p className="text-fg-4 text-sm leading-relaxed whitespace-pre-line">{s.t}</p>
            </div>
          ))}
          <p className="text-fg-4 text-xs pt-4 border-t border-border">
            Last updated: April 2026 · Rajaton Brand Solutions (Pty) Ltd.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   CURSOR FOLLOWER
   ═══════════════════════════════════════════════════ */
export function Cursor() {
  const [p, setP] = useState({ x: 0, y: 0 });
  const [h, setH] = useState(false);
  const { w } = useWindowSize();
  const { theme } = useTheme();
  const blend = theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply";
  useEffect(() => {
    if (w < 768) return;
    const m = (e) => setP({ x: e.clientX, y: e.clientY });
    const o = (e) =>
      setH(
        !!e.target.closest("a, button, input, textarea, select, [data-hover]"),
      );
    window.addEventListener("mousemove", m);
    window.addEventListener("mouseover", o);
    return () => {
      window.removeEventListener("mousemove", m);
      window.removeEventListener("mouseover", o);
    };
  }, [w]);
  if (w < 768) return null;
  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full bg-[#DC2626] pointer-events-none z-[9999] ${blend}`}
        animate={{ x: p.x - 6, y: p.y - 6 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-[#DC2626]/40 pointer-events-none z-[9999] ${blend}`}
        animate={{
          x: p.x - 16,
          y: p.y - 16,
          scale: h ? 2 : 1,
          borderColor: h ? "rgba(220,38,38,0.6)" : "rgba(220,38,38,0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}

/* ═══════════════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════════════ */
export function ScrollTop() {
  const y = useScrollY();
  return (
    <AnimatePresence>
      {y > 600 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass-strong flex items-center justify-center hover:bg-fg/10 transition-colors glow-red-sm"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll top"
        >
          <ArrowUp size={16} className="text-[#DC2626]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
