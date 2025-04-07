import React, { useEffect, useState } from "react";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import Loading from "./partials/Loading";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState('all');
  const [duration, setduration] = useState('day')
  const [trending, settrending] = useState('')
  document.title = "Trending | MovieBazar"



  const getData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);

      settrending(data.results);
      

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
   
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen py-5 overflow-y-auto overflow-hidden">
    <div className="flex justify-between items-center px-5">
      <h2
        className="text-2xl hover:cursor-pointer text-zinc-400 font-semibold flex items-center"
        onClick={() => navigate(-1)}
      >
        <i className="ri-arrow-left-line"></i> Trending
      </h2>

      <div className="flex items-center gap-4 w-full max-w-[80%] justify-end">
        <Searchbar />
        <Dropdown title="Category" options={["all", "movie", "tv"]} func={(e)=>setcategory(e.target.value)}/>
        <Dropdown
          title="Sort"
          options={["day", "week"]
            
          }
          func={(e)=>setduration(e.target.value)}
        />
      </div>
    </div>
    <div className="w-full h-full ">
     <Cards data={trending}/>
    </div>
  </div>
  ):<Loading />
}

export default Trending;
