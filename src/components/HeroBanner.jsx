import React from 'react'
import separateSvg from '../assets/svg/635a4402befa0c84d86e9aad_hero-separator.svg'
import heroImg from '../assets/2/635a1b926f2b1e17682dfd55_hero-image.png'
import arrowRight from '../assets/svg/635a1f09a3441088318ca835_arrow-right-white.svg'
const HeroBanner = () => {
  return (
    <div className=" bg-bg-hero bg-[#fff4ec] bg-contain py-[145px]">
    <div className="container mx-auto flex-col md:flex-row md:gap-0 gap-8  flex justify-between ">
        <div className='md:max-w-[48%] gap-4 flex flex-col items-center md:items-start '>
           <p className='text-3xl font-medium text-primary'>Get 80% discount</p>
           <p className=' text-center md:text-start text-6xl lg:text-9xl  font-bold text-secondary'>Fresh Bakery Foods.</p>
      <button 
      className="bg-primary flex justify-center items-center
       hover:bg-secondary transition-all rounded-full text-lg font-medium text-white py-3 px-5">
        Shop Now <img src={arrowRight} alt="" /></button>

        </div>
        <div className='max-w-[34px]max-h-[351px] lg:block hidden'>
         <img src={separateSvg} alt="" className='w-full h-full ' />

        </div>
        <div className='flex w-[100%] justify-center items-center md:max-w-[48%] '>
          <img src={heroImg} className='w-full h-full max-w-[290px] max-h-[290px]' alt="" />
        </div>
    </div>
  </div>
  )
}

export default HeroBanner