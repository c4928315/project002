import React, { useEffect } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";

function ViewCoachingSesh() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
        <div>
            <h1>Coaching Session</h1>
            <p>
            <b>Unlock Your Full Potential with a 1-Hour Coaching Session </b>
            </p>
            <p>
            Embark on a journey of self-discovery, self-assessment, and goal setting that will transform the way you approach your career and personal growth.
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
              Identify Challenges: Pinpoint any obstacles or challenges that may be holding you back from reaching your full potential.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Set Clear Goals: Define concrete, achievable goals that align with your ambitions.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Develop Action Plans: Craft actionable strategies to overcome challenges and turn your goals into reality.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Chart Your Course: Create a roadmap for your personal and professional journey.
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
          Invest in yourself and take the first step toward a brighter, more fulfilling future. Book your 1-hour coaching session today to start your transformative journey!
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

export default ViewCoachingSesh;