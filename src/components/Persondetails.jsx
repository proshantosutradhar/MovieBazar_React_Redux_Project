import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./partials/Loading";
import HorizontalCards from "./partials/HorizontalCards";

function PersonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => dispatch(removeperson());
  }, [id]);
  return info ? (
    <div className="w-full relative h-[100vh] p-6 overflow-y-auto">
      <nav className="flex gap-6 items-center h-[6vh]">
        <h2
          className="text-2xl hover:cursor-pointer text-white font-semibold flex items-center"
          onClick={() => navigate(-1)}
        >
          <i className="ri-arrow-left-line"></i>
        </h2>
      </nav>

      <div className="w-full">
        <div className="w-[80%] flex mx-auto mt-11 ">
          {/* Left side */}

          <div className="w-[20%]">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover h-[40vh]"
              src={`https://image.tmdb.org/t/p/original${info.detail.profile_path}`}
              alt=""
            />
            <div className="flex gap-5 p-4 text-2xl">
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.x.com/${info.externalid.twitter_id}/`}
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
            </div>

            <div>
              <h2 className="text-xl text-zinc-400 font-semibold mb-2">
                Personal Info
              </h2>
              <hr className="bg-zinc-300 w-[8rem] mb-2" />
              <h3 className="text-zinc-400 text-lg font-semibold">Known for</h3>
              <p className="text-zinc-400 font-semibold">
                {info.detail.known_for_department}
              </p>

              <h3 className="text-zinc-400 mt-2 text-lg font-semibold">Gender</h3>
              <p className="text-zinc-400 font-semibold">
                {info.detail.gender == 2? 'Male': 'Female'}
              </p>

              <h3 className="text-zinc-400 mt-2 text-lg font-semibold">Birthday</h3>
              <p className="text-zinc-400 font-semibold">
                {info.detail.birthday}
              </p>

              <h3 className="text-zinc-400 mt-2 text-lg font-semibold">Place of Birth</h3>
              <p className="text-zinc-400 font-semibold">
                {info.detail.place_of_birth}
              </p>

              <h3 className="text-zinc-400 mt-2 text-lg font-semibold">Also Known as</h3>
              <p className="text-zinc-400 font-semibold">
                {info.detail.also_known_as.join(',')}
              </p>

            </div>
          </div>
          {/* Right side */}
          <div className="flex-1 overflow-x-hidden ml-9">
            <h1 className="text-5xl font-black">{info.detail.name}</h1>
            <h3 className="text-zinc-300 text-xl font-semibold mt-6 mb-3">Biography</h3>
            <p className="text-zinc-200">{info.detail.biography}</p>
            <h3 className="text-zinc-300 text-xl font-semibold mt-6 mb-3">Acted In</h3>
           <div >
           <HorizontalCards data={info.combinedCredits.cast}/>
           </div>
          </div>
        </div>
      </div>
      
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;
