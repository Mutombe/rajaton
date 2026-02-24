import React from 'react';
import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation, Footer, CookieBanner, PolicyModal, Cursor, ScrollTop } from "@/components/layout";

const Home = lazy(() => import("@/pages/HomePage"));
const About = lazy(() => import("@/pages/AboutPage"));
const Services = lazy(() => import("@/pages/ServicesPage"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetailPage"));
const Industries = lazy(() => import("@/pages/IndustriesPage"));
const Careers = lazy(() => import("@/pages/CareersPage"));
const Contact = lazy(() => import("@/pages/ContactPage"));
const NotFound = lazy(() => import("@/pages/NotFoundPage"));
const CaseStudies = lazy(() => import("@/pages/CaseStudiesPage"));
const CaseDetail = lazy(() => import("@/pages/CaseStudiesPage").then(m => ({ default: m.CaseStudyDetailPage })));

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="relative w-10 h-10">
        <motion.div className="absolute inset-0 border-2 border-[#DC2626]/20 border-t-[#DC2626] rounded-full"
          animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
      </div>
    </div>
  );
}

function PageWrap({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function App() {
  const [cookies, setCookies] = useState(true);
  const [policy, setPolicy] = useState(null);
  const loc = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [loc.pathname]);

  return (
    <div className="min-h-screen bg-surface text-fg overflow-x-hidden niveau-font">
                        <style jsx>{`
            /* Niveau Grotesk Font Face - Regular */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/NiveauGroteskRegular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Bold */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/Niveau Grotesk Bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .grift-font {
              font-family: "Grift", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .niveau-font {
              font-family: "Niveau Grotesk", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
      <Cursor />
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <Routes location={loc} key={loc.pathname}>
              <Route path="/" element={<PageWrap><Home /></PageWrap>} />
              <Route path="/about" element={<PageWrap><About /></PageWrap>} />
              <Route path="/services" element={<PageWrap><Services /></PageWrap>} />
              <Route path="/services/:serviceId" element={<PageWrap><ServiceDetail /></PageWrap>} />
              <Route path="/industries" element={<PageWrap><Industries /></PageWrap>} />
              <Route path="/case-studies" element={<PageWrap><CaseStudies /></PageWrap>} />
              <Route path="/case-studies/:caseId" element={<PageWrap><CaseDetail /></PageWrap>} />
              <Route path="/careers" element={<PageWrap><Careers /></PageWrap>} />
              <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
              <Route path="*" element={<PageWrap><NotFound /></PageWrap>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer openPolicy={setPolicy} />
      <ScrollTop />
      <AnimatePresence>
        {cookies && <CookieBanner onAccept={() => setCookies(false)} onManage={() => { setPolicy("cookie"); setCookies(false); }} />}
      </AnimatePresence>
      <AnimatePresence>
        {policy && <PolicyModal type={policy} onClose={() => setPolicy(null)} />}
      </AnimatePresence>
    </div>
  );
}
