import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data, title}) {
  return (
    <div className='min-w-[100vw] flex flex-wrap justify-center'>
   
        {data.map((elem, i)=>(
            <Link to={`/${elem.media_type || title
              }/details/${elem.id
              }`} key={i} className='w-[12vw] whitespace-nowrap m-5 '>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh]' src={`https://image.tmdb.org/t/p/original${elem?.poster_path ||elem.backdrop_path || elem?.profile_path }`}
     alt="" />

        <h2 className='text-xl text-ellipsis overflow-hidden text-zinc-500 mt-1 font-semibold'>
        {elem.name || elem.original_name || elem.title || elem.original_title}
        </h2>
        </Link>
        ))}
        

    </div>

  )
}

export default Cards
