import React from 'react'
import "../nav/nav.css"
import { menuListSvg } from '../utils/data'
import { useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux/es/exports'
import { RootState } from '../redux/store'

export const SideNav = () => {
  const selector : TypedUseSelectorHook<RootState> = useSelector
  const show = selector(state => state.navData.show)

  return (
    <div className={`${show} position-fixed sideNav d-flex justify-content-center align-items-center h-100 bg-danger`}>
      <ul className='d-flex flex-column gap-5 justify-content-center w-100'>
      {menuListSvg.map((data,index) => {
        return( 
              <li key={index} className='p-2 w-100 d-flex gap-3'>
                 {data.svg}
                  {data.header}
              </li>
        )
      })}
      </ul>
      </div>
  )
}