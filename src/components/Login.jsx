import React, { useState, useEffect } from "react";

const Login = (props) => {
  // copied directly from Form.jsx - probably move this to
  // App.jsx and have Login.jsx and Form.jsx
  // use this function as a prop
  const handleTabs = (action) => {
    // added these 4 const(s) inside handleTabs
    // b/c when they were in the functional scope
    // they 4 const(s) were undefined
    const signinCredentials = document.getElementsByClassName(
      "signup-credentials"
    )[0];
    const loginCredentials = document.getElementsByClassName(
      "login-credentials"
    )[0];
    const loginButtonClick = document.getElementById("login");
    const signinButtonClick = document.getElementById("signup");

    if (action === "login") {
      loginButtonClick.style.opacity = "100%";
      loginCredentials.style.display = "block";
      signinButtonClick.style.opacity = "40%";
      signinCredentials.style.display = "none";
    } else {
      loginCredentials.style.display = "none";
      loginButtonClick.style.opacity = "40%";
      signinCredentials.style.display = "block";
      signinButtonClick.style.opacity = "100%";
    }
  };

  return (
    <div>
      <div className="title">mCanon</div>
      <div className="grid-welcome">
      <div className="grid-welcome-top"></div>
        <div className="grid-welcome-left">
        </div>
        <div className="grid-welcome-main">
        <div className="login-signup-popup">
          <div className="tabs-new-entry">
            <div className="login-signup-form">
              <br/>
              <br/>
              <br/>
              <div className="tabs-login-signin-links">
                <button
                  type="button"
                  id="login"
                  onClick={() => {
                    handleTabs("login");
                  }}
                >
                  LOGIN
                </button>
                <button
                  type="button"
                  id="signup"
                  onClick={() => {
                    handleTabs("signup");
                  }}
                >
                  SIGN UP
                </button>
              </div>
              <div className="login-credentials">
                <br />
                <br/>
                <label>Username</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="login-username"
                  onChange={props.handleChange}
                />
                <div>
                  <label>Password</label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="login-password"
                    onChange={props.handleChange}
                  />
                </div>
                <br/>
                <div className="login-signup-button">
                  <button
                    onClick={props.verifyAuth}
                    type="submit"
                    value="login"
                  >
                    login
                  </button>
                </div>
              </div>
              <div className="signup-credentials">
                <br />
                <br/>
                <label>Email</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="signup-email"
                  onChange={props.handleChange}
                />
                <br />
                <label>Username</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="signup-username"
                  onChange={props.handleChange}
                />
                <div>
                  <label>Password</label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="signup-password"
                    onChange={props.handleChange}
                  />
                </div>
                <br/>
                <div className="login-signup-button">
                  <button onClick={props.verifyAuth} value="signup">
                    signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="grid-welcome-right"></div>
        <div className="grid-welcome-bottom"></div>

      </div>
    </div>
  );
};

export default Login;
