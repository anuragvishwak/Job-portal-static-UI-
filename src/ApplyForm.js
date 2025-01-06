import { X } from "lucide-react";
import React from "react";

function ApplyForm({ closing }) {
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-50">
      <div className="bg-white w-5/12 rounded p-5">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold text-[#292E1E]">Job Apply Form</p>
          <button
            onClick={() => {
              closing(false);
            }}
          >
            <X />
          </button>
        </div>

        <div className="grid grid-cols-2 my-10 gap-5">
          <div>
            <p className="font-semibold text-[#292E1E]">Applicant Name</p>
            <input placeholder="John Doe" className="w-full border px-2 py-1 rounded border-gray-300"></input>
          </div>

          <div>
            <p className="text-[#292E1E] font-semibold">Phone No</p>
            <input placeholder="+91 9104031875" className="w-full border px-2 py-1 rounded border-gray-300"></input>
          </div>

          <div>
            <p className="font-semibold text-[#292E1E]">Email</p>
            <input placeholder="johndoe@gmail.com" className="w-full border px-2 py-1 rounded border-gray-300"></input>
          </div>

          <div>
            <p className="font-semibold text-[#292E1E]">Address</p>
            <input placeholder="America, LA" className="w-full border px-2 py-1 rounded border-gray-300"></input>
          </div>

          <div>
            <p className="font-semibold text-[#292E1E]">Experience</p>
            <input placeholder="4+ years" className="w-full border px-2 py-1 rounded border-gray-300"></input>
          </div>
          <div>
            <p className="font-semibold text-[#292E1E]">Technology</p>
            <input placeholder="React JS" className="w-full border px-2 py-1 rounded border-gray-300"></input>
          </div>
        </div>
        <button className="bg-[#292E1E] py-2 w-full rounded text-white">
            Apply
        </button>
      </div>
    </div>
  );
}

export default ApplyForm;
