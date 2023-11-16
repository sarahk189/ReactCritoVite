import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuBars = () => {
  return (
    <nav className='nav-menu'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default MenuBars