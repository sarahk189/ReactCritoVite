import React from 'react'
import img_man from '../../../Assets/images/Image.svg'
import img_backgroundlines from '../../../Assets/images/background-lines.svg'
import Button from '../../generics/Button'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">

            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button type="yellow" url="consulting.html" name="Get Consulting" />
                <Button type="transparent" url="services.html" name="Learn More " />
            </div>
            
            <img src={img_man} alt="Image of a man in a suit with a tablet" />
        
            <div className="showcase-squiggly">
                <img src={img_backgroundlines} alt="Squiggly lines to the left" />
            </div>
        </div>
    </section>
  )
}

export default Showcase