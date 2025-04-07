import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[20%] h-[100vh] p-6 border-r-2 overflow-hidden border-zinc-700">
      <div className="flex gap-2 items-center">
        <img className="w-8" src="./public/favicon.svg" alt="" />
        <h1 className="font-bold text-2xl my-2">MovieBazar</h1>
      </div>

      <div>
        <h2 className="mt-5 text-[1.1rem] uppercase font-semibold">
           Latest Content
        </h2>
        <ul className="mt-3 ml-2">
          <li className="flex items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200">
            <i className="ri-fire-fill text-2xl"></i>
            <Link to='/trending'>Trending</Link>
          </li>
          <li className="flex items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200">
            <i className="ri-shining-2-fill text-2xl "></i>
            <Link to='/popular'>Popular</Link>
          </li>
          <li className="flex items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200">
            <i className="ri-movie-2-fill text-2xl "></i>
            <Link to='/movies'>Movies</Link>
          </li>
          <li className="flex items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200">
            <i className="ri-movie-fill text-2xl "></i>
            <Link to='/tvshows'>TV Shows</Link>
          </li>
          <li className="flex items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200 mb-3">
            <i className="ri-team-fill text-2xl "></i>
            <Link to='/people'>People</Link>
          </li>
        </ul>
        <hr />
        <ul>

          <li className="mt-[2vw] mb-2 text-[1.1rem]  uppercase font-semibold">Website Information</li>

          <li className="flex ml-2 items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200">
            <i className="ri-database-fill text-2xl "></i>
            <Link to='/about'>About Us</Link>
          </li>
          <li className="flex ml-2 items-center text-[1.1rem] rounded px-2 text-zinc-400 py-2 gap-1 hover:bg-[#099bf3] hover:text-white duration-200">
            <i className="ri-mail-fill text-2xl "></i>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
