import React, { useEffect } from "react";
import "./viewService.css";
import customIcons from "../../Icons/customIcons";

function ViewLinkedIn() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="viewScontainer">
      <div className="viewSTop">
        <div className="viewStopImg"></div>
        <div className="viewStopText">
          <div>
            <h1>LinkedIn Optimization</h1>
            <p>
            <b>Elevate Your Professional Brand with a 45-Minute LinkedIn Profile Optimization Session</b>
            </p>
            <p>
            Your LinkedIn profile is your digital business card, and it has the power to make a lasting impression on potential employers, clients, and professional connections. Join us for a focused 45-minute virtual consultation designed to revamp and optimize your LinkedIn profile for success.
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
              Tailored Recommendations: Receive personalized insights and recommendations from an experienced professional.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Profile Enhancements: Discover strategies to boost your visibility and credibility on the world's largest professional network.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Keyword Optimization: Learn how to strategically incorporate industry-relevant keywords into your profile to attract the right opportunities.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Networking Tips: Unlock the secrets to expanding your network and maximizing your connections.
              </p>
            </span>
            <span className="viewSBottomSpans">
              <span>🎯</span>
              <p>
              Actionable Steps: Walk away with actionable steps and a clearer understanding of how to leverage LinkedIn effectively.
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
          Invest in your professional growth and make the most out of your LinkedIn presence. Book your 45-minute LinkedIn Profile Optimization session today and watch your online brand thrive!
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

export default ViewLinkedIn;