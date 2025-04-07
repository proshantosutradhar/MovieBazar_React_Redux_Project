import React from 'react';
import { Link } from 'react-router-dom';

function Herosection({ data }) {
  const imageUrl = data?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` 
    : data?.profile_path
    ? `https://image.tmdb.org/t/p/original${data.profile_path}`
    : 'https://images.unsplash.com/photo-1725983615817-963c4b2ccb06?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
      className='w-full h-[60vh] flex items-start gap-4 flex-col justify-end p-[4%]'
    >
      <h2 className='text-[2rem] leading-none font-semibold'>{data.name || data.original_name || data.title || data.original_title}</h2>
      <p className='w-[50vw] text-white '>{data.overview.slice(0,122)}.... <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link> </p>
      <p className='text-white '>
      <i className="ri-megaphone-fill text-[#099bf3]"></i> {data?.release_date || 'No Information'}
      <i className="ri-album-fill text-[#099bf3] ml-3"></i> {data?.media_type}
      
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#099bf3] px-2 py-1 rounded'>Watch Trailer</Link>

    </div>
  );
}

export default Herosection;
