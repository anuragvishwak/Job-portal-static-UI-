import React, { useState } from "react";
import CommonNavbar from "./CommonNavbar";
import img1 from "./Assets/pngwing.com.png";
import { MdLocationPin } from "react-icons/md";
import { Check, Mail, Ticket } from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

function Profile() {
  const [currentTab, setcurrentTab] = useState("basic_information");

  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <CommonNavbar />
      </div>

      <div className="bg-gray-100 p-5 h-screen">
        <div className="bg-white shadow p-5 rounded-lg">
          <div className="flex items-center">
            <img src={img1} className="h-40 w-40 rounded-full" />
            <div className="ml-5">
              <div className="flex items-center">
                <p className="text-4xl font-bold">Anurag Vishwakarma</p>
                <div className="flex ml-3 font-bold text-green-500 mt-2 items-center">
                  <Check
                    size={20}
                    className="border border-green-500 mr-1 rounded-full p-1"
                  />
                  <p>Active</p>
                </div>
              </div>
              <div className="flex mt-1 items-center">
                <p className="text-gray-400 text-lg">
                  Senior Frontend Developer
                </p>
                <span className="mx-1">
                  <GoDotFill className="text-xl text-gray-400" />
                </span>

                <div className="flex text-gray-400 text-lg items-center">
                  <MdLocationPin size={20} />
                  <p>Zundal Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-3 items-center justify-between w-80">
            <p className="border py-1 px-2 rounded">React JS</p>
            <p className="border py-1 px-2 rounded">HTML</p>
            <p className="border py-1 px-2 rounded">CSS</p>
            <p className="border py-1 px-2 rounded">Tailwind CSS</p>
          </div>

          <div className="flex items-center">
            <div className="flex rounded border p-2 w-80 shadow items-center">
              <Mail className="mr-3" />
              <p>anuragvishwakarma4132@gmail.com</p>
            </div>

            <div className="flex border shadow rounded ml-5 justify-center w-80 p-2 items-center">
              <FiPhone className="mr-3" />
              <p>+91 910403185</p>
            </div>
          </div>

          <hr className="my-5" />

          <div>
            <div className={`flex font-semibold items-center justify-between w-6/12`}>
              <button
                className={` ${
                  currentTab === "basic_information"
                    ? "text-[#B400DD]"
                    : "text-[#292E1E]"
                }`}
                onClick={() => {
                  setcurrentTab("basic_information");
                }}
              >
                Basic Information
              </button>
              <button
                className={` ${
                  currentTab === "education_details"
                    ? "text-[#B400DD]"
                    : "text-[#292E1E]"
                }`}
                onClick={() => {
                  setcurrentTab("education_details");
                }}
              >
                Education Details
              </button>
              <button
                className={` ${
                  currentTab === "professional_summary"
                    ? "text-[#B400DD]"
                    : "text-[#292E1E]"
                }`}
                onClick={() => {
                  setcurrentTab("professional_summary");
                }}
              >
                Professional Summary
              </button>
              <button
                className={` ${
                  currentTab === "work_exprience"
                    ? "text-[#B400DD]"
                    : "text-[#292E1E]"
                }`}
                onClick={() => {
                  setcurrentTab("work_exprience");
                }}
              >
                Work Exprience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
