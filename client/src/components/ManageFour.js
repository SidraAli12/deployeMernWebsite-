import React from "react";
import "../styles/ManageFour.css";
import test4 from "../asset/task4.png";
import e from "../asset/e.svg";
import f from "../asset/f.svg";
import g from "../asset/g.svg";
import h from "../asset/h.svg";
function ManageFour() {
  return (
    <>
      <section className="main-containerFour">
        
        <div className="left-portionFour">
          <h1>Already have a good skill but looking for job?</h1>
          <h2>
            Job Portal, Ultimate Place
            <br />
            To Find The Best Job
          </h2>
          <p>
            Streamline the approval process with your customer to quickly close
            the <br />
            deal, get the sale, and start production.
          </p>
          <div className="main-box">
            <div className="top-row">
              <div className="box1">
                <div className="box1-img">
                  <img src={e} width={30} />
                </div>
                <div className="box1-p">
                  Sell Courses and Earn Are you an expert in your field? Share
                  your knowledge on our LMS. Create and sell courses, or
                  contribute as an instructor. Empower others on their learning
                  journey while earning rewards for your expertise.
                </div>
              </div>
              <div className="box2">
                <div className="box1-img">
                  <img src={f} width={30} />
                </div>
                <div className="box1-p">
                  Sell Courses and Earn Are you an expert in your field? Share
                  your knowledge on our LMS. Create and sell courses, or
                  contribute as an instructor. Empower others on their learning
                  journey while earning rewards for your expertise.
                </div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="box1">
                <div className="box1-img">
                  <img src={g} width={30} />
                </div>
                <div className="box1-p">
                  Sell Courses and Earn Are you an expert in your field? Share
                  your knowledge on our LMS. Create and sell courses, or
                  contribute as an instructor. Empower others on their learning
                  journey while earning rewards for your expertise.
                </div>
              </div>
              <div className="box2">
                <div className="box1-img">
                  <img src={h} width={30} />
                </div>
                <div className="box1-p">
                  Sell Courses and Earn Are you an expert in your field? Share
                  your knowledge on our LMS. Create and sell courses, or
                  contribute as an instructor. Empower others on their learning
                  journey while earning rewards for your expertise.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-portionFour">
          <img src={test4} alt="task image" height={40}/>
        </div>
      </section>
    </>
  );
}

export default ManageFour;
