import Office from '@/app/components/contact_component/office'
import Footer from '@/app/components/Landing-page-component/footer'
import Header from '@/app/components/pages_component/header'
import React from 'react'
import Contact from '../components/contact_component/contact'

const ContactPage = () => {
  return (
    <>
        <Header />
        <Contact />
        <Office />
        <Footer />
    </>
  )
}

export default ContactPage