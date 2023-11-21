import React from 'react'
import Sidebar from './Sidebar'
import Hamber from './Hamber'
const Sideham = ({children}) => {
  return (
    <div className=' shadow-box absolute border border-red w-full mt-10'>
      <div className='flex justify-between'>
      <Sidebar />
      {children}
      <Hamber />
      </div>
    </div>
  )
}

export default Sideham