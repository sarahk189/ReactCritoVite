import React, { useState } from 'react'
import img_critoblack from '../../Assets/images/Logo black background.svg'
import img_linesWhiteRight from '../../Assets/images/background-lines-white-right.svg'
import MenuBars from '../Header/MenuBars'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
  <footer>
    {menuOpen ? (<MenuBars />) : (<></>)}
    <div className="container">
        <div className="menu-bars">
            <Link to='/'><img className= "crito-logo" src={img_critoblack} alt="crito logotype" /></Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="menu-bars">
                {menuOpen ? (<i class="fa-regular fa-x"></i>) : (<i className="fa-regular fa-bars"></i>)}
            </button>
        </div>
        <div className="footer-index">
            <div className="row">
                <div className="col-3">
                    <Link to='/'><img className= "crito-logo" src={img_critoblack} alt="crito logotype" /></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="col-1">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div className="col-1">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="col-1">
                    <h3>Resources</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How To - Blog</a>
                    <a href="#">YouTube Playlist</a>
                </div>
                <div className="col-1">
                    <h3>Link</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How To - Blog</a>
                    <a href="#">YouTube Playlist</a>
                </div>

            </div>

            <div className="footer-squiggly">
                <img src={img_linesWhiteRight} alt="Squiggly white lines to the right" />
                </div>
        </div>
    </div>

    <div className="line"></div>
    <div className="container">
        <div className="bottom-footer">
            <div className="trademark">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer