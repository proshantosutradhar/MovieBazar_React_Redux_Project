import React, { useEffect, useState } from "react";
import Searchbar from "./partials/Searchbar";
import { useNavigate } from "react-router-dom";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import Loading from "./partials/Loading";

function people() {
  const navigate = useNavigate();
  const [category, setcategory] = useState('popular');
  const [people, setpeople] = useState('')
  document.title = "People | MovieBazar"



  const getData = async () => {
    try {
      const { data } = await axios.get(`/person/${category}`);

      setpeople(data.results);
      
      

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
   
  }, [category]);

  return people ? (
    <div className="w-screen h-screen py-5 overflow-y-auto overflow-hidden">
    <div className="flex justify-between items-center px-5">
      <h2
        className="text-2xl hover:cursor-pointer text-zinc-400 font-semibold flex items-center"
        onClick={() => navigate(-1)}
      >
        <i className="ri-arrow-left-line"></i> People
      </h2>

      <div className="flex items-center gap-4 w-full max-w-[80%] justify-end">
        <Searchbar />

      </div>
    </div>
    <div className="w-full h-full ">
     <Cards data={people} title={'person'}/>
    </div>
  </div>
  ):<Loading />
}

export default people;
