import Cards from '../components/product_component/card'
import Company from '../components/product_component/company'
import Header from '../components/pages_component/header'
import Hero from '../components/product_component/hero'
import Footer from '../components/Landing-page-component/footer'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Company />
        <Footer />
        <Cards />
    </div>
  )
}

export default ProductPage