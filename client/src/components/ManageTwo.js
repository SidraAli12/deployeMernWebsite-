import React from 'react'
import '../styles/ManageTwo.css'
import lms from "../asset/lms.png";
import e from "../asset/e.svg";
import f from "../asset/f.svg";
import g from "../asset/g.svg";
import h from "../asset/h.svg";
function ManageTwo() {
  return (
    <>
       <section className="main-container">
       <div className="right-portion">
          <img src={lms} alt="task image" />
        </div>
        <div className="left-portion">
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
                <img src={e} width={30}/>
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
              <img src={f} width={30}/>
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
              <img src={g} width={30}/>
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
              <img src={h} width={30}/>
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
  )
}

export default ManageTwo
