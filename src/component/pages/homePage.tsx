import React from 'react'
import { NavBar } from '../nav/navBar'
import { SideNav } from '../nav/sideNav'

export const HomePage = () => {
  return (
    <div className='flex justify-content-start align-items-start' style={{width:"100vw",height : "100vh"}}>
        <NavBar/>
        <SideNav/>
    </div>
  )
}