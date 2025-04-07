import React from 'react'
import NotFound from '../../../public/notfound.gif'


function Notfound() {
  return (
    <div className='w-screen h-screen bg-zinc-900 flex justify-center items-center'>
      <img src={NotFound} alt="" />
    </div>
  )
}

export default Notfound
