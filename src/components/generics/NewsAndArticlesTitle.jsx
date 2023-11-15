import React from 'react'
import img_backgroundLines from '../../assets/images/background-lines.svg'
import { NavLink } from 'react-router-dom'

const NewsAndArticlesTitle = () => {
  return (
    <section className="lets-connect">

        <div className="section-title">
            
            <div className="container">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                </nav>
                <h2>News and Articles</h2>

                <div className="contact-squiggly">
                    <img src={img_backgroundLines} alt="Squiggly lines to the left" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsAndArticlesTitle