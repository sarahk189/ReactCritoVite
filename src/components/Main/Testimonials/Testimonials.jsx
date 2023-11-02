import React from 'react'
import img_cassandra from '../../../Assets/images/Cassandra.png'
import img_amanda from '../../../Assets/images/Amanda.png'
import img_jack from '../../../Assets/images/Jack.png'
import SectionTitle from '../../generics/SectionTitle'
import TestimonialBox from './TestimonialBox'
import img_stars from '../../../Assets/images/Star.svg'

const Testimonials = () => {

  const testimonials = [
    {img: `${img_cassandra}`, alt: "Cassandra smiling", name: "Cassandra Warren", position: "Business Manager, Dorfus<"},
    {img: `${img_amanda}`, alt: "Amanda smiling", name: "Amanda Tulling", position: "Senior Developer, Square"},
    {img: `${img_jack}`, alt: "Jack smiling", name: "Jack McDogglas", position: "Key Account Manager, Gobona"}
  ]
  return (
    <section className="testimonials">
            
            <div className="container">
                <div className="section-title">
                  <SectionTitle title="Testimonial" description="What Our Clients Say" />
                </div>

                <div className="row">
                  {
                      testimonials.map((testimonials, index) => (
                          <TestimonialBox key={index} img={testimonials.img} alt={testimonials.alt} name={testimonials.name} position={testimonials.position} />
                      ))
                  }
                </div>

                <div className="center-content">
                <a className="btn-black" href="all-reviews.html">All Reviews <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>

        </section>
  )
}

export default Testimonials