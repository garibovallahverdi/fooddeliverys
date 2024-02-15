import React from 'react'
import category1 from '../assets/1/63de224a371ddd3f8703d5d1_catagories-1.png'
import category2 from '../assets/1/63de226b1693d1be7ce6de78_catagories-2.png'
import category3 from '../assets/1/63de227b1ca2f56d5b07d6e1_catagories-3.png'
import category4 from '../assets/1/63de229f01f036d856ba7b10_catagories-4.png'
const CategoriesHero = () => {
  return (
    <div className='w-full'>
    <div className='container mx-auto flex flex-wrap justify-center gap-14  py-[120px]'>
        <div className='rounded-full cursor-pointer border-2 text-secondary gap-2 border-border hover:border-dashed hover:bg-[#fff5ed] hover:text-primary hover:border-primary transition-all w-[250px] h-[250px] flex flex-col justify-center items-center'>
            <div>
              <img src={category4} alt="" />
            </div>
            <p className='text-2xl  font-semibold'>Switch Roll</p>
        </div>

        <div className='rounded-full border-2 cursor-pointer text-secondary gap-2 border-border hover:border-dashed hover:bg-[#fff5ed] hover:text-primary hover:border-primary transition-all w-[250px] h-[250px] flex flex-col justify-center items-center'>
            <div>
              <img src={category3} alt="" />
            </div>
            <p className='text-2xl  font-semibold'>Cup Cake</p>
        </div>

        <div className='rounded-full border-2 cursor-pointer text-secondary gap-2 border-border hover:border-dashed hover:bg-[#fff5ed] hover:text-primary hover:border-primary transition-all w-[250px] h-[250px] flex flex-col justify-center items-center'>
            <div>
              <img src={category2} alt="" />
            </div>
            <p className='text-2xl  font-semibold'>Pastry</p>
        </div>

        <div className='rounded-full border-2 cursor-pointer text-secondary gap-2 border-border hover:border-dashed hover:bg-[#fff5ed] hover:text-primary hover:border-primary transition-all w-[250px] h-[250px] flex flex-col justify-center items-center'>
            <div>
              <img src={category1} alt="" />
            </div>
            <p className='text-2xl  font-semibold'>Cookies</p>
        </div>
        </div>
  </div>
  )
}

export default CategoriesHero