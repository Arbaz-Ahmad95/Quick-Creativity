import React from 'react'
import Navbar from './components/Navbar'
import WhyTrustUs from './components/WhyTrustUs'
import Hero from "./components/Hero"
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhyTrustUs/>
      <Footer/>
    </div>
  )
}

export default App
