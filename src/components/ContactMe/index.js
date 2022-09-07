import React from "react";
import "./style.css";
const index = () => {
  return (
    <>
      <div className="contact">
        <div className="main_cont">
          <h2 className="contact_me">Contact Me</h2>
          <div className="cont_form">
            <label htmlFor="name">
              Name:{" "}
              <input
                type="text"
                className="input_field"
                placeholder="YOUR Name"
              />
            </label>
            <label htmlFor="email">
              Email:{" "}
              <input
                type="email"
                className="input_field"
                placeholder="YOUR Email"
              />
            </label>
            <label htmlFor="phone">
              Mobile:{" "}
              <input
                type="phone"
                className="input_field"
                placeholder="YOUR Mobile"
              />
            </label>
            <textarea
              name="message"
              id="message"
              cols="70"
              rows="10"
              placeholder="YOUR Message"
            ></textarea>
            
              <button className="btn_cnt" >SUBMIT</button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
