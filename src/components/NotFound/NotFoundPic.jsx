import React from 'react'
import img_notfound from '../../assets/images/404-page-not-found.svg'

const NotFoundPic = () => {
  return (
  <section className='not-found'>
    <div className='container'>
        <div className='center-content'>
        <h1>Page Not Found</h1>
        </div>
        
        <img src={img_notfound} alt="Picture of numbers 404 and man searching for something" />
    </div>
  </section>
    
  )
}

export default NotFoundPic