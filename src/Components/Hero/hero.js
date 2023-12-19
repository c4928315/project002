import React from "react";
import "./hero.css";
import customIcons from "../../Icons/customIcons";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="heroContainer">
      {/* <div className="blob1">

        </div> */}
      <div className="heroLeft">
        <div className="heroMainH">
          <h1>
            Empowering Your Career Journey Through Seamless{" "}
            <span className="connectionsHeroContainer">
              <customIcons.connection size={35} className="connectionsHero" />
            </span>{" "}
            Connections.
          </h1>
        </div>

        <div className="heroMainP">
          <p>
            Seamless connections, soaring careers. Elevate yours with comapany
            name!
          </p>
        </div>

        <div className="heroMainBtn">
          <span>
            <customIcons.getStarted size={18} />
          </span>
          <button className="getStartedBtn">get started</button>
        </div>

        <div className="heroMainSecBtn">
          <div className="heroGlobe">
            <customIcons.globe size={20} />
          </div>

          <div className="heroTalk">
            <p>
              Take a click of faith and land your dream job anywhere anytime
            </p>
            <h6>
              Seamless connections, soaring careers. Elevate yours with comapany
              name!
            </h6>
          </div>

          <div className="heroTalkBtnContainer">
            <Link>Remote</Link>
            <Link>Hybrid</Link>
            <Link>On Site</Link>
          </div>
        </div>
      </div>
      {/* <div className="heroRight">
        <div className="blobImg">
          <div className="heroImgContainer"></div>
          <div className="heroImgContainer6">
            <span>
              <customIcons.scan size={25} style={{ color: "#7ad03a" }} />
            </span>
          </div>
        </div>

        <div className="blobContainer1">
          <div className="heroImgContainer5">
            <img
              src="https://i.postimg.cc/0Q8jCWNY/pencil-png-664.png"
              alt="pencil"
            />
          </div>
          <div className="heroImgContainer1"></div>
        </div>

        <div className="heroImgContainer2"></div>

        

        <div className="blobContainer">
          <div className="heroImgContainer3"></div>
          <div className="heroImgContainer4"></div>
        </div>
      </div> */}

      <div className="grid-container">
        <div className="grid-item grid-item1"></div>
        <div className="grid-item grid-item2">
          <span>
            <customIcons.scan size={25} style={{ color: "#7ad03a" }} />
          </span>
        </div>
        <div className="grid-item grid-item3">
          <img
            src="https://i.postimg.cc/0Q8jCWNY/pencil-png-664.png"
            alt="pencil"
          />
        </div>
        <div className="grid-item grid-item4"></div>
        <div className="grid-item grid-item5"></div>
        <div className="grid-item grid-item6"></div>
        <div className="grid-item grid-item7"></div>
      </div>
    </div>
  );
}

export default Hero;
