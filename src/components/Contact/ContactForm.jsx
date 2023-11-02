import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form">

        <div className="container">

            <div className="form-title">
            <h3>Leave us a message for any information.</h3>
            </div>

            <form id="messageForm" method="post">

                <div className="mb-3">
                    <input tabindex="1" id="name" name="name" title="name" placeholder="Name*" />
                </div>
                
                <div className="mb-3">
                    <input tabindex="2" id="email" name="email" title="email" placeholder="Email*" />
                </div>
                
                <div className="mb-8">
                    <input tabindex="3" id="message" name="message" title="message" placeholder="Message*" />
                </div>
                
            </form>

            <a className="btn-yellow btn-send-messgae" href="send-message.html">Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </section>
  )
}

export default ContactForm