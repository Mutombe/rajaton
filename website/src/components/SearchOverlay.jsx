import React from 'react';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { SEARCH_INDEX } from "@/data/constants";

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
    else setQuery("");
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const results =
    query.length > 1
      ? SEARCH_INDEX.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleSelect = (item) => {
    navigate(item.path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-start justify-center pt-[15vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="w-full max-w-2xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Rajaton..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-16 pr-14 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#DC2626]/50 focus:ring-2 focus:ring-[#DC2626]/20 transition-all"
              />
              <button onClick={onClose} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5"
              >
                {results.map((item, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: i * 0.05 } }}
                    className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between group"
                    onClick={() => handleSelect(item)}
                  >
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5 line-clamp-1">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                      <span className="text-xs text-[#DC2626] bg-[#DC2626]/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.section}
                      </span>
                      <ArrowRight size={16} className="text-gray-600 group-hover:text-[#DC2626] transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {query.length > 1 && results.length === 0 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 mt-8">
                No results found for "{query}"
              </motion.p>
            )}

            {!query && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} className="text-center mt-8">
                <p className="text-gray-600 text-sm">Try "logistics", "private label", "careers", or "merchandising"</p>
                <p className="text-gray-700 text-xs mt-2">Press <kbd className="bg-white/10 px-2 py-0.5 rounded text-gray-400">ESC</kbd> to close</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
