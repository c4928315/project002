import React from "react";
import "./openingsCard.css";
import customIcons from "../../../Icons/customIcons";
import { useNavigate } from "react-router-dom";

function OpeningsCard({ data }) {
  const navigate = useNavigate();

  console.log(data);

  const handleTitleClick = () => {
    // Store the clicked data in local storage
    localStorage.setItem("clickedJob", JSON.stringify(data));

    // Navigate to the job details page
    navigate(`/jobs/${data.jobsId}/${encodeURIComponent(data.jobTitle)}`);
  };

  const duration = () => {
    if (data.perYear === true) {
      return <>Year</>;
    } else if (data.perMonth === true) {
      return <>Month</>;
    } else if (data.perDay) {
      return <>Hour</>;
    } else if (data.perHour === true) {
      return <>Hour</>;
    }
  };

  return (
    <div className="openingCardContainer">
      {/* <img src={data.imageUrl} alt="" className="companyLogo" /> */}
      <div
        className="companyLogo"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
        }}
      ></div>
      <div className="leftOpeningCard">
        <h2 className="openingCardTitle" onClick={handleTitleClick}>
          {data.jobName}
        </h2>
        <div className="leftOpeningCardIcon">
          <span>
            <customIcons.home size={17} style={{ color: "#767676" }} />
          </span>
          <span className="openingCardCompany">
            <p>{data.companyName}</p>
          </span>
        </div>
        <div className="leftOpeningCardIcon openingCardCompany">
          <span>
            <customIcons.case size={17} style={{ color: "#767676" }} />
          </span>
          <span className="leftOpeningCardTitle">
            <p>{data.jobCategory}</p>
          </span>
        </div>
        {/* <div className="leftOpeningCardIcon openingCardCompany">
          <span>
            <customIcons.location size={17} style={{ color: "#767676" }} />
          </span>
          <span className="leftOpeningCardLocation">
            <p>{data.location}</p>
          </span>
        </div> */}
        <div className="leftOpeningCardIcon">
          <span>
            <customIcons.money size={17} style={{ color: "#767676" }} />
          </span>
          <span className="leftOpeningCardSalary">
            {/* <p>Ksh {data.salaryRangeStart} - Ksh {data.salaryRangeEnd} / {duration()}</p> */}
            {/* <p>Ksh {data.salary}</p> */}
            <p>See Job Detail</p>
          </span>
        </div>
      </div>
      <div className="jobDuration">
        <button onClick={() => navigate("/login")}>more like this</button>
      </div>
    </div>
  );
}

export default OpeningsCard;
