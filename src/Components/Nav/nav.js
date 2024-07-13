import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LocalContext from "../../Context/contextProvider";
import customIcons from "../../Icons/customIcons";
import VideoPlayer from "../Video/video";
import "./nav.css";

function Nav() {
  const { jobCategoryId, setJobCategoryId, companies } = useContext(LocalContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleCategory = () => {
    setJobCategoryId()
  }

  const [seeVideo, setSeeVideo] = useState(false);

  const handleVideo = ( ) => {
    setSeeVideo(!seeVideo)
  }


  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mainNavContainer">
          <Link to="/" className="navbar-brand">
            {/* <img src="https://i.postimg.cc/Z5bsQDrp/Logo-Design-removebg-preview.png" alt="logo" /> */}
            <div className="logoCircle"></div>
            <div className="logoBox">
              <h3>B</h3>
            </div>
            <h5>BEYOND SAVANNAH CONSULTING LIMITED</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mainNavCollapse"
            id="navbarNav"
          >
            <ul className="navbar-nav mainNavCollapseItems">
              <li className="nav-item mainNavItem findJobContainer">
                <Link
                  className="nav-link active findJobLink"
                  aria-current="page"
                  to="jobs/results"
                  onClick={() => setJobCategoryId(0)}
                >
                  Find Jobs
                </Link>
              </li>
              <li className="nav-item mainNavItem">
                <Link to="/companies" className="nav-link">
                  Companies
                </Link>
              </li>
              <li className="nav-item mainNavItem findJobContainer">
                <Link className="nav-link">Resources</Link>
                <div className="pointerDropdown">
                  <div className="pointer"></div>
                  <div className="nav-item-dropdown">
                    <ul>
                      <li>
                        <Link>CV Template</Link>
                      </li>
                      <li>
                        <Link to="">Blog / Newsletter</Link>
                      </li>
                      <li
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link to="" className="serviceLink">
                          Our Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <>
                    <ul
                      className={`subDropDown ${
                        isDropdownVisible ? "visible" : ""
                      }`}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="subDropDownInner">
                        <li>
                          <Link to="/viewService" className="dropdown-item active">CV Revamp</Link>
                        </li>
                        <li>
                          <Link to="/viewLStudentPack" className="dropdown-item"> Student's Package </Link>
                        </li>
                        <li>
                          <Link to="/viewLinkedIn" className="dropdown-item"> Linkedin Optimisation</Link>
                        </li>
                        <li>
                          <Link to="/viewCoachingSesh" className="dropdown-item">Coaching Session</Link>
                        </li>
                        <li>
                          <Link to="/viewInterview" className="dropdown-item"> Interview Prep</Link>
                        </li>
                      </div>
                    </ul>
                  </>
                </div>
              </li>
              <li className="nav-item mainNavItem">
                <Link className="nav-link" onClick={handleVideo}>About</Link>
              </li>
              {/* <li className="nav-item mainNavItem">
                <Link className="nav-link">Remote Worker’s Spotlight</Link>
              </li> */}
              <li className="nav-item mainNavItem newJobSignContainer">
                <Link to="" className="nav-link">
                  Post Job
                </Link>
                <div className="newJobSign">
                  <p>New</p>
                </div>
              </li>
              <Link to="/AdminArea">.</Link>
            </ul>
            <div className="notifications">
              <customIcons.bell size={24} />
            </div>
          </div>
        </div>
      </nav>

      {
        seeVideo &&
         <div className="video">
          <div className="innerVideo">
          <Link onClick={handleVideo}>Back</Link>
            <VideoPlayer/>
          </div>
        </div> 
      }
    </div>
  );
}

export default Nav;
