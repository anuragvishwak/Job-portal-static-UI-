import React from "react";
import CommonNavbar from "./CommonNavbar";
import img4 from "./Assets/Capgemini_Logo_2COL_RGB.png";
import img3 from "./Assets/Google_2015_logo.svg.webp";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import { FaDotCircle } from "react-icons/fa";

function Notification() {
  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <CommonNavbar />
      </div>

      <div className="bg-gray-100 p-5 min-h-screen h-full">
        <div className="flex w-[350px] shadow font-semibold bg-white p-2 rounded justify-between items-center mb-3">
          <div className="flex  items-center">
            <FaDotCircle className="text-[#B400DD]" />
            <p className="text-[#B400DD] ml-1">Rounds Completed</p>
          </div>
          <span className="text-[#292E1E]">|</span>
          <div className="flex items-center">
            <FaDotCircle className="text-[#292E1E]" />
            <p className="text-[#292E1E] ml-1">Rounds Remaining</p>
          </div>
        </div>

        <div className="bg-white p-5 shadow">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={img2} className="h-10" />
              <div className="ml-5">
                <p className="font-bold text-xl">Frotend Developer</p>
                <p className="text-gray-400">Adobe</p>
              </div>
            </div>
            <div>
              <button className="bg-[#B400DD] text-white px-4 py-1 rounded">
                Details
              </button>
            </div>
          </div>

          <div className="flex mt-5 w-8/12 font-semibold items-center justify-between">
            <p className="mx-2 text-[#B400DD]">Application Submittion</p>

            <p className="mx-2 text-[#B400DD]">Initial Screening</p>

            <p className="mx-2 text-[#B400DD]">Technical Interview</p>

            <p className="mx-2">Code Chalenge</p>

            <p className="mx-2 text-[#292E1E]">Culture Fit Interview</p>

            <p className="mx-2 text-[#292E1E]">Final Interview</p>
          </div>
        </div>


        <div className="bg-white mt-5 p-5 shadow">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={img3} className="h-10" />
              <div className="ml-5">
                <p className="font-bold text-xl">Frotend Developer</p>
                <p className="text-gray-400">Google Inc</p>
              </div>
            </div>
            <div>
              <button className="bg-[#B400DD] text-white px-4 py-1 rounded">
                Details
              </button>
            </div>
          </div>

          <div className="flex mt-5 w-8/12 font-semibold items-center justify-between">
            <p className="mx-2 text-[#B400DD]">Application Submittion</p>

            <p className="mx-2 text-[#B400DD]">Initial Screening</p>

            <p className="mx-2 text-[#B400DD]">Technical Interview</p>

            <p className="mx-2">Code Chalenge</p>

            <p className="mx-2 text-[#292E1E]">Culture Fit Interview</p>

            <p className="mx-2 text-[#292E1E]">Final Interview</p>
          </div>
        </div>

        <div className="bg-white mt-5 p-5 shadow">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={img4} className="h-10" />
              <div className="ml-5">
                <p className="font-bold text-xl">Backend Developer</p>
                <p className="text-gray-400">Capgemini</p>
              </div>
            </div>
            <div>
              <button className="bg-[#B400DD] text-white px-4 py-1 rounded">
                Details
              </button>
            </div>
          </div>

          <div className="flex mt-5 w-8/12 font-semibold items-center justify-between">
            <p className="mx-2 text-[#B400DD]">Application Submittion</p>

            <p className="mx-2 text-[#B400DD]">Initial Screening</p>

            <p className="mx-2 text-[#B400DD]">Technical Interview</p>

            <p className="mx-2">Code Chalenge</p>

            <p className="mx-2 text-[#292E1E]">Culture Fit Interview</p>

            <p className="mx-2 text-[#292E1E]">Final Interview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
