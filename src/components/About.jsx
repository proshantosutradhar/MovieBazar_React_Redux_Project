import React, { useEffect, useState } from "react";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";

import Loading from "./partials/Loading";

function About() {
  const navigate = useNavigate();
  
  document.title = "About Us | MovieBazar"


  return (
    <div className="w-screen h-screen py-5 overflow-y-auto overflow-hidden">
    <div className="flex justify-between items-center px-5">
      <h2
        className="text-2xl hover:cursor-pointer text-zinc-400 font-semibold flex items-center"
        onClick={() => navigate(-1)}
      >
        <i className="ri-arrow-left-line"></i> About Us
      </h2>

      <div className="flex items-center gap-4 w-full max-w-[80%] justify-end mr-16">
        <Searchbar />

      </div>
 
    </div>
    <div className="w-full h-full p-9 leading-8">
    <p>Welcome to <strong>Movie Bazar</strong> – your ultimate destination for all things movies and TV shows!</p>
    <p>At Movie Bazar, we are passionate about bringing you the latest and greatest from the world of entertainment. Whether you're a die-hard movie buff, a binge-watching enthusiast, or just looking for something new to watch, we’ve got you covered.</p>

    <h2>Why Choose Movie Bazar?</h2>
    <p>Our mission is simple: to provide you with up-to-date information on the newest movies and TV shows from around the globe. We know how overwhelming it can be to keep track of the ever-expanding world of entertainment, so we make it easy by curating the most relevant and exciting content just for you.</p>

    <h2>What We Offer</h2>
    <ul>
        <li><strong>Latest Releases:</strong> Stay ahead of the curve with updates on the newest movies and TV shows.</li>
        <li><strong>Comprehensive Reviews:</strong> Get insights into plotlines, performances, and production quality.</li>
        <li><strong>Trailers and Teasers:</strong> Watch trailers to decide what’s worth your time.</li>
        <li><strong>Trending Content:</strong> Discover what’s hot and trending in the entertainment world.</li>
        <li><strong>Personalized Recommendations:</strong> Find movies and shows that match your taste and preferences.</li>
    </ul>

    <h2>Our Commitment</h2>
    <p>We are dedicated to delivering accurate, engaging, and comprehensive content that keeps you informed and entertained. Our team of passionate movie lovers and TV show enthusiasts work tirelessly to keep the platform fresh and relevant, so you never miss a thing.</p>

    <p>Join us at Movie Bazar and immerse yourself in the world of cinema and entertainment like never before. Stay connected, stay entertained!</p>

     </div>

  </div>
  )
}

export default About;
