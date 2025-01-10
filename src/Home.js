import React from "react";
import img1 from "./Assets/Axis_Bank_logo.svg.png";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import img3 from "./Assets/Capgemini_Logo_2COL_RGB.png";
import img4 from "./Assets/Google_2015_logo.svg.webp";
import Banner from "./Banner";
import { useState } from "react";
import { Link } from "react-router-dom";
import JobCards from "./JobCards";
import CommonNavbar from "./CommonNavbar";

function Home() {


  return (
    <div>
      <div className="w-full">
        <Banner />

        <div className="m-10">
          <p className="text-2xl text-[#292E1E] font-bold">Top Companies</p>
          <div className="grid mt-3 grid-cols-4 gap-7">
            <div className="border rounded shadow p-5">
              <div className="flex justify-center">
                <img className="h-14" src={img1} />
              </div>
              <div className="my-5">
                <p className=" text-[#292E1E] font-bold text-xl ">Axis Bank</p>
                <p className="text-sm text-gray-400">Banking Company</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#292E1E] text-white w-full py-1 rounded">
                  More
                </button>
              </div>
            </div>

            <div className="border rounded shadow p-5">
              <div className="flex justify-center">
                <img className="h-14" src={img2} />
              </div>
              <div className="my-5">
                <p className=" text-[#292E1E] font-bold text-xl ">Adobe</p>
                <p className="text-sm text-gray-400">Software Company</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#292E1E] text-white w-full py-1 rounded">
                  More
                </button>
              </div>
            </div>

            <div className="border rounded shadow p-5">
              <div className="flex justify-center">
                <img className="h-14" src={img3} />
              </div>
              <div className="my-5">
                <p className=" text-[#292E1E] font-bold text-xl">Capgemini</p>
                <p className="text-sm text-gray-400">Software Company</p>
              </div>
              <button className="bg-[#292E1E] text-white w-full py-1 rounded">
                More
              </button>
            </div>

            <div className="border rounded shadow p-5">
              <div className="flex justify-center">
                <img className="h-14" src={img4} />
              </div>
              <div className="my-5">
                <p className=" text-[#292E1E] font-bold text-xl ">Google</p>
                <p className="text-sm text-gray-400">Software Company</p>
              </div>
              <button className="bg-[#292E1E] text-white w-full py-1 rounded">
                More
              </button>
            </div>
          </div>
        </div>

        <div className="m-10 flex">
          <div>
            <p className="text-2xl text-[#292E1E] font-bold mb-3">Top Jobs</p>
            <JobCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
