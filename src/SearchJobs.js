import React, { useState } from "react";
import CommonNavbar from "./CommonNavbar";
import Filter from "./Filter";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import { ExternalLink, MapPinned } from "lucide-react";
import img4 from "./Assets/Capgemini_Logo_2COL_RGB.png";
import img3 from "./Assets/Google_2015_logo.svg.webp";
import DetailedDescription from "./DetailedDescription";
import {
  Bookmark,
  BriefcaseBusiness,
  ClipboardCheck,
  Clock,
  GraduationCap,
  UsersRound,
} from "lucide-react";

function SearchJobs() {
  const [currentDescription, setcurrentDescription] = useState("adobe");

  return (
    <div className="">
      <div className="flex items-center p-5">
        <CommonNavbar />
      </div>
      <div className="flex items-center border-b justify-between px-5 py-3">
        <input
          placeholder="Search Jobs"
          className="border border-gray-400 px-2 w-48 sm:w-64 py-1.5 rounded"
        ></input>
        <div className="flex items-center">
          <Filter />
          <button className="bg-[#B400DD] ml-3 sm:ml-5 text-white px-4 py-1.5 rounded">
            Explore
          </button>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen h-full">
        <div className="flex p-5">
          <div className="w-full">
            <div className="p-5  mb-5 bg-white shadow rounded border">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-8" src={img2} />
                  <div className="ml-3">
                    <p className="font-bold text-lg">Frontend Developer</p>
                    <p className="text-gray-400 text-sm">Adobe</p>
                  </div>
                </div>
                <p className="text-green-500 hidden lg-block text-end font-bold">
                  $60000 PA
                </p>
              </div>

              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>Tokyo Japan</p>
              </div>

              <div className="hidden md:block my-5">
                <div className="font-bold justify-between  mb-2 xl:mb-1 flex items-center text-sm">
                  <p>Experienced</p>
                  <p className="ml-3">On Site</p>
                  <p className="text-green-500 lg:hidden text-end font-bold">
                    $60000 PA
                  </p>
                </div>

                <p className="text-justify hidden md:block text-sm">
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

            <div
              className={`p-5 mb-5 md:hidden bg-white ${
                currentDescription === "adobe" ? "block" : "hidden"
              } shadow rounded  border`}
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-10 sm:h-16 md:h-20" src={img2} />
                  <div className="ml-3">  
                    <p className="text-2xl md:text-3xl font-bold">
                      Frontend Developer
                    </p>
                    <p className="text-gray-400">Adobe</p>
                    <div className="flex text-gray-400 items-center">
                      <MapPinned size={20} className=" mr-2" />
                      <p>Tokyo Japan</p>
                    </div>
                  </div>
                </div>

                <div className="font-bold hidden md:block text-[#292E1E] justify-between">
                  <p className="text-green-500 text-end text-2xl">$60000 PA</p>

                  <div className="flex text-[#292E1E] items-center">
                    <p>Experienced</p>
                    <p className="ml-3">On Site</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-7 my-3 sm:my-0 items-center">
                <div className="flex items-center">
                  <Clock size={30} className="text-[#B400DD]" />
                  <div className="ml-2">
                    <p className="font-bold text-[#292E1E]">Job Type</p>
                    <p className="text-gray-400">Full Time</p>
                  </div>
                </div>

                <div className="flex sm:mx-10 m items-center">
                  <GraduationCap size={30} className="text-[#B400DD]" />
                  <div className="ml-2">
                    <p className="font-bold text-[#292E1E]">Experience</p>
                    <p className="text-gray-400">4+ Years</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <UsersRound size={30} className="text-[#B400DD]" />
                  <div className="ml-2">
                    <p className="font-bold text-[#292E1E]">Team Size</p>
                    <p className="text-gray-400">200-400 People</p>
                  </div>
                </div>
              </div>
              <hr className="" />

              <div className="font-bold text-lg mt-3 flex items-center text-[#292E1E] justify-between">
                <p>Experienced</p>
                <p className="ml-3">On Site</p>
                <p className="text-green-500">$60000 PA</p>
              </div>

              <div className="my-5 md:my-10">
                <div className="flex  mb-2 items-center">
                  <BriefcaseBusiness className="text-[#B400DD]" />
                  <p className="font-bold ml-2 text-[#292E1E] text-xl">
                    Job Description
                  </p>
                </div>
                <p className="text-justify text-gray-500">
                  We are looking for a talented and passionate Frontend
                  Developer to join our team and help build innovative,
                  user-friendly web interfaces. In this role, you will be
                  responsible for translating design wireframes into
                  high-quality code and creating responsive, visually appealing,
                  and accessible web applications. As a key member of the
                  development team, you will work closely with designers,
                  backend developers, and product managers to deliver seamless
                  user experiences. Your expertise in HTML, CSS, JavaScript, and
                  frameworks like React will be essential in crafting intuitive
                  designs that engage users and meet business goals.
                </p>
              </div>

              <div>
                <div className="flex mb-2 items-center">
                  <ClipboardCheck className="text-[#B400DD]" />
                  <p className="font-bold ml-2 text-[#292E1E] text-xl">
                    Requirements
                  </p>
                </div>
                <div className="text-gray-500">
                  <li>
                    Proficiency in HTML, CSS, and JavaScript with a strong
                    understanding of ES6+ features.
                  </li>
                  <li>
                    Hands-on experience with React.js or similar frameworks like
                    Vue.js or Angular.
                  </li>
                  <li>
                    Familiarity with responsive design principles and frameworks
                    like Tailwind CSS or Bootstrap.
                  </li>
                  <li>
                    Knowledge of version control systems like Git for
                    collaborative development.
                  </li>
                  <li>
                    Experience with RESTful APIs and handling asynchronous
                    requests.
                  </li>
                  <li>
                    Understanding of cross-browser compatibility issues and how
                    to solve them.
                  </li>
                  <li>
                    Strong problem-solving skills and a collaborative mindset.
                  </li>
                </div>

                <div className="my-10">
                  <div className="flex mb-2 items-center">
                    <ClipboardCheck className="text-[#B400DD]" />
                    <p className="font-bold ml-2 text-[#292E1E] text-xl">
                      Benefits
                    </p>
                  </div>
                  <div className="text-gray-500">
                    <li>
                      Proficiency in HTML, CSS, and JavaScript with a strong
                      understanding of ES6+ features.
                    </li>
                    <li>
                      Hands-on experience with React.js or similar frameworks
                      like Vue.js or Angular.
                    </li>
                    <li>
                      Familiarity with responsive design principles and
                      frameworks like Tailwind CSS or Bootstrap.
                    </li>
                    <li>
                      Knowledge of version control systems like Git for
                      collaborative development.
                    </li>
                    <li>
                      Experience with RESTful APIs and handling asynchronous
                      requests.
                    </li>
                    <li>
                      Understanding of cross-browser compatibility issues and
                      how to solve them.
                    </li>
                    <li>
                      Strong problem-solving skills and a collaborative mindset.
                    </li>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center justify-between">
                <p className="text-gray-400 mb-2 sm:mb-0">
                  Posted on: 24, March, 2024
                </p>
                <div className="flex items-center justify-between w-72">
                  <button className="px-10 py-2 border-[#292E1E] rounded border">
                    <div className="flex items-center">
                      <Bookmark className="text-[#292E1E]" />
                      <p className="font-semibold ml-2">Save</p>
                    </div>
                  </button>
                  <button className="bg-[#B400DD] px-10 py-2 rounded  font-bold text-white">
                    <div className="flex items-center">Apply</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded mb-5 bg-white  shadow p-5 border">
              <div className="flex  justify-between">
                <div className="flex items-center">
                  <img className="h-4" src={img3} />
                  <div className="ml-3">
                    <p className="xl:text-lg font-bold">Frontend Developer</p>
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

              <div className="hidden md:block">
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

            <div
              className={`p-5 mb-5 md:hidden bg-white  ${
                currentDescription === "google" ? "block" : "hidden"
              } shadow rounded border`}
              >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-6 sm:h-16 md:h-20" src={img3} />
                  <div className="ml-3">
                    <p className="text-2xl md:text-3xl font-bold">
                      Frontend Developer
                    </p>
                    <p className="text-gray-400">Google Inc</p>
                    <div className="flex text-gray-400 items-center">
                      <MapPinned size={20} className=" mr-2" />
                      <p>Callifornia USA</p>
                    </div>
                  </div>
                </div>

                <div className="font-bold hidden md:block text-[#292E1E] justify-between">
                  <p className="text-green-500 text-end text-2xl">$60000 PA</p>

                  <div className="flex text-[#292E1E] items-center">
                    <p>Experienced</p>
                    <p className="ml-3">Remote</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-7 my-3 sm:my-0 items-center">
                <div className="flex items-center">
                  <Clock size={30} className="text-[#B400DD]" />
                  <div className="ml-2">
                    <p className="font-bold text-[#292E1E]">Job Type</p>
                    <p className="text-gray-400">Remote</p>
                  </div>
                </div>

                <div className="flex mx-10 my-5 items-center">
                  <GraduationCap size={30} className="text-[#B400DD]" />
                  <div className="ml-2">
                    <p className="font-bold text-[#292E1E]">Experience</p>
                    <p className="text-gray-400">10+ Years</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <UsersRound size={30} className="text-[#B400DD]" />
                  <div className="ml-2">
                    <p className="font-bold text-[#292E1E]">Team Size</p>
                    <p className="text-gray-400">2000-4000 People</p>
                  </div>
                </div>
              </div>
              <hr className="" />

              <div className="font-bold text-lg mt-3 flex items-center text-[#292E1E] justify-between">
                <p>Experienced</p>
                <p className="ml-3">On Site</p>
                <p className="text-green-500">$60000 PA</p>
              </div>

              <div className="my-10">
                <div className="flex  mb-2 items-center">
                  <BriefcaseBusiness className="text-[#B400DD]" />
                  <p className="font-bold ml-2 text-[#292E1E] text-xl">
                    Job Description
                  </p>
                </div>
                <p className="text-justify text-gray-500">
                  We are looking for a talented and passionate Frontend
                  Developer to join our team and help build innovative,
                  user-friendly web interfaces. In this role, you will be
                  responsible for translating design wireframes into
                  high-quality code and creating responsive, visually appealing,
                  and accessible web applications. As a key member of the
                  development team, you will work closely with designers,
                  backend developers, and product managers to deliver seamless
                  user experiences. Your expertise in HTML, CSS, JavaScript, and
                  frameworks like React will be essential in crafting intuitive
                  designs that engage users and meet business goals.
                </p>
              </div>

              <div>
                <div className="flex mb-2 items-center">
                  <ClipboardCheck className="text-[#B400DD]" />
                  <p className="font-bold ml-2 text-[#292E1E] text-xl">
                    Requirements
                  </p>
                </div>
                <div className="text-gray-500">
                  <li>
                    Proficiency in HTML, CSS, and JavaScript with a strong
                    understanding of ES6+ features.
                  </li>
                  <li>
                    Hands-on experience with React.js or similar frameworks like
                    Vue.js or Angular.
                  </li>
                  <li>
                    Familiarity with responsive design principles and frameworks
                    like Tailwind CSS or Bootstrap.
                  </li>
                  <li>
                    Knowledge of version control systems like Git for
                    collaborative development.
                  </li>
                  <li>
                    Experience with RESTful APIs and handling asynchronous
                    requests.
                  </li>
                  <li>
                    Understanding of cross-browser compatibility issues and how
                    to solve them.
                  </li>
                  <li>
                    Strong problem-solving skills and a collaborative mindset.
                  </li>
                </div>

                <div className="my-10">
                  <div className="flex mb-2 items-center">
                    <ClipboardCheck className="text-[#B400DD]" />
                    <p className="font-bold ml-2 text-[#292E1E] text-xl">
                      Benefits
                    </p>
                  </div>
                  <div className="text-gray-500">
                    <li>
                      Proficiency in HTML, CSS, and JavaScript with a strong
                      understanding of ES6+ features.
                    </li>
                    <li>
                      Hands-on experience with React.js or similar frameworks
                      like Vue.js or Angular.
                    </li>
                    <li>
                      Familiarity with responsive design principles and
                      frameworks like Tailwind CSS or Bootstrap.
                    </li>
                    <li>
                      Knowledge of version control systems like Git for
                      collaborative development.
                    </li>
                    <li>
                      Experience with RESTful APIs and handling asynchronous
                      requests.
                    </li>
                    <li>
                      Understanding of cross-browser compatibility issues and
                      how to solve them.
                    </li>
                    <li>
                      Strong problem-solving skills and a collaborative mindset.
                    </li>
                  </div>
                </div>
              </div>
              <div className="sm:flex items-center justify-between">
                <p className="text-gray-400 mb-3 sm:mb-0">
                  Posted on: 24, March, 2024
                </p>
                <div className="flex items-center justify-between w-72">
                  <button className="px-10 py-2 border-[#292E1E] rounded border">
                    <div className="flex items-center">
                      <Bookmark className="text-[#292E1E]" />
                      <p className="font-semibold ml-2">Save</p>
                    </div>
                  </button>
                  <button className="bg-[#B400DD] px-10 py-2 rounded  font-bold text-white">
                    <div className="flex items-center">Apply</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded shadow border">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-8" src={img4} />
                  <div className="">
                    <p className="text-lg font-bold">Backend Developer</p>
                    <p className="text-gray-400">Capgemini</p>
                  </div>
                </div>
                <div>
                  <p className="text-green-500 hidden md:block text-end font-bold">$40000 PA</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>New York USA</p>
              </div>

              <p className="text-justify hidden md:block my-5 text-sm">
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
                  onClick={() => {
                    setcurrentDescription("capgemini");
                  }}
                  className="bg-[#292E1E] rounded border border-[#292E1E] w-full py-1 text-white"
                >
                  View More
                </button>
                <button className="border border-[#B400DD] ml-5 bg-[#B400DD] px-2 py-1 rounded text-white">
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
              <DetailedDescription currentDescription={currentDescription} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchJobs;
