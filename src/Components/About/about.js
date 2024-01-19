import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import customIcons from "../../Icons/customIcons";

function About() {
  return (
    <div className="aboutMain">
      <div className="aboutContainer">
        <div className="aboutLeft">
          <div className="aboutImageBox"></div>
          <h1>
            Be true to your values and personal vision to get more out of life
          </h1>
          <p>
            Platea proin eu ligula ac vestibulum primis duis mi, inceptos libero
            justo vulputate fusce risus tristique quis, rutrum non lacus semper
            cursus laoreet felis placerat proin ultrices ullamcorper lobortis.
          </p>
        </div>
        <div className="aboutRight">
          <h1>Hi, I’m Lorraine</h1>
          <h4>Accredited Professional Coach</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam
            curabitur ornare ante interdum natoque eu, varius malesuada
            imperdiet congue per eleifend lectus vivamus
          </p>
          <div className="aboutImageBox2"></div>
        </div>
      </div>
      <div className="aboutMainBtn">
       <div className="aboutBtnContainer">
       <Link to="">read lorraine's story</Link>
        <customIcons.rightArrow/>
       </div>
      </div>
    </div>
  );
}

export default About;
