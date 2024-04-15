import React from "react";
import "../styles/Manage.css";
import task from "../asset/task.png";
import a from "../asset/a.svg";
import b from "../asset/b.svg";
import c from "../asset/c.svg";
import d from "../asset/d.svg";
export default function Manage() {
  return (
    <>
      <section className="main-containerOne">
        <div className="right-portionOne">
          <img src={task} alt="task image" width={720} height={407} />
        </div>
        <div className="left-portionOne">
          <h1>Our own task portal</h1>
          <h2>
            Manage Project Via Own
            <br />
            Task Portal
          </h2>
          <p>
            Welcome to internee.pk task portal. Where Tasks Transform Into
            Skills
          </p>
          <div className="main-boxOne">
            <div className="top-row">
              <div className="box1">
                <div className="box1-img">
                  <img src={a} width={30}/>
                </div>
                <div className="box1-p">
                  <storng>Sell Courses and Earn </storng>Are you an expert in
                  your field? Share your knowledge on our LMS. Create and sell
                  courses, or contribute as an instructor. Empower others on
                  their learning journey while earning rewards for your
                  expertise.
                </div>
              </div>
              <div className="box2">
                <div className="box1-img">
                <img src={b} width={30}/>
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
                <img src={c} width={30}/>
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
                <img src={d} width={30}/>
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
