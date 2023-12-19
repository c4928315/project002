import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import customIcons from "../../Icons/customIcons";
import "./findJobs.css";


function FindJobs({data}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const filteredResults = data.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    await setFilteredJobs(filteredResults);

    // The state has been updated, now navigate and store in localStorage
    navigate(`/jobs/results?search=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    // Use the effect to store filteredJobs in localStorage
    localStorage.setItem("filteredJobs", JSON.stringify(filteredJobs));
  }, [filteredJobs]);

  console.log(filteredJobs)



  return (
    <div className="findJobsContainer">
      <div className="findJobsInner">
        <div className="findJobsHeader">
          <h1>Job Opportunities for Anyone Anywhere</h1>
        </div>
        <div className="findJobsSubHeader">
          <p>Remote work is the future, a platform for finding your dream remote job.</p>
        </div>
        <div className="findJobsSearch">
          <span className="findJobsSearchIcon">
            <customIcons.search size={24} />
          </span>
          <span className="findJobsSearchArea">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
          <span className="findJobsSearchBtn">
            <button type="submit" onClick={handleSearch}>
              Find Jobs
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FindJobs;
