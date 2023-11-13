import React from 'react';
import SectionTitle from '../generics/SectionTitle';
import { useArticles } from '../NewsDetails/ArticleContext'
import ArticleBox from '../generics/ArticleBox';
import { Link } from 'react-router-dom';

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
                author={article.author}
                content={article.content}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNewsAndArticles;