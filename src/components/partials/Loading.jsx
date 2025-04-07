import React from 'react'
import loading from '../../../public/loading.gif'
function Loading() {
  return (
    <div className='w-screen h-screen bg-zinc-900 flex justify-center items-center'>
      <img src={loading} alt="" />
    </div>
  )
}

export default Loading
