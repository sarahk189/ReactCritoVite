
import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticles } from '../NewsDetails/ArticleContext';

const Article = () => {
  const { id } = useParams();
  const { articles, article } = useArticles();

  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, published, category, author, imageUrl, content } = article;

  return (
    <section className='article'>
        <div key={id}>
            <h2>{title}</h2>
            <div className='date-author'>
                <p>{published}</p>
                <p>{category}</p>
                <p>{author}</p>
            </div>
            <div className='article-image'>
                <img src={imageUrl} alt={title} />
            </div>
          <div className='content'>
              <div>{content}</div>
          </div>
        </div>
    </section>
  );
};

export default Article;