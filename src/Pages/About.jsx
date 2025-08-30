import React from 'react'
import AboutHero from '../Components/AboutComponent/HeroSection/AboutHero'
import Sideimages from '../Components/AboutComponent/SideImagesSections/Sideimages'
import IconSection from '../Components/AboutComponent/IconsSection/IconSection'
const About = () => {
  return (
    <div>
      <AboutHero /> 
      <Sideimages/>
      <IconSection/>  
    </div>
  )
}

export default About