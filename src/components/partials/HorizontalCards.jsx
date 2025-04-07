import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/No_Image_Available.jpg"

function HorizontalCards({ data }) {
  return (
    <div className="w-[77vw] flex gap-4 p-3 overflow-x-auto">
      {data?.map((elem, i) => (
        <Link to={`/${elem.media_type}/details/${elem.id}`} key={i} className="flex-shrink-0 w-[15vw] p-1 bg-zinc-900">
          <img
            src={
              elem.backdrop_path || elem.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    elem.backdrop_path || elem.profile_path
                  }`
                : noimage
            }
            className="w-full h-[18vh] object-cover rounded-lg p-1"
            alt=""
          />

          <div className="p-1">
            <h2 className="font-semibold leading-none text-xl mt-1 mb-1">
              {elem.name ||
                elem.original_name ||
                elem.title ||
                elem.original_title}
            </h2>
            <p className="">
              {elem?.overview?.slice(0, 50)}....{" "}
              <Link to={`/${elem.media_type}/details/${elem.id}`} className="text-blue-400">more</Link>{" "}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HorizontalCards;
