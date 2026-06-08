/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'
import About from './Pages/About'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import PermanentHiring from './Pages/Services/PermanentHiring'
import RecruitmentProcess from './Pages/Services/RecruitmentProcess'
import DigitalHiring from './Pages/Services/DigitalHiring'
import ContractStaffing from './Pages/Services/ContractStaffing'

const routes = {
  '/': Home,
  '/about': About,
  '/blog': Blog,
  '/contact': ContactUs,
  '/privacy': Privacy,
  '/terms': Terms,
  '/services/permanent-hiring': PermanentHiring,
  '/services/recruitment-process-outsourcing': RecruitmentProcess,
  '/services/digital-hiring': DigitalHiring,
  '/services/contract-staffing': ContractStaffing,
}

const getCurrentLocation = () => ({
  path: window.location.pathname,
  hash: window.location.hash,
})

const App = () => {
  const [location, setLocation] = useState(getCurrentLocation)
  const Page = routes[location.path] || Home

  useEffect(() => {
    const handlePopState = () => setLocation(getCurrentLocation())

    const handleLinkClick = (event) => {
      const link = event.target.closest('a[href]')

      if (!link) return

      const url = new URL(link.href)
      const isSameOrigin = url.origin === window.location.origin
      const isAppRoute = isSameOrigin && url.pathname in routes

      if (!isAppRoute) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.hash}`)
      setLocation(getCurrentLocation())
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [location])

  return (
    <>
      <TopNavbar />
      <Navbar />
      <Page />
      <Footer />
    </>
  )
}

export default App
