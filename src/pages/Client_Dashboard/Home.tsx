import CoinPortfolio from '@/components/blocks/dashboard/CoinPortfolio'
import CryptoCoinPrice from '@/components/blocks/dashboard/CryptoCoinPrice'
import React from 'react'

const Client_Home:React.FC = () => {
  return (
    <div className='py-5 w-[80%] max-xl:w-[85%] max-lg:w-[95%] '>
        <CoinPortfolio/>
        <CryptoCoinPrice/>
    </div>
  )
}

export default Client_Home