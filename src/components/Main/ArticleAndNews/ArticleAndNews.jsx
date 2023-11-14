import React from 'react'
import SectionTitle from '../../generics/SectionTitle'
import Button from '../../generics/Button'
import ArticleBox from '../../generics/ArticleBox'
import { useArticles } from '../../NewsDetails/ArticleContext'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'

const ArticleAndNews = () => {

    const { articles } = useArticles({})

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
  
    return (
    <section className="article-news">
            <div className="container">
                <div className="upper-div-news">
                    <div className="section-title">
                      <SectionTitle title="Articles and News" description="Get Every Single News Article" />
                    </div>

                    <div className="button-news">
                      <Button type="transparent" url="/news" name="Browse Articles " />
                    </div>
                </div>

                <div className="row">
                    <section className='carousel'>
                        <Carousel
                        responsive={responsive}
                        showDots={true}
                        infinite={true}
                        >
                            {articles.map((article) => (
                            <Link
                              key={article.id}
                              to={`/articles/${article.id}`}
                              className="col-md-4"
                            >
                              <ArticleBox
                                key={article.id}
                                img={article.imageUrl}
                                title={article.title}
                                published={article.published}
                                category={article.category}
                              />
                            </Link>
                            ))}
                        </Carousel>
                    </section>
                </div>
            </div>
        </section>
  )
}

export default ArticleAndNews