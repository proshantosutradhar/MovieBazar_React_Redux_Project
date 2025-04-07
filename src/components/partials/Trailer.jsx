import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Notfound from "./Notfound";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const yttrailer = useSelector((state) => state[category].info.vidoes);
  return (
    <div
      onClick={() => navigate(-1)}
      className="w-screen overflow-y-hidden overflow-x-hidden h-full absolute top-0 left-0 bg-[rgba(0,0,0,.9)] flex items-center justify-center z-50 overflow-hidden"
    >
      <h2
        className="absolute top-9 left-9 text-2xl hover:cursor-pointer text-white font-semibold flex items-center"
        onClick={() => navigate(+1)}
      >
        <i className="ri-close-fill"></i>
      </h2>
 {yttrailer?     <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=${yttrailer?.key}`}
      />: <Notfound/>}

      
    </div>
  );
}

export default Trailer;
