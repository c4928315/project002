import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customIcons from "../../Icons/customIcons";
import "./findJobs.css";

function FindJobs({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const filteredResults = data.filter(
      (job) =>
        job?.jobName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        job?.companyName?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    await setFilteredJobs(filteredResults);

    // The state has been updated, now navigate and store in localStorage
    navigate(`/jobs/results?search=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    // Use the effect to store filteredJobs in localStorage
    localStorage.setItem("filteredJobs", JSON.stringify(filteredJobs));
  }, [filteredJobs]);

  console.log(filteredJobs);

  return (
    <div className="findJobsContainer">
      <div className="findJobsInner">
        <div className="topH1">
          <div className="topH1Innder">
            <p>services</p>
            <h1>How we can help you</h1>
          </div>
        </div>
        <section>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-a">
                  <h1>
                  CV 
                    <br />
                    Revamp
                  </h1>
                  <span className="price"> Ksh 8000</span>
                  <div className="card-back">
                    <Link to="/viewService">View</Link>
                    <Link to="">services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-b">
                  <h1>
                  Student's Package 
                    <br />
                    CV Revamp
                  </h1>
                  <span className="price">Ksh 5000</span>
                  <div className="card-back">
                    <Link to="/viewLStudentPack">View</Link>
                    <Link to="">services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-c">
                  <h1>
                  Linkedin
                    <br />
                    Optimisation
                  </h1>
                  <span className="price">Ksh 15000</span>
                  <div className="card-back">
                    <Link to="/viewLinkedIn">View</Link>
                    <Link to="">services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-d">
                  <h1>
                  Coaching 
                    <br />
                    Session
                  </h1>
                  <span className="price">Ksh 7000</span>
                  <div className="card-back">
                    <Link to="/viewCoachingSesh">View</Link>
                    <Link to="">services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-e">
                  <h1>
                  Interview 
                    <br />
                    Prep
                  </h1>
                  <span className="price">Ksh 12000</span>
                  <div className="card-back">
                    <Link to="/viewInterview">View</Link>
                    <Link to="">services</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="findJobsHeader">
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
        </div> */}
      </div>
    </div>
  );
}

export default FindJobs;
