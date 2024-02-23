import Dashboard_Footer from '@/components/static/Dashboard/Footer'
import Dashboard_Header from '@/components/static/Dashboard/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Client_Dashboard_Layout:React.FC = () => {
  return (
    <div className='min-h-screen relative h-full w-full text-black bg-[#F8F8F9]'>
    <div className='h-full z-50 sticky top-0 left-0' >
      <Dashboard_Header/>
    </div>

    <div className='w-full flex justify-center my-2'>

      <Outlet/>
    </div>
    
    
      <Dashboard_Footer/>
  </div>
  )
}

export default Client_Dashboard_Layout