import React, { useState } from "react";
import "../styles/Signup.css";
import { Navigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);
        if (data.status === true) {
          setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("Error occurred while logging in.");
      });
  };

  if (isLoggedIn) {
    return <Navigate to="dashboard" replace/>;
  }

  return (
    <>
      <div className="main-container-form">
        <h1 className="text-center">Login</h1>
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
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
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {responseMessage && <p>{responseMessage}</p>}
        </form>
      </div>
      <Outlet/>
    </>
  );
}

export default Login;
