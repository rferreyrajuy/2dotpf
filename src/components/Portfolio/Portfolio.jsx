import React from 'react'
import p1Img from './../../assets/img/p_1.png'
import p2Img from './../../assets/img/p_2.png'
import p3Img from './../../assets/img/p_3.png'


function Portfolio() {
  return (
    <div className='row portfolio text-start'>
        <div class="portfoliotitle">
            <span className='portfolio-span'>PORTAFOLIO</span>
            <h2>TRABAJOS CREATIVOS</h2>
        </div>
        <div class="works">
            <div class="workitem">
                <h5>Lorem, ipsum.</h5>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={p1Img} alt="" />
            </div>            <div class="workitem">
                <h5>Lorem, ipsum.</h5>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={p2Img} alt="" />
            </div>
            <div class="workitem">
                <h5>Lorem, ipsum.</h5>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={p3Img} alt="" />
            </div>
            <div class="workitem">
                <h5>Lorem, ipsum.</h5>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={p3Img} alt="" />
            </div>
            <div class="workitem">
                <h5>Lorem, ipsum.</h5>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={p2Img} alt="" />
            </div>
            <div class="workitem">
                <h5>Lorem, ipsum.</h5>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                <img src={p3Img} alt="" />
            </div>
        </div>
        <div class="portfolio-selector">
            <ul className='portfolio-selector-ul'>
                <a href="#"><li className='portfolio-selector-ul-li'></li></a>
                <a href="#"><li className='portfolio-selector-ul-li'    ></li></a>
                <a href="#"><li className='portfolio-selector-ul-li'    ></li></a>
                <a href="#"><li className='portfolio-selector-ul-li'    ></li></a>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio
