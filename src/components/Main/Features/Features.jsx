import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import Button from '../../generics/Button'
import FeatureBox from './FeatureBox'

const Features = () => {

    const features = [
        {id: "feature1" , url: "/feature/businessadvice", icon: "fa-light fa-handshake", title: "Business Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id: "feature2" , url: "/feature/startup", icon: "fa-light fa-lightbulb-on", title: "Startup Business", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id: "feature3" , url: "/feature/financialadvice", icon: "fa-light fa-chart-mixed-up-circle-dollar", title: "Financial Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {id: "feature4" , url: "/feature/riskmanagement", icon: "fa-light fa-lightbulb-gear", title: "Risk Management", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
    ]

  return (
    <section className="features">

            <div className="container">
                
                <div className="features-grid"> 

                    <div className="section-title">
                        <SectionTitle title="Features" description="Our Accounting is trusted by thousands of companies" />
                        <Button type="yellow" url="/learnmore" name="Learn More " /> 
                    </div>
                
                    {
                        features.map((features) => (
                            <FeatureBox key={features.id} url={features.url} icon={features.icon} title={features.title} description={features.description} />
                        ))
                    }
                    
                </div>
            
            </div>
        
        </section>
  )
}

export default Features