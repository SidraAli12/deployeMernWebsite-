import React from "react";
import task3 from "../asset/task3.png";
import "../styles/ManageThree.css";
import i from "../asset/i.svg";
import j from "../asset/j.svg";
import k from "../asset/k.svg";
import l from "../asset/l.svg";
function ManageThree() {
  return (
    <>
      <section className="main-containerThree">
        <div className="right-portionThree">
          <img src={task3} alt="task image"  width={700} height={440}/>
        </div>
        <div className="left-portionThree">
          <h1>OUR LMS</h1>
          <h2>
            Guided Tutorials in
            <br />
            Learning Management
            <br /> System
          </h2>
          <p>
            Want to learn something but don't know what's the roadmap or your
            <br /> english is not too good? That's why we launch LMS for you.
          </p>
          <div className="main-box">
            <div className="top-row">
              <div className="box1">
                <div className="box1-img">
                <img src={i} width={30}/>
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
                <img src={j} width={30}/>
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
                <img src={k} width={30}/>
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
                <img src={l} width={30}/>
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
      </section>
    </>
  );
}
export default ManageThree;


