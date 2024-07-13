import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customIcons from "../Icons/customIcons";
import OpeningsCard from "./OpenJobs/openingsCard/openingsCard";
import ScrollToTopButton from "./scrollToTop";

function AllJobResults({data}) {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5); // Number of jobs to display per page

  useEffect(() => {
    const storedFilteredJobs = JSON.parse(localStorage.getItem("filteredJobs"));

    if (storedFilteredJobs) {
      setFilteredJobs(storedFilteredJobs);
    }

    window.scrollTo(0, 0);
  }, []);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate range
  const totalJobs = data.length;
  const startingIndex = indexOfFirstJob + 1;
  const endingIndex = Math.min(indexOfLastJob, totalJobs);

  console.log(currentJobs)
  return (
    <div className="jobResults">
      <div className="jobResultsTop">
        <div className="jobResultsTopContainer">
          <h2 className="jobResultsTopNavTitle">Job Openings</h2>
          <div className="jobResultsTopNav">
            <Link to="/" className="jobResultsTopNavHome">
              Home
            </Link>
            <customIcons.forwardSlash />
            <p>Job Openings</p>
          </div>
        </div>
      </div>
      <div className="jobResultsBottom">
        <div className="jobResultsBottomLeft">
        <div className="jobResultsBottomInputContainer">
            <label>Search by Keywords</label>
            <br />
            <div className="formInputResultsContainer" style={{display:"flex", width: "100%", alignItems: "center", border: "1px solid rgb(226, 219, 211)", borderRadius: "1.3vh",  paddingLeft: "1em"}}>
              <customIcons.search size={22} className="jobResultsIcon"/>
              <input
                type="text"
                className="jobResultsBottomInput"
                placeholder="Job Title, Company"
              />
            </div>
          </div>

          <div className="jobResultsBottomInputContainer">
            <label>Category</label>
            <div className="formInputResultsContainer" style={{display:"flex", width: "100%", alignItems: "center", border: "1px solid rgb(226, 219, 211)", borderRadius: "1.3vh",  paddingLeft: "1em"}}>
                <customIcons.category size={22} className="jobResultsIcon"/>
                <select className="form-select" aria-label="Default select example" style={{ width: "90%", border: "none"}}>
                  <option selected>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div>
          </div>

          <button>Find Job</button>
        </div>

        <div className="jobResultsBottomRight">
          <div className="jobRangeContainer">
            <div className="jobRange">
              Showing {startingIndex} to {endingIndex} of {totalJobs}
            </div>

            <div className="jobRangeDropdown">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By (Default)
                </button>
                <ul className="dropdown-menu">
                  <li>New</li>
                  <li>Old</li>
                  <li>Default</li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {
                    `${jobsPerPage} Per Page`
                  }
                </button>
                <ul className="dropdown-menu">
                  <li onClick={() => setJobsPerPage(5)}>5 Per Page</li>
                  <li onClick={() => setJobsPerPage(10)}>10 Per Page</li>
                  <li onClick={() => setJobsPerPage(15)}>15 Per Page</li>
                  <li onClick={() => setJobsPerPage(20)}>20 Per Page</li>
                  <li onClick={() => setJobsPerPage(25)}>25 Per Page</li>
                  <li onClick={() => setJobsPerPage(30)}>30 Per Page</li>
                  <li onClick={() => setJobsPerPage(filteredJobs.length)}>All</li>
                </ul>
              </div>
            </div>
          </div>
          {currentJobs.map((item, i) => {
            return <OpeningsCard data={item} key={i} className="" />;
          })}

          <div className="pagination">
            {Array.from(
              { length: Math.ceil(filteredJobs.length / jobsPerPage) },
              (_, i) => (
                <button
                  className="pageBtn"
                  key={i}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
          <div className="scrollToTop">
        <ScrollToTopButton/>
      </div>
        </div>
      </div>
    </div>
  );
}

export default AllJobResults;
