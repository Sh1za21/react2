import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Car from './components/car'
import Gallery from './components/Gallery'
import About from './components/about'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Car />
      <Gallery />
      <About />
      <Footer />
    </>
  )
}

export default App