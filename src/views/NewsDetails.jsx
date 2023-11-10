import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsAndArticlesTitle from '../components/News/NewsAndUpdates/NewsAndArticlesTitle'
import NewsAndUpdates from '../components/News/NewsAndUpdates/NewsAndUpdates'
import Article from '../components/News/NewsDetails/Article'

const Service = () => {
  return (
    <>
    <Header />
    <NewsAndArticlesTitle />
    <Article />
    <NewsAndUpdates />
    <Footer />
    </>
  )
}

export default Service