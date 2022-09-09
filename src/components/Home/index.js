import React from "react";
import "./style.css";
import pic from "./photo.JPG";
const index = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="left">
          <img className="my_pic" src={pic} alt="img" />
        </div>
        <div className="right">
          <span className="bio">MY BIO</span>
          <hr className="horizontal_line" />
          <span className="text">
            I am a B.Tech in computer Science and Engineering graduate from
            Lovely Professional University with 7.1 CGPA, Form 2018 to 2022. I
            got an opportunity to work as a Programmer Analyst Trainee at
            Cognizant Technology Solutions from January 2022 to May 2022, In
            which i was trained on Front-End Development including front-end
            fram-work React Js. I have Developed 4 Mazor Project in React Js. I
            also have completed MERN (MongoDB,Express,React and Node) stack
            development From Newton School.
            <br />
            <strong className="strong">
              <b>Positive attitude:</b>{" "}
            </strong>
            To progress positively under all circumstances with conviction and
            maturity in approach. <br />
            <strong className="strong">
              <b>Enthusiasm for learning:</b>{" "}
            </strong>
            Endlessly strive to learn through different activities.
          </span>
          <a href="https://drive.google.com/file/d/1jw4iRWHLrVdAFPd3olP9sOXtFPlCLjDl/view?usp=sharing" target="_blank">
            <button className="cv_btn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
