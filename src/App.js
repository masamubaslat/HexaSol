import React from 'react'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Map from './Components/Map'
import Serveces from './Components/Serveces'
import Solutions from './Components/Solutions'
import Projects from './Components/Projects'
import Booking from './Components/Booking'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
export default function () {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Serveces/>
      <Solutions/>
      <Projects/>
      <Booking/>
      <Footer/>
    </div>
  )
}
