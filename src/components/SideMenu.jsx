import React from 'react'
import logo from '../assets/svg/635a12836f2b1ed3b42d983b_logo.svg'
import MenuItems from './MenuItems'
import ReservationButton from './ReservationButton'
const SideMenu = () => {
  return (
    <div className='w-full overflow-hidden gap-8  sm:w-[60%] bg-[#ffebd9] md:w-[40%] flex lg:hidden flex-col items-center py-5 h-full top-0 fixed'>
        <div className='w-[122px] h-[34px]'>
            <img src={logo } alt="" className='w-full h-full' />
        </div>
        <div className='w-full px-4'>
            <MenuItems/>
        </div>
        <div className='w-full px-4 align-bottom'>
            <ReservationButton/>
        </div>
    </div>
  )
}

export default SideMenu