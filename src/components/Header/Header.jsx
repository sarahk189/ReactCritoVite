import React from 'react'
import img_critoLogo from '../../Assets/images/Logo.svg'
import Button from '../generics/Button'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="index.html"><img className= "crito-logo" src={img_critoLogo} alt="crito logotype" /></a>
            <button className="menu-bars"><i className="fa-regular fa-bars"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i className="fa-light fa-phone-volume"></i> 
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-light fa-envelope-dot"></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-light fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                </div>
                    <div className="main-menu">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                        
                        <Button type="yellow" url="/login" name="Login " />
                    
                    </div>
            </div>
        </div>
    </header>
  )
}

export default Header