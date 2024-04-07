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
          <div className="detailsApplyBtn">
            <Link to={storedJob.jobUrl} target="_blank">
              <button>Apply Now</button>
            </Link>
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

          {/* <div className="jobDetailsBottomDescription">
            <h4 className="jobDetailsBottomCardMainTitle">Job Description</h4>
            <div className="jobDetailsBottomDescriptionPcontainer">
              {storedJob.jobDescription}
            </div>
          </div> */}

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

          {/* <div className="jobDetailsBottomOthers">
            <div className="jobDetailsBottomOthersH">
              <h1>Desired Qualifications</h1>
            </div>
            <ul>
              <li className="jobDetailsP">
                Experience with SEO, SEM, digital marketing, inbound marketing,
                B2B social media, and/or B2B sales, ideally outside of the
                classroom (e.g. personal projects, internships, and co-ops)
              </li>
              <li className="jobDetailsP">
                Strong written and verbal communications skills, especially for
                Linkedin, Twitter, and Medium
              </li>
              <li className="jobDetailsP">
                Knowledge of CRMs like Hubspot, as well as SEO / SEM tools like
                Semrush and Google Search Console
              </li>
              <li className="jobDetailsP">
                An interest in quant trading, market data, and/or the financial
                industry
              </li>
              <li className="jobDetailsP">
                A desire to work at a fast-growing fintech startup
              </li>
            </ul>

            <div className="jobDetailsBottomOthersp">
              <p className="jobDetailsP">
                <b>
                  No financial experience is required, but we prioritize folks
                  with an interest in the industry.
                </b>{" "}
                No financial experience is required, but we prioritize folks
                with an interest in the industry. We genuinely nurture each
                individual to become an integral part of society, no matter
                where you go in the future. After the internship, you’ll have
                the option to work part-time throughout the year until
                graduation. We’ve hired interns from as early as sophomore year,
                who are now a core part of our team. This internship is 100%
                remote and location-agnostic, so you’re welcome to live where
                ever you want – we can pay you in your local currency, and we
                sponsor H1Bs and other visas.
              </p>
            </div>

            <div className="jobDetailsBottomOthersp">
              <p className="jobDetailsP">
                <b>
                We accept applications on a rolling basis and are flexible on timing.
                </b>{" "}
                Some internships last for the summer, while others last throughout the semester. While internships traditionally target students, we are open to early- and mid-career folks who are looking to transition into sales or marketing.
              </p>
            </div>

            <div className="jobDetailsBottomOthersp jobDetailsBottomOthersNewP">
              <p className="jobDetailsP">
              Databento, Inc provides equal employment opportunities to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, disability, sexual orientation, gender identity or expression, veteran status, or genetics. In addition to federal law requirements, Databento complies with applicable state and local laws governing nondiscrimination in employment in every location in which the company has facilities. This policy applies to all terms and conditions of employment, including recruiting, hiring, placement, promotion, termination, layoff, recall, transfer, leaves of absence, compensation and training. Pursuant to applicable laws, we will consider for employment qualified applicants with arrest and conviction records. And if you believe that you will need any type of accommodation, please let us know.
              </p>
            </div>

            <div className="jobDetailsBottomOthersp">
              <p className="jobDetailsP">
              Our recruiting data suggests that underrepresented applicants often downplay their skills. Even if your experience doesn’t exactly match the qualifications listed, we still want to hear from you. Please apply!
              </p>
            </div>
          </div> */}

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
