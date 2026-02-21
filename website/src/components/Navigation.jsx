import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useScrollPosition } from "@/hooks";
import { NAV_ITEMS } from "@/data/constants";
import { MagneticButton } from "@/components/ui";
import SearchOverlay from "./SearchOverlay";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 60;

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-10 flex items-center gap-2 group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-[#DC2626] px-3 py-1.5 rounded-md group-hover:shadow-lg group-hover:shadow-red-500/20 transition-shadow">
                  <img
                    src="/logo1.png"
                    alt="Rajaton Logo"
                    className="w-24 h-auto"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${openDropdown === idx ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${
                        location.pathname === item.path
                          ? "text-[#DC2626]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-[#1A1A1A]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((child, ci) => (
                            <Link
                              key={ci}
                              to={child.path}
                              onClick={() => setOpenDropdown(null)}
                              className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <ArrowRight
                                size={14}
                                className="text-[#DC2626] mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                              />
                              <div>
                                <p className="text-white font-medium text-sm">
                                  {child.label}
                                </p>
                                {child.desc && (
                                  <p className="text-gray-500 text-xs mt-0.5">
                                    {child.desc}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                aria-label="Search"
              >
                <Search
                  size={18}
                  className="text-white/70 group-hover:text-white transition-colors"
                />
              </button>

              <Link to="/contact" className="hidden md:block">
                <MagneticButton className="!py-2.5 !px-6 !text-xs">
                  Get Started
                </MagneticButton>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X size={20} className="text-white" />
                ) : (
                  <Menu size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[90] bg-[#0A0A0A] pt-24 px-6 overflow-y-auto"
          >
            <div className="space-y-2 pb-32">
              {NAV_ITEMS.map((item, idx) => (
                <div key={idx}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === idx ? null : idx)
                        }
                        className="w-full flex items-center justify-between py-4 text-white text-lg font-semibold border-b border-white/5"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-4 space-y-1">
                              {item.children.map((child, ci) => (
                                <Link
                                  key={ci}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 py-3 text-gray-400 hover:text-white transition-colors"
                                >
                                  <ChevronRight
                                    size={14}
                                    className="text-[#DC2626]"
                                  />
                                  <div>
                                    <span className="block">{child.label}</span>
                                    {child.desc && (
                                      <span className="block text-xs text-gray-600 mt-0.5">
                                        {child.desc}
                                      </span>
                                    )}
                                  </div>
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
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-white text-lg font-semibold border-b border-white/5"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-8 pt-8 border-t border-white/10">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <MagneticButton className="w-full justify-center">
                    Get Started
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
