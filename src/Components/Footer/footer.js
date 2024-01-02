import React, { useState } from "react";
import "./footer.css";
import customIcons from "../../Icons/customIcons";

function Footer() {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  const handleOpen1 = () => {
    setOpen1(!open1)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
  }
  const handleOpen2 = () => {
    setOpen1(false)
    setOpen2(!open2)
    setOpen3(false)
    setOpen4(false)
  }
  const handleOpen3 = () => {
    setOpen1(false)
    setOpen2(false)
    setOpen3(!open3)
    setOpen4(false)
  }
  const handleOpen4 = () => {
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
    setOpen4(!open4)
  }

  return (
    <div className="footer">
      <div className="innerFooter">
        <div className="innerFooterItems">
          <div className={open1 ? "footerItemOpen" : "footerItem"}>
            <div className="footerGoDown" onClick={handleOpen1}>
              <h3 className="footerHeader">Company Name</h3>
              <customIcons.dropDown className="footerGoDownIcon" />
            </div>
            <p className="companyText">
              We use cookies to enhance your browsing experience, analyze
              trafic, serve ads and personalized content. click "Accept" to
              consent to our use of cookies.
            </p>
          </div>
          <div className={open2 ? "footerItemOpen" : "footerItem"}>
            <div className="footerGoDown" onClick={handleOpen2}>
              <h3 className="footerHeader">Products</h3>
              <customIcons.dropDown className={ "footerGoDownIcon"} />
            </div>

            <div className="footerLinks">
              <p className="links">Link One</p>
              <p className="links">Link Two</p>
              <p className="links">Link Three</p>
              <p className="links">Link Four</p>
            </div>
          </div>
          <div className={open3 ? "footerItemOpen" : "footerItem"}>
            <div className="footerGoDown" onClick={handleOpen3}>
              <h3 className="footerHeader">Useful Links</h3>
              <customIcons.dropDown className="footerGoDownIcon" />
            </div>

            <div className="footerLinks">
              <p className="links">Link One</p>
              <p className="links">Link Two</p>
              <p className="links">Link Three</p>
              <p className="links">Link Four</p>
            </div>
          </div>
          <div className={open4 ? "footerItemOpen" : "footerItem"}>
            <div className="footerGoDown" onClick={handleOpen4}>
              <h3 className="footerHeader">contact</h3>
              <customIcons.dropDown className="footerGoDownIcon" />
            </div>

            <div className="footerLinks">
              <span className="iconLinkFooter">
                <span>
                  <customIcons.footerHome />
                </span>
                <p className="links">Nairobi, Nairobi city, Kenya</p>
              </span>
              <span className="iconLinkFooter">
                <span>
                  <customIcons.email size={14} />
                </span>
                <p className="links">info@gmail.com</p>
              </span>
              <span className="iconLinkFooter">
                <span>
                  <customIcons.phone size={14} />
                </span>
                <p className="links">+25712345678</p>
              </span>
              <span className="iconLinkFooter">
                <span>
                  <customIcons.print />
                </span>
                <p className="links">+25787654321</p>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="innerFooterBottom">
          <div className="innerFooterBottomLeft">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="innerFooterBottomRight">
            <div className="footerSocialIcons">
              <customIcons.facebook />
            </div>
            <div className="footerSocialIcons">
              <customIcons.twitter />
            </div>
            <div className="footerSocialIcons">
              <customIcons.google />
            </div>
            <div className="footerSocialIcons">
              <customIcons.instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
