import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        {/* <SideMenu/> */}
        <Outlet/>
    </div>
  )
}

export default Layout