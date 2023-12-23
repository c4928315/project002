import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import DisplayComp from "../../Admin/Companies/DisplayCompany/displayComp";
import JobCategory from "../../Admin/JobCategory/jobCategory";
import "./postJob.css";

function PostJob() {
  return (
    <div className="postJob">
      <input type="checkbox" name="MenuToggle" id="MenuToggle" />
      <aside class="sidebar">
        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <div class="logo">Brand</div>
          <div class="nav_items">
            <Link
              class="active"
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
      <main class="right">
        <label for="MenuToggle" class="toggle__icon">
          <span class="line line1"></span>
          <span class="line line3"></span>
          <span class="line line2"></span>
        </label>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <DisplayComp />
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <JobCategory />
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            2
          </div>
          <div
            class="tab-pane fade"
            id="nav-disabled"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabindex="0"
          >
            <DisplayComp />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PostJob;
