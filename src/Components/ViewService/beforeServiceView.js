import React from "react";
import "./viewService.css";
import { TiDelete } from "react-icons/ti";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { PiPaperPlaneRightFill } from "react-icons/pi";

function BeforeServiceView({ popUpState }) {
  const handlePopUp = () => {
    popUpState(false);
  };

  return (
    <div className="beforeServiceViewMainOuter">
      <div className="beforeServiceViewMainInner">
        <div className="beforeServiceViewMainContent">
          <div className="popUpUnSetContainer">
            <TiDelete className="popUpUnSet" size={33} onClick={handlePopUp} />
          </div>
          <div className="beforeServiceViewMainContentLeft">
            {/* <div className="quotesTopContainer">
              <BiSolidQuoteLeft size={40} className="quotesTopContainerLeft" />
            </div>
            <div className="planeTopContainer">
              <BiSolidQuoteRight size={40} className="planeTopContainerLeft" />
            </div> */}
            {/* <p className="beforeServiceViewMainContentLeftPtag">
              Kindly use M-Pesa Detail Displayed for payments at the moment
              while we work on the automated payment method. We appreciate your
              patience!"
            </p> */}
            <div className="beforeServiceLogo2">
              <div className="navbar-brand2">
                <div className="logoBox2">
                  <h3>B</h3>
                  <div className="logoDivider"></div>
                  <h3>S</h3>
                  {/* className="logoBox2H3" */}
                  <div className="logoBox2PTag">
                    <p>beyond the savannah</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="beforeServiceViewMainContentLeftPtag">
              <p>
                "Please use the M-Pesa details provided for payments at this
                time, while we work on implementing an automated payment method.
                We appreciate your patience!"
              </p>
            </div>
          </div>
          <div className="beforeServiceViewMainContentRight">
           <div>
           <h2>Payment Process</h2>
            <div className="paymentSet">
              <span>Paybill Number: </span>
              <span>4139143</span>
            </div>
            <div className="paymentSet">
              <span>Account: </span>
              <span>Your name as it appears in your ID card</span>
            </div>
            <div className="paymentSet">
              <span> NOTE: </span>
              <span>Beyond Annah Consulting Limited should appear as the recipiet</span>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeforeServiceView;
