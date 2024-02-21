import CTA from '@/components/blocks/home/CTA'
import CardsWeAccept from '@/components/blocks/home/CardsWeAccept'
import Features from '@/components/blocks/home/Features'
import HappyCustomers from '@/components/blocks/home/HappyCustomers'
import Hero from '@/components/blocks/home/Hero'
import Indices from '@/components/blocks/home/Indices'
import Pricing from '@/components/blocks/home/Pricing'
import TradingProducts from '@/components/blocks/home/TradingProducts'
import React from 'react'

const Home:React.FC = () => {
  return (
    <div>
        <Hero/>
        <TradingProducts/>
        <Features/>
        <CTA/>
        <Pricing/>
        <Indices/>
        <HappyCustomers/>
        <CardsWeAccept/>
    </div>
  )
}

export default Home