import React, { useEffect, useState } from "react";
import "./hero.css";
import customIcons from "../../Icons/customIcons";
import { Link, useNavigate } from "react-router-dom";

function Hero({ data }) {
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

  console.log(filteredJobs);

  return (
    <div className="heroHolder">
      <div className="heroContainer">
        <div className="heroLeft">
          <div className="heroMainP">
            <p>
              Seamless connections, soaring careers. Elevate yours with Beyond The Savannah!
            </p>
          </div>
          <div className="heroMainH">
            <h1>
              Empowering Your Career Journey Through Seamless{" "}
              <span className="connectionsHeroContainer">
                <customIcons.connection size={35} className="connectionsHero" />
              </span>{" "}
              Connections.
            </h1>
          </div>

          <div className="heroMainBtn">
            <button
              onClick={() => navigate("/allJobs/results?search=allJobs")}
              className="getStartedBtn"
            >
              try out our services
            </button>
            <span>
              <customIcons.rightArrow size={18} />
            </span>
          </div>

          <div className="heroMainSecBtn">
            <div className="heroGlobe">
              <customIcons.globe size={20} />
            </div>

            <div className="heroTalk">
              <p>
                Seize new opportunities and find your ideal remote job anytime,
                anywhere
              </p>
              <h6>
                Seamless connections, soaring careers. Elevate yours with
                Beyond The Savannah!
              </h6>
            </div>

            <div className="heroTalkBtnContainer">
              <Link>Remote</Link>
              <Link>Hybrid</Link>
              <Link>On Site</Link>
            </div>
          </div>
        </div>
        

        <div className="grid-container">
          <img src="https://i.postimg.cc/V6JsZmXH/DSC-0811-copyk-removebg-preview.png" alt="heroImg" className="img-responsive" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
