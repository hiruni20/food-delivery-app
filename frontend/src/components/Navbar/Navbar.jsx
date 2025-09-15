import React from 'react'
import './navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo'/>
        <ul className='navbar-menu'>
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
    </div>
  )
}

export default Navbar