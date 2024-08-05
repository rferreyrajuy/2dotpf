import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import IconsNav from '../IconsNav/IconsNav'

function Header() {
  return (
    <div className='row pt-1 pb-1 text-white text-center cls-bg-primary'>
        <div className="col-md-4 col-sm-12">
            <Logo />
        </div>
        <div className="col-md-4 col-sm-12">
            <Nav/>
        </div>
        <div className="col-md-4 col-sm-12">
            <IconsNav/>
        </div>
    </div>
  )
}

export default Header
