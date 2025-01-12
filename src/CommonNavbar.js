import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function CommonNavbar() {
  const [tabSelection, settabSelection] = useState("home");
  const [openingNavbar, setopeningNavbar] = useState(false);
  const findingLocation = useLocation();

  return (
    <div>
      {/* Navbar for Small Screens */}
      <div className="sm:hidden flex justify-start text-[#292E1E] ">
        <button
          onClick={() => setopeningNavbar(!openingNavbar)}
          className="border-2 border-[#292E1E] rounded p-1"
        >
          <FaBars size={20} />
        </button>

        {openingNavbar && (
          <div className="absolute top-20 justify-center font-semibold rounded-xl bg-white shadow-lg z-50  p-5">
            <Link to={"/"}>
              <button
                onClick={() => {
                  settabSelection("home");
                  setopeningNavbar(false); // Close menu after selection
                }}
                className={`block py-2 ${
                  findingLocation.pathname === "/" ? "text-[#B400DD]" : ""
                }`}
              >
                Home
              </button>
            </Link>

            <Link to="/SearchJobs">
              <button
                onClick={() => {
                  settabSelection("searchjobs");
                  setopeningNavbar(false); // Close menu after selection
                }}
                className={`block py-2 ${
                  findingLocation.pathname === "/SearchJobs"
                    ? "text-[#B400DD]"
                    : ""
                }`}
              >
                Search Jobs
              </button>
            </Link>

            <Link to="/Application">
              <button
                onClick={() => {
                  settabSelection("application");
                  setopeningNavbar(false); // Close menu after selection
                }}
                className={`block py-2 ${
                  findingLocation.pathname === "/Application"
                    ? "text-[#B400DD]"
                    : ""
                }`}
              >
                Applications
              </button>
            </Link>

            <Link to={"/Profile"}>
              <button
                onClick={() => {
                  settabSelection("profile");
                  setopeningNavbar(false); // Close menu after selection
                }}
                className={`block py-2 ${
                  findingLocation.pathname === "/Profile"
                    ? "text-[#B400DD]"
                    : ""
                }`}
              >
                Profile
              </button>
            </Link>

            <Link to={"/Notification"}>
              <button
                onClick={() => {
                  settabSelection("notification");
                  setopeningNavbar(false); 
                }}
                className="block py-2"
              >
                Notifications
              </button>
            </Link>
          </div>
        )}
      </div>

      
      <div className="hidden sm:flex md:text-lg font-semibold items-center justify-between text-[#292E1E] w-[400px] md:w-[500px] lg:w-[600px]">
        <Link to={"/"}>
          <button
            onClick={() => settabSelection("home")}
            className={`${
              findingLocation.pathname === "/" ? "text-[#B400DD]" : ""
            }`}
          >
            Home
          </button>
        </Link>

        <Link to="/SearchJobs">
          <button
            onClick={() => settabSelection("searchjobs")}
            className={`${
              findingLocation.pathname === "/SearchJobs" ? "text-[#B400DD]" : ""
            }`}
          >
            Search Jobs
          </button>
        </Link>

        <Link to="/Application">
          <button
            onClick={() => settabSelection("application")}
            className={`${
              findingLocation.pathname === "/Application" ? "text-[#B400DD]" : ""
            }`}
          >
            Applications
          </button>
        </Link>

        <Link to={"/Profile"}>
          <button
            onClick={() => settabSelection("profile")}
            className={`${
              findingLocation.pathname === "/Profile" ? "text-[#B400DD]" : ""
            }`}
          >
            Profile
          </button>
        </Link>

        <Link to={"/Notification"}>
          <button
            onClick={() => settabSelection("notification")}
          >
            Notifications
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CommonNavbar;
