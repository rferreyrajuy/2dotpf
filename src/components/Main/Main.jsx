import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Portfolio from '../Portfolio/Portfolio'
import Contribuitor from '../Contribuitor/Contribuitor'
import Contact from '../Contact/Contact'

function Main() {
  return (
    <div className='cls-bg-primary text-center'>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Contribuitor />
        <Contact />
    </div>
  )
}

export default Main
