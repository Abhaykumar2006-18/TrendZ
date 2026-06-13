import React from 'react'
import Banner from '../components/Banner'
import Shirts from '../components/Shirts'
import LatestCollection from '../components/LatestCollection'
import Navbar from '../components/Navbar'
import Trending from './Trending'
import OurPolicy from '../components/OurPolicy'
import Footer from './Footer'
import Collection from './Collection'
import About from './About'


const Home = () => {
  return (
    <div>
      
      <Banner/>
      <LatestCollection/>
      <Trending/>
      <OurPolicy/>
      <About/>
      
      <Footer/>
      
    </div>
  )
}

export default Home