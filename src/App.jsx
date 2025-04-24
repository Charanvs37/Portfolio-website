import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Achievements from './Components/Achievements/Achievements'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;