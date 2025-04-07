import React, { useEffect, useState } from "react";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";


function Contact() {
  const navigate = useNavigate();
  
  document.title = "Contact Us | MovieBazar"


  return (
    <div className="w-screen h-screen py-5 overflow-y-auto overflow-hidden">
    <div className="flex justify-between items-center px-5">
      <h2
        className="text-2xl hover:cursor-pointer text-zinc-400 font-semibold flex items-center"
        onClick={() => navigate(-1)}
      >
        <i className="ri-arrow-left-line"></i> Contact Us
      </h2>

      <div className="flex items-center gap-4 w-full max-w-[80%] justify-end mr-16">
        <Searchbar />

      </div>
 
    </div>
    <div className="w-full h-full p-9 flex flex-col items-center">
    <form className="space-y-4 w-1/3 ">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            placeholder="Your Subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
    </div>

  </div>
  )
}

export default Contact;
