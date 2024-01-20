import React from "react";
import "./testimonials.css";
import customIcons from "../../Icons/customIcons";

function Testimonials() {
  const style = {
    width: "10px",
    height: "10px",
  };

  return (
    <div
    id="carouselExampleIndicators"
    className="carousel slide testimonaialCarousel"
    data-bs-ride="carousel"
    data-bs-interval="2000"
    >
      <div className="carousel-indicators testimonyActive">
        <button
          className="navBtn active"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          style={style}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          className="navBtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          style={style}
          aria-label="Slide 2"
        ></button>
        <button
          className="navBtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          style={style}
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="testimonyDiv1">
        <div className="testimonyDivInner"></div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active testimonyItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
               <customIcons.quote className="quote" size={32}/>
              </div>
            </div>
            <p className="userTestimony">
              Good morning Lorraine, i hope you well. Following you numerous posts on the remote jobs i have luckily been shortlisted by clipboard health on the...
            </p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22}/>
                <p className="userName">Annonymous</p>
                <customIcons.waves size={22}/>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
               <customIcons.quote size={32}/>
              </div>
            </div>
            <p className="userTestimony">
              Good morning girl, it went well, it was more of a discussion of the wbd document i wrote am waiting for feedback. 👏🏾 😌
            </p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22}/>
                <p className="userName">Annonymous</p>
                <customIcons.waves size={22}/>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem testimonyCarouselItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
               <customIcons.quote size={32}/>
              </div>
            </div>
            <p className="userTestimony">
              Hey there Lorraine, Sooo... I've gotten an invitation to my first interview at Superside.  (Good news, yea?)
            </p>
            <div className="newUserTestimonyFlex">
              <div className="nameAndPosition">
                <customIcons.waves size={22}/>
                <p className="userName">Annonymous</p>
                <customIcons.waves size={22}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonyDiv2">
        <div className="testimonyDivInner"></div>
      </div>
      <button
        className="carousel-control-prev btnDiasabled"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next btnDiasabled"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Testimonials;
