import Banner from '@/components/static/Homepage/Banner'
import Footer from '@/components/static/Homepage/Footer'
import Header from '@/components/static/Homepage/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout:React.FC = () => {
  return (
    <div className='h-full w-full'>
      <div className='h-full z-50 sticky top-0 left-0' >
        <Header/>
      </div>
        <Outlet/>
      
        <div className='fixed z-50 bottom-0 max-h-[5vh]  border-t w-full'>
          <Banner/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomeLayout