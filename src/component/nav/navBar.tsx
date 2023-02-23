import React,{useState,useEffect} from 'react'
import { showSideNav } from '../redux/reducers'
import { useDispatch} from 'react-redux/es/exports'
import { AppDispatch,RootState } from '../redux/store'
import axios from "axios"

export const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [show,setShow] = useState<string>("dontShow")

  const list = async() => {
 const {data} = await axios.get("https://shazam.p.rapidapi.com/shazam-events/list/",
 {
  // params : {artistId: '73406786',limit : "50"},
  headers: {
    'X-RapidAPI-Key': 'c1bf85bb36msh57bbbc5e0de2e8bp163732jsnbf33db268295',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
 })
 console.log(data)
    
  }

  useEffect(() => {
      list()
  },[])

  const toggle = () => {
    setShow((show) => show === "dontShow" ? "show" :"dontShow")
    dispatch(showSideNav(show))
  }
  return (
    <div className='navBar position-fixed w-100 bg-danger' style={{height:"50px"}}>
        <svg onClick={() => toggle()} xmlns="http://www.w3.org/2000/svg" style={{cursor:"pointer"}} width="32" height="32" fill="currentColor" className="text-light mt-2 ms-5 bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </div>
  )
}