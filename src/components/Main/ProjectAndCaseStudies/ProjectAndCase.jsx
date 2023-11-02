import React from 'react'
import img_article1 from '../../../Assets/images/article image 1.png'
import img_article2 from '../../../Assets/images/article image 2.png'
import img_article3 from '../../../Assets/images/article image 3.png'
import img_article4 from '../../../Assets/images/article image 4.png'
import SectionTitle from '../../generics/SectionTitle'
import ProjectBox from './ProjectBox'
import Button from '../../generics/Button'


const ProjectAndCaseStudies = () => {

  const projects = [
    { url: "/growyourbusiness", img:`${img_article1}`, alt:"Mans hands reading a business newspaper", title:"Grow Your Business"},
    { url: "/responsivewebsite", img:`${img_article2}`, alt:"Pink apple watch, tablet, stylus and glasses", title:"Why your client needs a responsive website"},
    { url: "/educate", img:`${img_article3}`, alt:"Desk with office supplies", title:"Educate your employees to get better results"},
    { url: "/businessinsights", img:`${img_article4}`, alt:"Laptop with business intelligence insights", title:"Business Insights in an important piece of your buisness"},
  ]
  
  return (
    <section className="project-case">
            <div className="container">
                <div className="section-title">
                  <SectionTitle title="Project & Case Studies" description="Let's Looks Our Global Projects" />
                </div>
                <div className="project-and-cases">
                      {
                          projects.map((projects, index) => (
                              <ProjectBox key={index} url={projects.url} img={projects.img} alt={projects.alt} title={projects.title} />
                          ))
                      }
                </div>
                <div className="center-content">
                <Button type="black" url="/projects" name="All Recent Projects" />
                </div>
            </div>
        </section>

  )
}

export default ProjectAndCaseStudies