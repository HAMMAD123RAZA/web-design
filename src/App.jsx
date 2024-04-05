import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './hero/Hero'
import Services from './services/Services'
import Work from './latestWork/Work'
import Page from './latestWork/Page'
import Mw from './MW/Mw'
import Para from './para/Para'
import Trust from './trusted/Trust'
import Footer from './footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Services />
      <Page />
      <Mw/>
      <Para/>
      <Trust/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App