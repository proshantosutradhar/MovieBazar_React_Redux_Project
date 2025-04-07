import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Loading from "./partials/Loading";
import HorizontalCards from "./partials/HorizontalCards";
import noimage from "../../public/No_Image_Available.jpg"


function Tvdetails() {
  const { id } = useParams();
  const navigate = useNavigate();
 const {pathname} = useLocation()

  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => dispatch(removetv());
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full relative h-[100vh] p-6 overflow-y-auto overflow-x-hidden"
    >
       
      <nav className="flex gap-6 items-center h-[6vh]">
        <h2
          className="text-2xl hover:cursor-pointer text-white font-semibold flex items-center"
          onClick={() => navigate(-1)}
        >
          <i className="ri-arrow-left-line"></i>
        </h2>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDB
        </a>
      </nav>

      <div className="w-full">
        <div className="w-[80%] flex mx-auto mt-11">
          <div>
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover h-[55vh]"
              src={`https://image.tmdb.org/t/p/original${
                info.detail?.poster_path || info.detail?.backdrop_path
              }`}
              alt=""
            />
 
          </div>
          <div className="ml-10 flex-1">
            <h1 className="text-5xl text-white font-black">
            {info.detail.name || info.detail.original_title|| info.detail.original_name}
            <small className="text-2xl text-zinc-300">({info.detail.first_air_date.split('-')[0]})</small>
            </h1>

            <div className="mt-3 flex gap-3 items-center">
                <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[9vh] h-[9vh]  flex justify-center items-center">
                    {
                        (info.detail.vote_average * 10).toFixed()
                    }{""} <sup>%</sup>
                </span>
                <h3 className="w-[4vw] font-bold leading-5 text-xl mr3">User Score</h3>
                <h3>{info.detail.release_date}</h3>
                <p>{info.detail.genres.map((g)=> g.name).join(', ')}</p>
                
            </div>

            <div className="">
                <h3 className="text-xl italic font-semibold text-zinc-200 mt-2">{info.detail.tagline}</h3>
                <h3 className="text-xl text-zinc-200 mt-2">Overview</h3>
                <p className="mb-5">{info.detail.overview}</p>
                <Link to={`${pathname}/trailer`} className='bg-[#099bf3] px-5 py-2 rounded'><i className="text-xl ri-play-fill mr-1"></i>Play Trailer</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[80%]">
        {
            info.watchproviders && info.watchproviders.flatrate && (
                <div className="flex gap-3 mt-5">
              <h3>Available on platforms:</h3>
              {
                
                info.watchproviders.flatrate.map((w,i) => (
                  <img key={i}
                    className="h-[5vh] object-contain rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
            </div>
            )
           }
{
            info.watchproviders && info.watchproviders.buy && (
                <div className="flex gap-3 mt-5">
              <h3>Available to watch:</h3>
              {
                
                info.watchproviders.buy.map((w,i) => (
                  <img key={i}
                    className="h-[5vh] object-contain rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
            </div>
            )
           }
           {
            info.watchproviders && info.watchproviders.rent && (
                <div className="flex gap-3 mt-5">
              <h3>Available on rent:</h3>
              {
                
                info.watchproviders.rent.map((w,i) => (
                  <img key={i}
                    className=" h-[5vh] object-contain rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt=""
                  />
                ))}
            </div>
            )
           }
        </div>
        <hr className="mt-9 w-[80%] mx-auto"></hr>
        <div className="w-[80%] mx-auto mb-5 ">
            <h3 className="text-3xl font-bold mt-9 mb-3">Seasons</h3>
            <div className="w-[100%] flex overflow-x-auto mb-5">
            {info.detail.seasons && info.detail.seasons.map((e,i)=>(
              <div key={i} className="flex flex-col m-4">
                <img className="h-[40vh] min-w-[20vh] max-w-[11vw] object-cover" src={e.poster_path?`https://image.tmdb.org/t/p/original/${e.poster_path}`: noimage} alt="" />
                <h3 className="text-2xl text-zinc-300 mt-2 font-semibold">{e.name || e.original_name || e.original_title}</h3>
              </div>
            ))}
            </div>
          
        </div>

        <div className="w-[80%] mx-auto mb-5">
            <h3 className="text-3xl font-bold mt-9">Recommendations & Similar</h3>

           <HorizontalCards data={info.recommendations.length > 0? info.recommendations: info.similar}/>
        </div>
      </div>
      <Outlet/>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvdetails;
