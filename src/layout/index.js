import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <div className="body-inner">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
