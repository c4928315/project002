import React, { useContext, useState } from "react";
import "./companyCard.css";
import customIcons from "../../Icons/customIcons";
import LocalContext from "../../Context/contextProvider";
import { Link } from "react-router-dom";

function CompanyCard({ data }) {
  const [companyIdLocal, setCompanyIdLocal] = useState(0);
  const [jobCategoryIdLocal, setJobCategoryIdLocal] = useState(0);
  const {
    setJobCategoryId,
    jobCategoryId,
    filteredData,
    isLoading,
    category,
    companyId,
    setCompanyId,
    name,
    setName,
  } = useContext(LocalContext);

  const[item, setItem] = useState([])

  console.log(companyIdLocal);

const handleClick = (item, id) => {
    setCompanyIdLocal(item.id);
    localStorage.setItem("companyId", item.id);
    setJobCategoryIdLocal(id);
    localStorage.setItem("jobCategoryCompany", id);
    localStorage.setItem("selectedCompany", JSON.stringify(item));
};


  return (
    <>
      {data.map((item) => {
        return (
          <div className="companyCardHolder" key={item}>
            <div className="companyCardInner">
              <div className="companyCardBtn">
                <button className="btnHy">
                  <Link
                    to="/company/jobs/results"
                    onClick={() => handleClick(item, 3)}
                  >
                    Hybrid
                  </Link>
                </button>
                <button className="btnOn" >
                  <Link
                    to="/company/jobs/results"
                    onClick={() => handleClick(item, 4)}
                    style={{color: "black"}}
                  >
                    On Site
                  </Link>{" "}
                </button>
                <button className="btnRm">
                  <Link
                    to="/company/jobs/results"
                    onClick={() => handleClick(item, 2)}
                  >
                    Remote
                  </Link>
                </button>
              </div>
              <div className="companyCardContent">
                <div className="companyCardLeft">
                  <div className="leftOpeningCardIcon">
                    <span>
                      <customIcons.home
                        size={17}
                        style={{ color: "#767676" }}
                      />
                    </span>
                    <span className="openingCardCompany">
                      <p>{item.name}</p>
                    </span>
                  </div>
                  <div className="leftOpeningCardIcon">
                    <span>
                      <customIcons.pin size={17} style={{ color: "#767676" }} />
                    </span>
                    <span className="openingCardCompany">
                      <p>{item.headQuarters}</p>
                    </span>
                  </div>
                  <div className="leftOpeningCardIcon">
                    <span>
                      <customIcons.phone
                        size={13}
                        style={{ color: "#767676", marginRight: "0.2em" }}
                      />
                    </span>
                    <span className="openingCardCompany">
                      <p>{item.phoneNumber}</p>
                    </span>
                  </div>
                  <div className="leftOpeningCardIcon">
                    <span>
                      <customIcons.email
                        size={13}
                        style={{ color: "#767676", marginRight: "0.2em" }}
                      />
                    </span>
                    <span className="openingCardCompany">
                      <p>{item.email}</p>
                    </span>
                  </div>
                </div>
                <div
                  className="companyCardLogo"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CompanyCard;
