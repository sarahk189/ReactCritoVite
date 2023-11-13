import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import Button from '../../generics/Button'
import ArticleBox from '../../generics/ArticleBox'
import { useArticles } from '../../NewsDetails/ArticleContext'

const ArticleAndNews = () => {

    const { articles } = useArticles({})
  
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
                        articles.map((article) => (
                            <ArticleBox 
                            key={article.id} 
                            to={`https://win23-assignment.azurewebsites.net/api/articles/${article.id}`} 
                            img={article.imageUrl} 
                            title={article.title} 
                            published={article.published} 
                            />
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