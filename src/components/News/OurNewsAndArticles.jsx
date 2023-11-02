import React from 'react'
import ArticleBox from '../generics/ArticleBox'
import img_march25 from '../../assets/images/25 march.png'
import img_march17 from '../../assets/images/17 march.png'
import img_march13 from '../../assets/images/13 march.png'
import SectionTitle from '../generics/SectionTitle'

const OurNewsAndArticles = () => {
    const articles = [
        {url: "/digitalizeclassroom", img: `${img_march25}`, alt:"woman sitting at table smiling", number:"25", month:"Mar", title:"How To Use Digitalization In The classNameroom"},
        {url: "/chatgpt", img: `${img_march17}`, alt:"chart on website", number:"17", month:"Mar", title:"How to Implement Chat GPT In Your Projects"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"},
        {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"}
      ]
    return (
      <section className="article-news">
              <div className="container">
                  <div className="upper-div-news">
                      <div className="section-title">
                        <SectionTitle description="Our News and Articles" />
                      </div>
                  </div>
  
                  <div className="row">
                      {
                          articles.map((articles, index) => (
                              <ArticleBox key={index} url={articles.url} img={articles.img} alt={articles.alt} number={articles.number} month={articles.month} title={articles.title} />
                          ))
                      }
                  </div>


              </div>
          </section>
    )
  }

export default OurNewsAndArticles