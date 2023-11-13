import React from 'react'
import Button from '../../generics/Button'
import img_newsSquiggly from '../../../assets/images/background-wavy-lines.svg'

const NewsAndUpdates = () => {
  return (
    <section className="news-updates-signup">

            <div className="container">

                <h2>Get News Updates By Signup</h2>

                <div className="email-button">
                    <div className="email-signup">
                        <form className="email-signup">
                            <input type="text" id="email-signup" placeholder="username@domian.com" />
                        </form>
                    </div>
                    <Button type="yellow" url="/subscribe" name="Subscribe " />
                </div>

                <div className="news-squiggly">
                    <img src={img_newsSquiggly} alt="grey wavy lines to the right" />
                </div>
                
            </div>
        </section>
  )
}

export default NewsAndUpdates