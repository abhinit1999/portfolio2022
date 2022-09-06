import React from "react";
import "./style.css";
const index = () => {
  return (
    <>
    
    <div className="main_skill ">
    
     
   <div className="sub_skill">
   <div className="left_skill ">
        <p>
          I am a B.Tech in computer Science and 
          Engineering graduate from Lovely Professional University
          with 7.1 CGPA, Form 2018 to 2022. I got an opportunity to work as a
          Programmer Analyst Trainee at Cognizant Technology Solutions
          from January 2022 to May 2022, In which i was trained on Front-End Development
          including front-end fram-work React Js. I have Developed 4 Mazor Project in React Js.
          I also have completed MERN (MongoDB,Express,React and Node) stack development From Newton School.


        </p>
      </div>
      <div className="right_skill ">
        <div className="progress_bar">
          <p>
            <span>React Js</span>
            <br />
            <progress value="80" max="100"></progress>
            <span className="percentage">80%</span>
          </p>
          <p>
            <span>Node Js</span><br />
            <progress value="75" max="100"></progress>
            <span className="percentage">75%</span>
          </p>
          <p>
            <span>HTML </span><br />
            <progress value="90" max="100"></progress>
            <span className="percentage">90%</span>
          </p>
          <p>
            <span>CSS </span><br />
            <progress value="85" max="100"></progress>
            <span className="percentage">85%</span>
          </p>
          <p>
            <span>JavaScript</span><br />
            <progress value="75" max="100"></progress>
            <span className="percentage">75%</span>
          </p>
          <p>
            <span>MongoDB</span><br />
            <progress value="80" max="100"></progress>
            <span className="percentage">80%</span>
          </p>




        </div>
      </div>
   </div>
     </div>
     </>
   
  );
};

export default index;
