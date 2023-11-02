import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsAndArticlesTitle from '../components/News/NewsAndArticlesTitle'
import OurNewsAndArticles from '../components/News/OurNewsAndArticles'

const News = () => {
  return (
    <>
    <Header />
    <NewsAndArticlesTitle />
    <OurNewsAndArticles />
    <Footer />
    </>
  )
}

export default News