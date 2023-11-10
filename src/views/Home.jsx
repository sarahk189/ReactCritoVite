import React from 'react'
import Header from '../components/Header/Header'
import Showcase from '../components/Main/Showcase/Showcase'
import Partners from '../components/Main/Partners/Partners'
import Features from '../components/Main/Features/Features'
import AboutCompany from '../components/Main/AboutCompany/AboutCompany'
import OurServices from '../components/Main/OurServices/OurServices'
import WhyChooseUs from '../components/Main/WhyChooseUs/WhyChooseUs'
import ProjectAndCaseStudies from '../components/Main/ProjectAndCaseStudies/ProjectAndCase'
import MeetOurTeam from '../components/Main/MeetOurTeam/MeetOurTeam'
import Testimonials from '../components/Main/Testimonials/Testimonials'
import ArticleAndNews from '../components/Main/ArticleAndNews/ArticleAndNews'
import NewsAndUpdates from '../components/News/NewsAndUpdates/NewsAndUpdates'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Showcase />
        <Partners />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCaseStudies />
        <MeetOurTeam />
        <Testimonials />
        <ArticleAndNews />
        <NewsAndUpdates />
        <Footer />
    </>
  )
}

export default Home