import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../utils/axios'
import noimage from '../../../public/No_Image_Available.jpg'
import { Link } from 'react-router-dom';


function Searchbar() {

    const [query, setQuery] = useState('');
    const [searches, setSearches] = useState('')

       function getData () {
        axios.get(`/search/multi?query=${query}`).then((res)=>(setSearches(res.data.results))).catch((err)=>console.log(err))}
        

    useEffect(
        ()=>(
            getData()
        ),[query]
        

    )
  return (
    <div className='w-full max-w-[30rem] h-[13vh] mx-auto relative'>
      <div className='h-[13vh] flex justify-center items-center'>
      <i className="ri-search-2-line text-2xl mr-2"></i>
      <input className='w-[25vw] p-[.5vw] rounded-full bg-transparent focus:outline-none  text-white'value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search...' type="text" />
      {query && <i onClick={()=>setQuery('')} className="ri-close-fill absolute top-[1.4rem] left-[90%] text-2xl"></i>}
       
      </div>

      {query && <div className='absolute right-[1.5rem] top-[5vw] w-[30vw] mt-2 max-h-[49vh]  h-fit mx-auto bg-[#333334] rounded bg-opacity-90 overflow-x-hidden overflow-y-auto'>

         { 
        searches && searches.map((elem, i) => (
            
           <Link to={`/${elem.media_type || title}/details/${elem.id}`}> <div key={i} className='flex gap-2 p-3 hover:bg-zinc-700'>
                
           
                <img src={elem.backdrop_path || elem.profile_path? `https://image.tmdb.org/t/p/original/${elem.backdrop_path || elem.profile_path}`: noimage} className='w-[10vw] h-[12vh] min-w-28 rounded object-cover object-center overflow-hidden' alt="" />
           <div> 
            <h3 className='text-[1rem] font-semibold pt-2 pl-2'>{elem.name || elem.original_name || elem.title || elem.original_title
            }</h3>
            <p className='text-zinc-400 ml-2'>Release Date: {elem.first_air_date?elem.first_air_date: 'Not Found'}</p>
            </div>

        </div></Link>
        ))
    }

      </div>}
    
    </div>
  )
}

export default Searchbar
