import React from 'react'
import CustomCarousel from '../components/Carousel'
import CardCarousel from '../components/CardCarousel'
import HowWorks from "../components/HowWorks";

const Home = () => {
  return (
    <div>
      <CustomCarousel/>
      <br />
      <h1 style={{ textAlign: 'center' }}>How Sandhu-Sisters Boutiques works</h1>
      <HowWorks/>
      
      {/* <CardCarousel/> */}
    </div>
  )
}

export default Home