import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Products from './components/Products'

const App = () => {
  return ( <>
    <Navbar />
    <div className='max-w-7xl mx-auto pt-20 px-6'> <Hero /> </div> 
    <Features />
    <Workflow />
    <Products/>
    <Pricing />
    <Testimonial />
    <Footer/>
  </>
    
  )
}

export default App