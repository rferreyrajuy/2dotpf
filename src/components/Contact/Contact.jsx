import React from 'react'
import logo2Img from './../../assets/img/logo2.png'
import logoImg from './../../assets/img/logo.png'

function Contact() {
  return (
    <div className='row contact'>
        <img className='contact-img' src={logo2Img} alt="" />
        <h2 className='contact-h1'>CONTACTO</h2>
        <p className='contact-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam nihil fuga ipsa itaque quaerat impedit distinctio autem eveniet inventore!
        </p>
        <img className='contact-img' src={logoImg} alt="" />
        <div class="social">
            <a href="http://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="http://www.twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
            <a href="http://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="http://www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i></a>
        </div>        
    </div>
  )
}

export default Contact
