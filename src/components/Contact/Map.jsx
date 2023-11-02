import React from 'react'

const Map = () => {

  const IFrameURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069.542053612453!2d18.065371455927306!3d59.33677655604658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e001d880a3%3A0x2c29d3c569e23670!2sNorrmalm%2C%20Stockholm!5e0!3m2!1ssv!2sse!4v1695817498831!5m2!1ssv!2sse'
  return (
      <section className="map">
          <iframe src={IFrameURL} 
          width="600" 
          height="450" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </section>
  )
}

export default Map