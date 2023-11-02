import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LetsConnect from '../components/Contact/LetsConnect'
import ContactGrid from '../components/Contact/ContactGrid'
import ContactForm from '../components/Contact/ContactForm'
import Map from '../components/Contact/Map'

const Contact = () => {
  return (
    <>
    <Header />
    <LetsConnect />
    <ContactGrid />
    <ContactForm />
    <Map />
    <Footer />
    </>
  )
}

export default Contact