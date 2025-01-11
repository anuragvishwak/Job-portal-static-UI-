import React, { useState } from "react";
import CommonNavbar from "./CommonNavbar";
import img3 from "./Assets/Google_2015_logo.svg.webp";
import {
  Check,
  CircleAlert,
  Clock,
  ExternalLink,
  MapPinned,
  Timer,
} from "lucide-react";
import img2 from "./Assets/Adobe-social-share-image.jpg";
import img4 from "./Assets/Capgemini_Logo_2COL_RGB.png";

function Application() {
  const [selectJob, setselectJob] = useState('google');
  return (
    <div>
      <div className="flex items-center p-5">
        <CommonNavbar />
      </div>

      <div className="bg-gray-100 p-5 h-full">
        <div className="flex">
          <div className="w-5/12">
            <div className="rounded bg-white mb-5 shadow p-5 border">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-5" src={img3} />
                  <div className="ml-3">
                    <p className="text-lg font-bold">Frontend Developer</p>
                    <p className="text-gray-400">Google Inc</p>
                  </div>
                </div>
                <div className="font-bold text-[#292E1E]">
                  <p className=" text-green-500 text-end">$60000 PA</p>

                  <div className="flex items-center text-sm">
                    <p>Fresher</p>
                    <p className="ml-1">On Site</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>Callifornia USA</p>
              </div>

              <div className="">
                <p className="text-justify text-sm my-5">
                  We are looking for a talented Frontend Developer to build
                  user-friendly web interfaces. You'll use HTML, CSS,
                  JavaScript....
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className=" text-sm text-gray-400">24, March, 2024</p>
                <button
                  onClick={() => {
                    setselectJob("google");
                  }}
                  className="bg-[#292E1E] rounded border border-[#292E1E] px-5 py-1 text-white"
                >
                  View Application Status
                </button>
              </div>
            </div>

            <div className="rounded mb-5 bg-white shadow p-5 border">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-5" src={img2} />
                  <div className="ml-3">
                    <p className="text-lg font-bold">Frontend Developer</p>
                    <p className="text-gray-400">Adobe</p>
                  </div>
                </div>
                <div className="font-bold text-[#292E1E]">
                  <p className=" text-green-500 text-end">$60000 PA</p>

                  <div className="flex items-center text-sm">
                    <p>Fresher</p>
                    <p className="ml-1">On Site</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>Callifornia USA</p>
              </div>

              <div className="">
                <p className="text-justify text-sm my-5">
                  We are looking for a talented Frontend Developer to build
                  user-friendly web interfaces. You'll use HTML, CSS,
                  JavaScript....
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className=" text-sm text-gray-400">24, March, 2024</p>
                <button
                  onClick={() => {
                    setselectJob("adobe");
                  }}
                  className="bg-[#292E1E] rounded border border-[#292E1E] px-5 py-1 text-white"
                >
                  View Application Status
                </button>
              </div>
            </div>

            <div className="rounded bg-white shadow p-5 border">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-5" src={img4} />
                  <div className="ml-3">
                    <p className="text-lg font-bold">Backend Developer</p>
                    <p className="text-gray-400">Capgemini</p>
                  </div>
                </div>
                <div className="font-bold text-[#292E1E]">
                  <p className=" text-green-500 text-end">$40000 PA</p>

                  <div className="flex items-center text-sm">
                    <p>Fresher</p>
                    <p className="ml-1">On Site</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinned size={20} className="text-[#292E1E] mr-2" />
                <p>Callifornia USA</p>
              </div>

              <div className="">
                <p className="text-justify text-sm my-5">
                  We are looking for a talented Frontend Developer to build
                  user-friendly web interfaces. You'll use HTML, CSS,
                  JavaScript....
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className=" text-sm text-gray-400">24, March, 2024</p>
                <button
                  onClick={() => {
                    setselectJob("capgemini");
                  }}
                  className="bg-[#292E1E] rounded border border-[#292E1E] px-5 py-1 text-white"
                >
                  View Application Status
                </button>
              </div>
            </div>
          </div>

          <div className="ml-5 w-full">
            <div className={`bg-white p-5 shadow rounded ${selectJob === 'google'? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#292E1E] text-2xl">
                    Application Status
                  </p>
                  <p className="text-gray-400">
                    Track your application progress for Senior Frontend
                    Developer at Google Inc
                  </p>
                </div>

                <div className="flex items-center">
                  <img className="h-8" src={img3} />
                  <div className="ml-3">
                    <p className="text-xl font-bold">Frontend Developer</p>
                    <p className="text-gray-400">Google Inc</p>
                  </div>
                </div>
              </div>
              <div className="text-gray-400 my-5">
                <p>Application Date: 24, March, 2024</p>
              </div>

              <div className="border-l-8 border-green-200 rounded-xl">
                <div className="flex border border-green-200 p-3 rounded-l rounded-r-xl justify-between">
                  <div>
                    <div className="flex items-center">
                      <Check
                        size={40}
                        className="text-green-500 border p-1 rounded-full border-green-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Application Submittion
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                    <p className="text-[#B400DD]">
                      Application submitted successfully
                    </p>
                  </div>
                  <div>
                    <p className="text-green-500 bg-green-100 px-4 py-1 rounded-full font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-green-200 rounded-xl">
                <div className="flex border my-3 border-green-200 p-3 rounded-l rounded-xl justify-between">
                  <div>
                    <div className="flex items-center">
                      <Check
                        size={40}
                        className="text-green-500 border p-1 rounded-full border-green-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Initial Screening
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                    <p className="text-[#B400DD]">Passed Initial Screening</p>
                  </div>
                  <div>
                    <p className="text-green-500 bg-green-100 px-4 py-1 rounded-full font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-yellow-200 rounded-xl">
                <div className="flex border-l-yellow-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <Clock
                        size={40}
                        className="text-yellow-500 border p-1 rounded-full border-yellow-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Technical Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-500 bg-yellow-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Code Challenge
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Culture Fit Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Final Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-white p-5 shadow rounded ${selectJob === 'capgemini'? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#292E1E] text-2xl">
                    Application Status
                  </p>
                  <p className="text-gray-400">
                    Track your application progress for Senior Frontend
                    Developer at Cpagemini
                  </p>
                </div>

                <div className="flex items-center">
                  <img className="h-8" src={img4} />
                  <div className="ml-3">
                    <p className="text-xl font-bold">Backend Developer</p>
                    <p className="text-gray-400">Capgemini</p>
                  </div>
                </div>
              </div>
              <div className="text-gray-400 my-5">
                <p>Application Date: 24, March, 2024</p>
              </div>

              <div className="border-l-8 border-green-200 rounded-xl">
                <div className="flex border border-green-200 p-3 rounded-l rounded-r-xl justify-between">
                  <div>
                    <div className="flex items-center">
                      <Check
                        size={40}
                        className="text-green-500 border p-1 rounded-full border-green-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Application Submittion
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                    <p className="text-[#B400DD]">
                      Application submitted successfully
                    </p>
                  </div>
                  <div>
                    <p className="text-green-500 bg-green-100 px-4 py-1 rounded-full font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-green-200 rounded-xl">
                <div className="flex border my-3 border-green-200 p-3 rounded-l rounded-xl justify-between">
                  <div>
                    <div className="flex items-center">
                      <Check
                        size={40}
                        className="text-green-500 border p-1 rounded-full border-green-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Initial Screening
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                    <p className="text-[#B400DD]">Passed Initial Screening</p>
                  </div>
                  <div>
                    <p className="text-green-500 bg-green-100 px-4 py-1 rounded-full font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-yellow-200 rounded-xl">
                <div className="flex border-l-yellow-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <Clock
                        size={40}
                        className="text-yellow-500 border p-1 rounded-full border-yellow-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Technical Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-500 bg-yellow-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Code Challenge
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Culture Fit Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Final Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-white p-5 shadow rounded ${selectJob === 'adobe'? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#292E1E] text-2xl">
                    Application Status
                  </p>
                  <p className="text-gray-400">
                    Track your application progress for Senior Frontend
                    Developer at Adobe
                  </p>
                </div>

                <div className="flex items-center">
                  <img className="h-8" src={img2} />
                  <div className="ml-3">
                    <p className="text-xl font-bold">Frontend Developer</p>
                    <p className="text-gray-400">Adobe</p>
                  </div>
                </div>
              </div>
              <div className="text-gray-400 my-5">
                <p>Application Date: 24, March, 2024</p>
              </div>

              <div className="border-l-8 border-green-200 rounded-xl">
                <div className="flex border border-green-200 p-3 rounded-l rounded-r-xl justify-between">
                  <div>
                    <div className="flex items-center">
                      <Check
                        size={40}
                        className="text-green-500 border p-1 rounded-full border-green-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Application Submittion
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                    <p className="text-[#B400DD]">
                      Application submitted successfully
                    </p>
                  </div>
                  <div>
                    <p className="text-green-500 bg-green-100 px-4 py-1 rounded-full font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-green-200 rounded-xl">
                <div className="flex border my-3 border-green-200 p-3 rounded-l rounded-xl justify-between">
                  <div>
                    <div className="flex items-center">
                      <Check
                        size={40}
                        className="text-green-500 border p-1 rounded-full border-green-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Initial Screening
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                    <p className="text-[#B400DD]">Passed Initial Screening</p>
                  </div>
                  <div>
                    <p className="text-green-500 bg-green-100 px-4 py-1 rounded-full font-bold">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-yellow-200 rounded-xl">
                <div className="flex border-l-yellow-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <Clock
                        size={40}
                        className="text-yellow-500 border p-1 rounded-full border-yellow-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Technical Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-yellow-500 bg-yellow-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Code Challenge
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Culture Fit Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-8 border-gray-200 rounded-xl">
                <div className="flex border-l-gray-200 border mb-3 border-gray-300  p-3 rounded-l rounded-r-xl justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <CircleAlert
                        size={40}
                        className="text-gray-500 border p-1 rounded-full border-gray-500"
                      />
                      <div className="ml-3">
                        <p className="text-lg text-[#292E1E] font-semibold">
                          Final Interview
                        </p>
                        <p className="text-gray-400">Date: 2024-05-15</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-bold">
                      In-Progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
