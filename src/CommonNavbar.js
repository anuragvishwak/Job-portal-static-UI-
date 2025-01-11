import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CommonNavbar() {
  const [tabSelection, settabSelection] = useState("home");

  const findingLocation = useLocation();

  return (
    <div>
      <div className="">
        <div className="hidden sm:flex md:text-lg font-semibold items-center justify-between text-[#292E1E] w-[400px] md:w-[500px] lg:w-[600px]">
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

          <Link to={"/Profile"}>
            <button
              className={`${
                findingLocation.pathname === "/Profile" ? "text-[#B400DD]" : ""
              } `}
              onClick={() => {
                settabSelection("profile");
              }}
            >
              Profile
            </button>
          </Link>
          <Link to={"/Notification"}>
            <button
              onClick={() => {
                settabSelection("notification");
              }}
            >
              Notifications
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommonNavbar;
