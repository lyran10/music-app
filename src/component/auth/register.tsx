import React from 'react'
import img from "../auth/music.jpg"
import "../auth/auth.css"

export const Register = () => {
  return (
    <div className={`login position-relative justify-content-center align-items-start d-flex`} style={{width : "100vw",height:"100vh"}}>

      <div className='box w-75 d-flex h-75 position-relative justify-content-center align-items-center flex-column'>

        <div className='position-relative d-flex flex-column gap-2 justify-content-center align-items-center mb-5 text-light'>
          <span className='fs-1' >Register</span>
          <span className='fs-6'>Place to find good music</span>
        </div>

        <form className='d-flex w-100 justify-content-center align-items-center position-relative gap-3 flex-column mb-5 text-light' action="">
            <input className='p-2 w-75 opacity-75' type="text" placeholder='Email'/>
            <input className='p-2 w-75 opacity-75' type="text" placeholder='password'/>
        </form>

      </div>
    </div>
  )
}