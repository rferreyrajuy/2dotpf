import React from 'react'
import topicImg from './../../assets/img/topic.png'
import personImg from './../../assets/img/person.png'

function Hero() {
  return (
    <div className='container-fluid hero'>
        <div className="row">
            <div className="col text-start">
                <div className="row d-flex flex-column">
                    <div className="col left">
                        <h6>HOLA YO SOY</h6>
                    </div>
                    <div className="col">
                        <span className='hero-span'>RODOLFO FERREYRA</span>
                    </div>
                </div>
                <img className='left-img' src={topicImg} alt="" />
                <p className='left-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda perferendis magni dolore quaerat aliquid ex, sint dolor? Voluptatem, facere!</p>
                <a className="boton" href="#contacme">CONTACTAME</a>
            </div>
            <div className="col rigth">
                <div className="row d-flex flex-column text-center">
                    <div className="col">
                        <img className='rigth-img' src={personImg}/>
                    </div>
                    <div className="col social">
                        <a href="http://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></a>
                        <a href="http://www.twitter.com" target="_blank"><i className="bi bi-twitter"></i></a>
                        <a href="http://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></a>
                        <a href="http://www.linkedin.com" target="_blank"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Hero
