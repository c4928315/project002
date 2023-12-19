import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customIcons from "../../Icons/customIcons";
import "./jobDetail.css";

function JobDetail() {
  const { id, jobTitle } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const apiUrl = `https://intra-deco.onrender.com/openPositions/${id}`;

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

  console.log(data);

  return (
    <div className="jobDetail">
      <div className="jobDetailTop">
        <div className="jobDetailLogo">
          <div className="detailsImgLogo">
            <img src={data.companyLogo} alt={data.company} />
          </div>

          <div className="jobDetailTitle">
            <h3>{data.jobTitle}</h3>
          </div>

          <div className="jobDetailIconContainer">
            <div className="jobDetailIcon">
              <span>
                <customIcons.home size={18} />
              </span>
              <span className="iconText">{data.company}</span>
            </div>
            <div className="jobDetailIcon">
              <span>
                <customIcons.case size={18} />
              </span>
              <span className="iconText">{data.jobTitle}</span>
            </div>
            <div className="jobDetailIcon">
              <span>
                <customIcons.location size={18} />
              </span>
              <span className="iconText">{data.location}</span>
            </div>
            <div className="jobDetailIcon">
              <span>
                <customIcons.time size={18} />
              </span>
              <span className="iconText">{data.datePosted}</span>
            </div>
          </div>

          <div className="detailsJobDuration">
            <span>full time</span>
          </div>
          <div className="detailsApplyBtn">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
      <div className="jobDetailsBottom">
        <div className="jobDetailsBottom">
          <div className="jobDetailsBottomCard">
            <h4 className="jobDetailsBottomCardMainTitle">Job Overview</h4>
            <div className="jobDetailsBottomCardText">
              <div className="jobDetailsBottomCardTextContent">
                <span className="cardTextContentIcon">
                  <customIcons.date size={21} />
                </span>
                <span className="cardTextContentTitle">
                  <h4>Date Posted</h4>
                  <p>{data.datePosted}</p>
                </span>
              </div>
              <div className="jobDetailsBottomCardTextContent">
                <span className="cardTextContentIcon">
                  <customIcons.location size={21} />
                </span>
                <span className="cardTextContentTitle">
                  <h4>Location</h4>
                  <p>{data.location}</p>
                </span>
              </div>
              <div className="jobDetailsBottomCardTextContent">
                <span className="cardTextContentIcon">
                  <customIcons.sandOfTime size={21} />
                </span>
                <span className="cardTextContentTitle">
                  <h4>Expiration Date</h4>
                  <p>{data.expirationDate}</p>
                </span>
              </div>
            </div>
          </div>

          <div className="jobDetailsBottomDescription">
            <h4 className="jobDetailsBottomCardMainTitle">Job Description</h4>
            <div className="jobDetailsBottomDescriptionPcontainer">
              <div className="jobDetailsBottomDescriptionP">
                <p className="jobDetailsP">
                  The financial industry is growing at a record pace, but our
                  data providers are still stuck in the past — with cumbersome
                  onboarding processes, complicated APIs, slow infrastructure,
                  and expensive licensing costs.
                </p>
              </div>
              <div className="jobDetailsBottomDescriptionP">
                <p className="jobDetailsP">
                  Databento is the next-generation market data provider — with
                  the radical idea that you should only pay for the data that
                  you use. We power the world’s largest finance and fintech
                  institutions and lower the barrier of entry for small
                  startups.
                </p>
              </div>
              <div className="jobDetailsBottomDescriptionP">
                <p className="jobDetailsP">
                  Since starting in 2019, we’ve raised over $27.8M in funding
                  and have over 2,000 companies signed up pre-launch. Our team
                  consists of former data users from firms like Two Sigma,
                  Belvedere, Pico, Bloomberg, Pinterest, and Google.
                </p>
              </div>
              <div className="jobDetailsBottomDescriptionP">
                <p className="jobDetailsP">
                  We offer health, dental, disability, and life insurance
                  benefits, as well as 401(k) matching and visa sponsorships. We
                  accommodate 100% remote work, with teammates living around the
                  globe and paid in their local currency.
                </p>
              </div>
            </div>
          </div>

          <div className="jobDetailsBottomOthers">
            <div className="jobDetailsBottomOthersH">
              <h1>Responsibilities</h1>
            </div>
            <div className="jobDetailsBottomOthersp">
              <p className="jobDetailsP">
                You’ll be helping us ideate and execute on SEO, SEM, and related
                campaigns. You’ll also get the opportunity to interact with our
                current and prospective users, as well as across the engineering
                and product teams at Databento.
              </p>
            </div>
          </div>

          <div className="jobDetailsBottomOthers">
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
          </div>

          <div className="jobDetailsLinks">
            <p>share this link</p>
            <div className="jobDetailsLinksBtns">
            <button className="btnFB">
              <span><customIcons.facebook size={20}/></span>
              <span className="jobDetailsLinksBtnsText">facebook</span>
            </button>
            <button className="btnTwitter">
              <span><customIcons.x/></span>
              <span>twitter</span>
            </button>
            <button className="btnLinkIn">
              <span><customIcons.linkedin/></span>
              <span>linkedin</span>
            </button>
            <button className="btnPin">
              <span><customIcons.pintrest/></span>
              <span>pinterest</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
