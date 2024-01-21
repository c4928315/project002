import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import customIcons from "../../Icons/customIcons";
import VideoPlayer from "../Video/video";

function About() {

  const [seeVideo, setSeeVideo] = useState(false);

  const handleVideo = ( ) => {
    setSeeVideo(!seeVideo)
  }

  return (
    <div className="aboutMain">
      <div className="aboutContainer">
        <div className="aboutLeft">
          <div className="aboutImageBox"></div>
          <h1>
          Your unique experience is your Career accessory to landing a remote job.
          </h1>
          <p>
          Explore a world of remote opportunities and level up your career with Beyond the Savannah!
          </p>
        </div>
        <div className="aboutRight">
          <h1>Hi, I’m Lorraine</h1>
          <h4>A certified Coach and a Seasoned HR Professional</h4>
          <p>
          I am a certified coach and seasoned HR professional with a passion for remote work, blending expertise in both local and global markets. With a keen understanding of human resources dynamics, I bring valuable insights to foster effective collaboration and employee development in the evolving landscape of remote work.
          </p>
          <div className="aboutImageBox2"></div>
        </div>
      </div>
      <div className="aboutMainBtn" onClick={handleVideo}>
       <div className="aboutBtnContainer">
       <Link to="">read lorraine's story</Link>
        <customIcons.rightArrow/>
       </div>
      </div>

      {
        seeVideo &&
         <div className="video">
          <div className="innerVideo">
          <Link onClick={handleVideo}>Back</Link>
            <VideoPlayer/>
          </div>
        </div> 
      }
    </div>
  );
}

export default About;
