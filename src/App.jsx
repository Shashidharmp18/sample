import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Footer from "./components/Footer/Footer"; // Import Footer


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What we Offer'/>
      <Programs/>
      <About/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
