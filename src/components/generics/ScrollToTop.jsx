import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import { useEffect } from 'react'

const ScrollToTop = () => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => setPosition(window.scrollY))

        return () => window.removeEventListener('scroll', () => {})
    },[])

    const scrollToTop = () => { 
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }
  
    return (

  <button onClick={scrollToTop} className={`scroll-to-top ${position < 100 ? 'hide': ''}`}>
    <i class="fa-regular fa-arrow-up"></i>
  </button>
  )
}

export default ScrollToTop