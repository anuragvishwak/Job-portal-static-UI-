import React, { useState } from "react";
import Select from "react-select";

function Filter() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

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
    <div className="flex justify-between w-[730px] items-center">
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
  );
}

export default Filter;
