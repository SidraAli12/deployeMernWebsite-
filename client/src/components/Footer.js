import React from "react";
import "../styles/Footer.css";
import footerLogo from "../asset/logo.png";
import { Link } from "react-router-dom";
import youtube from "../asset/youtube.svg";
import instagram from "../asset/instagram.svg";
import facebook from "../asset/facebook.svg";
import twitter from "../asset/twiiter.svg";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footr-div1">
          <img src={footerLogo} width={200} />
        </div>
        <div className="footr-div2">
          <ul>
            <li style={{ fontWeight: "700", paddingBottom: "20px" }}>
              Company
            </li>
            <li style={{ paddingBottom: "5px" }}>Contact Us</li>
            <li style={{ paddingBottom: "5px" }}>Privacy Policy</li>
            <li style={{ paddingBottom: "5px" }}>Terms & Condition</li>
          </ul>
        </div>
        <div className="footr-div3">
          <ul>
            <li style={{ fontWeight: "700", paddingBottom: "20px" }}>
              Get Help
            </li>
            <li style={{ paddingBottom: "5px" }}>Training Videos</li>
            <li style={{ paddingBottom: "5px" }}>Request Help</li>
          </ul>
        </div>
        <div className="footr-div4">
          <h3>Socialize with us</h3>
          <div className="social-media-icon">
            <Link to="https://www.youtube.pk">
              <img src={youtube} alt="YouTube" />
            </Link>
            <Link>
              <img src={instagram} />
            </Link>
            <Link>
              <img src={facebook} />
            </Link>
            <Link>
              <img src={twitter} />
            </Link>
          </div>
          <p style={{ lineHeight: "25px" }}>
            Copyright ©2024 internee.pk Pvt Ltd.
            <br />
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
