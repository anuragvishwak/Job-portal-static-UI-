import { X } from "lucide-react";
import React, { useState } from "react";
import Select from "react-select";

function Filter() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const experienceOptions = [
    { value: 1, label: "1 Year" },
    { value: 2, label: "2 Years" },
    { value: 3, label: "3 Years" },
    { value: 4, label: "4 Years" },
    { value: 5, label: "5 Years" },
  ];

  const jobTypeOptions = [
    { value: "intern", label: "Intern" },
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
  ];

  const locationOptions = [
    { value: "new-york", label: "New York" },
    { value: "san-francisco", label: "San Francisco" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
  ];

  const industryOptions = [
    { value: "tech", label: "Tech" },
    { value: "mechanical", label: "Mechanical" },
    { value: "electronics", label: "Electronics" },
  ];
  return (
    <div>
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="xl:hidden px-2 rounded text-white py-1 bg-[#B400DD]"
      >
        Filters
      </button>

      {showFilters && (
       <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-50">
         <div className="bg-white rounded p-5">
         <div className="flex mb-3 items-center justify-between">
         <p className="text">Filters</p>
         <button><X/></button>
         </div>
         <div className="grid grid-cols-2 gap-3">
          <div clas>
            <Select
              options={experienceOptions}
              value={selectedExperience}
              onChange={setSelectedExperience}
              placeholder="Select Experience"
            />
          </div>

          <div>
            <Select
              options={jobTypeOptions}
              value={selectedJobType}
              onChange={setSelectedJobType}
              placeholder="Select Job Type"
            />
          </div>

          <div>
            <Select
              options={locationOptions}
              value={selectedLocation}
              onChange={setSelectedLocation}
              placeholder="Select Location"
            />
          </div>

          <div>
            <Select
              options={industryOptions}
              value={selectedIndustry}
              onChange={setSelectedIndustry}
              placeholder="Select Industry"
            />
          </div>
        </div>
         </div>
       </div>
      )}

      <div className="hidden xl:grid grid-cols-4 gap-5">
        <div>
          <Select
            options={experienceOptions}
            value={selectedExperience}
            onChange={setSelectedExperience}
            placeholder="Select Experience"
          />
        </div>

        <div>
          <Select
            options={jobTypeOptions}
            value={selectedJobType}
            onChange={setSelectedJobType}
            placeholder="Select Job Type"
          />
        </div>

        <div>
          <Select
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
            placeholder="Select Location"
          />
        </div>

        <div>
          <Select
            options={industryOptions}
            value={selectedIndustry}
            onChange={setSelectedIndustry}
            placeholder="Select Industry"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
