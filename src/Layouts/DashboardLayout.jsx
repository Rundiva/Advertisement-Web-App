import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar'

const DashboardLayout = () => {
  return (
    <div>
    <Sidebar/>
    <Outlet/>    </div>
   
  )
}

export default DashboardLayout