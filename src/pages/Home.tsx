import CTA from '@/components/blocks/home/CTA'
import Features from '@/components/blocks/home/Features'
import Hero from '@/components/blocks/home/Hero'
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
    </div>
  )
}

export default Home