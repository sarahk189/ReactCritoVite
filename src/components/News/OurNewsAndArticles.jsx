import React from 'react';
import SectionTitle from '../generics/SectionTitle';
import { useArticles } from '../News/NewsDetails/ArticleContext';
import ArticleBox from './News/ArticleBox';

const OurNewsAndArticles = () => {
  const { articles } = useArticles({});
  
  return (
    <section className="article-page-news">
      <div className="container">
        <div className="upper-div-news">
          <div className="section-title">
            <SectionTitle description="Our News and Articles" />
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
                  category={article.category} 
                  author={article.author} 
                  content={article.content} />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default OurNewsAndArticles;