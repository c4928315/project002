import React, { useEffect } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";

function ViewService() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
          <div className="productContents">
            <h1>ATS CV Revamp</h1>
            <p>
              Navigating the Applicant Tracking System (ATS) is crucial in
              today's competitive job market, and we're here to help you excel.
              Our comprehensive package includes an ATS-compliant CV and a
              precision-crafted ATS-compliant cover letter, tailored to your
              specific job application needs.
            </p>
          </div>
        </div>
      </div>
      <div className="viewSBottom">
        <h1>Benefits</h1>
        <div className="viewSBottomFlex">
          <div className="viewSBottomPs">
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                ATS-Compliant CV: We'll create a CV that passes through ATS
                filters with ease, ensuring your qualifications and experience
                are properly recognized by employers.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                ATS-Compliant Cover Letter: Craft a cover letter that
                complements your CV and grabs the attention of hiring managers.
                We'll make sure it meets ATS standards and showcases your
                motivation.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Bonus: As a special bonus, we're offering insights into three
                job openings currently available, giving you a head start in
                your job search.
              </p>
            </span>
          </div>

          <div className="viewSBottomBtns">
            <button className="viewSBottomBtnsPurchase">Purchase</button>
            <button>More</button>
          </div>
        </div>
        <div className="viewSBottomNB">
          <p>
            This is the boost your career needs. Take action today to increase
            your chances of landing your dream job. Book our ATS CV Revamp and
            Cover Letter package now!
          </p>
        </div>
        <hr />
      </div>

     <div className="viewServiceMedia">
        <h1>For Tutorials Visit</h1>
     <div className="containerzz">
        <div className="cardzz">
          <div className="image">
            <img
              href="#"
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div className="contentzz">
            <p>
             <span><customIcons.tiktok className="contentzzIcon2" size={30}/></span>
            </p>
          </div>
        </div>
        <div className="cardzz">
          <div className="image">
            <img
              href="#"
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div className="contentzz">
            <p>
              <span><customIcons.youtube className="contentzzIcon1" size={55}/></span>
            </p>
          </div>
        </div>
        <div className="cardzz">
          <div className="image">
            <img
              href="#"
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div className="contentzz">
            <p>
              <span><customIcons.instagram className="contentzzIcon2 contentzzIconInsta" size={30}/></span>
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default ViewService;
