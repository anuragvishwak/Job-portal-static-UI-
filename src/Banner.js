import React from "react";
import CommonNavbar from "./CommonNavbar";

function Banner() {
  return (
    <div className="border bg-gradient-to-r from-[#fcefff] to-">

<div className="flex my-5 items-center justify-center w-full">
          <CommonNavbar />
        </div>

      <div className="flex w-9/12 m-20 items-center justify-between">
        <div className="">
          <p className="font-bold text-[#292E1E] w-7/12 text-7xl">
            Find your perfect dream job with us.
          </p>
          <p className="mt-3 text-2xl font-semibold text-[#292E1E]">
            Good life begins with a good company. Start explore thousands of
            jobs in one place and find your dream jobs.
          </p>

          <div className="mt-10 flex items-center">
            <input
              placeholder="Find Jobs, Companies, Opportunities..."
              className="border rounded px-2 border-[#B400DD] py-2 w-80"
            ></input>
            <button className="bg-[#B400DD] rounded ml-5 text-white px-6 py-2">
              Explore Jobs
            </button>
          </div>

          <div className="flex mt-5 text-[#292E1E] items-center">
            <div className="">
              <p className="font-bold text-2xl text-center">150k+</p>
              <p className="font-semibold">Jobs Available</p>
            </div>

            <div className="mx-10">
              <p className="font-bold text-2xl text-center">500k+</p>
              <p className="font-semibold">Hired People</p>
            </div>

            <div className="">
              <p className="font-bold text-2xl text-center">250k+</p>
              <p className="font-semibold">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
