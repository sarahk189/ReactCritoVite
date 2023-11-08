import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsAndArticlesTitle from '../components/News/NewsAndArticlesTitle'
import OurNewsAndArticles from '../components/News/OurNewsAndArticles'
import NewsAndUpdates from '../components/Main/NewsAndUpdates/NewsAndUpdates'

const News = () => {
  return (
    <>
    <Header />
    <NewsAndArticlesTitle />
    <OurNewsAndArticles />
    <NewsAndUpdates />
    <Footer />
    </>
  )
}

export default News