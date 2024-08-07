import React from "react";
import "./openingsCard.css";
import customIcons from "../../../Icons/customIcons";
import { useNavigate } from "react-router-dom";

function OpeningsCard({ data, currentPage }) {
  const navigate = useNavigate();

  console.log(data);

  const handleTitleClick = () => {
    localStorage.setItem("clickedJob", safeStringify(data));
    localStorage.setItem("currentPage", safeStringify(currentPage));
    navigate(`/jobs/${data.jobsId}/${encodeURIComponent(data.jobTitle)}?page=${currentPage}`);
  };

  const duration = () => {
    if (data.perYear) return <>Year</>;
    if (data.perMonth) return <>Month</>;
    if (data.perDay) return <>Day</>;
    if (data.perHour) return <>Hour</>;
  };

  return (
    <div className="openingCardContainer">
      <div
        className="companyLogo"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
        <div className="leftOpeningCardIcon">
          <span>
            <customIcons.money size={17} style={{ color: "#767676" }} />
          </span>
          <span className="leftOpeningCardSalary">
            <p>See Job Detail</p>
          </span>
        </div>
      </div>
      <div className="jobDuration">
        <button onClick={() => navigate("/login")}>More like this</button>
      </div>
    </div>
  );
}

function safeStringify(obj, replacer = null, spaces = 2) {
  const cache = new Set();
  const result = JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return;
      }
      cache.add(value);
    }
    return replacer ? replacer(key, value) : value;
  }, spaces);
  cache.clear();
  return result;
}

export default OpeningsCard;
