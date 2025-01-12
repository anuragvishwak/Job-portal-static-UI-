import React, { useState } from "react";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import img3 from "./Assets/Google_2015_logo.svg.webp";

import {
  Bookmark,
  BriefcaseBusiness,
  ClipboardCheck,
  Clock,
  ExternalLink,
  GraduationCap,
  MapPinned,
  UsersRound,
} from "lucide-react";
import toast from "react-hot-toast";
import ApplyForm from "./ApplyForm";

function DetailedDescription({ currentDescription }) {
  const [savedJobs, setSavedJobs] = useState({
    job1: false,
    job2: false,
    job3: false,
  });

  const [openingApplyForm, setopeningApply] = useState(false);

  const handleSaveJob = (jobKey) => {
    setSavedJobs((prev) => ({
      ...prev,
      [jobKey]: !prev[jobKey],
    }));
    toast.success("Job saved successfully!");
  };

  console.log(savedJobs);
  return (
    <div>
      <div
        className={`p-5 bg-white ${
          currentDescription === "adobe" ? "hidden md:block" : "hidden"
        } shadow rounded  border`}
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <img className="h-20" src={img2} />
            <div className="ml-3">
              <p className="text-3xl font-bold">Frontend Developer</p>
              <p className="text-gray-400">Adobe</p>
              <div className="flex text-gray-400 items-center">
                <MapPinned size={20} className=" mr-2" />
                <p>Tokyo Japan</p>
              </div>
            </div>
          </div>

          <div className="font-bold text-[#292E1E] justify-between">
            <p className="text-green-500 text-end text-2xl">$60000 PA</p>

            <div className="flex text-[#292E1E] items-center">
              <p>Experienced</p>
              <p className="ml-3">On Site</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <Clock size={30} className="text-[#B400DD]" />
            <div className="ml-2">
              <p className="font-bold text-[#292E1E]">Job Type</p>
              <p className="text-gray-400">Full Time</p>
            </div>
          </div>

          <div className="flex mx-10 my-5 items-center">
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

        <div className="my-10">
          <div className="flex  mb-2 items-center">
            <BriefcaseBusiness className="text-[#B400DD]" />
            <p className="font-bold ml-2 text-[#292E1E] text-xl">
              Job Description
            </p>
          </div>
          <p className="text-justify text-gray-500">
            We are looking for a talented and passionate Frontend Developer to
            join our team and help build innovative, user-friendly web
            interfaces. In this role, you will be responsible for translating
            design wireframes into high-quality code and creating responsive,
            visually appealing, and accessible web applications. As a key member
            of the development team, you will work closely with designers,
            backend developers, and product managers to deliver seamless user
            experiences. Your expertise in HTML, CSS, JavaScript, and frameworks
            like React will be essential in crafting intuitive designs that
            engage users and meet business goals.
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
              Familiarity with responsive design principles and frameworks like
              Tailwind CSS or Bootstrap.
            </li>
            <li>
              Knowledge of version control systems like Git for collaborative
              development.
            </li>
            <li>
              Experience with RESTful APIs and handling asynchronous requests.
            </li>
            <li>
              Understanding of cross-browser compatibility issues and how to
              solve them.
            </li>
            <li>Strong problem-solving skills and a collaborative mindset.</li>
          </div>

          <div className="my-10">
            <div className="flex mb-2 items-center">
              <ClipboardCheck className="text-[#B400DD]" />
              <p className="font-bold ml-2 text-[#292E1E] text-xl">Benefits</p>
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
                Knowledge of version control systems like Git for collaborative
                development.
              </li>
              <li>
                Experience with RESTful APIs and handling asynchronous requests.
              </li>
              <li>
                Understanding of cross-browser compatibility issues and how to
                solve them.
              </li>
              <li>
                Strong problem-solving skills and a collaborative mindset.
              </li>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Posted on: 24, March, 2024</p>
          <div className="flex items-center justify-between w-72">
            <button
              onClick={() => handleSaveJob("job1")}
              className="px-10 py-2 border-[#292E1E] rounded border"
            >
              <div className="flex items-center">
                <Bookmark className="text-[#292E1E]" />
                <p className="font-semibold ml-2">Save</p>
              </div>
            </button>
            <button
              onClick={() => {
                setopeningApply(true);
              }}
              className="bg-[#B400DD] px-10 py-2 rounded  font-bold text-white"
            >
              <div className="flex items-center">Apply</div>
            </button>
          </div>
        </div>
      </div>

      {openingApplyForm && <ApplyForm closing = {setopeningApply}/>}

      {/* GOOGLE */}
      <div
        className={`p-5 bg-white  ${
          currentDescription === "google" ? "hidden md:block" : "hidden"
        } shadow rounded border`}
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <img className="h-20" src={img3} />
            <div className="ml-3">
              <p className="text-3xl font-bold">Frontend Developer</p>
              <p className="text-gray-400">Google Inc</p>
              <div className="flex text-gray-400 items-center">
                <MapPinned size={20} className=" mr-2" />
                <p>Callifornia USA</p>
              </div>
            </div>
          </div>

          <div className="font-bold text-[#292E1E] justify-between">
            <p className="text-green-500 text-end text-2xl">$60000 PA</p>

            <div className="flex text-[#292E1E] items-center">
              <p>Experienced</p>
              <p className="ml-3">Remote</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
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

        <div className="my-10">
          <div className="flex  mb-2 items-center">
            <BriefcaseBusiness className="text-[#B400DD]" />
            <p className="font-bold ml-2 text-[#292E1E] text-xl">
              Job Description
            </p>
          </div>
          <p className="text-justify text-gray-500">
            We are looking for a talented and passionate Frontend Developer to
            join our team and help build innovative, user-friendly web
            interfaces. In this role, you will be responsible for translating
            design wireframes into high-quality code and creating responsive,
            visually appealing, and accessible web applications. As a key member
            of the development team, you will work closely with designers,
            backend developers, and product managers to deliver seamless user
            experiences. Your expertise in HTML, CSS, JavaScript, and frameworks
            like React will be essential in crafting intuitive designs that
            engage users and meet business goals.
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
              Familiarity with responsive design principles and frameworks like
              Tailwind CSS or Bootstrap.
            </li>
            <li>
              Knowledge of version control systems like Git for collaborative
              development.
            </li>
            <li>
              Experience with RESTful APIs and handling asynchronous requests.
            </li>
            <li>
              Understanding of cross-browser compatibility issues and how to
              solve them.
            </li>
            <li>Strong problem-solving skills and a collaborative mindset.</li>
          </div>

          <div className="my-10">
            <div className="flex mb-2 items-center">
              <ClipboardCheck className="text-[#B400DD]" />
              <p className="font-bold ml-2 text-[#292E1E] text-xl">Benefits</p>
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
                Knowledge of version control systems like Git for collaborative
                development.
              </li>
              <li>
                Experience with RESTful APIs and handling asynchronous requests.
              </li>
              <li>
                Understanding of cross-browser compatibility issues and how to
                solve them.
              </li>
              <li>
                Strong problem-solving skills and a collaborative mindset.
              </li>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Posted on: 24, March, 2024</p>
          <div className="flex items-center justify-between w-72">
            <button
              onClick={() => handleSaveJob("job3")}
              className="px-10 py-2 border-[#292E1E] rounded border"
            >
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
    </div>
  );
}

export default DetailedDescription;
