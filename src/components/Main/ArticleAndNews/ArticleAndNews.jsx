import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import Button from '../../generics/Button'
import img_march25 from '../../../Assets/images/25 march.png'
import img_march17 from '../../../Assets/images/17 march.png'
import img_march13 from '../../../Assets/images/13 march.png'
import ArticleBox from '../../generics/ArticleBox'

const ArticleAndNews = () => {

    const articles = [
      {url: "/digitalizeclassroom", img: `${img_march25}`, alt:"woman sitting at table smiling", number:"25", month:"Mar", title:"How To Use Digitalization In The classNameroom"},
      {url: "/chatgpt", img: `${img_march17}`, alt:"chart on website", number:"17", month:"Mar", title:"How to Implement Chat GPT In Your Projects"},
      {url: "/cssdesign", img: `${img_march13}`, alt:"books on table with iphone", number:"13", month:"Mar", title:"The Guide To Support Modern CSS Design"}
    ]
  return (
    <section className="article-news">
            <div className="container">
                <div className="upper-div-news">
                    <div className="section-title">
                      <SectionTitle title="Articles and News" description="Get Every Single News Article" />
                    </div>

                    <div className="button-news">
                      <Button type="transparent" url="/browsearticles" name="Browse Articles " />
                    </div>
                </div>

                <div className="row">
                    {
                        articles.map((articles, index) => (
                            <ArticleBox key={index} url={articles.url} img={articles.img} alt={articles.alt} number={articles.number} month={articles.month} title={articles.title} />
                        ))
                    }
                </div>

                <div className="dots">
                    <i className="fa-sharp fa-solid fa-circle-small"></i>
                    <i className="fa-duotone fa-circle-small"></i>
                    <i className="fa-duotone fa-circle-small"></i>
                    <i className="fa-duotone fa-circle-small"></i>
                    <i className="fa-duotone fa-circle-small"></i>
                </div>
            </div>
        </section>
  )
}

export default ArticleAndNews