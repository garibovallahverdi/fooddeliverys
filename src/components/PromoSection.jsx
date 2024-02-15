import React from 'react'
import promo1 from '../assets/svg/63932b79a7272920b3c372e8_promo-icon-1.svg'
import promo2 from '../assets/svg/63932b79059d35050e1f17c6_promo-icon-2.svg'
import promo3 from '../assets/svg/63932b79b2d1c90f38586270_promo-icon-3.svg'
const PromoSection = () => {
  return (
    <div className='bg-primary w-full'>
    <div className="container mx-auto justify-center md:justify-between gap-4 flex lg:flex-nowrap flex-wrap   py-14 ">
      
      
       <div className='flex gap-4 md:flex-nowrap justify-center flex-wrap items-center w-max-[328px]'>
         <div className='border-dashed border-white p-3 border-[1px] rounded-full'>
         <div className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center'>
           <img src={promo1} alt="" className='w-[35px] h-[35px]' />
         </div>
         </div>
         <div className='flex flex-col  text-white gap-2 '>
            <p className='text-[22px] font-bold'>Free Delivery</p>
            <span className='text-[17px] '>Lorem ipsum simply dummy text the printing type setting.</span>
         </div>
       </div>

       <div className='flex gap-4 md:flex-nowrap justify-center flex-wrap items-center w-max-[328px]'>
         <div className='border-dashed border-white p-3 border-[1px] rounded-full'>
         <div className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center'>
           <img src={promo2} alt="" className='w-[35px] h-[35px]' />
         </div>
         </div>
         <div className='flex flex-col  text-white gap-2 '>
            <p className='text-[22px] font-bold'>24/07 Support</p>
            <span className='text-[17px] '>Lorem ipsum simply dummy text the printing type setting.</span>
         </div>
       </div>

       <div className='flex gap-4 md:flex-nowrap justify-center flex-wrap items-center w-max-[328px]'>
         <div className='border-dashed border-white p-3 border-[1px] rounded-full'>
         <div className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center'>
           <img src={promo3} alt="" className='w-[35px] h-[35px]' />
         </div>
         </div>
         <div className='flex flex-col  text-white gap-2 '>
            <p className='text-[22px] font-bold'>Secure Payment</p>
            <span className='text-[17px] '>Lorem ipsum simply dummy text the printing type setting.</span>
         </div>
       </div>




       

      

    </div>
  </div>
  )
}

export default PromoSection