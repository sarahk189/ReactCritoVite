import React from 'react'
import { useArticles } from '../NewsDetails/ArticleContext'

const Article = ({id, img, title, month, day, category, author, content}) => {

  const article = useArticles()
  
  return (
    <section className='article'>
        <div key={id}>
            <h2>{article.title}</h2>
            <div className='date-author'>
                <p>{article.published}</p>
                <p>{category}</p>
                <p>{author}</p>
            </div>
            <div className='article-image'>
                <img src={img} alt={title} />
            </div>
          <div className='content'>
              <div>{content}</div>
          </div>
        </div>
    </section>
  )
}

export default Article