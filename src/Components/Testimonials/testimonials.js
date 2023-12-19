import React from "react";
import "./testimonials.css";

function Testimonials() {
  const style = {
    width: "10px",
    height: "10px",
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide testimonaialCarousel"
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
      <div className="carousel-inner">
        <div className="carousel-item active testimonyItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
                <p>Testimonials</p>
              </div>
            </div>
            <p className="userTestimony">
              What is the Science Space? The Science Space is a forum dedicated
              to sharing, exchanging, and exploring knowledge under the umbrella
              of science.
            </p>
            <div className="newUserTestimonyFlex">
              <div className="">
                <div className="testimonialImage">
                    <img
                  src="https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="user"
                  className="testimonialImage"
                />
                </div>
              </div>
              <div className="nameAndPosition">
                <p className="userName">fatma fizal</p>
                <p className="occupation">Rare Candidate | Ex JP Morgan Technology Intern</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
              <p>Testimonials</p>
              </div>
            </div>
            <p className="userTestimony">
              What is the Science Space? The Science Space is a forum dedicated
              to sharing, exchanging, and exploring knowledge under the umbrella
              of science.
            </p>
            <div className="newUserTestimonyFlex">
              <div className="">
                <div className="testimonialImage">
                    <img
                  src="https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="user"
                  className="testimonialImage"
                />
                </div>
              </div>
              <div className="nameAndPosition">
                <p className="userName">fatma fizal</p>
                <p className="occupation">UI/UX designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item testimonyItem testimonyCarouselItem">
          <div className="testimonyContent">
            <div className="profilePicPosition">
              <div className="topDecor">
              <p>Testimonials</p>
              </div>
            </div>
            <p className="userTestimony">
              What is the Science Space? The Science Space is a forum dedicated
              to sharing, exchanging, and exploring knowledge under the umbrella
              of science.
            </p>
            <div className="newUserTestimonyFlex">
              <div className="">
                <div className="testimonialImage">
                    <img
                  src="https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="user"
                  className="testimonialImage"
                />
                </div>
              </div>
              <div className="nameAndPosition">
                <p className="userName">fatma fizal</p>
                <p className="occupation">Data Analyst</p>
              </div>
            </div>
          </div>
        </div>
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
