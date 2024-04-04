import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './hero/Hero'
import Services from './services/Services'
import Work from './latestWork/Work'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Services />
      {/* <Work/> */}
    </BrowserRouter>
  )
}

export default App
