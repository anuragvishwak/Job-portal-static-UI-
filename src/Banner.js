import React, { useState } from "react";
import CommonNavbar from "./CommonNavbar";
import Login from "./Login";

function Banner() {
  const [openingLoginForm, setLoginForm] = useState(false);

  return (
    <div className="border bg-gradient-to-r from-[#fcefff] to-">
      <div className="my-5 flex justify-between mx-5 md:mx-10 items-center">
        <div className="flex items-center">
          <CommonNavbar />
        </div>
        <button 
        onClick={()=>{setLoginForm(true)}}
        className="flex text-lg font-semibold">Login</button>
      </div>

      {openingLoginForm && <Login setLoginForm = {setLoginForm}/>}

      <div className="flex sm:w-9/12 m-10 md:m-20 items-center justify-between">
        <div className="">
          <p className="font-bold text-[#292E1E] w-auto md:w-7/12 text-4xl md:text-5xl lg:text-7xl">
            Find your perfect dream job with us.
          </p>
          <p className="mt-3 text-sm md:text-xl lg:text-2xl font-semibold text-[#292E1E]">
            Good life begins with a good company. Start explore thousands of
            jobs in one place and find your dream jobs.
          </p>

          <div className="mt-10 flex items-center">
            <input
              placeholder="Find Jobs, Companies, Opportunities..."
              className="border rounded px-2 border-[#B400DD] py-1 md:py-2 w-44 sm:w-60 lg:w-80"
            ></input>
            <button className="bg-[#B400DD] rounded ml-5 text-white px-2 md:px-6 py-1 md:py-2">
              Explore Jobs
            </button>
          </div>

          <div className="flex mt-5 text-[#292E1E] items-center">
            <div className="">
              <p className="font-bold  text-xl sm:text-2xl  text-center">150k+</p>
              <p className="font-semibold text-sm sm:text-base">Jobs Available</p>
            </div>

            <div className="mx-10">
              <p className="font-bold text-xl sm:text-2xl text-center">500k+</p>
              <p className="font-semibold text-sm sm:text-base">Hired People</p>
            </div>

            <div className="">
              <p className="font-bold  text-xl sm:text-2xl  text-center">250k+</p>
              <p className="font-semibold text-sm sm:text-base">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
