import React from "react";
import "../styles/MangaeFive.css";
import taskfive from "../asset/fiv.jpg";
import e from "../asset/e.svg";
import f from "../asset/f.svg";
import g from "../asset/g.svg";
import h from "../asset/h.svg";
function ManageFive() {
  return (
    <>
      <section className="main-contanerFive">
        <div className="leftContainerFive">
          <div className="leftContainer">
            <div className="content1">
              <div className="contentimg1">
              <img src={h} width={30} />
              </div>
              <p style={{fontSize:'22px', fontWeight:'600'}}>5500+ Students already registered</p>
            </div>
            <div className="content1">
              <div className="contentimg1">
              <img src={e} width={30} />
              </div>
              <p style={{fontSize:'22px', fontWeight:'600'}}>Task based projects that based on hands on experience</p>
            </div>
            <div className="content1">
              <div className="contentimg1">
              <img src={f} width={30} />
              </div>
              <p style={{fontSize:'22px', fontWeight:'600'}}>Massive Courses with high-quality videos on LMS</p>
            </div>
            <div className="content1">
              <div className="contentimg1">
              <img src={g} width={30} />
              </div>
              <p style={{fontSize:'22px', fontWeight:'600'}}>Empowering youth towards IT revolution & technology</p>
            </div>
            <div className="content1">
              <div className="contentimg1">
              <img src={e} width={30} />
              </div>
              <p style={{fontSize:'22px', fontWeight:'600'}}>Hands on Experience via Virtual internship</p>
            </div>
            <div className="content1">
              <div className="contentimg1">
              <img src={f} width={30} />
              </div>
              <p style={{fontSize:'22px', fontWeight:'600'}}>Complete your task and get market competent job</p>
            </div>
          </div>
        </div>
        <div className="rightContainerFive">
          <img src={taskfive} />
        </div>
      </section>
    </>
  );
}

export default ManageFive;
