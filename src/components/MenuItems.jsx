import React from 'react'

const MenuItems = () => {
  return (
     <ul className="lg:w-[80%] w-full lg:gap-0 gap-5 flex text-lg flex-col lg:flex-row font-normal justify-between ">
          <li className="transition-all hover:text-primary cursor-pointer">Home</li>
          <li className="transition-all hover:text-primary cursor-pointer">About</li>
          <li className="transition-all hover:text-primary cursor-pointer">Products</li>
          <li className="transition-all hover:text-primary cursor-pointer">Blogs</li>
          <li className="transition-all hover:text-primary cursor-pointer">Pages</li>
          <li className="transition-all hover:text-primary cursor-pointer">Contact</li>
        </ul>
  )
}

export default MenuItems