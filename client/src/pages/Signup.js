import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/Signup.css";
function Signup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    fields: "",
  });
  console.log("this is form data", formData);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("ye data hai", data);
        setResponseMessage(data.message);
        if (data.status === true) {
          setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("Error occurred while signing up.");
      });
  };
  if (isLoggedIn) {
    return <Navigate to="login" replace/>;
  }
  return (
    <>
      <div className="main-container-form">
        <h1 className="text-center">Signup Form</h1>
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fields">Fields</label>
            <input
              type="text"
              className="form-control"
              id="fields"
              name="fields"
              placeholder="Enter your Fields"
              value={formData.fields}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{width:'200px',height:'45px',fontSize:'18px'}}>
            Submit
          </button>
          <div style={{display:'flex', justifyContent:'center',alignItems:'center', fontWeight:'500'}}>{responseMessage && <p>{responseMessage}</p>}</div>
        </form>
      </div>
      <Outlet/>
    </>
  );
}

export default Signup;
