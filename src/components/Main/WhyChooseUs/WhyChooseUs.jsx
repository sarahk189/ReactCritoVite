import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import img_block from '../../../Assets/images/BG.svg'
import img_twoLadies from '../../../Assets/images/Lady helping other lady.png'
import ReasonBox from './ReasonBox'

const WhyChooseUs = () => {

  const reasons = [
    {icon: "fa-light fa-thumbs-up", title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur."},
    {icon: "fa-light fa-dice-d20", title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur."},
    {icon: "fa-light fa-pen-nib", title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur."},
    {icon: "fa-light fa-head-side-gear", title: "Artificial Intelligence", description: "Lorem, ipsum dolor sit amet consectetur."}
  ]

  return (
    <section className="why-choose-us">
            <div className="container">
                <div className="left-text">
                    <div className="section-title">
                      <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />                    
                    </div>

                    
                        {
                            reasons.map((reason, index) => (
                                <ReasonBox key={index} icon={reason.icon} title={reason.title} description={reason.description} />
                            ))
                        }
                    
                </div>
    
                <div className="right-pictures">
                    <div className="offset-background">
                        <img src={img_block} alt="block element in colour #dad9d3" />
                    </div>
                    <div className="two-ladies-helping">
                        <img src={img_twoLadies} alt="Lady helping another lady at desk with tablet" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default WhyChooseUs