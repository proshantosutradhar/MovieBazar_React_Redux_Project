import React, { useEffect, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Searchbar from "./partials/Searchbar";
import Herosection from "./partials/Herosection";
import axios from "../utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./partials/Loading";

function Home() {
  document.title = "Home | MovieBazar";

  const [wallpaper, setwallpaper] = useState("");
  const [slide, setslide] = useState("");
  const [category, setcategory] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");

      let randomIndex = Math.floor(Math.random() * data.results.length);
      const randomData = data.results[randomIndex];
      setwallpaper(randomData);
    } catch (err) {
      console.log(err);
    }
  };

  const getSlide = async () => {
    try {
      const endpoint =
        category === "all" ? "/trending/all/day" : `/trending/${category}/day`;

      const { data } = await axios.get(endpoint);

      setslide(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    getSlide();
  }, [category]);

  return wallpaper && slide && category ? (
    <>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-grow p-4 overflow-y-auto">
          <Searchbar />
          <Herosection data={wallpaper} />
          <div className="flex justify-between items-center pr-5">
            <h2 className="text-2xl font-bold p-5 text-zinc-400">Trending</h2>
            <Dropdown
              title={"Filter"}
              func={(e) => setcategory(e.target.value)}
              options={["all", "movie", "tv"]}
            />
          </div>
          <HorizontalCards data={slide} />
        </div>
      </div>
    </>
  ) : 
<Loading />
  
}

export default Home;
