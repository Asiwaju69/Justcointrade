import Footer from '@/components/static/Homepage/Footer'
import Header from '@/components/static/Homepage/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout:React.FC = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default HomeLayout