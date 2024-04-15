import hero from "../asset/hero.jpeg";
import brand1 from "../asset/nic.png";
import brand2 from "../asset/nep.png";
import brand3 from "../asset/incubation.jpg";
import "../styles/Hero.css";
import React, { useState, useEffect } from "react";
import Button from "./Button";
function HeroSection() {
  const handleClick1 = () => {
    console.log("Button one is CLICKED");
  };
  const handleClick2 = () => {
    console.log("Button TWO is CLICKED");
  };
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const originalText = "Gives hands on experience|";
  const typingSpeed = 100; // Adjust typing speed as needed
  const cursorBlinkInterval = 500; // Adjust cursor blink speed as needed
  useEffect(() => {
    let currentIndex = 0;
    let isLooping = true;
    const typingInterval = setInterval(() => {
      if (currentIndex <= originalText.length && isLooping) {
        setTypedText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        isLooping = false;
        setTimeout(() => {
          setTypedText("");
          currentIndex = 0;
          isLooping = true;
        }, 1000);
      }
    }, typingSpeed);
    const cursorBlinkIntervalId = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, cursorBlinkInterval);
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkIntervalId);
    };
  }, []);
  return (
    <>
      <div className="main-hero-section">
        <div className="left-section">
          <h1
            style={{ fontSize: "54px", fontWeight: "bold", color: "#21282E" }}
          >
            Looking for dream internship?
          </h1>
          <div className="movingText">
            <span
              className="typed"
              style={{
                color: "green",
                fontSize: "52px",
                fontWeight: "700",
              }}
            >
              {typedText}
            </span>
          </div>
          <span>
            <p>
              Internee.pk kickstart student's tech careers with first<br/>
              internships, providing industry exposure, practical <br/>skills, and
              networking opportunities, paving the way<br/> for their success in the
              tech industry.
            </p>
          </span>
          <div className="brands">
            <span>
              <img src={brand3} alt="hero image" width={120} />
            </span>
            <span>
              <img src={brand2} alt="hero image" width={154} height={103} />
            </span>
            <span>
              <img src={brand1} alt="hero image" width={123} />
            </span>
          </div>
          <div className="buttonss">
            <Button
              className=" btn2"
              text="Job Portal"
              onClick={handleClick1}
            />
            <Button className="btn" text="Our LMS" onClick={handleClick2} />
          </div>
        </div>
        <div className="right-section">
          <img src={hero} alt="hero image" height={600}/>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
