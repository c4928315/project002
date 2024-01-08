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
              Good morning Lorraine, i hope you well. Following you numerous posts on the remote jobs i have luckily been shortlisted by clipboard health on the workforce manager position.
            </p>
            <div className="newUserTestimonyFlex">
              <div className="">
                <div className="testimonialImage">
                    <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703980800&semt=ais"
                  alt="user"
                  className="testimonialImage"
                />
                </div>
              </div>
              <div className="nameAndPosition">
                <p className="userName">Annonymous</p>
                <p className="occupation">N/A</p>
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
              Good morning girl, it went well, it was more of a discussion of the wbd document i wrote am waiting for feedback. 👏🏾 😌
            </p>
            <div className="newUserTestimonyFlex">
              <div className="">
                <div className="testimonialImage">
                    <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703980800&semt=ais"
                  alt="user"
                  className="testimonialImage"
                />
                </div>
              </div>
              <div className="nameAndPosition">
                <p className="userName">Annonymous</p>
                <p className="occupation">N/A</p>
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
              Hey there Lorraine, Sooo... I've gotten an invitation to my first interview at Superside.  (Good news, yea?)
            </p>
            <div className="newUserTestimonyFlex">
              <div className="">
                <div className="testimonialImage">
                    <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703980800&semt=ais"
                  alt="user"
                  className="testimonialImage"
                />
                </div>
              </div>
              <div className="nameAndPosition">
                <p className="userName">Annonymous</p>
                <p className="occupation">N/A</p>
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
