import React, { useState } from "react";
import "./footer.css";
import customIcons from "../../Icons/customIcons";
import { Link } from "react-router-dom";

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
              <h3 className="footerHeader">Beyond The Savannah</h3>
              <customIcons.dropDown className="footerGoDownIcon" />
            </div>
            <p className="companyText">
            Seamless connections, soaring careers. elevate yours with Beyond The Savannah!
            </p>
          </div>
          <div className={open2 ? "footerItemOpen" : "footerItem"}>
            <div className="footerGoDown" onClick={handleOpen2}>
              <h3 className="footerHeader">Products</h3>
              <customIcons.dropDown className={ "footerGoDownIcon"} />
            </div>

            <div className="footerLinks">
              <Link to="/viewService"><p className="links">CV Revamp</p></Link>
              <Link to="/viewLStudentPack"><p className="links">Student's Package CV Revamp</p></Link>
              <Link to="/viewLinkedIn"><p className="links">Linkedin Optimisation</p></Link>
              <Link to="/viewCoachingSesh"><p className="links">Coaching Session</p></Link>
              <Link to="/viewInterview"><p className="links">Interview Prep</p></Link>
            </div>
          </div>
          <div className={open3 ? "footerItemOpen" : "footerItem"}>
            <div className="footerGoDown" onClick={handleOpen3}>
              <h3 className="footerHeader">Useful Links</h3>
              <customIcons.dropDown className="footerGoDownIcon" />
            </div>

            <div className="footerLinks">
            <Link to="https://www.tiktok.com/@beyond.the.savannah" target="blank" className="links">
              TikTok
            </Link>
             <Link to="https://www.linkedin.com/in/otienolorraine/?originalSubdomain=ke" target="blank" className="links">
             LinkedIn
            </Link>
             <Link to="https://www.instagram.com/lorraineotieno/?hl=en" target="blank" className="links">
             Instagram
            </Link>
             <Link to="https://www.youtube.com/@beyondthesavannah" target="blank" className="links">
             Youtube
            </Link>
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
                <p className="links">beyondthesavannah@gmail.com</p>
              </span>
              <span className="iconLinkFooter">
                <span>
                  <customIcons.phone size={14} />
                </span>
                <p className="links">0737120764</p>
              </span>
              {/* <span className="iconLinkFooter">
                <span>
                  <customIcons.print />
                </span>
                <p className="links">+25787654321</p>
              </span> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="innerFooterBottom">
          <div className="innerFooterBottomLeft">
            <p>&copy; 2023 Beyond The Savannah. All rights reserved.</p>
          </div>
          <div className="innerFooterBottomRight">
            <Link to="https://www.tiktok.com/@beyond.the.savannah" target="blank" className="footerSocialIcons">
              <customIcons.tiktok />
            </Link>
             <Link to="https://www.linkedin.com/in/otienolorraine/?originalSubdomain=ke" target="blank" className="footerSocialIcons">
              <customIcons.linkedin />
            </Link>
             <Link to="https://www.instagram.com/lorraineotieno/?hl=en" target="blank" className="footerSocialIcons">
              <customIcons.instagram />
            </Link>
             <Link to="https://www.youtube.com/@beyondthesavannah" target="blank" className="footerSocialIcons">
              <customIcons.youtube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
