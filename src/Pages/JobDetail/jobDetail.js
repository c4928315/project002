import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTopButton from "../../Components/scrollToTop";
import customIcons from "../../Icons/customIcons";
import "./jobDetail.css";

function JobDetail() {
  const { id, jobTitle } = useParams();

  const [data, setData] = useState([]);

  const storedJobString = localStorage.getItem("clickedJob");

  const storedJob = JSON.parse(storedJobString);

  useEffect(() => {
    const apiUrl = `https://efmsapi-staging.azurewebsites.net/api/Jobs/getAllJobsSections?jobId=${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (HTTP status: ${response.status})`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id, jobTitle]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function formatDateString(inputDateString) {
    const inputDate = new Date(inputDateString);

    // Options for formatting the output date
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      inputDate
    );

    return formattedDate;
  }

  const interpretMarkers = (content) => {
    return content
      .replace(/p>/g, "<p>")
      .replace(/ul>/g, "<ul>")
      .replace(/b>/g, "<b>")
      .replace(/li>/g, "<li>");
  };

  console.log("storedJobString", data);

  const [sendEmail, setSendEmail] = useState(false);

  useEffect(() => {
    if (
      storedJob.companyName === "Prevention Collaborative" &&
      storedJob.jobName === "Social Media Content Producer"
    ) {
      setSendEmail(!sendEmail);
    }
  }, [id]);

  return (
    <div className="jobDetail">
      <div className="jobDetailTop">
        <div className="jobDetailLogo">
          <div className="detailsImgLogo">
            <img src={storedJob.imageUrl} alt={storedJob.company} />
          </div>

          <div className="jobDetailTitle">
            <h3>{storedJob.jobTitle}</h3>
          </div>

          <div className="jobDetailIconContainer">
            <div className="jobDetailIcon">
              <span>
                <customIcons.home size={18} />
              </span>
              <span className="iconText">{storedJob.companyName}</span>
            </div>
            <div className="jobDetailIcon">
              <span>
                <customIcons.case size={18} />
              </span>
              <span className="iconText">{storedJob.jobName}</span>
            </div>
            {/* <div className="jobDetailIcon">
              <span>
                <customIcons.location size={18} />
              </span>
              <span className="iconText">{storedJob.location}</span>
            </div> */}
            <div className="jobDetailIcon">
              <span>
                <customIcons.time size={18} />
              </span>
              <span className="iconText">
                {formatDateString(storedJob.endDate)}
              </span>
            </div>
          </div>

          <div className="detailsJobDuration">
            <span>{storedJob.jobCategory}</span>
          </div>
          {/* <div className="detailsApplyBtn">
            {sendEmail ? (
              <Link
                to={`mailto:${storedJob.jobUrl}?subject=Application for ${storedJob.jobName}`}
                target="_blank"
              >
                <button>Apply Now</button>
              </Link>
            ) : (
              <Link to={storedJob.jobUrl} target="_blank">
                <button>Apply Now</button>
              </Link>
            )}
          </div> */}
          <div className="detailsApplyBtn">
            {sendEmail ? (
              <a
                href={`mailto:${storedJob.jobUrl}?subject=Application for ${storedJob.jobName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Apply Now Via Email</button>
              </a>
            ) : (
              <a
                href={storedJob.jobUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Apply Now</button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="jobDetailsBottom">
        <div className="">
          <div className="jobDetailsBottomCard">
            <h4 className="jobDetailsBottomCardMainTitle">Job Overview</h4>
            <div className="jobDetailsBottomCardText">
              <div className="jobDetailsBottomCardTextContent">
                <span className="cardTextContentIcon">
                  <customIcons.date size={21} />
                </span>
                <span className="cardTextContentTitle">
                  <h4>Date Posted</h4>
                  <p>{formatDateString(storedJob.dateCreated)}</p>
                </span>
              </div>
              <div className="jobDetailsBottomCardTextContent">
                <span className="cardTextContentIcon">
                  <customIcons.location size={21} />
                </span>
                <span className="cardTextContentTitle">
                  <h4>Location</h4>
                  <p>{storedJob.location}</p>
                </span>
              </div>
              <div className="jobDetailsBottomCardTextContent">
                <span className="cardTextContentIcon">
                  <customIcons.sandOfTime size={21} />
                </span>
                <span className="cardTextContentTitle">
                  <h4>Expiration Date</h4>
                  <p>{formatDateString(storedJob.endDate)}</p>
                </span>
              </div>
            </div>
          </div>
          {data.map((item, i) => {
            return (
              <div className="jobDetailsBottomOthers" key={i}>
                <div className="jobDetailsBottomOthersH">
                  <h1>{item.sectionName}</h1>
                </div>
                <div className="jobDetailsBottomOthersp">
                  <div
                    className="jobDetailsP"
                    dangerouslySetInnerHTML={{
                      __html: interpretMarkers(item.sectionDescription),
                    }}
                  />
                </div>
              </div>
            );
          })}

          <div className="jobDetailsLinks">
            <p>share this link</p>
            <div className="jobDetailsLinksBtns">
              <Link to="https://www.instagram.com" target="_blank">
                <button className="btnFB">
                  <span>
                    <customIcons.instagram size={20} />
                  </span>
                  <span>instagram</span>
                </button>
              </Link>
              <Link to="https://www.tiktok.com" target="_blank">
                <button className="btnTwitter">
                  <span>
                    <customIcons.tiktok size={20} />
                  </span>
                  <span>tiktok</span>
                </button>
              </Link>
              <Link to="https://www.linkedin.com/login" target="_blank">
                <button className="btnLinkIn">
                  <span>
                    <customIcons.linkedin size={20} />
                  </span>
                  <span>linkedin</span>
                </button>
              </Link>
              <Link to="https://www.youtube.com" target="_blank">
                <button className="btnPin">
                  <span>
                    <customIcons.youtube size={20} />
                  </span>
                  <span>youtube</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollToTop">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default JobDetail;
