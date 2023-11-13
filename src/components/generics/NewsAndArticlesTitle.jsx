import React from 'react'
import img_backgroundLines from '../../assets/images/background-lines.svg'

const NewsAndArticlesTitle = () => {
  return (
    <section className="lets-connect">

        <div className="section-title">
            
            <div className="container">

                <p>
                    <a href="/">Home</a>
                    <a className= "active" href="/contact">News</a>
                </p>
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