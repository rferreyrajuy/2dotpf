import React from 'react'

function Nav() {
  return (
    <div>
      <nav className='navbar cls-nav navbar-expand'>
          <ul className='navbar-nav'>
              <li className='nav-item'><a className='nav-link' href='#'>Inicio</a></li>
          </ul>
          <ul className='navbar-nav'>
              <li className='nav-item'><a className='nav-link' href='#'>Perfil</a></li>
          </ul>
          <ul className='navbar-nav'>
              <li className='nav-item'><a className='nav-link' href='#'>Servicios</a></li>
          </ul>
          <ul className='navbar-nav'>              
              <li className='nav-item'><a className='nav-link' href='#'>Portfolios</a></li>
          </ul>
          <ul className='navbar-nav'>
              <li className='nav-item'><a className='nav-link' href='#'>Contacto</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Nav
