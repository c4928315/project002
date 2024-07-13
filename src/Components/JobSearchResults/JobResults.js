import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LocalContext from "../../Context/contextProvider";
import customIcons from "../../Icons/customIcons";
import Loader from "../Loader/loader";
import OpeningsCard from "../OpenJobs/openingsCard/openingsCard";
import ScrollToTopButton from "../scrollToTop";
import "./jobResults.css";

function JobResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = localStorage.getItem("currentPage") 
    ? parseInt(localStorage.getItem("currentPage"), 10)
    : searchParams.get('page')
    ? parseInt(searchParams.get('page'), 10)
    : 1;

  const storedCategoryId = localStorage.getItem("jobCategoryId");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [newCategoryId, setNewCategoryId] = useState(storedCategoryId);
  const [jobCategoryId, setJobCategoryId] = useState(0);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryStatus, setSearchQueryStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQueryMain, setSearchQueryMain] = useState("");
  const { filteredData, category } = useContext(LocalContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const url = `https://efmsapi-staging.azurewebsites.net/api/Jobs/getAllJobsByCompany?name=${searchQuery}&jobCategoryId=${jobCategoryId}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        setIsLoading(false);
        const data = await response.json();
        setFilteredJobs(data);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, [jobCategoryId, searchQuery]);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredJobsByName = currentJobs.filter((job) =>
    job.jobName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate range
  const totalJobs = filteredJobsByName.length;
  const startingIndex = indexOfFirstJob + 1;
  const endingIndex = Math.min(indexOfLastJob, totalJobs);

  const style = {
    color: "rgba(44, 85, 92, 0.6)",
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    e.preventDefault(); // Prevent default form submission behavior
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQueryMain(searchQuery);
  };

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
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
              <div
                className="formInputResultsContainer"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  border: "1px solid rgb(226, 219, 211)",
                  borderRadius: "1.3vh",
                  paddingLeft: "1em",
                }}
              >
                <customIcons.search size={22} className="jobResultsIcon" />
                <input
                  type="text"
                  className="jobResultsBottomInput"
                  placeholder="Job Title"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </div>
            </div>

            <div className="jobResultsBottomInputContainer">
              <label>Category</label>
              <div
                className="formInputResultsContainer"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  border: "1px solid rgb(226, 219, 211)",
                  borderRadius: "1.3vh",
                  paddingLeft: "1em",
                }}
              >
                <customIcons.category size={22} className="jobResultsIcon" />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ width: "90%", border: "none" }}
                  onChange={(e) => {
                    const categoryId = parseInt(e.target.value, 10);
                    localStorage.setItem("jobCategoryId", categoryId);
                    setJobCategoryId(categoryId);
                  }}
                >
                  <option selected>Select</option>
                  {category?.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button onClick={(e) => handleSearch(e)}>Find Job</button>
          </div>

          <>
            {isLoading ? (
              <Loader />
            ) : filteredJobsByName.length === 0 ? (
              <div className="nojobsPhrase">
                <div className="nojobsPhraseInner">
                  <div className="nojobsPhraseIconHolder">
                    <div className="nojobsPhraseIcon">
                      <customIcons.document style={style} size={54} />
                    </div>
                  </div>
                  <div>
                    <h3 className="nojobsPhraseHeader">No jobs found</h3>
                    <p className="nojobsPhraseP">
                      Try adjusting your search and or filter to find what you are looking for.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="jobResultsBottomRight">
                <div className="jobRangeContainer">
                  <div className="jobRange">
                    Showing {startingIndex} to {endingIndex} of {totalJobs}
                  </div>

                  <div className="jobRangeDropdown">
                    <div className="dropdown" id="byDefault">
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
                        {`${jobsPerPage} Per Page`}
                      </button>
                      <ul className="dropdown-menu">
                        <li onClick={() => setJobsPerPage(5)}>5 Per Page</li>
                        <li onClick={() => setJobsPerPage(10)}>10 Per Page</li>
                        <li onClick={() => setJobsPerPage(15)}>15 Per Page</li>
                        <li onClick={() => setJobsPerPage(20)}>20 Per Page</li>
                        <li onClick={() => setJobsPerPage(25)}>25 Per Page</li>
                        <li onClick={() => setJobsPerPage(30)}>30 Per Page</li>
                        <li onClick={() => setJobsPerPage(filteredJobs.length)}>
                          All
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {filteredJobsByName.map((item, i) => (
                  <OpeningsCard data={item} key={i} currentPage={currentPage} />
                ))}

                <div className="pagination">
                  {/* Previous Button */}
                  <button
                    className="pageBtnPrevNext pageBtnPrev"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => {
                    // Display only adjacent page numbers along with current page
                    if (
                      i + 1 === currentPage ||
                      i + 2 === currentPage ||
                      i === currentPage ||
                      i - 1 === currentPage ||
                      i + 1 === currentPage
                    ) {
                      return (
                        <button
                          className={`pageBtn ${currentPage === i + 1 ? "activePage" : ""}`}
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      );
                    }
                    return null;
                  })}

                  {/* Next Button */}
                  <button
                    className="pageBtnPrevNext pageBtnNext"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>

                <div className="scrollToTop">
                  <ScrollToTopButton />
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default JobResults;
