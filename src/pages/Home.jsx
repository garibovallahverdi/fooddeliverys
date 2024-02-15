import React from 'react'

import HeroBanner from '../components/HeroBanner'
import CategoriesHero from '../components/CategoriesHero'
import PromoSection from '../components/PromoSection'
const Home = () => {
  return (
    <div className='w-full h-[1500px] '> 
   <HeroBanner/>
   <CategoriesHero/>
  <PromoSection/>

  
    
    </div>
  )
}

export default Home