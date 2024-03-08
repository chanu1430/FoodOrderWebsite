import React from 'react'
import Navbar from "./Navbar"
import MiddleContent from './MiddleContent'
import Footer from './Footer'
import Carousel from './Carousel'
export default function Home() {
  return (
    <div className='container-fluid'>
        <Navbar/>
        <Carousel/>
        <MiddleContent/>
        <Footer/>
    </div>
  )
}
