import React from "react";
import { Link } from "react-router-dom";
import customIcons from "../../Icons/customIcons";
import "./nav.css"

function Nav() {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mainNavContainer">
          <Link to="/" className="navbar-brand">BRAND</Link>
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
                >
                  Find Jobs
                </Link>
                <div className="pointerDropdown">
                  <div className="pointer"></div>
                  <div className="nav-item-dropdown">
                    <ul>
                      <li>Job Category</li>
                      <li>Job Region</li>
                      <li>Job Type</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item mainNavItem">
                <Link className="nav-link">Remote Companies</Link>
              </li>
              <li className="nav-item mainNavItem findJobContainer">
                <Link className="nav-link">Resources</Link>
                <div className="pointerDropdown">
                  <div className="pointer"></div>
                  <div className="nav-item-dropdown">
                    <ul>
                      <li>CV Template</li>
                      <li>Blog / Newsletter</li>
                      <li>Level Up Your Career</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item mainNavItem">
                <Link className="nav-link">About</Link>
              </li>
              <li className="nav-item mainNavItem">
                <Link className="nav-link">Remote Worker’s Spotlight</Link>
              </li>
              <li className="nav-item mainNavItem newJobSignContainer">
                <Link to="/AdminArea" className="nav-link">Post Job</Link>
                <div className="newJobSign">
                  <p>New</p>
                </div>
              </li>
            </ul>
            <div className="notifications">
              <customIcons.bell size={24}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
