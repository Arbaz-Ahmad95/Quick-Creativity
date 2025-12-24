import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import WhyTrustUs from './components/WhyTrustUs'
import Hero from "./components/Hero"
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Team/>
      <WhyTrustUs/>
      <Footer/>
    </div>
  )
}

export default App
