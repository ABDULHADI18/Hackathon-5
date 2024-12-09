import Free_Trail from '../components/pricing_component/free_trail'
import Plan from '../components/pricing_component/plan'
import Price from '../components/pricing_component/price'
import Price_Faqs from '../components/pricing_component/price_faqs'
import Footer from '@/app/components/Landing-page-component/footer'
import Header from '@/app/components/pages_component/header'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <Header />
        <Price />
        <Plan />
        <Price_Faqs />
        <Free_Trail />
        <Footer />
    </div>
  )
}

export default PricingPage