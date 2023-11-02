import React from 'react'
import img_paperz from '../../../Assets/images/paperz.svg'
import img_dorfus from '../../../Assets/images/dorfus.svg'
import img_martino from '../../../Assets/images/martino.svg'
import img_square from '../../../Assets/images/square.svg'
import img_gobona from '../../../Assets/images/gobona.svg'

const Partners = () => {
  return (
    <section className="partners">
            <div className="container text-center">
                <div className="rows rows-cols-5 justify-content-evenly">
                    <a className="brands" href="#"><img src={img_paperz} alt="paperz" /></a>
                    <a className="brands" href="#"><img src={img_dorfus} alt="dorfus" /></a>
                    <a className="brands" href="#"><img src={img_martino} alt="martino" /></a>
                    <a className="brands" href="#"><img src={img_square} alt="square" /></a>
                    <a className="brands" href="#"><img src={img_gobona} alt="gobana" /></a>
                </div>
            </div>
        </section>
  )
}

export default Partners