import React, { useState } from "react";
import CommonNavbar from "./CommonNavbar";
import Filter from "./Filter";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import { ExternalLink, MapPinned } from "lucide-react";
import img4 from "./Assets/Capgemini_Logo_2COL_RGB.png";
import img3 from "./Assets/Google_2015_logo.svg.webp";
import DetailedDescription from "./DetailedDescription";

function SearchJobs() {
  const [currentDescription, setcurrentDescription] = useState("adobe");

  return (
    <div className="">
      <div className="flex items-center justify-center py-5">
        <CommonNavbar />
      </div>
      <div className="flex items-center border-b justify-between px-5 py-3">
        <input placeholder="Search Jobs" className="border border-gray-400 px-2 w-64 py-1.5 rounded"></input>
        <div className="flex items-center">
          <Filter />
          <button className="bg-[#B400DD] ml-5 text-white px-4 py-1.5 rounded">
            Explore Companies
          </button>
        </div>
      </div>
      <div className="bg-gray-100 h-full">
        <div className="flex p-5">
          <div className="">
            <div className="p-5 w-96 mb-5 bg-white shadow rounded border">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-8" src={img2} />
                  <div className="ml-3">
                    <p className="font-bold text-lg">Frontend Developer</p>
                    <p className="text-gray-400 text-sm">Adobe</p>
                  </div>
                </div>
                <p className="text-green-500 text-end font-bold">$60000 PA</p>
              </div>

              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>Tokyo Japan</p>
              </div>

              <div className="my-5">
                <div className="font-bold mb-1 flex items-center text-sm">
                  <p>Experienced</p>
                  <p className="ml-3">On Site</p>
                </div>
                <p className="text-justify text-sm">
                  We are looking for a talented Frontend Developer to build
                  user-friendly web interfaces. You'll use HTML, CSS,
                  JavaScript, and frameworks like React to create responsive and
                  visually appealing designs. Collaborate with designers and
                  backend teams to deliver seamless applications.
                </p>
              </div>

              <p className="mb-3 text-gray-400">Posted on: 24, March, 2024</p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setcurrentDescription("adobe");
                  }}
                  className="bg-[#292E1E] rounded border border-[#292E1E] w-full py-1 text-white"
                >
                  View More
                </button>
                <button className="border ml-5 bg-[#B400DD] border-[#B400DD] px-2 py-1 rounded text-white">
                  <div className="flex items-center">
                    Apply
                    <ExternalLink className="ml-2" />
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded w-96 mb-5 bg-white  shadow p-5 border">
              <div className="flex  justify-between">
                <div className="flex items-center">
                  <img className="h-4" src={img3} />
                  <div className="ml-3">
                    <p className="text-lg font-bold">Frontend Developer</p>
                    <p className="text-gray-400">Google Inc</p>
                  </div>
                </div>
                <div className="font-bold text-[#292E1E]">
                  <p className=" text-green-500 text-end">$60000 PA</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>Callifornia USA</p>
              </div>

              <div className="">
                <p className="text-justify text-sm my-5">
                  <div className="flex font-bold items-center text-sm">
                    <p>Fresher</p>
                    <p className="ml-3">On Site</p>
                  </div>
                  We are looking for a talented Frontend Developer to build
                  user-friendly web interfaces. You'll use HTML, CSS,
                  JavaScript, and frameworks like React to create responsive and
                  visually appealing designs. Collaborate with designers and
                  backend teams to deliver seamless applications.
                </p>
              </div>

              <p className="mb-3 text-gray-400">Posted on: 24, March, 2024</p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    setcurrentDescription("google");
                  }}
                  className="bg-[#292E1E] rounded border border-[#292E1E] w-full  py-1 text-white"
                >
                  View More
                </button>
                <button className="border ml-5 bg-[#B400DD] border-[#B400DD] px-2 py-1 rounded text-white">
                  <div className="flex items-center">
                    Apply
                    <ExternalLink className="ml-2" />
                  </div>
                </button>
              </div>
            </div>

            <div className="p-5 bg-white w-96 rounded shadow border">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-8" src={img4} />
                  <div className="">
                    <p className="text-lg font-bold">Backend Developer</p>
                    <p className="text-gray-400">Capgemini</p>
                  </div>
                </div>
                <div>
                  <p className="text-green-500 text-end font-bold">$40000 PA</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>New York USA</p>
              </div>

              <p className="text-justify my-5 text-sm">
                <div className="flex items-center font-bold text-[#292E1E] ">
                  <p>Remote</p>
                  <p className="ml-3">Fresher</p>
                </div>
                We are seeking a skilled Backend Developer to build and maintain
                server-side logic for our applications. You'll work with
                databases, APIs, and frameworks to ensure efficient, secure, and
                scalable solutions. Collaborate with frontend teams to deliver
                seamless integrations.
              </p>

              <p className="mb-3 text-gray-400">Posted on: 24, March, 2024</p>
              <div className=" flex items-center justify-between">
                <button 
                onClick={()=>{
                    setcurrentDescription('capgemini');
                }}
                className="bg-[#292E1E] rounded border border-[#292E1E] w-full py-1 text-white">
                  View More
                </button>
                <button className="border ml-5 text-[#292E1E] hover:bg-[#292E1E] border-[#292E1E] px-2 py-1 rounded hover:text-white">
                  <div className="flex items-center">
                    Apply
                    <ExternalLink className="ml-2" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="ml-5">
            <div>
              <DetailedDescription currentDescription = {currentDescription}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchJobs;
