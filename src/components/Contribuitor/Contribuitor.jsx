import React from 'react'
import aboutmeImg from './../../assets/img/contribuidors.png'

function Contribuitor() {
  return (
    <div className='Contribuitors'>
        <h1 className='contribuitor-h1'>CONTRIBUIDORES</h1>
        <p className='contribuitor-p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempore officiis debitis non recusandae.
        </p>
        <img className='contribuitor-img' src={aboutmeImg} alt="" />
    </div>
  )
}

export default Contribuitor
