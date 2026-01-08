import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import { useState } from 'react'

// Layout
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
//import About from './pages/About'
//import Services from './pages/Services'
//import Team from './pages/Team'
//import Careers from './pages/Careers'
//import Blog from './pages/Blog'
//import Contact from './pages/Contact'

// Modals
import PrivacyPolicyModal from './components/PrivatePolicyModal'
import TermsModal from './components/TermsModal'
import CookiesModal from './components/CookiesModal'

// Context for modals
import { ModalProvider } from './hooks/useModal'

function App() {
  const location = useLocation()

  return (
    <ModalProvider>
      <div>
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
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#fff',
            color: '#1a1a1a',
            border: '1px solid #f94449',
          },
          className: 'font-sans',
        }}
        richColors
      />
      
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

          </Routes>
        </AnimatePresence>
      </Layout>

      {/* Global Modals */}
      <PrivacyPolicyModal />
      <TermsModal />
      <CookiesModal />
      </div>
    </ModalProvider>
  )
}

export default App