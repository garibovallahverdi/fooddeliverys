import React from "react";
import cart from '../assets/svg/63e315c688285ee9a1b870b6_cart-icon.svg'
import logo from '../assets/2/6416adcd5aac6526638a89d2_logo.png'
import burger from '../assets/svg/burger-menu-svgrepo-com.svg'
import MenuItems from "./MenuItems";
import ReservationButton from "./ReservationButton";
const Navbar = () => {
  return (
    <div className="flex gap-10 justify-between container mx-auto items-center px-4 lg:px-0 py-4 flex-grow">
      <div className="sm:w-[124px] md:h-[34px] w-[100px]">
        <img src={logo} alt="" className="w-full h-full"/>
      </div>
      <div className="grow hidden lg:flex justify-center">
       <MenuItems/>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div className="w-12 h-12 relative flex justify-center items-center rounded-full border-border border-2">
          <img src={cart} alt="" />
           <span className="absolute w-4 h-4 rounded-full flex justify-center items-center top-0 right-0 text-[10px] font-semibold text-white bg-primary">0</span>
          </div>
           <div className="hidden lg:flex">
            <ReservationButton/>

           </div>
        <div className="w-12 h-12  rounded-full border-2 border-border flex justify-center items-center lg:hidden">
          <img src={burger} alt="" className="text-white object-cover w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
