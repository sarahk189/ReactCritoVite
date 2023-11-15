import React from 'react'
import img_backgroundLines from '../../assets/images/background-lines.svg'
import { NavLink } from 'react-router-dom'

const LetsConnect = () => {
  return (
    <section className="lets-connect">

        <div className="section-title">
            
            <div className="container">

                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <h2>Let's Connect</h2>

                <div className="contact-squiggly">
                    <img src={img_backgroundLines} alt="Squiggly lines to the left" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default LetsConnect