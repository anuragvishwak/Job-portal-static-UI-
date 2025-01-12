import { Calendar } from "lucide-react";
import React from "react";
import {
  FaBook,
  FaLocationArrow,
  FaLocationDot,
  FaMedal,
} from "react-icons/fa6";

function RemainingDetails({ currentTab }) {
  return (
    <div className="mt-5">
      <div className="">
        {currentTab === "education_details" ? (
          <div className="bg-white p-5 rounded-b-3xl shadow">
            <div>
              <p className="text-[#B400DD] text-2xl font-bold">
                Education Details
              </p>
            </div>

            <div className="xl:flex items-center gap-5">
              <div className="text-[#292E1E] xl:mt-0 mb-5 border rounded-2xl p-5 w-full">
                <p className="font-bold  text-xl">Bachelor of Technology</p>
                <div className="md:flex text-sm justify-between items-center">
                  <div className="flex items-center sm:mt-0 mt-2 text-gray-400 font-semibold">
                    <FaBook />
                    <p className="ml-1">Indian Institute of Technology</p>
                  </div>

                  <div className="flex items-center my-2 md:my-0 text-gray-400 font-semibold">
                    <FaLocationDot />
                    <p className="ml-1">Mumbai, India</p>
                  </div>

                  <div className="flex items-center mb-2 md:mb-0 text-gray-400 font-semibold">
                    <Calendar size={20} />
                    <p className="ml-1">2020 - 2024</p>
                  </div>

                  <div className="flex items-center text-gray-400 font-semibold">
                    <FaMedal size={20} />
                    <p className="ml-1">8.56 CGPA</p>
                  </div>
                </div>

                <div className="my-5">
                  <p className="font-semibold  mb-2">Key Subjects</p>
                  <div className="grid grid-cols-1 text-gray-400 sm:text-[#292E1E] sm:grid-cols-2 md:grid-cols-4 sm:gap-5 sm:text-center">
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Computer Science
                    </p>
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Data Structures
                    </p>
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Machine Learning
                    </p>
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Web Development
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Achievements</p>

                  <li className="text-gray-400">
                    First Place in college hackathon.
                  </li>
                  <li className="text-gray-400">
                    Published research paper in AI.
                  </li>
                  <li className="text-gray-400">
                    Led development team of 5 members.
                  </li>
                </div>
              </div>

              <div className="text-[#292E1E] p-5 w-full rounded-2xl border">
                <p className="font-bold  text-xl">
                  Diploma in Computer Science
                </p>
                <div className="md:flex text-sm justify-between items-center">
                  <div className="flex items-center sm:mt-0 mt-2 text-gray-400 font-semibold">
                    <FaBook />
                    <p className="ml-1">Indian Institute of Technology</p>
                  </div>

                  <div className="flex items-center my-2 md:my-0 text-gray-400 font-semibold">
                    <FaLocationDot />
                    <p className="ml-1">Mumbai, India</p>
                  </div>

                  <div className="flex items-center mb-2 md:mb-0 text-gray-400 font-semibold">
                    <Calendar size={20} />
                    <p className="ml-1">2020 - 2024</p>
                  </div>

                  <div className="flex items-center text-gray-400 font-semibold">
                    <FaMedal size={20} />
                    <p className="ml-1">8.56 CGPA</p>
                  </div>
                </div>

                <div className="my-5">
                  <p className="font-semibold  mb-2">Key Subjects</p>
                  <div className="grid grid-cols-1 text-gray-400 sm:text-[#292E1E] sm:grid-cols-2 md:grid-cols-4 sm:gap-5 sm:text-center">
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Computer Science
                    </p>
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Data Structures
                    </p>
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Machine Learning
                    </p>
                    <p className="sm:bg-gray-100 sm:px-4 sm:py-1 rounded-full">
                      Web Development
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Achievements</p>

                  <li className="text-gray-400">
                    First Place in college hackathon.
                  </li>
                  <li className="text-gray-400">
                    Published research paper in AI.
                  </li>
                  <li className="text-gray-400">
                    Led development team of 5 members.
                  </li>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default RemainingDetails;
