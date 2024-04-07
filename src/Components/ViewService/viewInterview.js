import React, { useEffect } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";

function ViewInterview() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
        <div>
            <h1>Interview Preparation</h1>
            <p>
            <b>Prepare for Success with a 2-Hour Guided Interview Preparation Session </b>
            </p>
            <p>
            Your next career move deserves careful planning and strategy. Join us for a comprehensive 2-hour virtual meeting dedicated to interview preparation, where we'll equip you with the tools and confidence you need to succeed.
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
              Discover Your True Self: Gain insights into your strengths, values, and aspirations to better understand your unique path.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Personalized Guidance: Tailored interview coaching that addresses your specific strengths and areas of improvement.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Mock Interviews: Practice makes perfect! We'll conduct mock interviews to help you refine your responses and build confidence.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Strategic Insights: Gain valuable insights into what hiring managers look for and how to stand out as the ideal candidate.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Feedback and Action Plans: Receive constructive feedback and actionable steps to enhance your interview performance.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Your Path to Success: Chart your unique path to interview success, no matter your industry or role.
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
          Invest in yourself and take the next step toward landing your dream job. Book your 2-hour guided interview preparation session today and set yourself up for a brighter career future!
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

export default ViewInterview;