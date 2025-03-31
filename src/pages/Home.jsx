import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Product from './Product'

const Home = () => {
  return (
    <div className='pt-20'>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Product/>
      <OurPolicy/>
    </div>
  )
}

export default Home