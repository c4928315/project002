import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import DisplayComp from "../../Admin/Companies/DisplayCompany/displayComp";
import JobCategory from "../../Admin/JobCategory/jobCategory";
import DisplayJobs from "../../Admin/Jobs/jobs";
import "./postJob.css";

function PostJob() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="postJob">
      <input type="checkbox" name="MenuToggle" id="MenuToggle" />
      <aside className="sidebar">
        <nav className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link className="logoLink" to="/"><div className="logo">Brand</div></Link>
          <div className="nav_items">
            <Link
              className="active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              companies
            </Link>
            <Link
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Job Categories
            </Link>
            <Link
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Users
            </Link>
            <Link
              id="nav-disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-disabled"
              role="tab"
              aria-controls="nav-disabled"
              aria-selected="false"
            >
              Jobs
            </Link>
          </div>
        </nav>
      </aside>
      <main className="right">
        <label for="MenuToggle" className="toggle__icon">
          <span className="line line1"></span>
          <span className="line line3"></span>
          <span className="line line2"></span>
        </label>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <DisplayComp />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <JobCategory />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            2
          </div>
          <div
            className="tab-pane fade"
            id="nav-disabled"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabindex="0"
          >
            <DisplayJobs />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PostJob;
