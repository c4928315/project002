import React from "react";
import "./openingsCard.css";
import customIcons from "../../../Icons/customIcons";
import { useNavigate } from "react-router-dom";

function OpeningsCard({ data }) {

    const navigate = useNavigate();



  const duration = () => {
     if(data.perYear === true){
        return <>Year</>
    } else if(data.perMonth === true){
        return <>Month</>
    }else if(data.perDay) {
        return <>Hour</>
    }else if(data.perHour === true){
        return <>Hour</>
    }
  } 
  

  return (
    <div className="openingCardContainer">
      <img src={data.companyLogo} alt="" className="companyLogo" />
      <div className="leftOpeningCard">
        <h2 className="openingCardTitle" onClick={() => navigate(`/jobs/${data.id}/${encodeURIComponent(data.jobTitle)}`)}>{data.jobTitle}</h2>
        <div className="leftOpeningCardIcon">
          <span>
            <customIcons.home size={17} style={{color: "#767676"}}/>
          </span>
          <span className="openingCardCompany"><p>{data.company}</p></span>
        </div>
        <div className="leftOpeningCardIcon openingCardCompany">
          <span>
            <customIcons.case size={17} style={{color: "#767676"}}/>
          </span>
          <span className="leftOpeningCardTitle"><p>{data.departmentTitle}</p></span>
        </div>
        <div className="leftOpeningCardIcon openingCardCompany">
          <span>
            <customIcons.location size={17} style={{color: "#767676"}}/>
          </span>
          <span className="leftOpeningCardLocation"><p>{data.location}</p></span>
        </div>
        <div className="leftOpeningCardIcon">
          <span>
            <customIcons.money size={17} style={{color: "#767676"}}/>
          </span>
          <span className="leftOpeningCardSalary">
            <p>Ksh {data.salaryRangeStart} - Ksh {data.salaryRangeEnd} / {duration()}</p>
          </span>
        </div>
      </div>
      <div className="jobDuration">
        <button onClick={() => navigate("/login")}>full time</button>
      </div>
    </div>
  );
}

export default OpeningsCard;
