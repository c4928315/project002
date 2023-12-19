import React from "react";
import "./footer.css";
import customIcons from "../../Icons/customIcons";

function Footer() {
  return (
    <div className="footer">
      <div className="innerFooter">
        <div className="innerFooterItems">
          <div className="footerItem">
            <h3 className="footerHeader">Company Name</h3>
            <p className="companyText">
              We use cookies to enhance your browsing experience, analyze
              trafic, serve ads and personalized content. click "Accept" to
              consent to our use of cookies.
            </p>
          </div>
          <div className="footerItem">
            <h3 className="footerHeader">Products</h3>
            <div className="footerLinks">
              <p className="links">Link One</p>
              <p className="links">Link Two</p>
              <p className="links">Link Three</p>
              <p className="links">Link Four</p>
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerHeader">Useful Links</h3>
            <div className="footerLinks">
              <p className="links">Link One</p>
              <p className="links">Link Two</p>
              <p className="links">Link Three</p>
              <p className="links">Link Four</p>
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerHeader">contact</h3>
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
                <customIcons.facebook/>
            </div>
            <div className="footerSocialIcons">
                <customIcons.twitter/>
            </div>
            <div className="footerSocialIcons">
                <customIcons.google/>
            </div>
            <div className="footerSocialIcons">
                <customIcons.instagram/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
