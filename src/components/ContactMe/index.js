import React from "react";
import "./style.css";
import { useState } from "react";




const Index = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    // message:"",

  })

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  
  
const postData = async (e) => {
  e.preventDefault();

  const { name, email, phone} = user;

  const resp = await fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
    
    }),

   
  });



  const data = await resp.json();

  console.log(data);
  if (data.status === 422 || !data) {
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
  } else {
    window.alert("Registration Successful");
    console.log("registeration successful");

  
  }
  
  setUser({
    name:"",
    email:"",
    phone:"",
  })
  
};











  return (
    <form onSubmit={postData}>
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
                id="name"
                name="name"
              value={user.name}
              onChange={handleInputs}
              />
            </label>
            <label htmlFor="email">
              Email:{" "}
              <input
                type="email"
                className="input_field"
                placeholder="YOUR Email"
                id="email"
                name="email"
              value={user.email}
              onChange={handleInputs}
              />
            </label>
            <label htmlFor="phone">
              Mobile:{" "}
              <input
                type="phone"
                className="input_field"
                placeholder="YOUR Mobile"
                id="phone"
                name="phone"
              value={user.name}
              onChange={handleInputs}
              />
            </label>
            {/* <textarea
              name="message"
              id="message"
              cols="70"
              rows="10"
              placeholder="YOUR Message"
              id="message"
              name="message"
              value={user.name}
              onChange={handleInputs}
            ></textarea> */}
            
              <button type="submit" className="btn_cnt" >SUBMIT</button>
           
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
