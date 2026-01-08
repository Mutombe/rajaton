import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default Layout