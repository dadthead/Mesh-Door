import React from 'react'
import Herosection from '../Components/HomeComponent/HeroSection/Herosection'
import AboutContent from '../Components/HomeComponent/AboutMeshdoor/AboutContent'
import Services from '../Components/HomeComponent/HomeServices/Services'
import Testimonials from '../Components/HomeComponent/Testimonials/Testimonials'
import Contactform from '../Components/HomeComponent/ContactForm/Contactform'

const Home = () => {
  return (
    <div>
        <Herosection/>
        <AboutContent/>
        <Services/>
        <Testimonials/>
        <Contactform/>
    </div>
  )
}

export default Home