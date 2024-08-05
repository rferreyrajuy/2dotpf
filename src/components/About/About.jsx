import React from 'react'
import aboutImg from './../../assets/img/aboutme.png'

function About() {
  return (
    <div className='about'>
        <img src={aboutImg} alt="" />
        <div class="experience text-start">
            <span>PERFIL</span>
            <h1>DISEÑO CREATIVO CON TÉCNICAS MODERNAS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem cum fugiat tempore perferendis aliquid rerum iure molestias mollitia distinctio.</p>
            <div class="box">
                <div class="yearexperience">
                    <p><i class="bi bi-person"></i>Rodolfo J. Ferrerya</p>
                    <p><i class="bi bi-envelope-fill"></i>rferreyra@tecnoaccion.com.ar</p>
                    <p><i class="bi bi-telephone"></i>(+54)3885093432</p>
                </div>
                <div class="yearexperience">
                    <h3>10+</h3>
                    <p>AÑOS DE EXPERIENCIA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
