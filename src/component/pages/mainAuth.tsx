import React,{useState} from 'react'
import "../auth/auth.css"
import { Login } from '../auth/login'
import { Register } from '../auth/register'


export const MainAuth = () => {
  const [show,setShow] = useState(false)
  return (
    <main className='position-relative flex justify-centent-center align-items-center mainAuth' style={{width : "100vw",height:"100vh"}}>
      <div className='position-relative justify-content-center align-items-center d-flex gap-3'>
        <button className='border-danger buttons bg-danger mt-5 w-25 text-light p-2' onClick={() => setShow((show) => show === false ? true: false)}>Login</button>
        <button className='border-danger buttons bg-danger mt-5 w-25 text-light p-2' onClick={() => setShow((show) => show === false ? true: false)}>Register</button>
      </div>
      {!show ? <Register/> :<Login/>}
      
      </main>
  )
}