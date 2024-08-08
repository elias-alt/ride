import React from 'react'
import './navbar.css'

function Navbar(){
  return (
    <div className='nav'>
      <div className='nav-logo'>RIDE</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar