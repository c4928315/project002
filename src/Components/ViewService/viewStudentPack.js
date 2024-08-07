import React, { useEffect, useState } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";
import BeforeServiceView from "./beforeServiceView";

function ViewStudentPack() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
          <div>
            <h1>Students Package</h1>
            <p>
              <b>
                Enhance Your Job Application Package with a Comprehensive CV
                Review and Cover Letter
              </b>
            </p>
            <p>
              Unlock the full potential of your job search with our tailored CV
              review and cover letter services. This package is designed to
              empower you in your career journey by ensuring your application
              materials stand out to potential employers.
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
                Unlock the full potential of your job search with our tailored
                CV review and cover letter services. This package is designed to
                empower you in your career journey by ensuring your application
                materials stand out to potential employers.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
                Cover Letter: Craft a compelling cover letter that highlights
                your strengths and showcases your motivation. We'll help you
                create a personalized cover letter that makes a strong
                impression.
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
            <button className="viewSBottomBtnsPurchase" onClick={handlePopUp}>
              Purchase
            </button>
            <button onClick={handlePopUp}>More</button>
          </div>
        </div>
        <div className="viewSBottomNB">
          <p>
            This is the boost your career needs. Take action today to increase
            your chances of landing your dream job. Book our CV Review and Cover
            Letter package now!
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
                <span>
                  <customIcons.tiktok className="contentzzIcon2" size={30} />
                </span>
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
                <span>
                  <customIcons.youtube className="contentzzIcon1" size={55} />
                </span>
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
                <span>
                  <customIcons.instagram
                    className="contentzzIcon2 contentzzIconInsta"
                    size={30}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {popUp && <BeforeServiceView  popUpState={setPopUp}/>}
    </div>
  );
}

export default ViewStudentPack;
