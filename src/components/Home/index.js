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
            Loremff3f ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quaerat vero consectetur quis, quibusdam aliquid alias saepe, quam
            totam tempora nobis ab aperiam. Porro, nostrum cupiditate blanditiis
            nemo corrupti in cum, consequuntur error natus illum sit eum quam
            modi officia ullam aliquid ut molestiae iure aliquam! Ea quas
            provident consequuntur obcaecati sunt neque qui perspiciatis?
            Voluptates accusamus praesentium consequuntur non, iure corrupti
            sint. Mollitia, tempore impedit? Soluta nemo aliquam atque aut quae
            sed facilis repellendus doloribus perferendis nostrum alias corrupti

          </span>
    <a href="#">
    <button className="cv_btn">Download CV</button>
    </a>
        </div>
      </div>
    </div>
  );
};

export default index;
