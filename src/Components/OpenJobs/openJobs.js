import React from "react";
import { Link } from "react-router-dom";
import "./openJobs.css";
import RecentOpenings from "./recent/recentOpenings";

function OpenJobs({data}) {
  return (
    <div className="openPositions">
      <div className="openPositionsTopContentContainer">
        <div className="openPositionsTopContent">
          <div className="openPositionsHeader">
            <h2>Latest Open Positions</h2>
          </div>

          <div className="openPositionsSubheader">
            <p>
              Access the latest hand-screened inclusive remote opportunities
            </p>
          </div>
        </div>
      </div>
      <div className="openPositionsBottomContent">
        <div className="nav nav-tabs nav-tabs-openJobs-container">
          <ul className="nav nav-tabs nav-tabs-openJobs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Recent
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Urgent
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content tab-content-openJobs" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <RecentOpenings data={data}/>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <RecentOpenings data={data}/>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            <RecentOpenings data={data}/>
          </div>
        </div>
        <div className="seeAllOpenings">
        <Link to="/jobs/results" onClick={() => localStorage.setItem("filteredJobs", JSON.stringify(data))}>View All Jobs</Link>
        </div>
      </div>
    </div>
  );
}

export default OpenJobs;
