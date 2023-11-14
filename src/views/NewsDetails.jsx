import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsAndArticlesTitle from '../components/generics/NewsAndArticlesTitle'
import NewsAndUpdates from '../components/Main/NewsAndUpdates/NewsAndUpdates'
import ArticleAndNews from '../components/Main/ArticleAndNews/ArticleAndNews'
import Article from '../components/NewsDetails/Article'
import { useArticles } from '../components/NewsDetails/ArticleContext'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const NewsDetails = () => {
  const { article, setSelectedArticle } = useArticles();
  const { id } = useParams();

  useEffect(() => {
    setSelectedArticle(id);
  }, [id, setSelectedArticle]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header />
    <NewsAndArticlesTitle />
    <Article 
    img={article.imageUrl}
    title={article.title}
    published={article.published}
    category={article.category}
    author={article.author}
    content={article.content}
    />
    <ArticleAndNews />
    <NewsAndUpdates />
    <Footer />
    </>
  )
}

export default NewsDetails