import React from 'react'
import img_backgroundlinesright from '../../../Assets/images/background-lines-right.svg'
import ServiceBox from './ServiceBox'
import SectionTitle from '../../generics/SectionTitle'
import Button from '../../generics/Button'

const OurServices = () => {

    const services = [
        {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/businessadvice"},
        {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/startupbusiness"},
        {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/financialadvice"},
        {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/sercives/riskmanagement"}
    ]

  return (
    <section className='our-services'>
        <div className="container">

            <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting" />

            <div className="consulting-grid">
                {
                    services.map((services, index) => (
                        <ServiceBox key={index} title={services.title} description={services.description} url={services.url} />
                    ))
                }
            </div>
        
            <div className="center-content">
                <Button className="transparent" url="/services/" name="Browse Services " />
            </div>

            <div className="our-services-squiggly">
                <img src={img_backgroundlinesright}  alt="Squiggly white lines to the right"/>
            </div>
        </div>
    </section>

  )
}

export default OurServices