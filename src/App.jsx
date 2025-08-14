import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'

import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
      <div>
        <Header />
        
        <Routes>
          
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/services' element={< Services />} />
          <Route path='/testimonials' element={< Testimonials />} />
          <Route path='/contact' element={< Contact />} />
        </Routes>

        <Footer/>
      </div>

    </>
  )
}

export default App
