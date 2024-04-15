import React from "react";
import "../styles/Navbar.css";
import logo from "../asset/logo.png";
import Button from "./Button";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  const handleClick1 = () => {
    console.log("Button one is CLICKED");
  };
  return (
    <>
      <nav className="main-navbar">
        <div className="left-div">
          <img src={logo} alt="logo here" width={230} />
        </div>
        <div className="center-div">
          <ul>
            <li>Blogs</li>
            <li>Company Collaboration</li>
            <li>Mobile App</li>
          </ul>
        </div>
        <div className="right-div">
          <Button className="btn" text="Job Portal" onClick={handleClick1} />
          <Link to="/signup">
            <Button className="btn2" text="Intreen's Login" />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
