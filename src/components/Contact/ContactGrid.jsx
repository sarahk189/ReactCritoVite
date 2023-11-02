import React from 'react'

const ContactGrid = () => {
  return (
    <section className="contact-grid">

        <div className="container">

            <div className="row">

                <div className="col">
                    <a href="#">
                        <div className="circle"><i className="fa-solid fa-circle"></i></div>
                        <div className="icon1"><i className="fa-solid fa-location-dot"></i></div>
                        <div>
                            <h3>Visit us</h3>
                            <p>Sveavägen 31</p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="#">
                        <div className="circle"><i className="fa-solid fa-circle"></i></div>
                        <div className="icon2"><i className="fa-solid fa-phone"></i></div>
                        <div>
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50</p>
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="#">
                        <div className="circle"><i className="fa-solid fa-circle"></i></div>
                        <div className="icon3"><i className="fa-solid fa-envelope"></i></div>
                        <div>
                            <h3>Email us</h3>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactGrid