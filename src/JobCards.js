import React from "react";
import img4 from "./Assets/Capgemini_Logo_2COL_RGB.png";
import img3 from "./Assets/Google_2015_logo.svg.webp";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import { ExternalLink, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";

function JobCards() {
  const navigation = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="rounded  shadow p-5 border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-6 lg:h-8" src={img3} />
            <div className="ml-3 lg:ml-5">
              <p className="text-xl font-bold">Frontend Developer</p>
              <p className="text-gray-400">Google Inc</p>
            </div>
          </div>
          <div className="font-bold hidden sm:block text-[#292E1E]">
            <p className="lg:text-lg text-green-500 text-end">$60000 PA</p>

            <div className="flex items-center text-sm">
              <p>Fresher</p>
              <p className="ml-3">On Site</p>
            </div>
          </div>
        </div>
        <div className="flex mt-3 items-center">
          <MapPinned size={20} className="text-[#292E1E] mr-2" />
          <p>Callifornia USA</p>
        </div>

        <div className="font-bold flex mt-5 items-center justify-between  text-[#292E1E]">
          <p className="lg:text-lg text-green-500 text-end">$60000 PA</p>

          <p>Fresher</p>
          <p className="">On Site</p>
        </div>
        <div className="">
          <p className="text-justify text-sm my-5 sm:my-10">
            We are looking for a talented Frontend Developer to build
            user-friendly web interfaces. You'll use HTML, CSS, JavaScript, and
            frameworks like React to create responsive and visually appealing
            designs. Collaborate with designers and backend teams to deliver
            seamless applications.
          </p>
        </div>

        <p className="mb-3 text-gray-400">Posted on: 24, March, 2024</p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              navigation("/SearchJobs");
            }}
            className="bg-[#292E1E] rounded border border-[#292E1E] w-full py-1 text-white"
          >
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

      <div className="p-5 rounded shadow border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-6 lg:h-8" src={img4} />
            <div className="ml-3 lg:ml-5">
              <p className="text-xl font-bold">Backend Developer</p>
              <p className="text-gray-400">Capgemini</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-green-500 text-end font-bold lg:text-lg">
              $40000 PA
            </p>
            <div className="flex items-center font-bold text-[#292E1E] ">
              <p>Remote</p>
              <p className="ml-3">Fresher</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <MapPinned size={20} className="text-[#292E1E] mr-2" />
          <p>New York USA</p>
        </div>

        <div className="font-bold mt-5 flex items-center justify-between  text-[#292E1E]">
          <p className="lg:text-lg text-green-500 text-end">$60000 PA</p>

          <p>Fresher</p>
          <p className="">On Site</p>
        </div>
        <p className="text-justify my-5 sm:my-10 text-sm">
          We are seeking a skilled Backend Developer to build and maintain
          server-side logic for our applications. You'll work with databases,
          APIs, and frameworks to ensure efficient, secure, and scalable
          solutions. Collaborate with frontend teams to deliver seamless
          integrations.
        </p>

        <p className="mb-3 text-gray-400">Posted on: 24, March, 2024</p>
        <div className=" flex items-center justify-between">
          <button
            onClick={() => {
              navigation("/SearchJobs");
            }}
            className="bg-[#292E1E] rounded border border-[#292E1E] w-full py-1 text-white"
          >
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

      <div className="p-5 shadow rounded border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-6 lg:h-8" src={img2} />
            <div className="ml-3 lg:ml-5">
              <p className="text-xl font-bold">Frontend Developer</p>
              <p className="text-gray-400">Adobe</p>
            </div>
          </div>

          <div className="font-bold sm:block hidden text-[#292E1E] justify-between">
            <p className="text-green-500 text-end lg:text-lg">$60000 PA</p>

            <div className="flex text-sm lg:text-base items-center">
              <p>Experienced</p>
              <p className="ml-3">On Site</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <MapPinned size={20} className="text-[#292E1E] mr-2" />
          <p>Tokyo Japan</p>
        </div>

        <div className="font-bold mt-5 flex items-center justify-between  text-[#292E1E]">
          <p className="lg:text-lg text-green-500 text-end">$60000 PA</p>

          <p>Fresher</p>
          <p className="">On Site</p>
        </div>
        <div className="my-5 sm:my-10">
          <p className="text-justify text-sm">
            We are looking for a talented Frontend Developer to build
            user-friendly web interfaces. You'll use HTML, CSS, JavaScript, and
            frameworks like React to create responsive and visually appealing
            designs. Collaborate with designers and backend teams to deliver
            seamless applications.
          </p>
        </div>

        <p className="mb-3 text-gray-400">Posted on: 24, March, 2024</p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              navigation("/SearchJobs");
            }}
            className="bg-[#292E1E] rounded border border-[#292E1E] w-full py-1 text-white"
          >
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
  );
}

export default JobCards;
