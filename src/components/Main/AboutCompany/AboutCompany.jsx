import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import img_squigglyLine from '../../../Assets/images/EWlement.svg'
import img_samantha from '../../../Assets/images/Samantha.png'
import Button from '../../generics/Button'
import { Link } from 'react-router-dom'

const AboutCompany = () => {
  return (
    <section className="about-company"> 
            <div className="container">

                <div className="samantha">
                    
                    <div className="sam-pic">
                    <img src={img_samantha} alt="Image of lady walking down hall with tablet" />
                    </div>

                    <div className="samantha-box">
                        
                        <div className="sam-name">
                            <h4>Samantha Brown,</h4>
                            <div className="founder-title">Founder</div>
                        </div>

                        <p >"Lorem ipsum, dolor sit amet consectetur adipisicing elit."</p>
            
                    </div>

                    <div className="squiggly-line">
                    <img src={img_squigglyLine} alt="squiggly line" />
                    </div>

                </div>

                <div className="about-company-right">
                    <div className="section-title">
                      <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
                                                
                        <div className="aboutusinfo1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                        </div>
                        
                        <div className="aboutusinfo2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
                        </div>
                        
                        <div className="learn-more-and-film">
                            <Button type="black" url="/learnmore" name="Learn More " />
                            <div className="film">
                                <Link href="#">
                                    <button className="btn-transparent">     
                                        <i className="fa-sharp fa-solid fa-play"></i>
                                    </button>
                                    <div className="intro-text">Intro Video</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutCompany