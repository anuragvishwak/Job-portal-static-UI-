import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CommonNavbar() {
  const [tabSelection, settabSelection] = useState("home");

  const findingLocation = useLocation();

  return (
    <div>
      <div className="">
        <div className="flex text-lg font-semibold items-center justify-between text-[#292E1E]  w-[600px]">
          <Link to={"/"}>
            <button
              onClick={() => {
                settabSelection("home");
              }}
              className={`${
                findingLocation.pathname === "/" ? "text-[#B400DD]" : ""
              } `}
            >
              Home
            </button>
          </Link>

          <Link to="/SearchJobs">
            <button
              className={`${
                findingLocation.pathname === "/SearchJobs"
                  ? "text-[#B400DD]"
                  : ""
              } `}
              onClick={() => {
                settabSelection("searchjobs");
              }}
            >
              Search Jobs
            </button>
          </Link>

          <Link to="/Application">
            <button
              className={`${
                findingLocation.pathname === "/Application" 
                  ? "text-[#B400DD]"
                  : ""
              } `}
              onClick={() => {
                settabSelection("application");
              }}
            >
              Applications
            </button>
          </Link>

          <Link to={'/Profile'}>
            <button 
            className={`${
                findingLocation.pathname === "/Profile"
                  ? "text-[#B400DD]"
                  : ""
              } `}
              onClick={() => {
                settabSelection("profile");
              }}
            >
              Profile
            </button>
          </Link>
          <button
            onClick={() => {
              settabSelection("notification");
            }}
          >
            Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommonNavbar;
